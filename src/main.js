import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

app
    .use(VueFullPage)
    .use(router)
    .mount('#app')
