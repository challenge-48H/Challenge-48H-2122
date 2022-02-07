<script setup>
import { useRouter } from "vue-router";
import API from "../api/axios.js";
import {ref, computed } from 'vue';

const name = ref ('');

name.value = API.getMovieName().data;

function redirect() {
    router.push("/Planets");
}
</script>
 
<template>
  <section>
    <article class="header">
        <button class="wikiRedirect" v-on:click="redirect ()">Planet</button>
        <button class="wikiRedirect">Film</button>
        <button class="wikiRedirect">Perssonnage</button>
        <button class="wikiRedirect">Vaisseau</button>
        <button class="wikiRedirect">Véhicule</button>
        <button class="wikiRedirect">Especes</button>
    </article>
  </section>
</template>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: red;
    margin-top: 0;
}
.wikiRedirect{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 120%;
    font-weight: 600;
    width: fit-content;
    border-radius: 18px;
    margin: 40px auto;
    padding: 25px ;
    transition: 0.2s;
}
.wikiRedirect:hover{
    padding-left: 35px;
    padding-right: 35px;
}
</style>
