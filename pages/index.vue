<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>Meine Pflanzen</h1>
      <v-btn
        tile
        to="/new"
        outlined
        large
        color="$dgreen"
      >
        Pflanze hinzufügen
      </v-btn>
      <v-spacer />
      <v-card
        v-for="(item,index) in items"
        :key="index"
        class="rounded-0"
        outlined
        nuxt
        :to="'/plant?id='+index"
        >
        <v-img
          :lazy-src="item.image"
          max-height="150"
          max-width="100%"
          :src="'monstera.jpg'"
        ></v-img>
        <v-card-title class="headline">
          Variegata
        </v-card-title>
        <v-card-text class="subtitle">
          <p>Monstera deliciosa</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },

  async mounted() {
    const {items} = await this.$content('items').fetch()

    this.items = items
  }
}
</script>


<style lang="scss" scoped>
  @import '~assets/css/main.scss';
  
  .v-card {
    margin-bottom: 1rem;
    border: 2px solid #224026;
  }
</style>