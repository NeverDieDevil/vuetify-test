<template>
  <v-card
    :min-height="baseCardProperties.height"
    :title="title"
    :prepend-icon="icon"
    :color="type === `warning` ? 'red-darken-2' : 'blue-lighten-4'"
    hover
  >
    <v-card-text>
      {{ text }}
    </v-card-text>
    <v-card-action v-if="buttonText">
      <v-card-text>
        <v-btn>{{ buttonText }}</v-btn>
      </v-card-text>
    </v-card-action>
  </v-card>
</template>

<script setup>
  const props = defineProps([
    "type",
    "title",
    "subtitle",
    "text",
    "icon",
    "buttonText",
  ]);
  const baseCardProperties = {
    height: 150,
  };
</script>

<style lang="scss" scoped></style>
