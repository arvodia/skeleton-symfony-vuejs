<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                DataTable Example
            </div>
            <div class="card-body">
                {{ content }}
            </div>
        </div>
    </div>

</template>
<script>

    export default{
        data() {
            return {
                content: 'okay !'
            }
        },
        mounted() {
        },
    }
</script>
<style>
</style>
