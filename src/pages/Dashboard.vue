<template>
  <v-container>
    <v-row justify="space-between">
      <v-col sm="12" md="6">
        <warning-card
          :title="infos[0].title"
          :icon="infos[0].icon"
          :status="infos[0].status"
        >
          {{
            infos[0].status
              ? "Wszystko gra, nie trzeba nic robić"
              : "Nie pozwoliłeś nam kontaktować się z Tobą. Tracisz możliwość otrzymywania od nas atracyjnych propozycji i promocji."
          }}
        </warning-card>
      </v-col>
      <v-col sm="12" md="6">
        <warning-card
          :title="infos[1].title"
          :icon="infos[1].icon"
          :status="infos[1].status"
        >
          {{
            infos[1].status
              ? "Wszystko gra, nie trzeba nic robić"
              : "Nie pozwoliłeś nam kontaktować się z Tobą. Tracisz możliwość otrzymywania od nas atracyjnych propozycji i promocji."
          }}
        </warning-card>
      </v-col>
      <v-col
        v-for="info in infos.filter((item) => item.type === 'info')"
        sm="12"
        md="6"
      >
        <info-card
          v-if="info.type === 'info'"
          :title="info.title"
          :icon="info.icon"
          :btnText="info.btnText"
          >{{ info.text }}</info-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import WarningCard from "@/components/Card/WarningCard.vue";
  import InfoCard from "@/components/Card/InfoCard.vue";
  const infos = [
    {
      index: Math.random(),
      name: "consent",
      type: "warning",
      status: false,
      icon: "mdi-lock",
      title: "Zgody na marketing",
    },
    {
      index: Math.random(),
      name: "consent",
      type: "warning",
      status: true,
      icon: "mdi-lock",
      title: "Zgody na marketing",
    },
    {
      index: Math.random(),
      name: "consent",
      type: "info",
      icon: "mdi-lock",
      title: "Twój koszyk",
      text: "Masz 5 pozycji w koszyku",

      btnText: "Koszyk",
    },
    {
      index: Math.random(),
      name: "consent",
      type: "warning",
      status: true,
      icon: "mdi-lock",
      title: "Zgody na marketing",
    },
    {
      index: Math.random(),
      name: "consent",
      type: "info",
      icon: "mdi-lock",
      title: "Twój koszyk",
      text: "Masz 5 pozycji w koszyku",
      btnText: "Koszyk",
    },
  ];
</script>

<style lang="scss" scoped></style>
