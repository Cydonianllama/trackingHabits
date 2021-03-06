import completeInfoHabit from '../completeHabitInfo/completeHabitInfo'

export const listenerHabitoCard = () => {
    const habitoCard_ = document.querySelectorAll('.habitoCard')

    // conatiner - in dashboard template 
    const completeInfoHabitoContainer = document.querySelector('.selected-habito')

    //selected-habito - is in dashboard
    const ContainerSelectedHabito = document.querySelector('.selected-habito')

    habitoCard_.forEach((item) => {

        item.addEventListener('click', async (e) => {

            // render of the component
            completeInfoHabit.render(ContainerSelectedHabito)

        })

    })
}