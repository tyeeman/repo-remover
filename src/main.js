import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap Setup
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// Apollo Setup
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql'
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
Vue.use(VueApollo)


Vue.config.productionTip = false

const data = {
  username: "",
  token: "425f31c38599e2c9f245bf91e2966b63f6208475",
  repos: ""
}

new Vue({
  router,
  apolloProvider,
  data,
  render: h => h(App),
}).$mount('#app')
