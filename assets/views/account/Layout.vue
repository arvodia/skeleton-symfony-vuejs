<script setup>
    import { RouterView } from 'vue-router'
</script>

<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <RouterView />
            </main>
        </div>
        <div id="layoutAuthentication_footer">
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
