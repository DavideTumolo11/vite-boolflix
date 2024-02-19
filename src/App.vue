<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import { state } from './state.js'
export default {
    name: ' App',
    data() {
        return {
            cards: [],
            basic_url_img: ('https://image.tmdb.org/t/p/w200'),
            state

        };
    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4d59c37e05a472c0de36abce1cbde3e5&language=it-IT&page=1')
            .then(response => {
                console.log(response.data.results);
                this.cards = response.data.results;
            })
            .catch(error => {
                console.error(error);
            });
    },
    components: { AppHeader, AppMain }
}

</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <div v-for="card in cards">
        <img :src="basic_url_img + card.poster_path" alt="">
        <h3>{{ card.title }}</h3>
        <p>{{ card.overview }}</p>
    </div>
</template>

<style scoped></style>
