import {ignoreAnclas} from '../helpers/ignoreAnclas'
import mainHabits from '../views/viewHabits'

import renderHome from '../pages/Home/Home'
import {ListenerShowOptionsProfile} from '../pages/Home/utils'

import login from '../components/login/login'
import listenersLogin from '../components/login/listeners'

import renderDashboard from '../pages/Dashboard/Dashboard'
import {listenersDashboard} from '../pages/Dashboard/listenersDashboard'

import page404 from '../pages/404Page'

const router = async (hash) => {

    console.log('funcion router accionada  : ' + hash)
    console.log('isLogged log : ' + window.localStorage.getItem('isLogged'))

    let hash_ = await hash;

    if (ignoreAnclas(hash_)) return

    switch (hash_) {
        case '#/Home':
            await renderHome()
            if (window.localStorage.getItem('isLogged') === 'true') ListenerShowOptionsProfile()
            break;
        case '#/Login':
            container.innerHTML = login
            listenersLogin()
            break;
        case '#/Dashboard':
            //container.innerHTML = dashboard
            container.innerHTML = await renderDashboard(mainHabits)
            listenersDashboard()
            //renderAllHabitoCard()
            break;
        default:
            container.innerHTML = page404
            break;
    }
}

export default router;