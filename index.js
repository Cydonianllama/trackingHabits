/*
entidades
	usuario
		username
		password
		email
	habito
		nombre de habito
		description
        tags
    seguimiento habito
        fecha de anotacion
        descripcion
        tag de seguimiento

usuario - podra crear una cuenta
usuario - tendra autenticarse para poder usar nuestro software
usuario - podra hacer log out de la aplicacion
usuario - podra crear habito
usuario - podra editar habito
usuario - podra eliminar habito o habitos

rutas
	/
	/login
	/dashboard
*/

// variables
const container = document.getElementById('container')

const home =
`
    <nav class="home-nav-main">
        <div class="logo">
        </div>
        <div class="options-home-nav-main">
            <a class = "btn-login" href = "#/Login">login</a>
        </div>
    </nav>
    <div class = "home-hero">
        here is our hero
    </div>
    <div class = "home-description">

    </div>
    <footer>
        this is our footer
    </footer>
`


/* login controllers */
const listenersLogin = () => {
    
    const formRegister = document.querySelector('.option-register')
    const btnRegister = document.getElementById('btn-register')
    const btnToLogin = document.getElementById('btn-to-login')
    const submitLoginbtn = document.getElementById('btn-submit-login')
    const value_left = '0'
    const value_left_toLogin = '100%'

    const changeToRegister = () =>{
        formRegister.style.left = value_left 
    }

    const changeToLogin = () => {
        formRegister.style.left = value_left_toLogin
    }

    const processDataLogin = () => {
        window.location.hash = '/Dashboard'
    }

    submitLoginbtn.addEventListener('click',processDataLogin)
    btnRegister.addEventListener('click',changeToRegister)
    btnToLogin.addEventListener('click',changeToLogin)

}

const login = 
`
    <div class = "container-form">
        <div class="logo-aplication">
            <h2>aplication logo</h2>
            <p>aplication description</p>
        </div>
        <div class="switch-options-forms">
            <div class="option-login">
                <form>
                    <input type="text" placeholder="username" name="usename" />
                    <input type="password" placeholder="password" name="password" />
                </form>
                <button id = "btn-submit-login" >login</button>
                <div class="form-option-register">
                    <p>no te has registrado ? <button id="btn-register">Registrarse</button> </p>
                </div>
            </div>
            <div class="option-register">
                <label for="fullaname">Nombres completos</label>
                <input type="text" placeholder="fullname" name="fullname" required/>
                <label for="email">Correo</label>
                <input type="email" placeholder="your email" name="email" required/>
                <label for="username">Username</label>
                <input type="text" placeholder="username" name="username" required/>
                <label for="password">Password</label>
                <input type="text" placeholder="password" name="password" required/>
                <label for="password2">Confirm password</label>
                <input type="text" placeholder="confirm password" name="password2" required>
                <button>Register</button>
                <div>
                    <p>tengo una cuenta <button id = "btn-to-login" >Login</button></p>
                </div>
            </div>
        </div>
    </div>

`

const anotationLog = 
`
    <div class = "anotation-log">
        <div class = "header-anotation-log">
            <span>fehca de anotacion</span>
            <span>tag de anotacion</span>
        </div>
        <div class = "description-anotation-log">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugit. Optio, reprehenderit quo? Commodi accusamus ea est dolores incidunt architecto nemo, dolorum fuga. Doloremque quisquam vero unde et, quidem fugit!</p>
        </div>
        <div class = "options-anotation-log">
            <button>edit</button>
            <button>delete</button>
        </div>
    </div>
`

const completeInfoHabito = 
`
    <div class = "completeInfoHabito">
        <h2>Titulo de habito</h2>
        <div class="completelog">
            <div class = "log-habito">
                grafico a mostrar               
            </div>
            <nav class = "navegador-completeLogHabito">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>last</button>
            </nav>
        </div>
        <nav class ="funcionalidades-anotation">
            <button>agregar</button>
        </nav>
        <div class = "anotation-logs">
            ${anotationLog}
            ${anotationLog}
            ${anotationLog}
            ${anotationLog}
        </div>
    </div>
`

const tagHabito = 
`
    <span class = "tag-habito">tags habito</span>
`

const habitoCard = 
`
    <div class = "habitoCard">
        <h2>nombre del habito</h2>
        <div class ="habitoCard-logs">
            <div class = "container-habitoCard-monitoring">
                <div class="habitoCard-monitoring">

                </div>
            </div>
            <div class="tags-habitoCard">
                ${tagHabito} 
                ${tagHabito}  
            </div>
        </div>
    </div>
`

const listenersDashboard = () =>{
    const btnLogutDashboard = document.getElementById('btn-log-out-dashboard')
    const processLogOut = () =>{
        window.location.hash = '#/Home'
    }
    btnLogutDashboard.addEventListener('click',processLogOut)
}

const dashboard = 
`
    <nav class = "dashboard-nav-main">
        <div class="logo">
            logo
        </div>
        <div class="dashboard-options-nav-main">
            <button id = "btn-log-out-dashboard">log out</button>
        </div>
    </nav>
    <div class = "dashboard-list-habito">
        <div class ="dashboard-all-habito">
            <nav class="mav-main-dashboard">
                <button>Create Habito</button>
            </nav>
            ${habitoCard}
            ${habitoCard}
            ${habitoCard}
            ${habitoCard}
            ${habitoCard}
            ${habitoCard}
        </div>
        <div class = "selected-habito">
            ${completeInfoHabito}
        </div>
    </div>
    <footer>
        this is our footer
    </footer>
`

const page404 = 
`
    <div class="container-404">
        <div>
            <h2>404</h2>
            <p>ruta no encontrada</p>
        </div>
    </div>
`

//la aplicacion oye la ruta seleccionada
//la aplicacion identifica si tenemos la ruta especificada 
//la aplicacion verifica si el usuario puede ingresar a la ruta especificada 
//la aplicacion redirecciona a la ruta especificada

const router = async(hash) => {
    //history.replaceState(stateObj, '', 'bar2.html');
    console.log('aqui antes del switch'  +  hash);
    let hash_ = await hash;
    switch(hash_){
        case '#/Home':
            console.log('aqui')
            container.innerHTML = home
            break;
        case '#/Login':
            container.innerHTML = login
            listenersLogin()
            break;
        case '#/Dashboard':
            container.innerHTML = dashboard
            listenersDashboard()
            break;
        default :
            container.innerHTML = page404
            break;
    }

}

const app = () =>{

    const locationHash = () =>{
        window.location.hash = '/Home'
        console.log(window.location.hash)
        router(window.location.hash)
    }

    window.onloadstart = locationHash
    
    window.addEventListener('load',(e)=>{
        console.log(window.location.hash)
        router(window.location.hash)
    })

    window.addEventListener('hashchange',(e)=>{
        console.log(window.location.hash)
        router(window.location.hash)
    })

}

app()