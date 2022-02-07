import axios from "axios";
import api from "axios";
 
export default {
  async getMovieName() {
    let test = axios.get("https://swapi.dev/api/films/",
    {
        headers:{
            "content-type": "application/json"
        }
    });
    return test;
    },
    async getPlanetData(){
    let planet = axios.get("https://swapi.dev/api/planets/",
        {
            headers:{
            "content-type": "application/json"
        }
    });
    return planet;
    },
    async getPersoData(){
    let perso = axios.get("https://swapi.dev/api/people/",
    {
        headers:{
        "content-type": "application/json"
    }
    });
    return perso;
    }
}