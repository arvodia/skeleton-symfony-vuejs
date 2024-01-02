//import "/node_modules/bootstrap/scss/bootstrap.scss";
//import "/node_modules/startbootstrap-sb-admin/src/scss/styles.scss";
import "/node_modules/startbootstrap-sb-admin/dist/css/styles.css";

import './assets/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n }from './i18n.js';
import App from './App.vue';
import router from './router';
import apiPrivate from '/assets/api/apiPrivate.js';
import useUserStore from '/assets/stores/user.js';

const app = createApp(App);

app.use(createPinia());
app.use(i18n);

const store = useUserStore();
if (store.getToken) {
    apiPrivate().get('/api/account')
            .then((response) => {
                if (response.data && response.data.email) {
                    store.updateData(response.data);
                    store.setAuth(true);
                } else {
                    store.resetState();
                }
                app.use(router);
                app.mount('#app');
            })
            .catch(function (error) {
                app.use(router);
                app.mount('#app');
            })
} else {
    app.use(router);
    app.mount('#app');
}
