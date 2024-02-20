<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      :elevation="isHovering ? 16 : 2"
      :class="{ 'on-hover': isHovering }"
      class="mx-auto"
      v-bind="props"
      :color="color"
      min-height="200"
    >
      <v-card-item>
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>
        <v-card-title>{{ title }}</v-card-title>
      </v-card-item>
      <div class="ma-2">
        <slot></slot>
      </div>
    </v-card>
  </v-hover>
</template>

<script setup>
  const props = defineProps(["color", "title", "icon"]);
</script>

<style lang="scss" scoped>
  .card-text {
    height: 100%;
  }
</style>
