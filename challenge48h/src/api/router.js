import { createRouter, createWebHistory } from "vue-router";
import Acceuil from "../components/Acceuil.vue";
import Especes from "../components/Especes.vue";
import Vehicule from "../components/Vehicule.vue";
import Planet from "../components/Planet.vue";
import Film from "../components/Film.vue";
import Vaisseau from "../components/Vaisseau.vue";
import Personnage from "../components/Personnage.vue";
import Quiz from "../components/Quiz.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "acceuil",
      component: Acceuil,
    },
    {
      path: "/planets",
      name: "Liste des planete",
      component: Planet,
    },
    {
      path: "/vehicule",
      name: "liste des véhicules",
      component: Vehicule,
    },
    {
      path: "/especes",
      name: "Liste des Espéces",
      component: Especes,
    },
    {
      path: "/film",
      name: "Liste des Films",
      component: Film,
    },
    {
      path: "/vaisseau",
      name: "Liste des Vaisseaux",
      component: Vaisseau,
    },
    {
      path: "/personnage",
      name: "Liste des Personnage",
      component: Personnage,
    },
    {
      path: "/quiz",
      name: "quizz",
      component: Quiz,
    },
  ],
});
