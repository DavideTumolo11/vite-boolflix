<script>
import axios from 'axios';
import { state } from '../state.js';

export default {
    name: 'AppMain',
    data() {
        return {
            cards: [],
            basic_url_img: ('https://image.tmdb.org/t/p/w200'),
            state

        };
    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/search/movie?query=popular&include_adult=true&api_key=4d59c37e05a472c0de36abce1cbde3e5&language=it-IT&page=1')
            .then(response => {
                console.log(response.data.results);
                this.cards = response.data.results;
            })
            .catch(error => {
                console.error(error);
            });
    },
}
</script>



<template>
    <main>
        <section class="cards">
            <div class="container">
                <div class="row">
                    <div class="col" v-for="card in cards">
                        <div class="card">
                            <img :src="basic_url_img + card.poster_path" alt="">
                            <h3 class="title">Title: {{ card.title }}</h3>
                            <h5 class="original_title">
                                Original title: {{ card.original_title }}
                            </h5>
                            <div class="overview">
                                <p>{{ card.overview }}</p>
                            </div>
                            <div class="language">
                                Original language: {{ card.original_language }}
                            </div>
                            <div class="vote">
                                {{ card.vote_average }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </main>
</template>

<style scoped>
.card {
    transition: all 1s;

    &:hover {
        filter: drop-shadow(0 0 15px red);
        scale: 1.2;
    }
}

.title {
    border-radius: 10px;
    color: rgb(255, 255, 255);
}

.overview {
    background-color: rgb(0, 0, 0);
    color: rgba(255, 0, 0, 0.58);
    max-width: 200px;
    max-height: 100px;
    overflow: auto;
}

.overview::-webkit-scrollbar {
    width: 3px;
}


.overview::-webkit-scrollbar-track {
    background: #a4a4a4;
}


.overview::-webkit-scrollbar-thumb {
    background: #ff0000;
}

.overview::-webkit-scrollbar-thumb:hover {
    background: #8802fd;
}
</style>