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

//data de prueba 

var habitoArray = []


// variables
const container = document.getElementById('container')

const ListenerShowOptionsProfile = () => {

    let btnProfileHome = document.getElementById('btn-profile-home')

    const show = () => {
        console.log('still in development');
    }

    btnProfileHome.addEventListener('click', show)

}

var isLoggedChangeLoginHome = async (isLogged) => {

    let optionsProfileTemplate = 
    `
        <div class = "options-profile">
            <button id = "btn-myProfile">my profile</button>
            <button id = "btn-myDashboard">my dashboard</button>
            <button id = "btn-logOut">Log out</button>
        </div>
    `
    
    let UserTemplate = 
    `
        <div class = "userProfile-home">
            <button id = "btn-profile-home">
                see opttions
            </button>
            ${optionsProfileTemplate}
        </di>
    `
    
    let loginTemplate = 
    `
        <a class = "btn-login" href = "#/Login">login</a>
    `
    
    if (isLogged === 'true'){
        return UserTemplate
    }
    else if (isLogged === 'false'){
        return loginTemplate
    }
    else{
        return `An error has ocurred`
    }

}

var renderHome = async () => {
    
    var home =
     `
    <nav class="home-nav-main">
        <div class="logo">
        </div>
        <div class="options-home-nav-main">
            ${await isLoggedChangeLoginHome(window.localStorage.getItem('isLogged'))}
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

    container.innerHTML = home

}


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
        localStorage.setItem('isLogged', true)
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
                <div class = "come-to-login">
                    <p>tengo una cuenta <button id = "btn-to-login" >Login</button></p>
                </div>
            </div>
        </div>
    </div>

`

const listenersAnotationLog = () => {
    
    const btnEditAnotationLog = document.getElementById('btn-edit-anotation-log')
    const btnDeleteAnotationLog = document.getElementById('btn-delete-anotation-log')

    const EditAnotation = () => {
        console.log('still in development')
    }

    const DeleteAnotation = () => {
        console.log('still in development')
    } 

    btnEditAnotationLog.addEventListener('click',EditAnotation)
    btnDeleteAnotationLog.addEventListener('click',DeleteAnotation)

}

const renderAnotationLog = async () => {
    
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
            <button id = "btn-edit-anotation-log" >edit</button>
            <button id = "btn-delete-anotation-log">delete</button>
        </div>
    </div>
    `

    return anotationLog

}

const listenersCompleteInfoHabito = () => {

    const buttonAddAnotation = document.getElementById('btn-add-anotation')
    const anotationLogs = document.querySelector('.anotation-logs')

    const addAnotation = async (event) => {
        event.preventDefault()
        console.log('addAnotation : still in development')
        let templateAnotationLog = await renderAnotationLog()
        anotationLogs.innerHTML += templateAnotationLog 
    }

    buttonAddAnotation.addEventListener('click',addAnotation)

}

const renderCompleteHabito = () => {
    
    const processNumeration = () => {
        console.log('still in development');
    }

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
            <form action="" id = "form-create-anotation">
                <textarea name="comentario" id="" cols="30" rows="5"></textarea>
                <button id = "btn-add-anotation">agregar</button>
            </form>
        </nav>
        <div class = "anotation-logs">

        </div>
    </div>
    `

    return completeInfoHabito

}

const renderTagHabito = async (name) => {
    
    const tagHabito =
    `
    <span class = "tag-habito">${name}</span>
    `
    
    return tagHabito

}

const listenerHabitoCard = () => {

    const habitoCard_ = document.querySelectorAll('.habitoCard')
    // conatiner - in dashboard template 
    const completeInfoHabitoContainer = document.querySelector('.selected-habito') 

    const activateCompleteinfoHabitoListener = () => {
        if (completeInfoHabitoContainer === null) return
        else listenersCompleteInfoHabito()
    }

    //selected-habito - is in dashboard
    const ContainerSelectedHabito = document.querySelector('.selected-habito') 

    habitoCard_.forEach((item) => {
        item.addEventListener('click', async (e) => {
            let templateCompleteInfoHabito = await renderCompleteHabito()
            ContainerSelectedHabito.innerHTML = templateCompleteInfoHabito 
            activateCompleteinfoHabitoListener()
            console.log('activate complete log habito : still in development')
        })
    })

}

const renderHabitoCard = async ({name,type}) => {
    
    const obtainTagHabito = () => {
        console.log('still in development')
    }

    const habitoCard =
    `
    <div class = "habitoCard">
        <h2>${name}</h2>
        <div class ="habitoCard-logs">
            <div class = "container-habitoCard-monitoring">
                <div class="habitoCard-monitoring">

                </div>
            </div>
            <div class="tags-habitoCard">
                ${await renderTagHabito(type)} 
            </div>
        </div>
    </div>
    `

    return habitoCard

}

const listenersDashboard = () =>{

    const dashboardAllHabito = document.querySelector('.dashboard-all-habito')
    const btnLogutDashboard = document.getElementById('btn-log-out-dashboard')
    const btnCreateHabito = document.getElementById('btn-create-habito')

    //actions for the form of create an habit
    const inputNameHabito  = document.getElementById('input-name-habito') 
    const selectTagsHabito = document.getElementById('select-tags-habito')
    const dataHabito = ({name , type}) => {
        return {id : new Date().getTime().toString() , name : name , type : type }
    }

    const activateHabitoCardsListener = () => {
        if (dashboardAllHabito.innerHTML === null) return 
        else listenerHabitoCard()
    }

    const createHabito = async (event) => {

        //data of the form of habit 
        let indexTagHabito = selectTagsHabito.selectedIndex
        let tagHabitoName = selectTagsHabito.options[indexTagHabito].text
        let nameHabito = inputNameHabito.value
        let Habito = dataHabito({name : nameHabito , type : tagHabitoName})

        event.preventDefault()
        let templateHabitoCard = await renderHabitoCard(Habito)
        dashboardAllHabito.innerHTML += templateHabitoCard
        activateHabitoCardsListener()//if any card there ,this does not activate  
    }

    const processLogOut = () =>{
        window.localStorage.setItem('isLogged',false)
        window.location.hash = '#/Home'
    }

    activateHabitoCardsListener()//if any card there ,this does not activate  
    
    btnLogutDashboard.addEventListener('click',processLogOut)
    btnCreateHabito.addEventListener('click',createHabito)
    

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
        <div class = "dlh1">
            <nav class="mav-main-dashboard">
                <form action="">
                    <input type="text" placeholder = "nombre del habito" id = "input-name-habito">
                    <select name="tags" id="select-tags-habito">
                        <option value="seleccionar">Seleccionar</option>
                        <option value="personal">Personal</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="pasion">Pasion</option>
                    </select>
                    <button type="submit" id="btn-create-habito">Create Habito</button>
                </form>
            </nav>
            <div class="dashboard-all-habito">
            
            </div>
        </div>
        <div class = "selected-habito">
            
        </div>
    </div>
    <footer>
        this is our footer
    </footer>
`
// ${completeInfoHabito} -> esto va  en selected-habito

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

    console.log('funcion router accionada  : '  +  hash)
    console.log('isLogged log : ' + window.localStorage.getItem('isLogged'))

    let hash_ = await hash;
    switch(hash_){
        case '#/Home':
            await renderHome()
            if (window.localStorage.getItem('isLogged') === 'true') ListenerShowOptionsProfile()    
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

    //localStorage para pruebas 
    localStorage.setItem('isLogged', 'false')
    window.location.hash = '/Home'
    const locationHash = () =>{
        window.location.hash = '/Home'
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