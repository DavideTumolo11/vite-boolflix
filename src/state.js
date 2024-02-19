import { reactive } from "vue"

export const state = reactive({
    api_url: 'https://api.themoviedb.org/3/search/movie?query=popular&include_adult=true&api_key=4d59c37e05a472c0de36abce1cbde3e5&language=it-IT&page=1',
})