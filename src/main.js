import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {router} from './router/router';
import {axiosApi} from "@/axios";

Vue.config.productionTip = false

Vue.prototype.$axios = axiosApi

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
