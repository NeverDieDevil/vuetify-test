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
      <v-col sm="12" md="3">
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
        md="3"
      >
        <info-card
          v-if="info.type === 'info'"
          :title="info.title"
          :icon="info.icon"
          :btnText="info.btnText"
          >{{ info.text }}</info-card
        >
      </v-col>

      <v-col sm="12" md="4">
        <info-card title="Status Twojej prezentacji" icon="mdi-magnify">
          <p class="mb-3">Poniższe elementy powinny zostać uzupełnione</p>
          <div class="d-flex flex-column pa-3">
            <div class="d-flex justify-space-between pa-1 bg-orange-darken-1">
              <div class="d-flex mb-2">
                <v-icon class="mr-2">mdi-lock</v-icon>
                <p>Zdjęcia obiektu</p>
              </div>
              <v-icon>mdi-exclamation-thick</v-icon>
            </div>
            <div class="d-flex justify-space-between pa-1 bg-orange-darken-1">
              <div class="d-flex mb-2">
                <v-icon class="mr-2">mdi-lock</v-icon>
                <p>Opis obiektu</p>
              </div>
              <v-icon>mdi-exclamation-thick</v-icon>
            </div>
            <div class="d-flex justify-space-between pa-1 bg-green">
              <div class="d-flex mb-2">
                <v-icon class="mr-2">mdi-lock</v-icon>
                <p>Cennik obiektu</p>
              </div>
              <v-icon>mdi-check</v-icon>
            </div>
            <div class="d-flex justify-space-between pa-1 bg-orange-darken-1">
              <div class="d-flex mb-2">
                <v-icon class="mr-2">mdi-lock</v-icon>
                <p>Udogodnienia obiektu</p>
              </div>
              <v-icon>mdi-exclamation-thick</v-icon>
            </div>
          </div>
        </info-card>
      </v-col>
      <v-col sm="12" md="5">
        <info-card
          title="Powiadomienia"
          icon="mdi-magnify"
          btnText="Przejdź do płatności"
          color="warning"
        >
          <div class="d-flex align-center">
            <v-icon class="mr-3">mdi-magnify</v-icon>
            <div>
              <p>Przypominamy o nie opłaconej proformie nr <b>129/2/2024</b></p>
              <div class="d-flex justify-space-between">
                <p>Wartość: 659,50 brutto</p>
                <p>Termin: 2024-02-13</p>
              </div>
            </div>
          </div>
        </info-card>
      </v-col>
      <v-col
        v-for="info in infos.filter((item) => item.type === 'data')"
        sm="12"
        md="4"
      >
        <info-card
          :title="info.title"
          :icon="info.icon"
          :btnText="info.btnText"
          :btnPath="info.btnPath"
        >
          <p>{{ info.text[0] }}</p>
          <p>{{ info.text[1] }}</p>
          <p>{{ info.text[2] }}</p>
        </info-card>
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
      name: "cart",
      type: "info",
      icon: "mdi-lock",
      title: "Twój koszyk",
      text: "Masz 5 pozycji w koszyku",
      btnText: "Koszyk",
    },
    {
      index: Math.random(),
      name: "data",
      type: "data",
      icon: "mdi-lock",
      title: "Twoje Dane",
      text: [
        "Nazwa Obiektu: Przykładowy Obiekt Michał",
        "Adres email: michal.obszanski@akcept.eu",
        "Telefon główny: +48 624 666 125",
      ],
      btnText: "Przejdź do zmiany danych",
      btnPath: "/userdetailsform",
    },
  ];
</script>

<style lang="scss" scoped></style>
