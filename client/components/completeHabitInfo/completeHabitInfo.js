import {listenersCompleteInfoHabito} from './listeners'
class CompleteInfoHabit {
    cosntructor(){

    }
    listeners(){
        listenersCompleteInfoHabito()
    }
    getTemplate(){
        const renderCompleteHabito = () => {
            const completeInfoHabito =
                `
                    <div class = "completeInfoHabito">
                        <h2>Titulo de habito</h2>
                        <div class="completelog">
                            <div class = "log-habito">
                                <div class="graf1">
                                    grafico de dias usando
                                </div>
                                <div class="graf2">
                                    grafico de otros elementos
                                </div>               
                            </div>
                        </div>
                        <nav class ="funcionalidades-anotation">
                            <form action="" id = "form-create-anotation">
                                <textarea id="text-area-anotation"name="comentario" id="" cols="30" rows="2"></textarea>
                                <button id = "btn-add-anotation"> <img src="./resources/vectors/plus-circle.svg" alt="o">agregar</button>
                            </form>
                        </nav>
                        <div class = "anotation-logs">
                        </div>
                    </div>
                `
            return completeInfoHabito
        }
        return renderCompleteHabito()
    }
    render(container){

        let html = this.getTemplate()
        container.innerHTML = html;
        this.listeners()

    }
}


const completeInfoHabit = new CompleteInfoHabit()

export default completeInfoHabit;