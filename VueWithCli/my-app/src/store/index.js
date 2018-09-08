import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";
import uuid from "uuid/v4";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: []
  },
  mutations: {
    addDog(state, payload) {
      state.dogs.push(payload.dog);
    },
    removeDog(state, payload) {
      let dogToRemove = state.dogs.filter(function(dog) {
        return dog.id == payload.id;
      })[0];
      let dogToRemoveIndex = state.dogs.indexOf(dogToRemove);
      state.dogs.splice(dogToRemoveIndex, 1);
    },
    fetchDogs(state, payload) {
      state.dogs = payload.dogs;
    }
  },
  actions: {
    addDog(store, payload) {
      console.log(payload);
      store.commit({
        type: "addDog",
        dog: payload
      });
    },
    removeDog(store, payload) {
      store.commit({
        type: "removeDog",
        dog: payload
      });
    },
    async fetchDogs(store, payload) {
      let result = await axios
        .get(
          "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
        )
        .then(res => res.data);

      let dogs = result.map(joke => ({
        name: joke.punchline,
        id: uuid()
      }));

      store.commit({
        type: "fetchDogs",
        dogs: dogs
      });
    }
  },

  plugins: [createLogger()]
});
