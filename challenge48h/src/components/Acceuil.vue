<script setup>
import { useRouter } from "vue-router";
import API from "../api/axios.js";
import {ref, computed } from 'vue';

const name = ref ('');

// name.value = API.getMovieName().data;

function redirect() {
    router.push("/Planets");
}
</script>

<template>
  <section>
    <article class="header">
        <button class="wikiRedirect" v-on:click="redirect ()">Planète</button>
        <button class="wikiRedirect" v-on:click="redirect ()">Film</button>
        <button class="wikiRedirect" v-on:click="redirect ()">Personnage</button>
        <button class="wikiRedirect" v-on:click="redirect ()">Vaisseau</button>
        <button class="wikiRedirect" v-on:click="redirect ()">Véhicule</button>
        <button class="wikiRedirect" v-on:click="redirect ()">Espèce</button>
    </article>
  </section>
<div class="logo">
    <img class="logoimg" src="../assets/StarWarslogo.png">
</div>
<div class="button-quizz">
  <button class="wikiRedirect" v-on:click="redirect ()">QUIZZ</button>
</div>
</template> 

<style scoped>

.logo {
  display: flex;
  justify-content: space-around;
  align-items:center ;
  height: 40vh;
  text-align: center;
  flex-wrap: wrap;
}
.logoimg {
  height: 200px;
  width: auto;
}
.header {
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  max-width: 90%;
}
  .header .wikiRedirect {
   background: #999;
    padding: 1em;
    font-size: .9em;
    margin: .3em;
    color: rgb(232, 255, 28);
    text-decoration: none;
    flex-grow: 1;
    text-align: center;
  }
  .button-quizz{
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 20%;
  }
  .button-quizz .wikiRedirect {
    background: #999;
    padding: 1em;
    font-size: .9em;
    margin: .3em;
    color: rgb(251, 255, 0);
    text-decoration: none;
    flex-grow: 1;
    text-align: center;
    align-items: center;
  }
  .wikiRedirect:hover{
    color: rgba(255, 255, 255, 0.83);
    background: rgb(251, 255, 0);
  }

</style>