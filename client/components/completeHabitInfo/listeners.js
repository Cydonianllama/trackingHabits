import AnotationLog from '../anotation/anotation'

export const listenersCompleteInfoHabito = () => {
    
    const buttonAddAnotation = document.getElementById('btn-add-anotation')
    const anotationLogs = document.querySelector('.anotation-logs')
    const textAreaAnotation = document.getElementById('text-area-anotation')

    let postAddAnotation = () => {
        textAreaAnotation.value = ''
        textAreaAnotation.focus()
    }

    let createAnotation = async ({ content }) => {
        return { content: content }
    }
    const addAnotation = async (event) => {
        let anotation = {
            content: textAreaAnotation.value
        }

        event.preventDefault()

        let anotationData = await createAnotation(anotation)

        let templateAnotationLog = new AnotationLog(anotationData).getTemplate()
        anotationLogs.innerHTML += templateAnotationLog

        postAddAnotation()

    }

    buttonAddAnotation.addEventListener('click', addAnotation)
}