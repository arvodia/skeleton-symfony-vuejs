import axios from 'axios';
let api_public = null;
export default function apiPublic() {
    if (api_public) {
        return api_public;
    }
    return (api_public = axios.create({
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    }));
}