<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-img
              :lazy-src="'cpc_logo.svg'"
              width="100"
              max-width="100"
              aspect-ratio="1.25"
              :src="'cpc_logo.svg'"
              to="/dashboard"
            ></v-img>
          </v-list-item-content>
        </v-list-item>
        <v-spacer />
        <v-list-item
          color="#224026"
          to="/dashboard"
          >
          <v-list-item-icon>
            <FontAwesomeIcon 
              class="input-icon"
              :icon="['fal', 'leaf']" />
          </v-list-item-icon>
          <v-list-item-content>
            Meine Pflanzen
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          color="#224026"
          to="/"
          >
          <v-list-item-icon>
            <FontAwesomeIcon 
              class="input-icon"
              :icon="['fal', 'book-bookmark']" />
          </v-list-item-icon>
          <v-list-item-content>
            Verzeichnis
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          color="#224026"
          to="/"
          >
          <v-list-item-icon>
            <FontAwesomeIcon 
              class="input-icon"
              :icon="['fal', 'list-check']" />
          </v-list-item-icon>
          <v-list-item-content>
            Wunschliste
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          color="#224026"
          to="/new"
          >
          <v-list-item-icon>
            <FontAwesomeIcon 
              class="input-icon"
              :icon="['fal', 'user']" />
          </v-list-item-icon>
          <v-list-item-content>
            Einstellungen
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          color="#224026"
          to="/"
          >
          <v-list-item-icon>
            <FontAwesomeIcon 
              class="input-icon"
              :icon="['fal', 'power-off']" />
          </v-list-item-icon>
          <v-list-item-content>
            Logout
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
    <v-app-bar
      :clipped-right="clipped"
      fixed
      app
      flat
      color="white"
    >
      <v-app-bar-nav-icon vuetify.icons.menu @click.stop="drawer = !drawer" 
       />
      
      <v-toolbar-title>Menü</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Cool Plants Club'
    }
  }
}
</script>
