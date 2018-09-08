<template>
  <div id="app">
    <div>
      <div v-for="p in dogs" :key="p.id">
          <div>{{ p.name }}</div>
          <div><span @click=removeDog(p.id)>X</span></div>
      </div>
    </div>
    
    <form @submit.prevent>
      <input v-model="newDog.name" name="dog"
        v-validate="'required|min:3'" placeholder="Add dog">
      <p>Dog is: {{ newDog.name }}</p>
      <button type="submit"  @click="onSubmit()">Add dog</button>
      <button v-on:click="removeLast()">Remove last item</button>
      <div v-show="errors.has('dog')">  {{ errors.first('dog') }}</div>
    </form>
    
  </div>
</template>

<script>
import uuid from "uuid/v4";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      dogName: "",
      dogs: [
        {
          id: 0,
          name: "Labrador"
        },
        {
          id: 1,
          name: "Husky"
        }
      ],
      newDog: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.dogs.push({
          id: uuid(),
          ...this.newDog
        });
        this.newDog.name = "";
        this.$validator.reset();
      });
    },
    removeLast() {
      this.dogs.pop();
    },
    removeDog(id) {
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
