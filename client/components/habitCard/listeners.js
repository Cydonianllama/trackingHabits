import {listenersCompleteInfoHabito} from '../completeHabitInfo/listeners'
import renderCompleteHabito from '../completeHabitInfo/completeHabitInfo'

export const listenerHabitoCard = () => {
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