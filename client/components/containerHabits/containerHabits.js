import HabitCard from '../habitCard/habitCard'
import habitRepo from '../../store/habits'

class ContainerHabits{
    
    constructor(repo){
        this.repo = repo
    }

    render() {

        let container = document.querySelector('.dashboard-list-habito')
        container.innerHTML = this.getTemplate()
        this.listener()
        let reportHabits = habitRepo.find()

        let habitComponents = reportHabits.map(data => new HabitCard(data))

        console.log(habitComponents)

        const container_ = document.querySelector('.dashboard-all-habito')
        habitComponents.forEach(component => {
            component.render(container_)
        })

    }

    listener(){
        // dom elements
        const dashboardAllHabit = document.querySelector('.dashboard-all-habito')
        const btnCreateHabit = document.getElementById('btn-create-habito')

        // fieldset from the input
        const inputNameHabito = document.getElementById('input-name-habito')
        const selectTagsHabito = document.getElementById('select-tags-habito')

        const verifyDataHabito = (input_name, tag_habito) => {
            console.log('verifyDataHabito', input_name, tag_habito)
            if (!input_name) return false
            if (tag_habito === "seleccionar" || tag_habito === "seleccionar") return false
            return true
        }

        const createHabit = ({ name, type }) => {
            return { id: new Date().getTime().toString(), name: name, type: type }
        }

        const postProcesssCreateHabito = () => {
            inputNameHabito.value = '';
            selectTagsHabito.value = 'seleccionar';
            inputNameHabito.focus()
        }

        btnCreateHabit.addEventListener('click',async(event) => {

            console.log('im here');

            event.preventDefault()

            if (verifyDataHabito(inputNameHabito.value, selectTagsHabito.value)) {

                let indexTagHabito = selectTagsHabito.selectedIndex
                let tagHabitoName = selectTagsHabito.options[indexTagHabito].text
                let nameHabito = inputNameHabito.value

                let Habito = createHabit({ name: nameHabito, type: tagHabitoName })

                // process component creation
                let componentHabitoCard = new HabitCard(Habito)
                let habitCard = await componentHabitoCard.getTemplate()
                dashboardAllHabit.prepend(habitCard)// class -> dashboard-all-habit
                componentHabitoCard.listener()

                this.repo.create(Habito)

                postProcesssCreateHabito()

            } else {
                return null
            }
        })
        
    }

    getTemplate(){

        let formCreateHabit = `
            <form>
                <input type="text" placeholder = "nombre del habito" id = "input-name-habito">
                <div class = "row-form">
                    <label for="tags"> <img src='./resources/vectors/tag.svg' alt="o"></label>
                    <select name="tags" id="select-tags-habito">
                        <option value="seleccionar">Seleccionar</option>
                        <option value="personal">Personal</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="pasion">Pasion</option>
                    </select>
                </div>
                <button type="button" id="btn-create-habito"> <img src='./resources/vectors/plus-circle.svg' alt="o" type="image/svg"></button>
            </form>
        `

        let container =
            `
                <div class="dlh1">
                
                    <nav class="mav-main-dashboard">
                
                        ${formCreateHabit}
                
                    </nav>
                
                    <div class="container-table">
                
                        <div class="table-habito" cellspacing="0" cellpadding="0">
                
                            <div class="table-head">
                                <div class="table-head-tr">
                                    <span class="th1">Name</span>
                                    <span class="th2">Type</span>
                                    <span class="th3">Actions</span>
                                </div>
                            </div>
                
                            <div class="dashboard-all-habito">
                
                
                            </div>
                
                        </div>
                    </div>
                </div>
                
                <div class="selected-habito">
                
                </div>

            `
        return container;

    }
    

}

const containerHabits = new ContainerHabits(habitRepo)

export default containerHabits;