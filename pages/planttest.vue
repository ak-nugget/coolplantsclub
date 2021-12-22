<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
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
      cols="12"
      sm="6"
    >
      <v-col 
      
      cols="12"
      sm="6"
      
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
      
      cols="12"
      sm="6"
      
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
      
      <!-- BEARBEITEN -->
      <!-- <v-col
          cols="12"
          sm="6"
        >
          <v-btn
            tile
            outlined
            large
            color="$dgreen"
            @click="editPlant = !editPlant"
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
      </v-col> -->
    </v-col>
  </v-row>
  <!-- <v-row v-else-if="editPlant">
    <v-col cols="12" sm="8" md="6">
      <h1>
        Pflanze bearbeiten
      </h1>
      <v-text-field
        v-model="newItem.name"
        label="Name"
        :rules="rules"
        outlined
        color="#5c7358"
      ></v-text-field>
      <v-text-field
        v-model="newItem.scientificName"
        label="Wissenschaftlicher Name"
        outlined
        color="#5c7358"
      ></v-text-field>
      <v-spacer />
      <h2 class="headline">
        Pflege
      </h2>
      <v-spacer />
      <p class="subtitle">Wie oft möchtest du die Pflanze gießen?</p>
      <v-row>
        <v-col
          cols="6">
          <v-text-field
            v-model="newItem.watering.amount"
            type="number"
            label="Häufigkeit"
            outlined
            suffix="Mal"
            color="#5c7358"
            ></v-text-field>
        </v-col>
        <v-col
        cols="6">    
          <v-select
            v-model="newItem.watering.interval"
            :items="interval"
            label="Zeitraum"
            outlined
            prefix="pro "
            color="#5c7358"
          ></v-select>
        </v-col>
      </v-row>
      
      <p class="subtitle">Wie oft möchtest du die Pflanze düngen?</p>
      <v-row>
        <v-col>
          <v-text-field
            v-model="newItem.fertilize"
            type="number"
            label="Häufigkeit"
            outlined
            prefix="Alle"
            suffix="Wochen"
            color="#5c7358"
            ></v-text-field>
        </v-col>
      </v-row>
      <p class="subtitle">
        Möchtest du an die Pflege erinnert werden?
      </p>
      <v-checkbox
        v-model="newItem.watrem"
        label="Gießen"
        ></v-checkbox>
      <v-checkbox
        v-model="newItem.ferrem"
        label="Düngen"
        class="fertcheck"
        ></v-checkbox>

      <v-spacer />
      <v-spacer />
      <h2 class="headline">
        Informationen
      </h2>
      <v-spacer />
      <v-text-field
        v-model="newItem.substrate"
        label="Substrat"
        outlined
        color="#5c7358"
      ></v-text-field>
      <v-select
        v-model="newItem.location"
        :items="location"
        label="Standort"
        outlined
        color="#5c7358"
      ></v-select>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
      <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="newItem.bought"
            label="Gekauft am"
            class="boughtpicker"
            prepend-icon="$vuetify.icons.calendar"
            readonly
            v-bind="attrs"
            color="#5c7358"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="newItem.bought"
          no-title
          scrollable
          
          color="#5c7358"
          locale="de-de"
          first-day-of-week="1"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="#5c7358"
            @click="menu = false"
          >
            Abbrechen
          </v-btn>
          <v-btn
            text
            color="#5c7358"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-textarea
        v-model="newItem.personalNote"
        outlined
        name="input-7-4"
        label="Persönliche Notiz"
        color="#5c7358"
        ></v-textarea>
      <v-btn
        tile
        outlined
        large
        color="$dgreen"
        @click="editPlant = !editPlant"
        >
        Speichern
      </v-btn>
    </v-col>
  </v-row> -->
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