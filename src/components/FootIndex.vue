<template>
    <div></div>
</template>

<script>
    export default {
        name: "FootIndex",
        mounted() {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://blog-static.cnblogs.com/files/zouwangblog/autoload.js';
            document.body.appendChild(s);
        },
    }
</script>

<style scoped>

</style>
