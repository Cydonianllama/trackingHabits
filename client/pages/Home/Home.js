import {isLoggedChangeLoginHome} from './utils'
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
                    style="stroke: none; fill: #00000027;"></path>
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

export default renderHome;