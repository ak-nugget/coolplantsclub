<template>
  <v-row>
    <v-col
      sm="12"
      md="6"
     >
      <v-img
        :lazy-src="'monstera.jpg'"
        max-height="100%"
        max-width="100%"
        :src="'monstera.jpg'"
        :alt="'monstera.jpg'"
      ></v-img>
    </v-col>
    <v-col 
      sm="12"
      md="6"
      >
      <h1 class="headline">
        Monstera 1
      </h1>
      <p class="subtitle">
        Monstera deliciosa (ugs. Fensterblatt)
      </p>
    </v-col>
    <!-- PFLEGE -->
    <v-col 
      sm="12"
      md="6"
      >
      <h2 class="smallhead">
        Pflege
      </h2>
      <v-list
        disabled>
        <v-list-item-group>
          <v-list-item >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'faucet-drip']" width="16px" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              1x pro Woche gießen
            </v-list-item-content>
          </v-list-item>
          <v-list-item >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'tint']" height="16px" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              Alle 4 Wochen düngen
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'bell-on']" width="20px" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              Erinnerungen ans Gießen & Düngen
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
    
    <!-- INFORMATIONEN -->
    <v-col
    
    cols="12"
    sm="6">
      <h2 class="smallhead">
        Informationen
      </h2>
      <v-list
        disabled>
        <v-list-item-group>
          <v-list-item >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'glass-whiskey']" width="16px" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              Kokosfaser
            </v-list-item-content>
          </v-list-item>
          <v-list-item >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'sun-cloud']" width="20px" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              Halbschattig
            </v-list-item-content>
          </v-list-item>
          <v-list-item >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'history']" height="16px" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              Am 12. Februar 2020 gekauft
            </v-list-item-content>
          </v-list-item>
          <v-list-item >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'sticky-note']" width="14px" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content
              class="italic">
              Coole Pflanze, macht keine Probleme
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template >
        <v-expansion-panels
          
          accordion
          >
          <v-expansion-panel
            
            >
            <v-expansion-panel-header>
              
                <v-list-item>
                  <v-list-item-icon>
                    <font-awesome-icon :icon="['fal', 'ruler-vertical']" height="16px" color="$dgreen" />
                  </v-list-item-icon>
                  <v-list-item-content
                  class="growthtitle">
                    40cm groß
                  </v-list-item-content>
                </v-list-item>
              
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-data-table
                disable-filtering
                disable-sort
                item-key="height"
                hide-default-footer
                
                :headers="[{ text: 'Größe', value: 'height' }, { text: 'Datum', value: 'date' }]"
                class="elevation-1">
                <!-- <template v-slot:item.height="{ height }">
                  {{ height }} cm
                </template> -->
              </v-data-table>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
      <v-spacer />
    </v-col>
  </v-row>
  
</template>

<script>
/* export default {
  asyncData({query}) {
    const index = query.id

    return {index}
  },

  data() {
    return {
      item: {},
      newItem: {},
      editPlant: false
    }
  },
  

  async mounted() {
    const item = await this.$content('items').fetch().then(res => {
      return res.items[parseInt(this.index)]
    })

    this.item = Object.assign({}, item);

    this.newItem = Object.assign({}, item);

    // console.log(item)
  },
} */
</script>

<style lang="scss" scoped>
  @import '~assets/css/main.scss';
</style>