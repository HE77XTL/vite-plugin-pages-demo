import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'
import About from './About.vue'
import Home from './Home.vue'

import pageRoutes from '~pages'

const routes = [
    { path: '/about', component: About },
    { path: '/home', component: Home },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        ...pageRoutes
    ]
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

