<script setup>
    import { RouterView } from 'vue-router'
    import PublicNav from '../../components/navigation/PublicNav.vue'
</script>

<template>
    <div class="container">
        <PublicNav />
        <main>
            <RouterView />
        </main>
    </div>
</template>

<!--<style scoped src="/node_modules/bootstrap/dist/css/bootstrap.css">
    /*@import "/node_modules/bootstrap/scss/bootstrap.scss";*/
</style>-->
<!--<style scoped lang="scss">
    .main-wrapper::v-deep(.bootstrap-scope) {
        @import "/node_modules/bootstrap/scss/bootstrap.scss";
    }
</style>-->