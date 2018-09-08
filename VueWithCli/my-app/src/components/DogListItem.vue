<template>
  <div>
    <div>{{ dog.name }}</div>
    <div><span @click=removeDog(dog.id)>X</span></div>
  </div>
</template>


<script>
export default {
  name: "DogListItem",
  props: {
    dog: {
      type: Object,
      default: () => {
        (name = ""), (id = -1);
      }
    }
  },
  methods: {
    removeDog(id) {
      console.log("item" + id);
      this.$emit("remove-dog", id);
    }
  }
};
</script>

<style scoped>
</style>