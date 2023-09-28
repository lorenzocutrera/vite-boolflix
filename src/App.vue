<script>
import axios from 'axios';

export default{
  components:{
    axios
  },
  data() {
        return {
            base_url: 'https://api.themoviedb.org/3/search/movie?api_key=397e8a56321ae0fb66bfc8126493d29c',

        }
    },
    created() {

        console.log(this, this.base_url);
        /* axios.get returs a promis (una promessa... ti rispondo prima o poi) */
        axios
            .get(this.base_url)
            .then(response => {
                /* The request response is available in the then method */
                console.log(response); // the whole response object
                // console.log(response.data); // the whole data response
                // console.log(response.data.response);

                this.cards = response.data.data;
            })
            .catch(error => {
                /* Handle a request error */
                console.log('Error:');
                console.error(error);
                this.error = error.message
            })


    }

}
</script>

<template>
 
   
</template>

<style scoped>

</style>
