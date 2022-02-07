<script setup>
import API from "../api/axios.js";
import {ref, computed, onMounted } from 'vue';
 
const listfilm = ref ([]);
 
async function getFilm() {
    let data = await API.getMovieName();
    listfilm.value = data.data.results;
    console.log(listfilm.value);
}
 
onMounted(async ()=>{
    await getFilm();
})
 
</script>
 
<template>
    <ul v-for="film of listfilm">
        <p>{{ film.title }}</p> 
    </ul>
</template>
 
<style>
 
</style>