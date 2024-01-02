<script setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mt-4">
                    <img class="mb-4 img-error" src="../../assets/img/error-404-monochrome.svg" />
                    <p class="lead">This requested URL was not found on this server.</p>
                    <RouterLink to="/">
                        <i class="fas fa-arrow-left me-1"></i>
                        Return to Home
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
