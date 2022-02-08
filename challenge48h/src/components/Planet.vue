<script setup>
import API from "../api/axios.js";
import { ref, computed, onMounted } from "vue";

const listPlanet = ref([]);
const newlistPlanet = ref([]);

async function PlanetList() {
  listPlanet.value = (await API.getPlanetData("")).data;
  while (listPlanet.value.next != null) {
    const urlNextPage = listPlanet.value.next.substr(30);
    newlistPlanet.value = (await API.getPlanetData(urlNextPage)).data;
    newlistPlanet.value.results.forEach((vehicle) =>
      listPlanet.value.results.push(vehicle)
    );
    listPlanet.value.next = newlistPlanet.value.next;
  }
  listPlanet.value = listPlanet.value.results;
  console.log(listPlanet.value);
}
onMounted(async () => {
  await PlanetList();
});
</script>

<template>
  <ul v-for="Planet of listPlanet">
    <div class="card">
      <h1>{{ Planet.name }}</h1>
    </div>
  </ul>
</template>

<style scoped>
/* .card{  
} */
</style>
