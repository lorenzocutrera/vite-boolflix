<script>
import AppSearch from './AppSearch.vue';
import { state } from '../state';

export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    components: { AppSearch},
    methods: {
        searchFilm() {
            state.fetchData();
        }
    }
}
</script>

<template>

    <div class="container">         
            <AppSearch @perform-search="searchFilm"></AppSearch>    
    </div>

</template>

<style lang="scss" scoped>

</style>