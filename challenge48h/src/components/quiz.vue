<script setup> 
    // On crée un objet questionnaire avec un titre et deux questions
    // Une question a une ou plusieurs réponses, et une ou plusieurs sont valides.
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
            },
        ]
    }


</script>
<template>
    salut
<div id="app">
<!-- Titre du quiz -->
    <h1>{{ quiz.title }}</h1>
    <!-- Questions: on affiche une div pour chaque question -->
    <div v-for="(question,index) in quiz.questions" :key="index">
    <h2>{{ question.text }}</h2>
<!-- Responses: on affiche une balise li pour chaque réponse possible -->
    <ol>
        <li v-for="(response,index) in question.responses" :key="index">
        <label>
        <input type="radio"> {{response.text}}
        </label>
        </li>
    </ol>
    </div>
</div>
</template>