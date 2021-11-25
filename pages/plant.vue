<template>
  <v-row>
    <v-col>
      <v-img
        :lazy-src="item.image"
        max-height="100%"
        max-width="100%"
        :src="item.image"
        :alt="item.image"
      ></v-img>
      <v-spacer />
      <h1 class="headline">
        {{item.name}}
      </h1>
      <p class="subtitle">{{item.scientificName}}</p>
      <v-list
        disabled>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'tint']" height="1.5rem" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
               <template v-if="item.watering">
                {{ item.watering.amount }}x pro {{ item.watering.interval }}
               </template>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'glass-whiskey']" width="1.5rem" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              {{item.substrate}}
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'compass']" width="1.5rem" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              {{item.place}}
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'history']" width="1.5rem" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content>
              {{item.bought}}
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'sticky-note']" width="1.5rem" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content
            class="italic">
              {{item.personalNote}}
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <v-list-item>
            <v-list-item-icon>
              <font-awesome-icon :icon="['fal', 'ruler']" height="1.5rem" color="$dgreen" />
            </v-list-item-icon>
            <v-list-item-content> -->
              <v-expansion-panels
                accordion
              >
                <v-expansion-panel
                    v-for="(growth,i) in 1"
                    :key="i"
                  >
                  <v-expansion-panel-header>
                    <template v-if="item.growth">
                      <v-list-item>
                        <v-list-item-icon>
                          <font-awesome-icon :icon="['fal', 'ruler-vertical']" height="1.5rem" color="$dgreen" />
                        </v-list-item-icon>
                        <v-list-item-content
                        class="growthtitle">
                          {{ item.growth[0].height }}cm <span class="lightgrey"> {{ item.growth[0].date }}</span>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <template v-if="item.growth">
                      <v-data-table
                        hide-default-header
                        hide-default-footer
                        class="elevation-0">
                        

                        {{ item.growth[1].height }}cm <span class="lightgrey"> {{ item.growth[1].date }}</span>
                      </v-data-table>
                    </template>
                   
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            <!-- </v-list-item-content>
          </v-list-item> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  asyncData({query}) {
    const index = query.id

    return {index}
  },

  data() {
    return {
      item: {}
    }
  },

  async mounted() {
    const item = await this.$content('items').fetch().then(res => {
      return res.items[parseInt(this.index)]
    })

    this.item = item

    // console.log(item)
  },
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/main.scss';
</style>