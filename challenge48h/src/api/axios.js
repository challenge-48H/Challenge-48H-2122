import axios from "axios";
import api from "axios";

export default {
  async getMovieName() {
    let test = axios.get("https://swapi.dev/api/films/1");
    console.log(test);
  },
};
