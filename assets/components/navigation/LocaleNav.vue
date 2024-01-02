<template>
    <div class="dropdown text-end">
        <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-globe"></i>
        </a>
        <ul class="dropdown-menu text-small" style="">
            <li><button class="dropdown-item" @click="switchLocale('en')">English</button></li>
            <li><button class="dropdown-item" @click="switchLocale('fr')">Français</button></li>
        </ul>
    </div>
</template>
<script>
    export default{
        methods: {
            switchLocale(locale) {
                this.$i18n.locale = locale;
                localStorage.setItem('arvodia|locale', locale);
            }
        }
    }
</script>