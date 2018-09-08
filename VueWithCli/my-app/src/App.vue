<template>
  <div id="app">
    <DogList :dogs="dogs" @remove-dog="removeDog"></DogList>
    <AddDogForm @add-dog="onSubmit"></AddDogForm>
    
  </div>
</template>

<script>
import DogList from "./components/DogList.vue";
import AddDogForm from "./components/AddDogForm.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    DogList,
    AddDogForm
  },
  created() {
    this.$store.dispatch("fetchDogs");
  },
  computed: {
    dogs() {
      return this.$store.state.dogs;
    }
  },
  methods: {
    onSubmit(dog) {
      this.$store.dispatch("addDog", dog);
    },
    removeDog(id) {
      this.$store.dispatch("removeDog", id);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
