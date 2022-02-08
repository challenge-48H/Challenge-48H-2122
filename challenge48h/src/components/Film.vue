<script setup>
import API from "../api/axios.js";
import { ref, computed, onMounted } from "vue";

const listFilm = ref([]);
const newlistFilm = ref([]);

async function FilmList() {
  listFilm.value = (await API.getFilmData("")).data;
  while (listFilm.value.next != null) {
    const urlNextPage = listFilm.value.next.substr(29);
    newlistFilm.value = (await API.getFilmData(urlNextPage)).data;
    newlistFilm.value.results.forEach((film) =>
      listFilm.value.results.push(film)
    );
    listFilm.value.next = newlistFilm.value.next;
  }
  listFilm.value = listFilm.value.results;
  console.log(listFilm.value);
}
onMounted(async () => {
  await FilmList();
});
</script>

<template>
  <ul v-for="Film of listFilm">
    <div class="card">
      <h1>{{ Film.title }}</h1>
    </div>
  </ul>
</template>

<style></style>
