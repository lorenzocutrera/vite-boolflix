<script>
import { state } from '../state.js';

export default {
    name: 'AppSearch',
    emits: ['performSearch'],
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <nav>

        <div @submit.prevent="$emit('performSearch')" class="">

            <input type="text" v-model="state.query">
            <button type="submit" class="text-uppercase">search</button>
        </div>

    </nav>
</template>

<style lang="scss" scoped></style>