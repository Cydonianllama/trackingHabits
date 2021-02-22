import router from './router/router'

const app = () => {

    //localStorage para pruebas 
    localStorage.setItem('isLogged', 'false')
    window.location.hash = '/Home'
    const locationHash = () => {
        window.location.hash = '/Home'
        router(window.location.hash)
    }

    window.onloadstart = locationHash

    window.addEventListener('load', (e) => {
        console.log(window.location.hash)
        router(window.location.hash)
    })

    window.addEventListener('hashchange', (e) => {
        console.log(window.location.hash)
        router(window.location.hash)
    })

}

app()