<template>
  <base-card
    :color="status ? 'success' : 'warning'"
    :title="title"
    :icon="icon"
  >
    <v-card-text>
      <slot></slot>
    </v-card-text>
    <v-card-actions v-if="!status">
      <v-btn>Działaj</v-btn>
    </v-card-actions>
  </base-card>
</template>

<script setup>
  import BaseCard from "./BaseCard.vue";
  const props = defineProps(["title", "icon", "status"]);
</script>

<style lang="scss" scoped></style>
