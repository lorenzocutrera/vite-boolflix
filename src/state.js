import { reactive } from "vue";
import axios from 'axios'

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=397e8a56321ae0fb66bfc8126493d29c',
    query: '',
    lista_film: null,

    fetchData() {

        axios.get(this.base_url + `&query=${this.query}`).then(response => {
            console.log(response.data.results);
            this.lista_film = response.data.results;

        })
            .catch(error => {
                console.log(error);
            })

    }
})


