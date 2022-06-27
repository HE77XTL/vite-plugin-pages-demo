import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import About from './About.vue'
import Home from './Home.vue'

const routes = [
    { path: '/about', component: About },
    { path: '/home', component: Home },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

const app = createApp(App)
app.use(router)
app.mount('#app')

