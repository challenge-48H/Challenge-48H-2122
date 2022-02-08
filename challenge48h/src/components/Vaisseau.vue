<script setup>
import API from "../api/axios.js";
import { ref, computed, onMounted } from "vue";
import Header from './header.vue';

const listStarships = ref([]);
const newlistStarships = ref([]);

async function starshipsList() {
  listStarships.value = (await API.getVaisseauData("")).data;
  while (listStarships.value.next != null) {
    const urlNextPage = listStarships.value.next.substr(31);
    newlistStarships.value = (await API.getVaisseauData(urlNextPage)).data;
    newlistStarships.value.results.forEach((starships) =>
      listStarships.value.results.push(starships)
    );
    listStarships.value.next = newlistStarships.value.next;
  }
  listStarships.value = listStarships.value.results;
  console.log(listStarships.value);
}
onMounted(async () => {
  await starshipsList();
});
</script>

<template>
   <div class="logov">
    <img class="logoimgv1" src="../assets/destroyer.png">
    <a href="http://localhost:3000/"><img class="logoimgv2" src="../assets/StarWarslogo.png"></a>
    <img class="logoimgv3" src="../assets/rond.png" >
  </div>
  <Header></Header>
  <div class="container">
    <div v-for="starships of listStarships" class="card">
      <div class="box">
        <div class="content">
          <h3>{{ starships.name }}</h3>
          <ul class="information">
            <li>Modèle : {{ starships.model }}</li>
            <li v-if="starships.cost_in_credits != 'unknown'">
              Prix en crédit : {{ starships.cost_in_credits }}
            </li>
            <li v-if="starships.length != 'unknown'">
              Longueur : {{ starships.length }}
            </li>
            <li
              v-if="
                starships.max_atmosphering_speed != 'n/a' &&
                starships.max_atmosphering_speed != 'unknown'
              "
            >
              Vitesse maximum : {{ starships.max_atmosphering_speed }}
            </li>
            <li
              v-if="
                starships.passengers != 'n/a' &&
                starships.passengers != 'unknown'
              "
            >
              Nombre de passager : {{ starships.passengers }}
            </li>
          </ul>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
@media only screen and (min-width: 1050px) {
  
}
.logov {
  display: flex;
  justify-content: space-around;
  align-items:center ;
  height: fit-content;
  text-align: center;
  flex-wrap: wrap;
}
.logoimgv1, .logoimgv2, .logoimgv3 {
  height: 200px;
  width: 350px;
}
.test {
  /* background-color: cornflowerblue; */
  border-bottom: 1px solid black;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #232427;
}

body .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 40px 0;
}

body .container .card {
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
}

body .container .card:nth-child(1) .box .content a {
  background: #000000;
}

body .container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

body .container .card .box:hover {
  transform: translateY(-50px);
}

body .container .card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

body .container .card .box .content {
  padding: 20px;
  text-align: center;
}

body .container .card .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
}

body .container .card .box .content h3 {
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}

body .container .card .box .content p {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
}

.information {
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
}

body .container .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
body .container .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}
</style>
