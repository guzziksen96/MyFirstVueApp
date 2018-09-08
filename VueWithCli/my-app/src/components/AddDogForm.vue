<template>
      <form @submit.prevent >
      <input v-model="newDog.name" name="dog"
        v-validate="'required|min:3'" placeholder="Add dog">
      <p>Dog is: {{ newDog.name }}</p>
      <button type="submit"  @click="onSubmit()">Add dog</button>
      <button v-on:click="removeLast()">Remove last item</button>
      <div v-show="errors.has('dog')">  {{ errors.first('dog') }}</div>
    </form>
</template>

<script>
import uuid from "uuid/v4";

export default {
  name: "AddDogForm",
  data() {
    return {
      newDog: {
        name: "",
        id: uuid()
      }
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.$emit("add-dog", this.newDog);
        this.$validator.reset();
      });
    }
  }
};
</script>
