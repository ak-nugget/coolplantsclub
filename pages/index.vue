<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>Meine Pflanzen</h1>
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
          :src="item.image"
        ></v-img>
        <v-card-title class="headline">
          {{item.name}}
        </v-card-title>
        <v-card-text class="subtitle">
          <p>{{item.scientificName}}</p>
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
  h1 {
    font-family: 'Barlow', sans-serif !important;
    text-transform: uppercase;
    margin-bottom: 1.5rem !important;
    color: #224026;
  }
  .v-card {
    margin-bottom: 1rem;
    border: 2px solid #224026;
  }
</style>