<script setup>

import {useRouter} from"vue-router";
import question from "../questionnaire.js" ;
question.question(3)
language = "Javascript" src = "../questionnaire.js"
</script>

<template>
    <div class = "centre">
        <div class = "titre_centre" id="question"></div>
    </div>
    <div class = "colonne" id = "liste ">
        <div class = "calque_rep" id = "rep1"></div>
        <div class = "calque_rep" id = "rep2"></div>
        <div class = "calque_rep" id = "rep3"></div>
        <div class = "calque_rep" id = "rep4"></div>

    </div>
</template> 

<style scoped>
    .quiz {
        border-width: 100px;
        border-style: solid;
        border-color: black;
        border : 1rem solid;    
    }
</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
