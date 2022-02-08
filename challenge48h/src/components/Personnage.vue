<script setup>
import API from "../api/axios.js";
import {ref, computed, onMounted } from 'vue';

const listPerso = ref ([]);
const newlistPerso = ref ([]);

async function PersoList(){
    listPerso.value = (await API.getPersoData("")).data;
    while ((listPerso.value).next!=null){
        const urlNextPage = ((listPerso.value).next).substr(29);
        newlistPerso.value = (await API.getPersoData(urlNextPage)).data;
        newlistPerso.value.results.forEach((people)=> listPerso.value.results.push(people))
        listPerso.value.next = newlistPerso.value.next;
    }
    listPerso.value = listPerso.value.results;
    console.log(listPerso.value);
}
onMounted(async ()=>{
    await PersoList();
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


async function getPerso(){
    let data = await API.getPersoData();
    listPerso.value = data.data.results;
    while ((listPerso.value).next!=null){
        const urlNextPage = ((listPerso.value ).next).substr(29);
        newListlistPerso.value = (await API.apiGetVehicles(urlNextPage)).data;
        newListlistPerso.value.results.forEach((people)=> listPerso.value.results.push(people))
        listPerso.value.next = newlistPerso.value.next;
    }
    listPerso.value = listPerso.value.results;
    console.log(listPerso.value);
}