import {ignoreAnclas} from '../helpers/ignoreAnclas'

import homePage from '../pages/Home/Home'
import loginForm from '../components/loginForm/login'
import dashboardPage from '../pages/Dashboard/Dashboard'
import pageLogin from '../pages/PageLogin/PageLogin'
import page404 from '../pages/404Page'

const routes = [
    {
        realPath: '#/',
        path: '/',
        component: homePage
    },
    {
        realPath: '#/Login',
        path: '/login',
        component: pageLogin
    },
    {
        realPath: '#/Dashboard',
        path: '/dashboard',
        component: dashboardPage
    },
    {
        realPath : '#/404',
        path : '/404',
        component : page404
    }
]
class Router {

    async routing(hash){

        let hash_ = hash;
        let isPageFounded = false
        let indexNotFoundPage = 0

        if (ignoreAnclas(hash_)) return

        this.routes.forEach((route,index) => {
            if (route.realPath === hash_){
                history.replaceState(null, null, route.path);
                route.component.render()
                isPageFounded = true
            }
            if (route.path === '/404'){
                indexNotFoundPage = index
            }
        })

        if (!isPageFounded) {
            container.innerHTML = this.routes[indexNotFoundPage].component
            history.replaceState(null, null, this.routes[indexNotFoundPage].path)
        }
    }
    
    constructor(routes){
        // componenst in an array of page components
        this.routes = routes
    }
}



const router = new Router(routes)

export default router;