var habits = [
    { id: 'hola1', name: 'ejercicio', type: 'Pasion' },
    { id: 'hola2', name: 'perrear', type: 'Pasion' },
    { id: 'hola3', name: 'bailar', type: 'Pasion' },
] 
/*
    habit 
        id
        name
        type
*/
class HabitRepo {

    constructor(data){
        this.data = data
        this.limit = 15
    }

    find(id){
        if (id) {
            let report = this.data.filter(data => {
                if (data.id === id) {
                    return data
                }
            })
            return report
        }else{
            let report = this.data.slice(0,this.limit)
            return report
        }
    }

    create(object){
        if (object){
            this.data.push(object)
            return object
        }
        else{
            return null
        }
    }

    update(object){
        if (object) {

            this.data.map(data => {
                if (object.id === data.id ){
                    return object
                }else {
                    return data
                }
            })

            return object

        }else {
            return null
        }
    }

    delete(_id) {
        if (!_id){
            return null
        }else{
            let newData = this.data.filter(data => data.id !== _id)
            this.data = newData
            return _id
        }
    }
        
}

const habitRepo = new HabitRepo(habits)

export default habitRepo