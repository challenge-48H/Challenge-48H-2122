<script>
window.onload=function(){
    // On crée un objet questionnaire avec un titre et deux questions
    // Une question a une ou plusieurs réponses, et une ou plusieurs sont valides.
    var quiz = {
        title: 'Mon questionnaire',
        questions: ["Who is luke skywalker's father ?",
            {
            text: "Question 1",
            responses: ["Anakin",
                {text: 'Bonne réponse !', correct: true}, 
                {text: 'Mauvaise réponse .'}, 
            ]
            }, {
            text: "Question 2",
            responses: ["Dark Vador",
                {text: 'Bonne réponse', correct: true}, 
                {text: 'Mauvaise réponse'}, 
            ]
            },           {
            text: "Question 3",
            responses: ["Obi-wan",
                {text: 'Mauvaise réponse, dommage.'}, 
                {text: 'Bonne réponse !', correct: true}, 
            ]
            }, {
            text: "Question 4",
            responses: ["Han solo",
                {text: 'Mauvaise réponse .'}, 
                {text: 'Bonne réponse', correct: true}, 
            ]
            },
        ]
    }
    
    new Vue({
    el: '#app',
    data: { quiz: quiz }, // On attache le questionnaire à data
    })
}

</script>
<template>
    
<div id="app">
<!-- Titre du quiz -->
    <h1>{{ quiz.title }}</h1>
    <!-- Questions: on affiche une div pour chaque question -->
    <div v-for="question of quiz.questions">
    <h2>{{ question.text }}</h2>
<!-- Responses: on affiche une balise li pour chaque réponse possible -->
    <ol>
        <li v-for="response of question.responses">
        <label>
        <input type="radio"> {{response.text}}
        </label>
        </li>
    </ol>
    </div>
</div>
</template>