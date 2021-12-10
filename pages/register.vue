<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      
      <v-img
        :lazy-src="'cpc_logo.svg'"
        max-height="120"
        max-width="150"
        to="cpc.wsrn.dev"
        :src="'cpc_logo.svg'"
      ><a href="https://cpc.wsrn.dev"></a></v-img>
      
      <v-spacer />
      <v-spacer />

      <h1>
        Registrieren
      </h1>

      <v-spacer />
      
      <v-text-field
        
        label="E-Mail-Adresse"
        :rules="[rules.required, rules.email]"
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
        :rules="[rules.required, rules.min]"
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

      <v-text-field
        v-model="rePassword"
        :rules="[rules.required, rules.passwordMatch]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Passwort bestätigen"
        class="input-group--focused"
        outlined
        color="#5c7358"
        @click:append="show2 = !show2"
      >
        <template #append>
          <v-btn
            depressed
            icon
            @click="show2 = !show2"
          >
            <FontAwesomeIcon :icon="show2 ? ['fal', 'eye'] : ['fal', 'eye-slash']" />
          </v-btn>
        </template>
      </v-text-field>
      
      <v-btn
        tile
        outlined
        large
        color="$dgreen"
      >
        Registrieren
      </v-btn>
      
      <v-spacer />
      
      <v-btn
        to="/"
        tile
        depressed
        medium
        color="$dgreen"
      >
        Ich habe bereits einen Account
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
      show2: false,
      password: '',
      rePassword: '',
      rules: {
        required: value => !!value || 'Erforderlich.',
        min: v => v.length >= 8 || 'Mindestens 8 Zeichen',
        emailMatch: () => (`The email and password you entered don't match`),
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Ungültige E-Mail-Adresse.'},
        passwordMatch: () => (this.password === this.rePassword) || 'Die eingegebenen Passwörter stimmen nicht überein.',
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
    margin-top: -7px;
  }

  .v-card {
    margin-bottom: 1rem;
    border: 2px solid #224026;
  }
</style>