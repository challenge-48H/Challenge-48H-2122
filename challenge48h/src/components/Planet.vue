<script setup>
import API from "../api/axios.js";
import {ref, computed, onMounted } from 'vue';

const listPlanet = ref ([]);

async function getPlanet() {
    let data = await API.getPlanetName();
    listPlanet.value = data.data.results;
    console.log(listPlanet.value);
}

onMounted(async ()=>{
    await getPlanet();
})
</script>

<template>
    <ul v-for="planet of listPlanet">
        <p>{{ planet.name }}</p> 
    </ul>
</template>

<style>

</style>