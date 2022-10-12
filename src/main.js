import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import UIComponents from '@/components/ui/index'


const app = createApp(App)

UIComponents.forEach(component => {
    app.component(component.name, component)
})

app
    .use(VueFullPage)
    .use(router)
    .mount('#app')
