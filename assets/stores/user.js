import { defineStore } from 'pinia';

const defaulValues = {
    email: '',
    roles: []
};

const useUserStore = defineStore('user', {
    state: () => ({
            userData: defaulValues,
            isAuth: false,
            refreshToken: '',
            token: '',
            _retry: false,
            rememberPassword: false,
        }),
    getters: {
        getValues: function (state) {
            return state.userData
        },
        getRefreshToken: function (state) {
            return state.refreshToken || sessionStorage.getItem("refresh_token") || localStorage.getItem("refresh_token")
        },
        getToken: function (state) {
            return state.token || sessionStorage.getItem("token") || localStorage.getItem("token")
        }
    },
    actions: {
        resetState() {
            this.userData = defaulValues;
            this.isAuth = false;
            this.refreshToken = '';
            this.token = '';
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("refresh_token");
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
        },
        updateData: function (data) {
            for (var item in this.userData) {
                if (typeof data[item] !== 'undefined') {
                    this.userData[item] = data[item];
                }
            }
        },
        setAuth: function (bool) {
            this.isAuth = bool;
        },
        setToken: function (token) {
            this.token = token;
            sessionStorage.setItem("token", token);
            if (this.rememberPassword) {
                localStorage.setItem("token", token);
            }
        },
        setRefreshToken: function (refresh_token) {
            this.refreshToken = refresh_token;
            sessionStorage.setItem("refresh_token", refresh_token);
            if (this.rememberPassword) {
                localStorage.setItem("refresh_token", refresh_token);
            }
        },
        isGranted(role){
            return this.userData.roles.includes(role)
        }
    }
});

export default useUserStore;