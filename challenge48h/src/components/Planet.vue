<script setup>
import API from "../api/axios.js";
import {ref, computed, onMounted } from 'vue';

const listPlanet = ref ([]);

async function getPlanet() {
    let data = await API.getPlanetData();
    listPlanet.value = data.data.results;
    console.log(listPlanet.value);
}

onMounted(async ()=>{
    await getPlanet();
})
</script>

<template>
    <ul v-for="planet of listPlanet">
        <div class="card">
            <h1>{{ planet.name }}</h1>
             <p>climate = {{ planet.climate }}</p>
        </div>
    </ul>
</template>

<style scoped>
.card{  
}
</style>