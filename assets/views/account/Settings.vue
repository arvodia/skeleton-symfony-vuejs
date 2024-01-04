<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';

    const schema = yup.object({
        email: yup.string().email(),
        current_password: yup.string().required().min(6).max(4096),
        password: yup.string().min(6).max(4096),
        passwordConfirmation: yup
                .string()
                .oneOf([yup.ref('password')], 'Passwords do not match'),
    });
    import {RouterLink} from 'vue-router';
</script>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Settings</h3></div>
                    <div class="card-body">
                        <Form @submit="submit" :validation-schema="schema" method="post"> 
                            <div class="form-floating mb-3">
                                <Field class="form-control" id="currentPassword" name="current_password" type="password" />
                                <label for="currentPassword">Current password:</label>
                                <ErrorMessage name="current_password" class="text-danger"/>
                            </div>
                            <div class="form-floating mb-3">
                                <Field class="form-control" id="inputEmail" type="email" name="email" />
                                <label for="inputEmail">Email address</label>
                                <ErrorMessage name="email" class="text-danger" />
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 mb-md-0">
                                        <Field class="form-control" id="inputPassword" name="password" type="password" />
                                        <label for="inputPassword">Password</label>
                                        <ErrorMessage name="password" class="text-danger"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 mb-md-0">
                                        <Field
                                            class="form-control"
                                            id="passwordConfirmation"
                                            name="passwordConfirmation"
                                            type="password"
                                            />
                                        <label for="passwordConfirmation">Confirm Password</label>
                                        <ErrorMessage name="passwordConfirmation" class="text-danger"/>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 mb-0">
                                <div class="d-grid">
                                    <button v-show="!loader" class="btn btn-primary btn-block" type="submit" >Edit Account</button>
                                    <button v-show="loader" class="btn btn-primary btn-block" type="submit" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="ms-1">Loading...</span>
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div class="card-footer text-center py-3">
                        <div class="small">
                            <RouterLink to="/">Home</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import apiPrivate from '/assets/api/apiPrivate.js';
    import Toast from '/assets/tools/Toast.js';
    export default  {
        data() {
            let loader = false;
            return{
                loader
            }
        },
        methods: {
            submit(values) {
                this.loader = true;
                apiPrivate().post('/api/account/edit', values)
                        .then((response) => {
                            Toast(response.data.message, 'success');
                            // this.$router.push({name: 'login'});
                        })
                        .catch(function (error) {
                            console.log(error.response.data.title);
                            Toast(error.response.data.detail);
                            Toast(error.response.data.message);
                        })
                        .finally(() => this.loader = false);
            }
        }
    }
</script>
<style>
</style>
