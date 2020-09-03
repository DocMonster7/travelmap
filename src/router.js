import vue from 'vue'
import router from 'vue-router'
import Home from './components/home.vue'
import Profile from './components/menu.vue'
import Search from './components/search.vue'
import Login from './components/login.vue'
import About from './components/about.vue'
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
                component: Login
            },
            {
                path: '/profile',
                component: Profile
            },
            {
                path: '/search',
                component: Search
            },
            {
                path: '/about',
                component: About
            }


        ]
    })
export default route