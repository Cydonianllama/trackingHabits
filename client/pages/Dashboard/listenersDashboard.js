import mainHabits from '../../views/viewHabits'
import scheduleTemplate from '../../views/listenersSchedule'
import archivedTemplate from '../../views/archivedTemplate'
import preferencesTemplate from '../../views/viewPreferences'


import  {listenerHabitoCard} from '../../components/habitCard/listeners'
import renderHabitoCard from '../../components/habitCard/habitCard'

const switchDashboardScreens = (id, container) => {
    switch (id) {
        case 'rb1':
            container.innerHTML = mainHabits
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

export const listenersDashboard = () => {

    const routesToGo = document.querySelector('.routes-dashboard');

    const dashboardAllHabito = document.querySelector('.dashboard-all-habito')
    const btnLogutDashboard = document.getElementById('btn-log-out-dashboard')
    const btnCreateHabito = document.getElementById('btn-create-habito')
    //actions for the form of create an habit
    const inputNameHabito = document.getElementById('input-name-habito')
    const selectTagsHabito = document.getElementById('select-tags-habito')

    const verifyDataHabito = (input_name, tag_habito) => {
        console.log('verifyDataHabito', input_name, tag_habito)
        if (input_name === null || input_name === undefined) return false
        if (tag_habito === "seleccionar" || tag_habito === "seleccionar") return false
        return true
    }
    const postProcesssCreateHabito = () => {
        inputNameHabito.value = '';
        selectTagsHabito.value = 'seleccionar';
        inputNameHabito.focus()
    }
    const createHabito = ({ name, type }) => {
        return { id: new Date().getTime().toString(), name: name, type: type }
    }
    const activateHabitoCardsListener = () => {
        if (dashboardAllHabito.innerHTML === null) return
        else listenerHabitoCard()
    }
    const processDataHabito = async (event) => {
        //data of the form of habit 
        event.preventDefault()
        if (verifyDataHabito(inputNameHabito.value, selectTagsHabito.value)) {
            let indexTagHabito = selectTagsHabito.selectedIndex
            let tagHabitoName = selectTagsHabito.options[indexTagHabito].text
            let nameHabito = inputNameHabito.value
            let Habito = createHabito({ name: nameHabito, type: tagHabitoName })
            //C_createHabito(Habito)//fetching information
            let templateHabitoCard = await renderHabitoCard(Habito)
            dashboardAllHabito.innerHTML += templateHabitoCard
            postProcesssCreateHabito()
            activateHabitoCardsListener()//if any card there ,this does not activate  
        } else {
            return null
        }
    }
    const processSignOut = () => {
        window.localStorage.setItem('isLogged', false)
        window.location.hash = '#/Home'
        C_signout()//fetching information
    }

    activateHabitoCardsListener()//if any card there ,this does not activate  
    btnLogutDashboard.addEventListener('click', processSignOut)
    btnCreateHabito.addEventListener('click', processDataHabito)
    routesToGo.childNodes.forEach(item => {
        item.addEventListener('click', async (e) => {
            let container = document.querySelector('.dashboard-list-habito')
            if (e.target.checked === true) {
                switchDashboardScreens(e.target.id, container)
            }
        })
    })
}
