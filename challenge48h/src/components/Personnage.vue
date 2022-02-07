<script setup>
import API from "../api/axios.js";
import {ref, computed, onMounted } from 'vue';

const listPerso = ref ([]);

async function getPerso() {
    let data = await API.getPersoData();
    listPerso.value = data.data.results;
    console.log(listPerso.value);
}

onMounted(async ()=>{
    await getPerso();
})
</script>

<template>
    <ul v-for="Perso of listPerso">
        <div class="card">
            <h1>{{ Perso.name }}</h1>
             <p>gender = {{ Perso.gender }}</p>
        </div>
    </ul>
</template>

<style scoped>
.card{  
}
</style>