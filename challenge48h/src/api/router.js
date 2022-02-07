import { createRouter, createWebHistory } from "vue-router"
import Acceuil from "../components/Acceuil.vue"
import Especes from "../components/Especes.vue"
import Vehicule from "../components/Véhicule.vue"
import Planet from "../components/Planet.vue"
import Film from "../components/Film.vue"
import Vaisseau from "../components/Vaisseau.vue"
import Personnage from "../components/Personnage.vue"

export default createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "Acceuil",
            component : Acceuil,
        },
            {
                path : "/Planets",
                name : "Liste des planete",
                component : Planet,
            },
                {
                    path : "/Véhicule",
                    name : "liste des véhicules",
                    component : Vehicule,
                },
                    {
                        path : "/Especes",
                        name : "Liste des Espéces",
                        component : Especes,
                    },
                        {
                            path : "/Film",
                            name : "Liste des Films",
                            component : Film,
                        },
                            {
                                path : "/Vaisseau",
                                name : "Liste des Vaisseaux",
                                component : Vaisseau,
                            },
                                {
                                    path : "/Personnage",
                                    name : "Liste des Personnage",
                                    component : Personnage,
                                },
    ]
})
