import Vue from 'vue'
import App from './App'
import store from "./store"
import uniIcon from './components/uni-icon.vue'


Vue.prototype.$store=store
Vue.config.productionTip = false
Vue.component('uniIcon',uniIcon)
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
