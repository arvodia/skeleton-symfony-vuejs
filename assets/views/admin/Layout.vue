<script setup>
    import { RouterView } from 'vue-router'
    import AdminNav from '../../components/navigation/AdminNav.vue'
    import AdminSidenav from '../../components/navigation/AdminSidenav.vue'
</script>

<template>
    <AdminNav />
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <AdminSidenav />
        </div>
        <div id="layoutSidenav_content">
            <main>
                <RouterView />
            </main>
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; Your Website 2023</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    export default{
        mounted() {
            let body = document.getElementsByTagName("body")[0];
            body.classList.add("sb-nav-fixed");
        },
        unmounted() {
            let body = document.getElementsByTagName("body")[0];
            body.classList.remove("sb-nav-fixed");

        }

    }
</script>

<style scoped>
</style>
