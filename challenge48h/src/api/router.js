import { createRouter, createWebHistory } from "vue-router"
import quiz from "../components/quiz.vue"
import Acceuil from "../components/Acceuil.vue"


export default createRouter({
        history : createWebHistory(),
        routes : [
            {
                path : "/",
                name : "Acceuil",
                component : Acceuil,
            },
            {
                path : "/quiz",
                name : "Quiz",
                component : quiz,
            }
        ]
    })
