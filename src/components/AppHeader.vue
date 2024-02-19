<script>
export default {
    name: 'AppHeader'
}
</script>




<template>
    <header>
        <div class="logo">
            Boolflix
        </div>
    </header>
</template>



<style scoped>
header {
    display: flex;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 100px;
    border: 1px solid green;
    background-color: rgba(128, 128, 0, 0.265);
    border-radius: 50px;
    width: 400px;
    height: 80px;
}
</style>