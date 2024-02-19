<template>
  <v-container>
    <v-row justify="space-between">
      <v-col v-for="item in items" cols="6">
        <base-card
          :type="item.type"
          :title="item.title"
          :subtitle="item.subtitle"
          :text="item.text"
          :icon="item.icon"
          :buttonText="item.buttonText"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import BaseCard from "../components/Card/BaseCard.vue";

  const items = [
    {
      type: "warning",
      title: "Brak zgody na marketing",
      text: "Nie pozwoliłeś nam kontaktować się z Tobą. Tracisz możliwość otrzymywania od nas atrakcyjnych propozycji  promocji.",
      icon: "mdi-lock",
      buttonText: "Przejdź do zgód",
    },
    {
      type: "info",
      title: "Koszyk",
      text: `Masz ${5} usług w koszyku`,
      icon: "mdi-account-box",
      buttonText: "Koszyk",
    },
    {
      type: "info",
      title: "Skontaktuj się z nami",
      text: "Masz pytania? ",
      icon: "mdi-account-box",
      buttonText: "Skontaktuj się",
    },
    {
      type: "info",
      title: "Twoje dane",
      text: "tu znajdują się Twoje dane",
      icon: "mdi-account-box",
    },
  ];
</script>

<style lang="scss" scoped></style>
