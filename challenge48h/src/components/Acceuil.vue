<script setup>

import { loadConfigFromFile } from 'vite';
import {ref, computed } from 'vue';
import {useRouter} from"vue-router";
import API from '../api/axios.js';

const listFilms = ref('');

async function apiGet() {
    listFilms.value = await API.apiGetFilms();
    console.log(listFilms.value)
}
apiGet();

</script>

<template>

</template> 

<style scoped>
.test{
    color: red;
}
</style>