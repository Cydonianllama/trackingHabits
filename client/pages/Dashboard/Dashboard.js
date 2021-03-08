import containerHabits from '../../components/containerHabits/containerHabits'

import scheduleTemplate from './components/listenersSchedule'
import archivedTemplate from './components/archivedTemplate'
import preferencesTemplate from './components/viewPreferences'

class DashboardPage {
    
    constructor(){

    }

    listeners(){

        const switchDashboardScreens = (id, container) => {
            switch (id) {
                case 'rb1':
                    containerHabits.render()
                    listenersDashboard()
                    break;
                case 'rb2':
                    container.innerHTML = scheduleTemplate
                    //listenersHorario()
                    break;
                case 'rb3':
                    container.innerHTML = archivedTemplate
                    break;
                case 'rb4':
                    container.innerHTML = preferencesTemplate
                    break;
            }
        }

        const listenersDashboard = () => {

            const routesToGo = document.querySelector('.routes-dashboard');

            const dashboardAllHabito = document.querySelector('.dashboard-all-habito')
            const btnLogutDashboard = document.getElementById('btn-log-out-dashboard')

            const processSignOut = () => {
                window.localStorage.setItem('isLogged', false)
                window.location.hash = '/'
                C_signout()//fetching information
            }

            btnLogutDashboard.addEventListener('click', processSignOut)

            routesToGo.childNodes.forEach(item => {
                item.addEventListener('click', async (e) => {
                    let container = document.querySelector('.dashboard-list-habito')
                    if (e.target.checked === true) {
                        switchDashboardScreens(e.target.id, container)
                    }
                })
            })

        }
    
        listenersDashboard()

    }

    async getTemplate(){

        const renderDashboard = async () => {
            let dashboard =
                `
                <nav class="dashboard-nav-main">
                    <div class="logo">
                        Grandez
                    </div>
                
                    <div class="wraper-profile">
                        <div class="profile">
                            <div class="avatar">
                
                            </div>
                            <p class="profile-name">hello <span>name</span></p>
                
                            <div class="actions-profile">
                                <input type="checkbox" name="chk-action-profile" id="chk-ap" />
                                <label for="chk-ap">v</label>
                                <ul class="slider-mav-profile">
                                    <li><button>an action</button></li>
                                    <li><button id="btn-log-out-dashboard">log out</button></li>
                                </ul>
                            </div>
                
                        </div>
                
                    </div>
                
                </nav>
                <div class="container-routes-dashboard">
                    <div class="routes-dashboard">
                        <input type="radio" name="choice" id="rb1" checked> <label for="rb1">Habitos</label>
                        <input type="radio" name="choice" id="rb2"> <label for="rb2">Horario</label>
                        <input type="radio" name="choice" id="rb3"> <label for="rb3">Archivados</label>
                        <input type="radio" name="choice" id="rb4"> <label for="rb4">preferencias</label>
                    </div>
                </div>


                <div class = "dashboard-list-habito">
                    
                </div>


                <footer class ="footer-dashboard">
                    <p>@All right reserve by CydonianLlama</p>
                    <a href="https://storyset.com/web">Illustration by Freepik Storyset</a>
                </footer>
            `
            return dashboard
        }
        // return await renderDashboard(mainHabits)
        return await renderDashboard()
    }

    async render(){

        let template = await this.getTemplate()
        container.innerHTML = template
        this.listeners()

        containerHabits.render()

    }
}

const dashboardPage = new DashboardPage()

export default dashboardPage;