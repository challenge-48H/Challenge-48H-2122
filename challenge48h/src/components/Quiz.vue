<script setup>
// On crée un objet questionnaire avec un titre et deux questions
// Une question a une ou plusieurs réponses, et une ou plusieurs sont valides.
import { ref } from "vue";
import Header from "./header.vue";
let quiz = {
  title: "Mon questionnaire",
  questions: [
    {
      text: "Qui est le père de Luke Skywalker ? ?",
      responses: [
        { text: "Anakin", correct: true },
        { text: "Dark Vador", correct: true },
        { text: "Obi-wan" },
        { text: "loic" },
      ],
    },
    {
      text: "Qu'est-il arrivé à Anakin Skywalker pendant la bataille contre le comte Dooku ?",
      responses: [
        { text: "Il a perdu son avant-bras droit", correct: true },
        { text: "Il a perdu sa jambe gauche" },
        { text: "Il a perdu son genou" },
        { text: "Il a perdu" },
      ],
    },
    {
      text: "Quelle est l'arme de prédilection de Chewbacca ?",
      responses: [
        { text: "Fusil blaster" },
        { text: "Sabre laser" },
        { text: "Club de métal" },
        { text: "Bowcaster", correct: true },
      ],
    },
    {
      text: "Combien d'étoiles sont construites par l'Empire ?",
      responses: [
        { text: "Un", correct: true },
        { text: "Deux" },
        { text: "Trois" },
        { text: "quatre" },
      ],
    },
    {
      text: "Quel était le titre du premier film Star Wars ?",
      responses: [
        { text: "Les Aventures de Luke Starkiller" },
        { text: "Un nouvel espoir", correct: true },
        { text: "Les aventures du Jedi" },
        { text: "Batailles spatiales" },
      ],
    },
    {
      text: "Dans quel épisode Dark Vador dit-il le fameux 'Je suis ton père' ?",
      responses: [
        { text: 'The IV, "Un nouvel espoir"' },
        { text: "The V, 'L'Empire contre-attaque'", correct: true },
        { text: 'The VI, "Le retour du Jedi"' },
      ],
    },
    {
      text: "Quel est l'ordre chronologique de la saga 'Star Wars' ?",
      responses: [
        {
          text: "L'histoire commence dans l'épisode I et se termine dans l'épisode VI. ",
          correct: true,
        },
        {
          text: "L'histoire se déroule dans l'ordre suivant : épisode IV, puis V et VI pour finir sur les I, II et III",
        },
        {
          text: "Les aventures évoluent dans l'ordre IV, V, I, II, III puis VI ? ",
        },
      ],
    },
    {
      text: " Combien d'années séparent la sortie en salles de l'Episode IV de l'Episode III ?",
      responses: [
        { text: "vingt-six ans" },
        { text: "vingt-neuf ans" },
        { text: "vingt-huit ans", correct: true },
        { text: "quarante-neuf ans" },
      ],
    },
    {
      text: "Qui a réalisé Star Wars ?",
      responses: [
        { text: "James Luceno" },
        { text: "George Lucas", correct: true },
        { text: "jj.Abrams" },
      ],
    },
    {
      text: "Comment s'appelle le chasseur de prime qui livre Han Solo à Jabba le Hutt ?",
      responses: [
        { text: "Cassus Fett" },
        { text: "Jango Fett" },
        { text: "Boba Fett", correct: true },
      ],
    },
  ],
};
let userResponses = ref(Array(quiz.questions.length).fill(false));
let questionIndex = ref(0);
function next() {
  questionIndex.value++;
}
function prev() {
  questionIndex.value--;
}
function score() {
  return userResponses.value.filter(function (val) {
    return val;
  }).length;
}
</script>
<template>
<div class="logov">
    <img class="logoimgv1" src="../assets/yoda.png">
    <a href="http://localhost:3000/"><img class="logoimgv2" src="../assets/StarWarslogo.png"></a>
    <img class="logoimgv3" src="../assets/vador.png">
  </div>
<Header></Header>
  <h1 class="title">{{ quiz.title }}</h1>
  <!-- index is used to check with current question index -->
  <div v-for="(question, index) in quiz.questions" :key="index">
    <!-- Hide all questions, show only the one with index === to current question index -->
    <div class="suipre" v-show="index === questionIndex">
      <h2 class="question">{{ question.text }}</h2>
      <ol>
        <li v-for="(response, index) in question.responses" :key="index">
          <label class="lab">
            <!-- The radio button has three new directives -->
            <!-- v-bind:value sets "value" to "true" if the response is correct -->
            <!-- v-bind:name sets "name" to question index to group answers by question -->
            <!-- v-model creates binding with userResponses -->
            <input
              type="radio"
              v-bind:value="response.correct"
              v-bind:name="index"
              v-model="userResponses[index]"
            >
            {{ response.text }}
          </label>
        </li>
      </ol>
      <!-- The two navigation buttons -->
      <!-- Note: prev is hidden on first question -->
      <div class="suipre1">
      <button v-if="questionIndex > 0" v-on:click="prev">précédent</button>
      <button v-on:click="next">suivant</button>
      </div>
    </div>
  </div>
  <div v-show="questionIndex == quiz.questions.length" class="result">
    <h2>Quiz finished</h2>
    <p>Total score: {{ score() }} / {{ quiz.questions.length }}</p>
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
@media only screen and (max-width: 1050px) {
  .logoimgv1{
display: none;
  }
}
@media only screen and (max-width: 700px) {
  .logoimgv3{
display: none;
  }
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
.lab, .question, .title, .result {
  color: #ffe000;
}
  .suipre1 button {
     font-family: Arial, Helvetica, sans-serif;
    font-size: 120%;
    font-weight: 600;
    width: 150px;
    border-radius: 18px;
    margin: 40px auto;
    padding: 25px ;
    transition: 0.5s;
  }
  .suipre1 button:hover{
    width: 137px;
    opacity: 0.9; 
  }
</style>
