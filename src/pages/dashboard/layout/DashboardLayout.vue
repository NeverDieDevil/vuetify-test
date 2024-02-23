<template>
  <div>
    <v-app theme="light">
      <side-bar />
      <v-app-bar dark prominent>
        <v-toolbar-title>Tururu Panel Klienta</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-badge content="5" color="error">
            <v-icon>mdi-cart-variant</v-icon>
          </v-badge>
        </v-btn>
        <v-btn icon>
          <v-badge content="2" color="error">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
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
    </v-app>
  </div>
</template>

<script setup>
  import SideBar from "../../../components/SidebarPlugin/SideBar.vue";
</script>

<style lang="scss" scoped></style>
