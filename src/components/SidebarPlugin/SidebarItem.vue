<template>
  <v-list-item :prepend-icon="item.icon" :title="item.title" :to="item.link">
  </v-list-item>
</template>

<script setup>
  import { defineProps } from "vue";
  const props = defineProps(["item"]);
</script>

<style lang="scss" scoped>
  .v-list-item {
    margin: 10px 15px 0;
  }
  .v-list-item--active {
    background-color: #4caf50;
  }
</style>
