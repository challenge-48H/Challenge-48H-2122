<script setup>
import { useRouter } from "vue-router";
import API from "../api/axios.js";
const result = API.getMovieName();
console.log((await result).data.director);
</script>

<template>
  <h1>salut</h1>
</template>

<style scoped></style>
