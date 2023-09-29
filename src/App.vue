<script>
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import { state } from './state.js'

export default {
  data() {
    return {
      state,
    };
  },
  components: { 
    AppSearch,
    AppHeader
  },
  created() {
    state.fetchData();
  },

}

</script>

<template>
  <AppHeader></AppHeader>

  <div class="container">
    <div class="row">
      <div class="card col-3" v-for="film in state.lista_film">
      
        
        <p class="titolo"> {{ film.title }}</p>
        <p class="titolo_originale">{{ film.original_title }}</p>
        <p class="lingua">{{ film.original_language }}</p>
        <p class="voto"> {{ film.vote_average }}</p>
      </div>


    </div>
  </div>
</template>