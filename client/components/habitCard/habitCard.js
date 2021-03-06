import renderTagHabito from './components/tagHabit'
import {listenerHabitoCard} from './listeners'
class HabitCard {

    constructor(data){
        this.data = data
        console.log(data)
    }
    
    async getTemplate(){
        const {name , type  , id} = this.data
        const habitoCard =
            `
        <tr class ="habitoCard" data-habito-card-id = ${id} >
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

    listener(){

    }
    render(container){

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