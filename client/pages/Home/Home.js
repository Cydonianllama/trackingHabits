import {isLoggedChangeLoginHome} from './utils'
import {ListenerShowOptionsProfile} from '../Home/utils'

class HomePage {

    constructor(){

    }

    listeners(){
        if (window.localStorage.getItem('isLogged') === 'true') ListenerShowOptionsProfile()
    }

    async getTemplate(){

        var renderHome = async () => {
            var home =
                            `
        <nav class="home-nav-main">
            <div class="logo">
                Erick G
            </div>
            <ul class="ul-nav-main">
                <li><a class="a-tag-nav" href="#Home">Home</a></li>
                <li><a class="a-tag-nav" href="#features">Features</a> </li>
                <li><a class="a-tag-nav" href="#fake-pricing">Pricing</a></li>
                <li><a class="a-tag-nav" href="#git-hub-integration">GitHub Repo</a></li>
            </ul>
            <div class="options-home-nav-main">
                ${await isLoggedChangeLoginHome(window.localStorage.getItem('isLogged'))}
            </div>
        </nav>

        <div class="home-hero">

            <div class="hero-content">
                <h2>This is my <span>APP</span> Tracking</h2>
                <p>my firts app, developed in all aspects by me , im so happy with this project, i hope that you enjoy it like
                    me enjoyed when i was developed this app</p>
                <a class="btn cta" href="https://github.com/Cydonianllama" target="_blank">Contact Me</a>
            </div>

            <img class="programming-amico" src='./resources/vectors/Website designer-amico.svg' alt="esta en una imagen">

            <div style="height: 150px; width : 100%;overflow: hidden; position:absolute; bottom:0;">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M0.00,49.98 C222.63,159.38 349.20,-49.98 605.80,128.78 L538.66,210.69 L0.00,150.00 Z"
                        style="stroke: none; fill: #00000027;"></path>
                </svg>
            </div>
        </div>

        <div class="features" id="features">
            <div class="container-features">

                <div class="feature-wrapper">
                    <div class="feature">
                        <h3 class="feature-title">the magnific featue</h3>
                        <div class="feature-specific-info-wrapper">
                            <ul class="feature-specific-info">
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="feature-wrapper">
                    <div class="feature">
                        <h3 class="feature-title">the magnific featue</h3>
                        <div class="feature-specific-info-wrapper">
                            <ul class="feature-specific-info">
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="feature-wrapper">
                    <div class="feature">
                        <h3 class="feature-title">the magnific featue</h3>
                        <div class="feature-specific-info-wrapper">
                            <ul class="feature-specific-info">
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="feature-wrapper">
                    <div class="feature">
                        <h3 class="feature-title">the magnific featue</h3>
                        <div class="feature-specific-info-wrapper">
                            <ul class="feature-specific-info">
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="feature-wrapper">
                    <div class="feature">
                        <h3 class="feature-title">the magnific featue</h3>
                        <div class="feature-specific-info-wrapper">
                            <ul class="feature-specific-info">
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="feature-wrapper">
                    <div class="feature">
                        <h3 class="feature-title">the magnific featue</h3>
                        <div class="feature-specific-info-wrapper">
                            <ul class="feature-specific-info">
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                                <li class="feature-specific-item">
                                    <img src="./resources/vectors/check-circle.svg" alt="asd">
                                    a good stuff for the info
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fake-pricing" id="fake-pricing">

            <h3 class = "fake-pricing-title">Pricing</h3>

            <div class="container-pricing">

                <div class="pricing-wrapper pricing-basic">
                    <div class="pricing-content ">
                        <h2 class="pricing-title">starter</h2>
                        <ul class="pricing-list-features">
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">all in standar
                                features</li>
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">unique session</li>
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">support team</li>
                        </ul>
                        <button class="btn-pricing">seleccionar</button>
                        <div class="pricing-info">
                            valid for 3 days
                        </div>
                    </div>
                </div>

                <div class="pricing-wrapper pricing-normal">
                    <div class="pricing-content ">
                        <h2 class="pricing-title">normal</h2>
                        <ul class="pricing-list-features">
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">all in standar
                                features</li>
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">unique session</li>
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">support team</li>
                        </ul>
                        <button class="btn-pricing">seleccionar</button>
                        <div class="pricing-info">
                            valid for 3 days
                        </div>
                    </div>
                </div>

                <div class="pricing-wrapper pricing-proffesional">
                    <div class="pricing-content ">
                        <h2 class="pricing-title">Professional</h2>
                        <ul class="pricing-list-features">
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">all in standar
                                features</li>
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">unique session</li>
                            <li class="pricing-list-item"><img src="./resources/vectors/check-circle.svg" alt="asd">support team</li>
                        </ul>
                        <button class="btn-pricing">seleccionar</button>
                        <div class="pricing-info">
                            valid for 3 days
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="git-hub-integration" id="git-hub-integration">
            <div class="line-app-container">
                <div class="la">
                    mi primer deploying de una app
                </div>
                <div class="lal">
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
            return home
        }

        let html = await renderHome()

        return html
    }

    async render(){
        
        let html = await  this.getTemplate()
        container.innerHTML = html
        this.listeners()
    }

}

const homePage = new HomePage()

export default homePage;