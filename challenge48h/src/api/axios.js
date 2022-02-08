import axios from "axios";
import api from "axios";
 
export default {
    async getPersoData(endUrl){
        return await api.get(`https://swapi.dev/api/people/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async getPlanetData(endUrl){
        return await api.get(`https://swapi.dev/api/planets/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async getFilmData(endUrl){
        return await api.get(`https://swapi.dev/api/films/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async getVehicleData(endUrl){
        return await api.get(`https://swapi.dev/api/vehicles/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async getVaisseauData(endUrl){
        return await api.get(`https://swapi.dev/api/starships/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
    async getEspeceData(endUrl){
        return await api.get(`https://swapi.dev/api/species/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    },
}