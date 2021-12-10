import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  icons: {
    values: {
      watering: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fal', 'tint']
        }
      },
      substrate: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fal', 'glass-whiskey']
        }
      },
      place: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fal', 'compass']
        }
      },
      bought: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fal', 'history']
        }
      },
      note: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fal', 'sticky-note']
        }
      },
      growth: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fal', 'ruler-vertical']
        }
      }
    }
  }
}