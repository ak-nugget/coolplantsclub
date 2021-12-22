<template>
  <v-row>
    <v-col>
      <h1 class="headline">
        Neue Pflanze hinzufügen
      </h1>
      <v-spacer />
      <v-file-input
        accept="image/png, image/jpeg, image/jpg"
        multiple
        outlined
        placeholder="Die schönsten Bilder deiner Pflanze"
        color="#5c7358"
      >
      </v-file-input>
      <v-text-field
        label="Name"
        :rules="[rules.required, rules.length]"
        outlined
        color="#5c7358"
      ></v-text-field>
      <v-text-field
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
            type="number"
            label="Häufigkeit"
            outlined
            prefix="Alle"
            suffix="Wochen"
            color="#5c7358"
            ></v-text-field>
        </v-col>
      </v-row>

      
      <p class="subtitle">Möchtest du an die Pflege erinnert werden?</p>
          <v-checkbox
            label="Gießen"
            color="#5c7358"
            ></v-checkbox>
          <v-checkbox
            label="Düngen"
            color="#5c7358"
            class="fertcheck"
            ></v-checkbox>
        
      <v-spacer />
      <v-spacer />
      <h2 class="headline">
        Informationen
      </h2>
      <v-spacer />
      <v-text-field
        label="Substrat"
        outlined
        color="#5c7358"
      ></v-text-field>
      <v-select
        :items="location"
        label="Standort"
        outlined
        color="#5c7358"
      ></v-select>
      <v-menu
        ref="menu"

        :close-on-content-click="false"
        
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
      <template #activator="{ on, attrs }">
          <v-text-field
            
            label="Gekauft am"
            class="boughtpicker"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            color="#5c7358"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          
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
          >
            Abbrechen
          </v-btn>
          <v-btn
            text
            color="#5c7358"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-textarea
          outlined
          name="input-7-4"
          label="Persönliche Notiz"
          color="#5c7358"
        ></v-textarea>
    <v-spacer />
    <v-btn
        tile
        
        outlined
        large
        color="$dgreen"
      >
        Pflanze speichern
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  

  data: () => ({
    interval: ['Tag', 'Woche', 'Monat', 'Jahr'],
    location: ['Sonnig', 'Halb-schattig', 'Schattig', 'Garten', 'Wintergarten', 'Draußen'],
    rules: {
      required: value => !!value || 'Erforderlich',
      length: value => (value && value.lenght >= 1),
    }
  }),
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/main.scss';
</style>