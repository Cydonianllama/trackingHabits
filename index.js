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

async function getAllHabitos(){

}
async function getAllTags(){

}
async function getAllCommentsHabito(){

}
async function C_createHabito({name , type}){

}
async function C_modifyHabito(){

}
async function C_deleteHabito(){

}
async function C_addTag(){

}
async function C_deleteTag(){

}
async function C_addComment(){

}
async function C_deleteComment(){

}
async function C_updateComment(){

}
async function C_register(){

}
async function C_sigin(){

}
async function C_signout(){

}
async function C_deleteAccount(){

}

//data de prueba 

var habitoArray = []

// variables

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
    if (isLogged === 'true') return UserTemplate
    else if (isLogged === 'false') return loginTemplate
    else return `An error has ocurred`
}

var renderHome = async () => {
    var home =
     `
    <nav class="home-nav-main">
        <div class="logo">
            LOGO
        </div>
        <ul class = "ul-nav-main">
            <li><a class = "a-tag-nav" href="#Home">Home</a></li>
            <li><a class = "a-tag-nav" href="#features">Features</a> </li>
            <li><a class = "a-tag-nav" href="#fake-pricing">Pricing</a></li>
            <li><a class = "a-tag-nav" href="#git-hub-integration">GitHub Repo</a></li>
        </ul>
        <div class="options-home-nav-main">
            ${await isLoggedChangeLoginHome(window.localStorage.getItem('isLogged'))}
        </div>
    </nav>
    <div class = "home-hero">
        <div class ="hero-content">
            <h2>This is my <span>APP</span> Tracking</h2>
            <p>my firts app, developed in all aspects by me , im so happy with this project, i hope that you enjoy it like me enjoyed when i was developed this app</p>
            <a class="btn cta" href="https://github.com/Cydonianllama" target="_blank">Contact Me</a>
        </div>
        <img class="programming-amico"src='./resources/vectors/Programming_amico.svg' alt="esta en una imagen">
        <div style="height: 150px; width : 100%;overflow: hidden; position:absolute; bottom:0;">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C222.63,159.38 349.20,-49.98 605.80,128.78 L538.66,210.69 L0.00,150.00 Z"
                    style="stroke: none; fill: #d2bdfc;"></path>
            </svg>
        </div>
    </div>
    <div class ="features" id ="features">
        <div class ="container-features">
            <div class ="feature-1">
                <h2>Manage Habits</h2>
                <p> <img src="./resources/vectors/star.svg" alt="asd"> you can create all your habit for managemment</p>
            </div>
            <div class ="feature-2">
                <h2>Audit Your Habits</h2>
                <p><img src="./resources/vectors/star.svg" alt="asd">you can see your progress and improve your skills</p>
            </div>
            <div class ="feature-3">
                <h2>Establish your Habits</h2>
                <p><img src="./resources/vectors/star.svg" alt="asd">you can program your habits in a moth ,day and year</p>
            </div>
            <div class ="feature-4">
                <h2>Export your data anytime you want</h2>
                <p><img src="./resources/vectors/star.svg" alt="asd">your have complete access to the data that you were creating</p>
            </div>
            <div class="feature-5">
                <h2>Integrations with your tools</h2>
                <p><img src="./resources/vectors/star.svg" alt="asd">in progress but i promise this feature</p>
            </div>
        </div>
    </div>
    <div class ="fake-pricing" id ="fake-pricing">
        <div class="container-pricing">
            <div class ="pricing-basic">
                <h2>Basic</h2>
                <ul class="list-features">
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">limited numbers of habits : 5</li> 
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">limeted calendar actions</li>  
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">limited anotation actions</li>
                </ul>
                <button>Basic</button>
            </div>
            <div class="pricing-standar my-precious">
                <h2>Standar</h2>
                <ul class="list-features">
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">unlimited numbers of Habits</li>
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">unlimited calendar Actions</li>
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">unlimited anotation Actions</li>
                </ul>
                <button>Standar</button>
            </div>
            <div class="pricing-proffesional">
                <h2>Professional</h2>
                <ul class="list-features">
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">all in standar features</li>
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">unique session</li>
                    <li><img src="./resources/vectors/check-circle.svg" alt="asd">support team</li>
                </ul>
                <button>Professional</button>
            </div>
        </div>
    </div>
    <div class = "git-hub-integration" id ="git-hub-integration">
        <div class ="line-app-container">
            <div class = "la">
                mi primer deploying de una app
            </div>
            <div class ="lal">
                conociendo algunos de los conceptos que debo aprender
            </div>
            <div class="la">
                pues, creo que no se hacer lineTimes :( , pero es mi primer intento ... lo haré mejor despues :)
            </div>
        </div>
    </div>  
    <footer class="footer-main">
        <p>SPA desarrollada por Erick Grandez :)</p>
        <p>Gracias a:<a href="https://storyset.com/web">Illustration by Freepik Storyset</a></p>
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

const renderAnotationLog = async ({content}) => { 
    const anotationLog =
    `
    <div class = "anotation-log">
        <div class = "header-anotation-log">
            <span>fehca de anotacion</span>
            <span>tag de anotacion</span>
        </div>
        <div class = "description-anotation-log">
            <p>${content}</p>
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
    const textAreaAnotation = document.getElementById('text-area-anotation')

    let postAddAnotation = () =>{
        textAreaAnotation.value = ''
        textAreaAnotation.focus()
    }
    let createAnotation = async ({content}) =>{
        return {content : content}
    }
    const addAnotation = async (event) => {
        let anotation = {
            content: textAreaAnotation.value
        }
        event.preventDefault()
        let anotationComponent = await createAnotation(anotation)
        let templateAnotationLog = await renderAnotationLog(anotationComponent)
        anotationLogs.innerHTML += templateAnotationLog 
        postAddAnotation()
    }
    buttonAddAnotation.addEventListener('click',addAnotation)
    //C_addComment()
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
                <div class="graf1">
                    grafico de dias usando
                </div>
                <div class="graf2">
                    grafico de otros elementos
                </div>               
            </div>
        </div>
        <nav class ="funcionalidades-anotation">
            <form action="" id = "form-create-anotation">
                <textarea id="text-area-anotation"name="comentario" id="" cols="30" rows="2"></textarea>
                <button id = "btn-add-anotation"> <img src="./resources/vectors/plus-circle.svg" alt="o">agregar</button>
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

const renderAllHabitoCard = async () => {

}

const renderHabitoCard = async ({name,type}) => {
    const obtainTagHabito = () => {
        console.log('still in development')
    }
    const habitoCard =
    `
        <tr class ="habitoCard">
            <td>${name}</td>
            <td> ${await renderTagHabito(type)} </td>
            <td>
                <div class="actions-habito-card">
                    <button id="btn-edit-habitocard"> <img src='./resources/vectors/edit-2.svg' alt="o"></button>
                    <button><img src='./resources/vectors/archive.svg' alt="o"></button>
                    <button id="btn-delete-habitocard"> <img src='./resources/vectors/trash-2.svg' alt="o"></button>
                </div>
            </td>
        </tr>	

    `
    return habitoCard
}

const switchDashboardScreens = (id,container) =>{
    switch (id) {
        case 'rb1':
            container.innerHTML = mainHabits
            listenersDashboard()
            break;
        case 'rb2':
            container.innerHTML = horariosTemplate
            listenersHorario()
            break;
        case 'rb3':
            container.innerHTML = archivadosTemplate
            break;
        case 'rb4':
            container.innerHTML = preferenciasTemplate
            break;
    }
}


const listenersDashboard = () =>{

    const routesToGo = document.querySelector('.routes-dashboard');

    const dashboardAllHabito = document.querySelector('.dashboard-all-habito')
    const btnLogutDashboard = document.getElementById('btn-log-out-dashboard')
    const btnCreateHabito = document.getElementById('btn-create-habito')
    //actions for the form of create an habit
    const inputNameHabito  = document.getElementById('input-name-habito') 
    const selectTagsHabito = document.getElementById('select-tags-habito')

    const verifyDataHabito = (input_name,tag_habito) => {
        console.log('verifyDataHabito',input_name,tag_habito)
        if (input_name === null || input_name === undefined) return false
        if(tag_habito === "seleccionar" || tag_habito === "seleccionar") return false
        return true
    }
    const postProcesssCreateHabito = () => {
        inputNameHabito.value = '';
        selectTagsHabito.value = 'seleccionar';
        inputNameHabito.focus()
    }
    const createHabito = ({name , type}) => {
        return {id : new Date().getTime().toString() , name : name , type : type }
    }
    const activateHabitoCardsListener = () => {
        if (dashboardAllHabito.innerHTML === null) return 
        else listenerHabitoCard()
    }
    const processDataHabito = async (event) => {
        //data of the form of habit 
        event.preventDefault()
        if (verifyDataHabito(inputNameHabito.value,selectTagsHabito.value)){
            let indexTagHabito = selectTagsHabito.selectedIndex
            let tagHabitoName = selectTagsHabito.options[indexTagHabito].text
            let nameHabito = inputNameHabito.value
            let Habito = createHabito({ name: nameHabito, type: tagHabitoName })
            C_createHabito(Habito)//fetching information
            let templateHabitoCard = await renderHabitoCard(Habito)
            dashboardAllHabito.innerHTML += templateHabitoCard
            postProcesssCreateHabito()
            activateHabitoCardsListener()//if any card there ,this does not activate  
        }else{
            return null
        }
    }
    const processSignOut = () =>{
        window.localStorage.setItem('isLogged',false)
        window.location.hash = '#/Home'
        C_signout()//fetching information
    }

    activateHabitoCardsListener()//if any card there ,this does not activate  
    btnLogutDashboard.addEventListener('click', processSignOut)
    btnCreateHabito.addEventListener('click',processDataHabito)
    routesToGo.childNodes.forEach(item => {
        item.addEventListener('click',async (e)=>{
            let container = document.querySelector('.dashboard-list-habito')
            if(e.target.checked === true) {
                switchDashboardScreens(e.target.id,container)
            }
        })
    })
}

// ${completeInfoHabito} -> esto va  en selected-habito

const listenersHorario = () =>{
    function generate_year_range(start, end) {
        var years = "";
        for (var year = start; year <= end; year++) {
            years += "<option value='" + year + "'>" + year + "</option>";
        }
        return years;
    }

    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    selectYear = document.getElementById("year");
    selectMonth = document.getElementById("month");


    createYear = generate_year_range(1970, 2050);
    /** or
     * createYear = generate_year_range( 1970, currentYear );
     */

    document.getElementById("year").innerHTML = createYear;

    var calendar = document.getElementById("calendar");
    var lang = calendar.getAttribute('data-lang');

    var months = "";
    var days = "";

    var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (lang == "en") {
        months = monthDefault;
        days = dayDefault;
    }else {
        months = monthDefault;
        days = dayDefault;
    }

    var $dataHead = "<tr>";
    for (dhead in days) {
        $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
    }
    $dataHead += "</tr>";

    //alert($dataHead);
    document.getElementById("thead-month").innerHTML = $dataHead;


    monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);



    function next() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }

    function previous() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }

    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        showCalendar(currentMonth, currentYear);
    }

    function showCalendar(month, year) {

        var firstDay = (new Date(year, month)).getDay();

        tbl = document.getElementById("calendar-body");


        tbl.innerHTML = "";


        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;

        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {

            var row = document.createElement("tr");


            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cell = document.createElement("td");
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth(month, year)) {
                    break;
                } else {
                    cell = document.createElement("td");
                    cell.setAttribute("data-date", date);
                    cell.setAttribute("data-month", month + 1);
                    cell.setAttribute("data-year", year);
                    cell.setAttribute("data-month_name", months[month]);
                    cell.className = "date-picker";
                    cell.innerHTML = "<span>" + date + "</span>";

                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        cell.className = "date-picker selected";
                    }
                    row.appendChild(cell);
                    date++;
                }


            }

            tbl.appendChild(row);
        }

    }

    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }
}


let horariosTemplate = 
`
 <div class="wrapper">

    <div class="container-calendar">
        <h3 id="monthAndYear"></h3>
        
        <div class="button-container-calendar">
            <button id="previous" onclick="previous()">&#8249;</button>
            <button id="next" onclick="next()">&#8250;</button>
        </div>
        
        <table class="table-calendar" id="calendar" data-lang="en">
            <thead id="thead-month"></thead>
            <tbody id="calendar-body"></tbody>
        </table>
        
        <div class="footer-container-calendar">
             <label for="month">Jump To: </label>
             <select id="month" onchange="jump()">
                 <option value=0>Jan</option>
                 <option value=1>Feb</option>
                 <option value=2>Mar</option>
                 <option value=3>Apr</option>
                 <option value=4>May</option>
                 <option value=5>Jun</option>
                 <option value=6>Jul</option>
                 <option value=7>Aug</option>
                 <option value=8>Sep</option>
                 <option value=9>Oct</option>
                 <option value=10>Nov</option>
                 <option value=11>Dec</option>
             </select>
             <select id="year" onchange="jump()"></select>       
        </div>

    </div>
    
</div>
`
let archivadosTemplate =
`
    <div class ="archivados">
        <h2>Aca irian todos los habitos pasados</h2>
    </div>
`
let preferenciasTemplate = 
`
    <div class = "preferences">
        <ul class ="nav-preferences">
            <li><input type="radio" name="opt-chk-preferences" id="chk-preferences1"><label for="chk-preferences1">Tags</label></li>
            <li><input type="radio" name="opt-chk-preferences" id="chk-preferences2"><label for="chk-preferences2">type of something</label></li>
        </ul>
    </div>
`

let mainHabits = 
`
        <div class = "dlh1">
            <nav class="mav-main-dashboard">
                <form action="">
                    <input type="text" placeholder = "nombre del habito" id = "input-name-habito">
                    <label for="tags"> <img src='./resources/vectors/tag.svg' alt="o"> Select Tags :</label>
                    <select name="tags" id="select-tags-habito">
                        <option value="seleccionar">Seleccionar</option>
                        <option value="personal">Personal</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="pasion">Pasion</option>
                    </select>
                    <button type="submit" id="btn-create-habito"> <img src='./resources/vectors/plus-circle.svg' alt="o" type="image/svg"> Create Habito</button>
                </form>
            </nav>
            <div class="container-table">
                <table class="table-habito">
                    <thead>
                        <tr>
                            <th class ="th1">Name</th>
                            <th class ="th2">Type</th>
                            <th class ="th3">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="dashboard-all-habito">
                
                    </tbody>
                </table>
            </div>
        </div>
        <div class = "selected-habito">
            
        </div>
`

const renderDashboard = async (currentFunctionTemplate) => {
    let dashboard = 
    `
     <nav class = "dashboard-nav-main">
        <div class="logo">
            logo
        </div>
        <div class="wraper-profile">
            <div class ="profile">
                <div class ="avatar">

                </div>
                <p>hello <span>name</span></p>
                <div class ="actions-profile">
                    <input type="checkbox" name="chk-action-profile" id="chk-ap"> <label for="chk-ap">v</label>
                    <ul class ="slider-mav-profile">
                        <li><button>an action</button></li>
                        <li><button id="btn-log-out-dashboard">log out</button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </nav>
    <div class = "routes-dashboard">
        <input type="radio" name="choice" id ="rb1" checked > <label for="rb1">Habitos</label>
        <input type="radio" name="choice" id ="rb2"> <label for="rb2">Horario</label>
        <input type="radio" name="choice" id ="rb3"> <label for="rb3">Archivados</label>
        <input type="radio" name="choice" id ="rb4"> <label for="rb4">preferencias</label>
    </div>
    <div class = "dashboard-list-habito">
        ${await currentFunctionTemplate}
    </div>
    <footer class ="footer-dashboard">
        <p>@All right reserve by CydonianLlama</p>
        <a href="https://storyset.com/web">Illustration by Freepik Storyset</a>
    </footer>
    `
    return dashboard
}

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

const ignoreAnclas = (hashCode) =>{
    switch(hashCode){
        case '#Home':
            return true
        case '#features':
            return true
        case '#fake-pricing':
            return true
        case '#git-hub-integration':
            return true
        default :
            return false
    }
}

const router = async(hash) => {

    console.log('funcion router accionada  : '  +  hash)
    console.log('isLogged log : ' + window.localStorage.getItem('isLogged'))
    let hash_ = await hash;
    
    if (ignoreAnclas(hash_)) return
    
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
            //container.innerHTML = dashboard
            container.innerHTML = await renderDashboard(mainHabits)
            listenersDashboard()
            //renderAllHabitoCard()
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