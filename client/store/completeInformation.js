var completeInformation = [
    {
        id : 'complete-1',
        idHabit : 'hola1',
        title : 'ejercicio',
        daysTracking : [],
        anotations : [
            {
                idAnotation : 'anot-1',
                text : 'this is a test 1 ',
                dateCreattion : '---'
            },
            {
                idAnotation: 'anot-2',
                text: 'this is a test 2',
                dateCreattion: '---'
            }
        ]
    },
    {
        id: 'complete-2',
        idHabit: 'hola2',
        title: 'perrear',
        daysTracking: [],
        anotations: [
            {
                idAnotation: 'anot-1',
                text: 'this is a test for perrear ',
                dateCreattion: '---'
            }
        ]
    },
    {
        id: 'complete-3',
        idHabit: 'hola3',
        title: 'bailar',
        daysTracking: [],
        anotations: [
            {
                idAnotation: 'anot-1',
                text: 'this is a test for bailar ',
                dateCreattion: '---'
            }
        ]
    }
]

class CompleteInformation {

    constructor(data) {
        this.data = data
        this.limit = 15
    }

    getLengthString(){
        return this.data.length.toString()
    }

    find(id) {
        if (id) {
            let report = this.data.filter(data => {
                if (data.id === id) {
                    return data
                }
            })
            return report
        } else {
            let report = this.data.slice(0, this.limit)
            return report
        }
    }

    findByHabitID(id){
        if (id) {
            let report = this.data.filter(data => {
                if (data.idHabit === id) {
                    return data
                }
            })
            return report
        } else {
            let report = this.data.slice(0, this.limit)
            return report
        }
    } 

    createAnotation(idHabit,object){
        let newArray = this.data.map(data => {
            if (data.idHabit === idHabit){
                console.log('puching in :',data)
                data.anotations.push(object)
                return data
            }
            return data
        })
        this.data = newArray
    }
    create(object) {
        if (object) {
            this.data.push(object)
            return object
        }
        else {
            return null
        }
    }

    update(object) {
        if (object) {

            this.data.map(data => {
                if (object.id === data.id) {
                    return object
                } else {
                    return data
                }
            })

            return object

        } else {
            return null
        }
    }

    delete(_id) {
        if (!_id) {
            return null
        } else {
            let newData = this.data.filter(data => data.id !== _id)
            this.data = newData
            return _id
        }
    }
}

export const completeInformation_ = new CompleteInformation(completeInformation)