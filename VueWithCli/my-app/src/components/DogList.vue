<template>
    <div>
      <div v-for="p in dogs" :key="p.id">
          <DogListItem :dog="p" @remove-dog="removeDog"></DogListItem>
      </div>
    </div>
</template>

<script>
import DogListItem from "./DogListItem.vue";

export default {
  name: "DogList",
  components: {
    DogListItem
  },
  props: {
    dogs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    removeDog(id) {
      console.log("list" + id);
      this.$emit("remove-dog", id);
    }
  }
};
</script>

<style scoped>
</style>