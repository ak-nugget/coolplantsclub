<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>
        Registrieren
      </h1>
      <v-spacer />
      <v-text-field
        label="E-Mail-Adresse"
        :rules="[rules.required]"
        outlined
        color="#5c7358"
      ></v-text-field>

      <v-text-field
        label="Name"
        :rules="[rules.required]"
        outlined
        color="#5c7358"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-2"
        label="Passwort"
        class="input-group--focused"
        outlined
        color="#5c7358"
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-text-field
        v-model="rePassword"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.passwordMatch]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Passwort bestätigen"
        class="input-group--focused"
        outlined
        color="#5c7358"
        @click:append="show2 = !show2"
      ></v-text-field>

      <v-btn
        tile
        
        outlined
        large
        color="$dgreen"
      >
        Registrieren
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data () {
    return {
      show1: false,
      show2: false,
      password: '',
      rePassword: '',
      rules: {
        required: value => !!value || 'Erforderlich.',
        min: v => v.length >= 8 || 'Mindestens 8 Zeichen',
        emailMatch: () => (`The email and password you entered don't match`),
        passwordMatch: () => (this.password === this.rePassword) || 'Die eingegebenen Passwörter stimmen nicht überein.',
      },
    }
  },
}

</script>


<style lang="scss" scoped>
  @import '~assets/css/main.scss';
  
  .v-card {
    margin-bottom: 1rem;
    border: 2px solid #224026;
  }
</style>