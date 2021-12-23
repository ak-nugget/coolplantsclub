<template>
  <v-row>
    <v-col
      cols="12"
      sm="12"
      md="6"
      lg="6"
      xl="6"
     >
      <v-carousel
        hide-delimiters
        height="auto">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <v-spacer />
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="6"
      lg="6"
      xl="4"
      >
      <h1 class="headline">
        Monstera 1
      </h1>
      <p class="subtitle">
        Monstera deliciosa (ugs. Fensterblatt)
      </p>
      <v-spacer />
      <!-- PFLEGE -->
      <!-- <v-col 
        sm="12"
        md="12"
        lg="6"
        class="no-pad"
        > -->
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
      <!-- </v-col> -->
      <v-spacer />
      <!-- INFORMATIONEN -->
      <!-- <v-col
        sm="12"
        md="12"
        lg="6"
        class="no-pad"
        > -->
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
                  
                  :headers="headers"
                  :items="growth"
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
        <v-btn
          tile
          outlined
          large
          color="$dgreen"
          
          >
          Pflanze bearbeiten
        </v-btn>
            
        <v-spacer />
          
        <v-btn
          tile
          plain
          
          large
          color="$dgreen"
          >
          Pflanze löschen
        </v-btn>
          
      <!-- </v-col> -->
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


  export default {
    data () {
      return {
        items: [
          {
            src: 'monstera.jpg',
          },
          {
            src: 'philo.jpg',
          },
          {
            src: 'jalapeno.jpg',
          },
        ],
        headers: [
          {
            text: 'Größe',
            align: 'start',
            sortable: false,
            value: 'height',
          },
          {
            text: 'Datum',
            value: 'date',
          }
        ],
        growth: [
          {
            height: '40 cm',
            date: '01.06.2021',
          },
          {
            height: '15 cm',
            date: '31.02.2020'
          }
        ]
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '~assets/css/main.scss';

  .no-pad {
    padding: 0;
  }
</style>