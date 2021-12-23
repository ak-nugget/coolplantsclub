import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import { fas } from '@fortawesome/free-solid-svg-icons' */
import { faListCheck, faBookBookmark, faFaucetDrip, faSunCloud, faBellOn, faPowerOff, faLeaf, faUser, faCamera, faEye, faEyeSlash, faTint, faGlassWhiskey, faCompass, faHistory, faStickyNote, faRulerVertical } from '@fortawesome/pro-light-svg-icons'
 
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faListCheck, faBookBookmark, faFaucetDrip, faSunCloud, faBellOn, faPowerOff, faLeaf, faUser, faCamera, faEye, faEyeSlash, faTint, faGlassWhiskey, faCompass, faHistory, faStickyNote, faRulerVertical)
 
// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

