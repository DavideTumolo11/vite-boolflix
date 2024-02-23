import { reactive } from "vue"

export const state = reactive({
    api_url: 'https://api.themoviedb.org/3/search/movie?api_key=4d59c37e05a472c0de36abce1cbde3e5&language=it-IT',
    tv_api_url: "https://api.themoviedb.org/3/search/tv?api_key=4d59c37e05a472c0de36abce1cbde3e5&language=it-IT",
    searchText: "",

});