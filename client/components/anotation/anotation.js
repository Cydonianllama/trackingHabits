class AnotationLog {

    constructor(data){
        this.data = data
        this.currentComponent = null
    }

    render(container){

        let div = this.getTemplate()
        container.prepend(div)
        this.listener()

    }

    listener(){

        let anotationComponent = this.currentComponent

        let btnEdit = this.currentComponent.querySelector('.btn-edit-anotation-log')
        let btnDelete = this.currentComponent.querySelector('.btn-delete-anotation-log')

        btnDelete.addEventListener('click',(event)=>{
            anotationComponent.remove()
            event.preventDefault()
        })
    }

    getTemplate(){

        const {text} = this.data

        const div = document.createElement('div')
        div.classList.add('anotation-log')

        const anotationLog =
            `
                <div class = "header-anotation-log">
                    <small>fehca de anotacion</small>
                    <small>tag de anotacion</small>
                </div>
                <div class = "description-anotation-log">
                    <p>${text}</p>
                </div>
                <div class = "options-anotation-log">
                    <button class = "btn-edit-anotation-log" >edit</button>
                    <button class = "btn-delete-anotation-log">delete</button>
                </div>
            `
        div.innerHTML = anotationLog

        this.currentComponent = div

        return div

    }
}


export default AnotationLog;