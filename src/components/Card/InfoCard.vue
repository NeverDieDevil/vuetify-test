<template>
  <base-card :color="color ? color : 'primary'" :title="title" :icon="icon">
    <v-card-text>
      <slot>{{ text }}</slot>
    </v-card-text>
    <v-card-actions v-if="btnText" class="pt-10">
      <v-btn :to="btnPath">
        {{ btnText }}
      </v-btn>
    </v-card-actions>
  </base-card>
</template>

<script setup>
  import BaseCard from "./BaseCard.vue";
  const props = defineProps([
    "title",
    "icon",
    "btnText",
    "text",
    "color",
    "btnPath",
  ]);
</script>

<style lang="scss" scoped></style>
