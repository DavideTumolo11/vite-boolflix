<script>
export default {
    name: 'AppHeader'
}
</script>




<template>
    <header>
        <div class="img_logo">
            <img class="logo" src="../assets/img/Colorful Retro Illustrative Tasty Popcorn Logo.png" alt="">
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
    width: 600px;
    height: 400px;
}

.img_logo {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>