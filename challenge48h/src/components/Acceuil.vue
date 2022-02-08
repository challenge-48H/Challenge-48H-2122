<script setup>

import {useRouter} from"vue-router";
const router = useRouter();
function redirect(){
    router.push("/quiz");
}

</script>

<template>
    <h1>salut</h1>
    <button v-on:click=" redirect()">QUIZZ</button>
</template> 

<style scoped>

</style>