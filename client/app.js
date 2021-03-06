import router from './router/router'

class App{

    constructor(components,router) {

        // handle of the change the page when hash change
        this.router = router

        // global state of the applicaction
        this.state = {

        }

        //local variables
        localStorage.setItem('isLogged', 'false')
        localStorage.setItem('currentPage', '/')

    }

    initConfiguration(){

        window.location.hash = '/'

        const locationHash = () => {
            window.location.hash = '/'
            router(window.location.hash)
        }

        window.onloadstart = locationHash

        window.addEventListener('hashchange', (e) => {
            localStorage.setItem('currentPage', window.location.hash)
            this.router.routing(window.location.hash)
        })

    }

    run(){
        
        this.initConfiguration()

    }

}

const aplication = new App([],router)

aplication.run()