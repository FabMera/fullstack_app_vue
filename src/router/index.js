import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import store from '../store/index.js'
const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView,
        meta: {
            requiresAuth: false,
            showNavbar: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue'),
        meta: {
            requiresAuth: false,
            showNavbar: false
        }
    },
    {
        path: '/tareas',
        name: 'tareas',
        component: () => import('../views/TareasView.vue'),
        meta: {
            requiresAuth: true,
            showNavbar: true
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.usuarios.isAuthenticated) {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        next();
    }
})
export default router
