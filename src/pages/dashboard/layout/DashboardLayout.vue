<template>
  <div>
    <v-layout>
      <side-bar></side-bar>
      <v-app-bar prominent class="bg-deep-purple" light>
        <v-toolbar-title>Akcept.eu Panel Klienta</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main
        class="d-flex align-center justify-center"
        style="min-height: 100vh"
      >
        <router-view></router-view>
      </v-main>
    </v-layout>
  </div>
</template>

<script setup>
  import SideBar from "../../../components/SidebarPlugin/SideBar.vue";
</script>

<style lang="scss" scoped></style>
