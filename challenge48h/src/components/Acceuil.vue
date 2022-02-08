<script setup>
import { useRouter } from "vue-router";
import Header from './header.vue';

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
  <Header></Header>
<div class="logo">
    <img class="logoimg" src="../assets/StarWarslogo.png">
</div>
<div class="button-quizz">
  <button class="wikiRedirect" v-on:click="redirect()">QUIZZ</button>
</div>
</template> 

<style scoped>
@media screen and (min-width: 200px) and (max-width: 1000px) {
        .button-quizz {
            display: flex;
            flex-direction: column;
            width: fit-content;
        }
        .wikiRedirect{
            margin-left: 20px;
            margin-right: 20px;
        }
    }
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
  .button-quizz{
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 20%;
  }
  .button-quizz .wikiRedirect {
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
  }
  
  #app{
    height:100vh;
  }
</style>