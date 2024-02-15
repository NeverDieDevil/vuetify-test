<template>
  <div>
    <v-navigation-drawer
      image="https://demos.creative-tim.com/vue-material-dashboard-pro/img/sidebar-2.jpg"
      v-model="drawer"
      :rail="rail"
      expand-on-hover
      permanent
      class="drawer"
    >
      <div class="drawer-overlay">
        <v-list>
          <v-list-item
            prepend-avatar="https://demos.creative-tim.com/vue-material-dashboard-pro/img/vue-logo.png"
            title="Akcept.eu"
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                :icon="icon"
                @click.stop="switchRail()"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            to="/dashboard"
          >
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            to="/dashboard"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-account-box"
            title="User"
            to="/User"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Settings"></v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const drawer = ref(true);
  const rail = ref(true);
  //   const client = ref([""]);
  const icon = ref("mdi-dots-vertical");
  const switchRail = () => {
    rail.value = !rail.value;
    icon.value = rail.value ? "mdi-dots-vertical" : "mdi-view-dashboard";
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
