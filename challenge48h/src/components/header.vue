<script setup>
import { useRouter } from "vue-router";
import API from "../api/axios.js";
import {ref, computed } from 'vue';


const router = useRouter();

function redirectPlanet() {
    router.push("/planets");
}
function redirectFilm() {
    router.push("/film");
}
function redirectPersonnage() {
    router.push("/personnage")
}
function redirectVaisseau() {
    router.push("/vaisseau")
}

function redirectVehicule() {
    router.push("/vehicule")
}

function redirectEspece() {
    router.push("/especes")
}

</script>
 
<template>
  <section>
    <article class="header">
        <button class="wikiRedirect" v-on:click="redirectPlanet ()">Planet</button>
        <button class="wikiRedirect" v-on:click="redirectFilm ()">Film</button>
        <button class="wikiRedirect" v-on:click="redirectPersonnage ()">Personnage</button>
        <button class="wikiRedirect" v-on:click="redirectVaisseau ()">Vaisseau</button>
        <button class="wikiRedirect" v-on:click="redirectVehicule ()">Véhicule</button>
        <button class="wikiRedirect" v-on:click="redirectEspece ()">Especes</button>
    </article>
  </section>
</template>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: none;
    margin-top: 0;
    width: 100%
}
.wikiRedirect{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 120%;
    font-weight: 600;
    width: 150px;
    border-radius: 18px;
    margin: 40px auto;
    padding: 25px ;
    transition: 0.5s;
}
.wikiRedirect:hover{
    width: 200px;
    opacity: 0.9;
}

    @media screen and (min-width: 200px) and (max-width: 1000px) {
        .header {
            display: flex;
            flex-direction: column;
            width: fit-content;
        }
        .wikiRedirect{
            margin-left: 20px;
            margin-right: 20px;
        }
    }


</style>
