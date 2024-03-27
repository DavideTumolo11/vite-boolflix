<script>
import axios from 'axios';
import { state } from '../state.js';
import FlagIcon from "vue-lang-code-flags";

export default {
    name: 'AppMain',
    data() {
        return {
            cards: [],
            basic_url_img: ('https://image.tmdb.org/t/p/w200'),
            state,

        };
    },
    components: {
        FlagIcon,
    },
    methods: {
        loadResult() {
            this.cards = [];
            axios
                .get(state.api_url + "&query=" + state.searchText)
                .then((response) => {
                    this.cards.push(...response.data.results);
                    console.log(response.data.results);
                })

            axios
                .get(state.tv_api_url + "&query=" + state.searchText)
                .then((response) => {
                    this.cards.push(...response.data.results);
                    console.log(response.data.results);
                })
        }
    },
    mounted() {
        axios
            .get(state.api_url + "&query=rocky")
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
        <div class="search_bar">
            <input type="text" name="search" id="search" placeholder="text" v-model="state.searchText"
                @keyup.enter="loadResult(state.searchText)" />
            <button @click="loadResult(state.searchText)">
                Click here
            </button>
        </div>
        <section class="cards">
            <div class="container">
                <div class="row">
                    <div v-if="cards.length > 0" class="col" v-for="card in cards">
                        <div class="card">
                            <img :src="basic_url_img + card.poster_path" alt="">
                            <div class="card-hover">
                                <h3 class="title">Title: {{ card.title }}</h3>
                                <h5 class="original_title">
                                    Original title: {{ card.original_title }}
                                </h5>
                                <div class="overview">
                                    <p>{{ card.overview }}</p>
                                </div>
                                <div class="original_language">
                                    Original language: <flag-icon :iso="card.original_language"></flag-icon>
                                </div>
                                <div class="vote">
                                    Vote:
                                    <div v-for="index in 5"
                                        :class="Math.ceil(card.vote_average / 2) >= index ? 'fa-solid fa-star gold-star' : 'fa-regular fa-star'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        Non ci sono film
                    </div>
                </div>
            </div>

        </section>
    </main>
</template>

<style scoped>
main {
    margin-top: 100px;
}

.search_bar {
    margin-bottom: 30px;
    margin-left: 20px;
}

.card {
    position: relative;
    transition: all 1s;

    &:hover {
        filter: drop-shadow(0 0 15px red);
        scale: 1.1;
    }

    img {
        width: 100%;
        height: auto;
    }

    &:hover img {
        opacity: 0;
    }

    .card-hover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        opacity: 0;
        transition: opacity 1s;
    }

    &:hover .card-hover {
        opacity: 1;
    }
}




.title,
.original_title,
.original_language {
    margin-left: 5px;
    font-size: large;
    font-family: sans-serif;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    margin-top: 10px;
    max-width: 200px;
}

.vote {
    margin-top: 10px;
    margin-left: 5px;
    font-size: 15px;
    font-style: italic;
    font-family: sans-serif;
}

.gold-star {
    color: gold;
}


.overview {
    margin-top: 20px;
    margin-left: 5px;
    color: white;
    max-width: 230px;
    max-height: 170px;
    overflow: auto;
    margin-bottom: 20px;
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