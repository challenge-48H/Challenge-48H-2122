import api from 'axios'

export default{ 
    async apiGetFilms(){
        return await api.get("https://swapi.dev/api/films",
        {
            headers:{
                "Content-Type": 'application/json' 
            }
        });
    }
}