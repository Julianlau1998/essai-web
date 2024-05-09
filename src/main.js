import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPen, faChevronDown, faCopy, faDownload, faShareAlt } from '@fortawesome/free-solid-svg-icons'

import withUUID from "vue-uuid";

const app = createApp(App)

library.add(faUserSecret, faPen, faChevronDown, faCopy, faDownload, faShareAlt)

app.use(createPinia())
app.use(router)
app.use(withUUID)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
