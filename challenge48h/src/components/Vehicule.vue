<script setup>
import API from "../api/axios.js";
import { ref, computed, onMounted } from "vue";

const listVehicle = ref([]);

async function getVehicle() {
  let api = await API.getAllVehicles();
  listVehicle.value = api.data.results;
  console.log(listVehicle.value);
}

onMounted(async () => {
  await getVehicle();
});
</script>

<template>
  <p>jure la vie de oim j'en ai marre</p>
  <div v-for="vehicle of listVehicle">
    <div class="card">
      <h1>{{ vehicle.name }}</h1>
    </div>
  </div>
</template>

<style>
.card {
  background-color: aqua;
}
</style>
