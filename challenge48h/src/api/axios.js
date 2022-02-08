import axios from "axios";

export default {
  async getAllMovie() {
    let test = axios.get("https://swapi.dev/api/films", {
      headers: {
        "content-type": "application/json",
      },
    });
    return test;
  },

  async getAllPeople() {
    let arrayOfPeople = new Array();
    for (let index = 1; index <= 83; index++) {
      if (index == 17) {
        continue;
      }
      let test = await axios.get("https://swapi.dev/api/people/" + index);
      arrayOfPeople.push(test.data.name);
    }
    console.log(arrayOfPeople);
  },

  async getAllVehicles() {
    let vehicles = axios.get("https://swapi.dev/api/vehicles", {
      headers: {
        "content-type": "application/json",
      },
    });
    return vehicles;
  },

  async getStarships(index) {
    let starships = axios.get(
      "https://swapi.dev/api/starships/?page=" + index,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return starships;
  },
};