<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">  
      <v-img
        :lazy-src="'cpc_logo.svg'"
        max-height="120"
        max-width="150"
        :src="'cpc_logo.svg'"
      ></v-img>
      <v-spacer />
      <v-spacer />
      <h1>Login</h1>
      <v-spacer />
      <v-text-field
        label="E-Mail-Adresse"
        outlined
        color="#5c7358"
      ></v-text-field>

      <v-text-field
        :rules="[]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-2"
        label="Passwort"
        class="input-group--focused"
        outlined
        color="#5c7358"
        
      >
        <template #append>
          <v-btn
            depressed
            icon
            @click="show1 = !show1"
          >
            <FontAwesomeIcon :icon="show1 ? ['fal', 'eye'] : ['fal', 'eye-slash']" />
          </v-btn>
        </template>
      </v-text-field>

      <v-btn
        to="/dashboard"
        tile
        outlined
        large
        color="$dgreen"
      >
        Einloggen
      </v-btn>
      <v-spacer />
      <v-btn
        
        to="/register"
        depressed
        medium
        color="$dgreen"
      >
        Ich habe noch keinen Account
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'login',
  data () {
    return {
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
}

</script>


<style lang="scss" scoped>
  @import '~assets/css/main.scss';
  
  .spacer {
    height: 2rem;
  }
  
  .v-btn--icon.v-size--default {
    font-size: 1.25rem;
    margin-top: -6px;
  }

  .v-card {
    margin-bottom: 1rem;
    border: 2px solid #224026;
  }
</style>