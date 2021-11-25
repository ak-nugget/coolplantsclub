/* import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTint } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTint)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
}) */



import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import { faPencilAlt, faPlus, faTrashAlt, faTimes, faMinus } from '@fortawesome/pro-regular-svg-icons'
import { faChevronDown, faLeaf, faCheeseSwiss, faEuroSign, faChevronRight, faUndo, faInfoCircle, faExclamationTriangle, faEye, faEyeSlash, faCheckSquare, faSquare, faArrowLeft, faBars } from '@fortawesome/pro-solid-svg-icons'
import { faSignOut, faUserCog, faCircle } from '@fortawesome/pro-duotone-svg-icons' */
import { faTint, faGlassWhiskey, faCompass, faHistory, faStickyNote, faRulerVertical } from '@fortawesome/pro-light-svg-icons'

config.autoAddCss = false

library.add(faTint, faGlassWhiskey, faCompass, faHistory, faStickyNote, faRulerVertical)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
