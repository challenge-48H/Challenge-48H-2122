<script setup> 
    // On crée un objet questionnaire avec un titre et deux questions
    // Une question a une ou plusieurs réponses, et une ou plusieurs sont valides.
import {ref} from "vue"
let quiz = {
    title: 'Mon questionnaire',
    questions: [
        {
        text: "Qui est le père de Luke Skywalker ? ?",
        responses: [
            {text: 'Anakin', correct: true}, 
            {text: 'Dark Vador', correct: true}, 
            {text: 'Obi-wan'},
            {text: 'loic'}
        ]
        }, {
        text: "Qu'est-il arrivé à Anakin Skywalker pendant la bataille contre le comte Dooku ?",
        responses: [
            {text: 'Il a perdu son avant-bras droit', correct: true}, 
            {text: 'Il a perdu sa jambe gauche'}, 
            {text: 'Il a perdu son genou'},
            {text: 'Il a perdu'},
        ]
        },           {
        text: "Quelle est l'arme de prédilection de Chewbacca ?",
        responses: [
            {text: 'Fusil blaster'}, 
            {text: 'Sabre laser'}, 
            {text: 'Club de métal'},
            {text: 'Bowcaster', correct: true},
        ]
        }, {
        text: "Combien d'étoiles sont construites par l'Empire ?",
        responses: [
            {text: 'Un', correct: true}, 
            {text: 'Deux'}, 
            {text: 'Trois'}, 
            {text: 'quatre'},
        ]
        }, {
        text: "Quel était le titre du premier film Star Wars ?",
        responses: [
            {text: 'Les Aventures de Luke Starkiller'}, 
            {text: 'Un nouvel espoir', correct: true}, 
            {text: 'Les aventures du Jedi'}, 
            {text: 'Batailles spatiales'},
        ]
        }, {
        text: "Dans quel épisode Dark Vador dit-il le fameux 'Je suis ton père' ?",
        responses: [
            {text: 'The IV, "Un nouvel espoir"'}, 
            {text: "The V, 'L'Empire contre-attaque'", correct: true}, 
            {text: 'The VI, "Le retour du Jedi"'}, 
        ]
        }, {
        text: "Quel est l'ordre chronologique de la saga 'Star Wars' ?",
        responses: [
            {text: "L'histoire commence dans l'épisode I et se termine dans l'épisode VI. ", correct: true},
            {text: "L'histoire se déroule dans l'ordre suivant : épisode IV, puis V et VI pour finir sur les I, II et III"},
            {text: "Les aventures évoluent dans l'ordre IV, V, I, II, III puis VI ? "}
        ]
        }, {
        text: " Combien d'années séparent la sortie en salles de l'Episode IV de l'Episode III ?",
        responses: [
            {text: 'vingt-six ans'},
            {text: 'vingt-neuf ans'},
            {text: 'vingt-huit ans', correct: true},  
            {text: 'quarante-neuf ans'} 
        ]
        }, {
        text: "Qui a réalisé Star Wars ?",
        responses: [
            {text: 'James Luceno'},
            {text: 'George Lucas', correct: true},
            {text: 'jj.Abrams'}, 
        ]
        }, {
        text: "Comment s'appelle le chasseur de prime qui livre Han Solo à Jabba le Hutt ?",
        responses: [
            {text: 'Cassus Fett'},
            {text: 'Jango Fett'},
            {text: 'Boba Fett', correct: true},  
        ]
        }
    ]
}
let userResponses = ref(Array(quiz.questions.length).fill(false))
let questionIndex = ref(0)
function next() {
    questionIndex.value++
}
function prev() {
    questionIndex.value--
}
function score() {
    return userResponses.value.filter(function(val) {return val}).length;
}
</script>
<template>
  <h1>{{ quiz.title }}</h1>
    <!-- index is used to check with current question index -->
    <div v-for="(question, index) in quiz.questions" :key="index">
      <!-- Hide all questions, show only the one with index === to current question index -->
      <div v-show="index === questionIndex">
        <h2>{{ question.text }}</h2>    
        <ol>
          <li v-for="(response,index) in question.responses" :key="index">
            <label>
              <!-- The radio button has three new directives -->
              <!-- v-bind:value sets "value" to "true" if the response is correct -->
              <!-- v-bind:name sets "name" to question index to group answers by question -->
              <!-- v-model creates binding with userResponses -->
              <input type="radio" 
                     v-bind:value="response.correct" 
                     v-bind:name="index" 
                     v-model="userResponses[index]"> {{response.text}}
            </label>
          </li>
        </ol>
        <!-- The two navigation buttons -->
        <!-- Note: prev is hidden on first question -->
        <button v-if="questionIndex > 0" v-on:click="prev">
          prev
        </button>
        <button v-on:click="next">
          next
        </button>
      </div>
    </div>
    <div v-show="questionIndex === quiz.questions.length">
      <h2>
      Quiz finished
    </h2>
      <p>
        Total score: {{ score() }} / {{ quiz.questions.length }}
      </p>
    </div>
</template> 
