import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'



import pageRoutes from '~pages'

console.log('pageRoutes');
console.log(pageRoutes);

// const routes = [
//     { path: '/about', component: About },
// ]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // ...routes,
        ...pageRoutes
    ]
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

