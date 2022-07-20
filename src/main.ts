import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'



import pageRoutes from '~pages'

console.log('pageRoutes');
console.log(pageRoutes);

const routes = [
    { path: '/', redirect: '/dashboard' }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...routes,
        ...pageRoutes,

        // 404
    ]
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

