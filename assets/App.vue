<script setup>
    import { RouterView } from 'vue-router'
</script>

<template>
    <div id="wf-toasts-place" aria-live="polite" aria-atomic="true" class="position-relative">
        <div class="toast-container position-fixed bottom-0 start-0 p-3" style="z-index: 999999">
            <div id="wf-toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body"><span></span></div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<script>
</script>

<style >

</style>
