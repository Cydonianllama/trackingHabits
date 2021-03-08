// components
import AnotationLog from '../anotation/anotation'
import {completeInformation_} from '../../store/completeInformation'
class CompleteInfoHabit {
    cosntructor(){
        this.currentComponent = null
        this.currentIDhabit = null
    }

    // this bind the ui with the data of the habit selected
    setIDhabit(id){
        this.currentIDhabit = id
    }

    listeners(){

        const buttonAddAnotation = document.getElementById('btn-add-anotation')
        const anotationLogs = document.querySelector('.anotation-logs')
        const textAreaAnotation = document.getElementById('text-area-anotation')

        let postAddAnotation = () => {
            textAreaAnotation.value = ''
            textAreaAnotation.focus()
        }

        let createAnotation = ({ text }) => {
            return { text }
        }
        const addAnotation = async (event) => {

            if (textAreaAnotation.value.length === 0) return
            let anotation = {
                text : textAreaAnotation.value
            }

            let anotationData = createAnotation(anotation)

            let anotationLog = new AnotationLog(anotationData)

            completeInformation_.createAnotation(this.currentIDhabit,{
                idAnotation : 'a',
                text: anotationData,
                dateCreation : new Date().toString()
            })

            await anotationLog.render(anotationLogs)

            //anotationLogs.innerHTML += templateAnotationLog

            postAddAnotation()

        }

        buttonAddAnotation.addEventListener('click', addAnotation)


    }
    getTemplate(){


        const div = document.createElement('div')
        div.classList.add('completeInfoHabito')

        const completeInfoHabit =
            `       
            <h2 class = "complete-info-title"></h2>
            <div class="completelog">
                <div class = "log-habito">
                    <div class="graf1">
                        grafico de dias usando
                    </div>            
                </div>
            </div>
            <nav class ="funcionalidades-anotation">
                <form action="" id = "form-create-anotation">
                    <textarea id="text-area-anotation"name="comentario" id="" cols="30" rows="2"></textarea>
                    <button type = "button" id = "btn-add-anotation"> <img src="./resources/vectors/plus-circle.svg" alt="o">agregar</button>
                </form>
            </nav>
            <div class = "anotation-logs">
               
            </div>
        
            `
        
        this.currentComponent = div
        div.innerHTML = completeInfoHabit
        return div
    }
    render(container){

        let div = this.getTemplate()
        container.append(div)
        this.listeners()

        let reportCompleteInfoHabit = completeInformation_.findByHabitID(this.currentIDhabit)
        const {
            id,
            idHabit,
            title,
            daysTracking,
            anotations } = reportCompleteInfoHabit[0]
        div.querySelector('.complete-info-title').innerText = title

        console.log('report before rendering : ',reportCompleteInfoHabit);

        let AnotationComponents = anotations.map(data => new AnotationLog(data))
        const anotationLogsContainer = document.querySelector('.anotation-logs')

        AnotationComponents.forEach(component => {

            anotationLogsContainer.prepend(component.getTemplate())
            component.listener()

        })

    }
}


const completeInfoHabit = new CompleteInfoHabit()

export default completeInfoHabit;