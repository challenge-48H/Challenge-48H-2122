import { createRouter, createWebHistory } from "vue-router"
import quiz from "../components/quiz.vue"


export default createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "Acceuil",
            component : Acceuil,
        },
    ]
})
