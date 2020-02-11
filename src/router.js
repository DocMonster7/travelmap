import vue from 'vue'
import router from 'vue-router'
import Home from './components/home.vue'
import Menu from './components/menu.vue'
import Search from './components/search.vue'
import login from './components/login.vue'
vue.use(router)
let route =
    new router({
        mode: 'history',
        routes: [{
                path: '/',
                component: Home
            },
            {
                path: '/login',
                component: login
            },
            {
                path: '/menu',
                component: Menu
            },
            {
                path: '/search',
                component: Search
            }

        ]
    })
export default route