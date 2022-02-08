<script setup>
import API from "../api/axios.js";
import { ref, computed, onMounted } from "vue";

const listfilm = ref([]);

async function getFilm() {
  let api = await API.getAllMovie();
  listfilm.value = api.results;
  console.log(listfilm.value);
}

onMounted(async () => {
  await getFilm();
});
</script>

<template>
  <p>jure la vie de oim j'en ai marre</p>
  <ul v-for="film of listfilm">
    <p>{{ film.title }}</p>
  </ul>
</template>

<style></style>
