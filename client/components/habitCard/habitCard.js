import habitRepo from '../../store/habits'
import {completeInformation_} from '../../store/completeInformation'

import renderTagHabito from './components/tagHabit'
import completeInfoHabit from '../completeHabitInfo/completeHabitInfo'
class HabitCard {

    constructor(data){
        this.data = data
        // the component assigned
        this.currentComponent=null
        
    }
    
    async getTemplate(){

        const {name , type  , id} = this.data

        const tr = document.createElement('div')
        tr.classList.add('all-habito-item')

        tr.dataset.idHabitCard = id ;

        tr.innerHTML  =
            `
        
                <div class="clickable-habit-card habit-card-name td-name">${name}</div>
                <div class="clickable-habit-card td-type">${await renderTagHabito(type)}</div>
                <div>
                    <div class="actions-habito-card">
                        <button class="btn-edit-habitocard"> <img src='./resources/vectors/edit-2.svg' alt="o"></button>
                        <button><img src='./resources/vectors/archive.svg' alt="o"></button>
                        <button class="btn-delete-habitocard"> <img src='./resources/vectors/trash-2.svg' alt="o"></button>
                    </div>
                </div>
        `

        this.currentComponent = tr
        return tr
    }

    listener(){

        const {id} = this.data

        let clickable = this.currentComponent.querySelectorAll('.clickable-habit-card')
        const currentComponent = this.currentComponent

        clickable.forEach(item => {
            item.addEventListener('click',function(event){

                document.querySelector('.selected-habito').firstChild.remove()

                completeInfoHabit.setIDhabit(id)
                completeInfoHabit.render(document.querySelector('.selected-habito'))

                event.preventDefault()
            })
        })

        const actionsHabitCard = document.querySelector('.actions-habito-card')

        let btnDelete = actionsHabitCard.querySelector('.btn-delete-habitocard')
        let btnEdit = actionsHabitCard.querySelector('.btn-edit-habitocard')

        let nameHabit = actionsHabitCard.querySelector('.habit-card-name')

        btnDelete.addEventListener('click', (event) => {

            let reportDelete = habitRepo.delete(id)

            // some error in the store interrupt the process of delete to the UI
            if (!reportDelete) return

            currentComponent .remove()

        })

        btnEdit.addEventListener('click', (event) => {
            nameHabit.contentEditable = "true"
        })

    }

    createCompleteInfo(){
        // the creation of complete information
        var completeInfoInitialData = {
            id: 'habit-' + completeInformation_.getLengthString(),
            idHabit: data.id,
            title: data.name,
            daysTracking: [],
            anotations: []
        }
        completeInformation_.create(completeInfoInitialData)
    }

    async render(container){
        let html = await  this.getTemplate()
        container.prepend(html)
        this.listener()
    }
}


const renderHabitoCard = async ({ name, type }) => {
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


export default HabitCard;