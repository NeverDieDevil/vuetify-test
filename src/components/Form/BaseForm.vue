<template>
  <v-form ref="form" validate-on="input" model-value>
    <v-text-field
      v-model="objectName"
      :rules="nameRules"
      label="Nazwa obiektu"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="[(v) => !!v || 'Item is required']"
      label="E-mail"
    ></v-text-field>

    <v-text-field
      v-model="phone"
      :rules="[(v) => !!v || 'Item is required']"
      label="Telefon"
    ></v-text-field>

    <v-checkbox
      value="1"
      label="Option"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      type="checkbox"
    ></v-checkbox>

    <v-btn class="me-4" type="submit" @click="validate"> Zatwierdź </v-btn>

    <v-btn @click="reset"> Wyczyść </v-btn>
  </v-form>
</template>

<script setup>
  import { ref } from "vue";
  const form = ref();
  const objectName = ref();
  const email = ref();
  const phone = ref();
  const nameRules = ref([
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ]);

  const validate = async () => {
    // const { valid } = true;
    const { valid } = await form.value.validate();

    if (valid) alert("Form is valid");
  };
  const reset = () => {
    this.$refs.form.reset();
  };
</script>

<style lang="scss" scoped></style>
