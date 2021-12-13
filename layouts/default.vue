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
              max-height="80"
              max-width="100"
              :src="'cpc_logo.svg'"
            ></v-img>
          </v-list-item-content>
        </v-list-item>
        <v-spacer />
        <v-list-item
          color="#224026"
          to="/dashboard"
          >
          <v-list-item-icon>
            <font-awesome-icon :icon="['fal', 'leaf']" width='1.5rem' />
          </v-list-item-icon>
          <v-list-item-content>
            Meine Pflanzen
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          color="#224026"
          to="/new"
          >
          <v-list-item-icon>
            <font-awesome-icon :icon="['fal', 'user']" width='1.5rem' />
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
            <font-awesome-icon :icon="['fal', 'power-off']" width='1.5rem' />
          </v-list-item-icon>
          <v-list-item-content>
            Logout
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list v-else>
        <v-list-item
          to="/">
          Login
        </v-list-item>
        <v-list-item
          to="/register">
          Registrieren
        </v-list-item>
      </v-list> -->
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
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      
    </v-navigation-drawer>
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
