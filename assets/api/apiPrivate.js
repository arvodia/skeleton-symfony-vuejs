//see : https://github.com/bezkoder/vue-axios-refresh-token/tree/master
import axios from 'axios';
import router from '../router';
import useUserStore from '/assets/stores/user.js';
let refresh_token_path = '/api/token/refresh';
let axiosInstance = null;

export default function apiPrivate() {
    if (axiosInstance) {
        return axiosInstance;
    }
    axiosInstance = axios.create({
        withCredentials: true,
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    });
    axiosInstance.interceptors.request.use(
            (config) => {
        const token = useUserStore().getToken;
        if (token && config.url !== refresh_token_path) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
//            config.headers["x-access-token"] = token; // for Node.js Express back-end
        }
        return config;
    },
            (error) => {
        return Promise.reject(error);
    }
    );

    axiosInstance.interceptors.response.use(
            (res) => {
        return res;
    },
            async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== "/auth/signin" && err.response) {
            // Access Token was expired
            if (err.response.status === 401
                    && err.response.data && err.response.data.message === "Expired JWT Token"
                    && !useUserStore()._retry) {
                useUserStore()._retry = true;

                try {
                    const rs = await axiosInstance.post("/api/token/refresh", {
                        refresh_token: useUserStore().getRefreshToken,
                    });

                    useUserStore().setToken(rs.data.token);
                    useUserStore().setRefreshToken(rs.data.refresh_token);

                    useUserStore()._retry = false;
                    return axiosInstance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
    );

    return axiosInstance;
}
;