<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function redirectPlanet() {
  router.push("/planets");
}
function redirectFilm() {
  router.push("/film");
}
function redirectPersonnage() {
  router.push("/personnage");
}
function redirectVaisseau() {
  router.push("/vaisseau");
}
function redirectVehicule() {
  router.push("/vehicule");
}
function redirectEspece() {
  router.push("/especes");
}
</script>

<template>
  <section>
    <article class="header">
        <button class="wikiRedirect" v-on:click="redirectPlanet()">Planète</button>
        <button class="wikiRedirect" v-on:click="redirectFilm ()">Film</button>
        <button class="wikiRedirect" v-on:click="redirectPersonnage ()">Personnage</button>
        <button class="wikiRedirect" v-on:click="redirectVaisseau ()">Vaisseau</button>
        <button class="wikiRedirect" v-on:click="redirectVehicule ()">Véhicule</button>
        <button class="wikiRedirect" v-on:click="redirectEspece ()">Espèce</button>
    </article>
  </section>
<div class="logo">
    <img class="logoimg" src="../assets/StarWarslogo.png">
</div>
<div class="button-quizz">
  <button class="wikiRedirect" v-on:click="redirect()">QUIZZ</button>
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
  #app{
    height:100vh;
  }
</style>