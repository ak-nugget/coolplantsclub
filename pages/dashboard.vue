<template>
  <v-row align="center">
    <v-col cols="12">
      <h1>Meine Pflanzen</h1>
      <v-row
      justify="space-between">
        <v-col>
          <v-btn
            tile
            to="/new"
            outlined
            large
            color="$dgreen"
          >
            Pflanze hinzufügen
          </v-btn>
        </v-col>
        
        <v-col>
          <v-select
            class="sort"
            :items="items"
            align-self="end"
            label="Sortierung"
            color="#5c7358"
            width="200"
          ></v-select>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer />
    <v-col sm="6" md="4" lg="4">
      <v-card
        class="rounded-0"
        outlined
        nuxt
        to="/planttest"
        >
        <v-img
          :lazy-src="'monstera.jpg'"

          max-width="100%"
          aspect-ratio="2"
          :src="'monstera.jpg'"
        ></v-img>
        <v-card-title class="headline">
          Mo. Variegata
        </v-card-title>
        <v-card-text class="subtitle">
          <p>Monstera deliciosa</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col sm="6" md="4" lg="4">
      <v-card
        class="rounded-0"
        outlined
        nuxt
        >
        <v-img
          :lazy-src="'philo.jpg'"

          max-width="100%"
          aspect-ratio="2"
          :src="'philo.jpg'"
        ></v-img>
        <v-card-title class="headline">
          2. Pflanze
        </v-card-title>
        <v-card-text class="subtitle">
          <p>Philodendron verrucosum</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col sm="6" md="4" lg="4">
      <v-card
        class="rounded-0"
        outlined
        nuxt
        >
        <v-img
          :lazy-src="'jalapeno.jpg'"
          
          max-width="100%"
          aspect-ratio="2"
          :src="'jalapeno.jpg'"
        ></v-img>
        <v-card-title class="headline">
          3. Pflanze
        </v-card-title>
        <v-card-text class="subtitle">
          <p>Philodendron verrucosum</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
      items: ['Alphabetisch', 'Kaufdatum'],
    }),
}
</script>


<style lang="scss" scoped>
  @import '~assets/css/main.scss';
  
  .v-card {
    margin-bottom: 1rem;
    border: 2px solid #224026;
  }

  .sort {
    max-width: 220px;
    padding-top: 8px;
    margin-left: auto;
  }
</style>