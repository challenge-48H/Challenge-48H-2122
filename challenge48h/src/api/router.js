import { createRouter, createWebHistory } from "vue-router"
import Acceuil from "../components/Acceuil.vue"


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
