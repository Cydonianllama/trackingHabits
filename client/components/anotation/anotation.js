import listenersAnotationLog from './listener'
class AnotationLog {

    constructor(data){
        this.data = data
    }

    render(){
        let html = this.getTemplate()

    }

    listener(){
        listenersAnotationLog()
    }

    getTemplate(){

        const {content} = this.data

        const anotationLog =
            `
            <div class = "anotation-log">
                <div class = "header-anotation-log">
                    <span>fehca de anotacion</span>
                    <span>tag de anotacion</span>
                </div>
                <div class = "description-anotation-log">
                    <p>${content}</p>
                </div>
                <div class = "options-anotation-log">
                    <button id = "btn-edit-anotation-log" >edit</button>
                    <button id = "btn-delete-anotation-log">delete</button>
                </div>
            </div>
            `
        return anotationLog

    }
}


export default AnotationLog;