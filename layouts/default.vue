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
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
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
      drawer: false,
      fixed: false,
      items: [
        {
          icon: '$vuetify.icons.all',
          title: 'Meine Pflanzen',
          to: '/'
        },
        /* {
          icon: '$vuetify.icons.add',
          title: 'Pflanze hinzufügen',
          to: '/new'
        }, */
        {
          icon: '$vuetify.icons.settings',
          title: 'Einstellungen',
          to: '/settings'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Plarent'
    }
  }
}
</script>
