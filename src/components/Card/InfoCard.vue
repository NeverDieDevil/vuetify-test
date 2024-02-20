<template>
  <base-card :color="'primary'" :title="title" :icon="icon">
    <v-card-text>
      <slot>{{ text }}</slot>
    </v-card-text>
    <v-card-actions class="pt-10">
      <v-btn>{{ btnText }}</v-btn>
    </v-card-actions>
  </base-card>
</template>

<script setup>
  import BaseCard from "./BaseCard.vue";
  const props = defineProps(["title", "icon", "btnText", "text"]);
</script>

<style lang="scss" scoped></style>
