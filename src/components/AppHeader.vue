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
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0);
    height: 100px;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 50px;
    border: 1px solid green;
    background-color: rgba(128, 128, 0, 0.265);
    border-radius: 50px;
    width: 200px;
    height: 60px;
}
</style>