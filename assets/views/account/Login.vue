<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';

    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(6).max(4096)
    });
    import {RouterLink} from 'vue-router';
</script>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
                        <Form @submit="submit" :validation-schema="schema">
                            <div class="form-floating mb-3">
                                <Field class="form-control" id="inputEmail" type="email" name="email" />
                                <label for="inputEmail">Email address</label>
                                <ErrorMessage name="email" class="text-danger" />
                            </div>
                            <div class="form-floating mb-3">
                                <Field class="form-control" id="inputPassword" name="password" type="password" />
                                <label for="inputPassword">Password</label>
                                <ErrorMessage name="password" class="text-danger"/>
                            </div>
                            <div class="form-check mb-3">
                                <input 
                                    v-model="rememberPassword"
                                    class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <a class="small" href="password.html">Forgot Password?</a>
                                <button v-show="!loader" class="btn btn-primary" type="submit" >Login</button>
                                <button v-show="loader" class="btn btn-primary" type="submit" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span class="ms-1">Loading...</span>
                                </button>
                            </div>
                        </Form>
                    </div>
                    <div class="card-footer text-center py-3">
                        <div class="small"><RouterLink to="/register">Need an account? Sign up!</RouterLink></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import apiPublic from '/assets/api/apiPublic.js';
    import apiPrivate from '/assets/api/apiPrivate.js';
    import Toast from '/assets/tools/Toast.js';
    import useUserStore from '/assets/stores/user.js';
    export default  {
        data() {
            let loader = false;
            let rememberPassword = false;
            return{
                loader,
                rememberPassword
            }
        },
        methods: {
            submit(values) {
                this.loader = true;
                const store = useUserStore();
                store.rememberPassword = this.rememberPassword;
                apiPublic().post('/api/login_check', {
                    username: values.email,
                    password: values.password,
                })
                        .then((response) => {
                            if (response.data.token) {
                                Toast('Successful connection', 'success');
                                store.setToken(response.data.token);
                                store.setRefreshToken(response.data.refresh_token);
                                return Promise.resolve();
                            } else {
                                Toast('unable to create a connection');
                            }
                        })
                        .then(() => apiPrivate().get('/api/account'))
                        .then((response) => {
                            if (response.data && response.data.email) {
                                store.updateData(response.data);
                                store.setAuth(true);
                                this.$router.push('/');
                            } else {
                                Toast('unable to create a connection');
                                store.resetState();
                            }
                        })
                        .catch(function (error) {
                            if (error.response) {
                                if (error.response.data.detail) {
                                    Toast(error.response.data.detail);
                                } else if (error.response.data.message) {
                                    Toast(error.response.data.message);
                                }
                            } else {
                                console.log(error);
                            }

                        })
                        .finally(() => this.loader = false);
            }
        }
    }
</script>
<style>
</style>
