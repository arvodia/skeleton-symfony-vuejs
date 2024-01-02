<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';

    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(6).max(4096),
        passwordConfirmation: yup
                .string()
                .required()
                .oneOf([yup.ref('password')], 'Passwords do not match'),
    });
    import {RouterLink} from 'vue-router';
</script>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                    <div class="card-body">
                        <Form @submit="submit" :validation-schema="schema" method="post"> 
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
                                    <button v-show="!loader" class="btn btn-primary btn-block" type="submit" >Create Account</button>
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
                            <RouterLink to="/login">Have an account? Go to login</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import apiPublic from '/assets/api/apiPublic.js';
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
                apiPublic().post('/api/register', values)
                        .then((response) => {
                            Toast(response.data.message, 'success');
                            this.$router.push({name: 'login'});
                        })
                        .catch(function (error) {
                            console.log(error.response.data.title);
                            Toast(error.response.data.detail);
                        })
                        .finally(() => this.loader = false);
            }
        }
    }
</script>
<style>
</style>
