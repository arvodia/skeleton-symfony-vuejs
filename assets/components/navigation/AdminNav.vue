<script setup>
    import { RouterLink } from 'vue-router';
    import AccountNav from './AccountNav.vue';

</script>
<template>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <!-- Navbar Brand-->
        <RouterLink class="navbar-brand ps-3" to="/">
            Start Bootstrap
        </RouterLink>
        <!-- Sidebar Toggle-->
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
        <!-- Navbar-->
        <AccountNav/>
    </nav>
</template>
