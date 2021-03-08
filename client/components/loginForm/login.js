import listenersLogin from './listeners'

class LoginForm {
    constructor(){

    }
    listeners(){
        listenersLogin()
    }
    getTemplate(){
        const login =
            `
                <div class="container-form">
                
                    <div class="switch-options-forms">
                
                        <div class="switch-options-form-header">
                            <h3 class="switch-options-title">Login and Register</h3>
                            <div class="switch-options">
                                <button>login</button>
                                <span>or</span>
                                <button>register</button>
                            </div>
                        </div>
                
                        <div class="option-login">
                            <form>
                                <input type="text" placeholder="username" name="usename" />
                                <input type="password" placeholder="password" name="password" />
                            </form>
                            <button id="btn-submit-login">login</button>
                        </div>
                
                        <div class="option-register">
                
                            <label for="fullaname">Nombres completos</label>
                            <input type="text" placeholder="fullname" name="fullname" required />
                            <label for="email">Correo</label>
                            <input type="email" placeholder="your email" name="email" required />
                            <label for="username">Username</label>
                            <input type="text" placeholder="username" name="username" required />
                            <label for="password">Password</label>
                            <input type="text" placeholder="password" name="password" required />
                            <label for="password2">Confirm password</label>
                            <input type="text" placeholder="confirm password" name="password2" required>
                            <button>Register</button>
                
                        </div>
                
                    </div>
                </div>
        
            `
        return login
    }
    render(){
        let html = this.getTemplate()
        container.innerHTML = html
        this.listeners()
    }
}

export const loginForm = new LoginForm()