import {loginForm} from '../../components/loginForm/login'

class PageLogin{
    constructor(){

    }
    getTemplate(){

    }
    listeners(){
        loginForm.listeners()
    }
    render(){
        loginForm.render()
        this.listeners()
        //container.innerHTML = this.getTemplate()
    }
}

const pageLogin = new PageLogin()

export default pageLogin;