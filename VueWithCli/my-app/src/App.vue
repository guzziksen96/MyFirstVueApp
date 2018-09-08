<template>
  <div id="app">
    <DogList :dogs="dogs" @remove-dog="removeDog"></DogList>
    <AddDogForm @add-dog="onSubmit"></AddDogForm>
    
  </div>
</template>

<script>
import DogList from "./components/DogList.vue";
import AddDogForm from "./components/AddDogForm.vue";

export default {
  name: "app",
  components: {
    DogList,
    AddDogForm
  },
  data() {
    return {
      dogs: [
        {
          id: 0,
          name: "Labrador"
        },
        {
          id: 1,
          name: "Husky"
        }
      ]
    };
  },
  methods: {
    onSubmit(dog) {
      this.dogs.push(dog);
    },
    removeLast() {
      this.dogs.pop();
    },
    removeDog(id) {
      console.log("app" + id);
      let dogToRemove = this.dogs.filter(function(dog) {
        return dog.id == id;
      })[0];
      let dogToRemoveIndex = this.dogs.indexOf(dogToRemove);

      this.dogs.splice(dogToRemoveIndex, 1);
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
