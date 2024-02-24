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
        loadResult(search) {
            axios
                .get(state.api_url + "&query=" + search)
                .then((response) => {
                    this.cards = response.data.results;
                    console.log(response.data.results);
                })

            axios
                .get(state.tv_api_url + "&query=" + search)
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
        <div>
            <input type="text" name="search" id="search" placeholder="text" v-model="state.searchText"
                @keyup.enter="loadResult(state.searchText)" />
            <button @click="loadResult(state.searchText)">
                Click here
            </button>
        </div>
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
                            <div class="original_language">
                                Original language: <flag-icon :iso="card.original_language"></flag-icon>
                            </div>
                            <div class="vote">
                                Vote: {{ card.vote_average }}
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
        scale: 1.1;
    }
}

.title,
.original_title,
.original_language {
    border-radius: 10px;
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
    max-width: 200px;
}


.overview {
    background-color: rgb(0, 0, 0);
    color: rgba(255, 0, 0, 0.58);
    max-width: 200px;
    max-height: 100px;
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