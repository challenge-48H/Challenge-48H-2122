<script setup>
import API from "../api/axios.js";
import {ref, computed, onMounted } from 'vue';
import Header from './header.vue';
 
const listFilm = ref ([]);
const newlistFilm = ref ([]);

async function FilmList(){
    listFilm.value = (await API.getFilmData("")).data;
    while ((listFilm.value).next!=null){
        const urlNextPage = ((listFilm.value).next).substr(29);
        newlistFilm.value = (await API.getFilmData(urlNextPage)).data;
        newlistFilm.value.results.forEach((film)=> listFilm.value.results.push(film))
        listFilm.value.next = newlistFilm.value.next;
    }
    listFilm.value = listFilm.value.results;
    console.log(listFilm.value);
}
onMounted(async ()=>{
    await FilmList();
})
 
</script>
 
<template>
   <Header></Header>
<div class ="pagecontent">
    <!-- <button v-on:click="SwitchPageprevious()" class="redirect">PREVIOUS</button> -->
        <div class="container">
        <div v-for="Film of listFilm" class="card">
        <div class="box">
            <div class="content">
            <h3>{{ Film.title }}</h3>
            <ul class="information">
                <li v-if="Film.episode_id != 'unknown'">
                episode : {{ Film.episode_id }}
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    <!-- <button v-on:click="SwitchPageNext()" class="redirect">NEXT</button> -->
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
.pagecontent{
    display: flex;
    flex-direction: row;
}
.redirect{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 120%;
    font-weight: 600;
    border-radius: 18px;
    margin: 40px;
    padding: 25px ;
    transition: 0.5s;
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
  background: #2196f3;
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
  overflow: auto;
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