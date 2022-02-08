<script setup> 
    // On crée un objet questionnaire avec un titre et deux questions
    // Une question a une ou plusieurs réponses, et une ou plusieurs sont valides.
import {ref} from "vue"
let quiz = {
    title: 'Mon questionnaire',
    questions: [
        {
        text: "Who is luke skywalker's father ?",
        responses: [
            {text: 'Anakin', correct: true}, 
            {text: 'Dark Vador', correct: true}, 
            {text: 'Obi-wan'},
            {text: 'loic'}
        ]
        }, {
        text: "What happened to Anakin Skywalker during the battle with Count Dooku?",
        responses: [
            {text: 'He lost his right forearm', correct: true}, 
            {text: 'He lost his left leg'}, 
            {text: 'He lost his knee'},
            {text: 'He lost'},
        ]
        },           {
        text: "What is Chewbacca's weapon of choice?",
        responses: [
            {text: 'Blaster rifle'}, 
            {text: 'Laser sword'}, 
            {text: 'Metal Club'},
            {text: 'Bowcaster', correct: true},
        ]
        }, {
        text: "How many Stars are built by the Empire?",
        responses: [
            {text: 'One', correct: true}, 
            {text: 'Two'}, 
            {text: 'Three'}, 
            {text: 'Four'},
        ]
        }, {
        text: "What was the title of the first Star Wars film?",
        responses: [
            {text: 'Adventures of Luke Starkiller'}, 
            {text: 'a New Hope', correct: true}, 
            {text: 'The adventures of the Jedi'}, 
            {text: 'Space battles'},
        ]
        }, {
        text: "In which episode does Darth Vader say the famous 'I am your father'?",
        responses: [
            {text: 'The IV, "A new hope"'}, 
            {text: 'The V, "The Empire Strikes Back"', correct: true}, 
            {text: 'The VI, "Return of the Jedi"'}, 
        ]
        }, {
        text: "What is the chronological order of the 'Star Wars' saga?",
        responses: [
            {text: "The story begins in episode I and ends in VI ?", correct: true},
            {text: "L'histoire se déroule dans l'ordre suivant : épisode IV, puis V et VI pour finir sur les I, II et III"},
            {text: "Les aventures évoluent dans l'ordre IV, V, I, II, III puis VI ? "}
        ]
        }, {
        text: "How many years separate the theatrical release of Episode IV from Episode III ?",
        responses: [
            {text: 'twenty-six years'},
            {text: 'twenty-nine years'},
            {text: 'twenty-heigt years', correct: true},  
            {text: 'forty-nine years'} 
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