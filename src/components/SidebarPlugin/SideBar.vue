<template>
  <div>
    <v-navigation-drawer
      image="https://demos.creative-tim.com/vue-material-dashboard-pro/img/sidebar-2.jpg"
      v-model="drawer"
      :rail="rail"
      expand-on-hover
      permanent
      class="drawer"
      rail-width="80"
      width="260"
    >
      <div class="drawer-overlay">
        <v-list>
          <v-list-item
            class="ml-3"
            prepend-avatar="https://demos.creative-tim.com/vue-material-dashboard-pro/img/vue-logo.png"
            title="Tururu"
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                :icon="mainIcon"
                @click.stop="switchRail()"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <SidebarItem v-for="listItem in listItems" :item="listItem" />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
  import SidebarItem from "./SidebarItem.vue";
  const listItems = [
    {
      icon: "mdi-view-dashboard",
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "mdi-account-box",
      title: "User",
      link: "/User",
    },
    {
      icon: "mdi-gavel",
      title: "Settings",
      link: "/somewhere",
    },
  ];
  import { ref } from "vue";
  const drawer = ref(true);
  const rail = ref(true);
  const mainIcon = ref("mdi-pin-off");
  const switchRail = () => {
    rail.value = !rail.value;
    mainIcon.value = rail.value ? "mdi-pin-off" : "mdi-pin";
  };
</script>

<style lang="scss" scoped>
  .drawer-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .drawer {
    color: #fff;
  }
</style>
