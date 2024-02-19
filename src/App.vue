<script>
import axios from 'axios';
export default {
    name: ' App',

    data() {
        return {
            cards: [],
            base_url: ('https://image.tmdb.org/t/p/w200')
        }
    },

    mounted() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4d59c37e05a472c0de36abce1cbde3e5&language=it-IT&page=1')
            .then(response => {
                console.log(response.data.results);
                this.cards = response.data.results
            })
            .catch(error => {
                console.error(error);
            })
    }
}

</script>

<template>
    <div v-for="card in cards">
        <img :src="base_url + card.poster_path" alt="">
        <h3>{{ card.title }}</h3>
        <p>{{ card.overview }}</p>
    </div>
</template>

<style scoped></style>
