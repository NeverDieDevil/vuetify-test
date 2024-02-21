<template>
  <v-list-item
    class="ma-3"
    :prepend-icon="item.icon"
    :title="item.title"
    :to="item.link"
  >
  </v-list-item>
</template>

<script setup>
  import { defineProps } from "vue";
  const props = defineProps(["item"]);
</script>

<style lang="scss" scoped>
  .v-list-item--active {
    background-color: #4caf50;
  }
</style>
