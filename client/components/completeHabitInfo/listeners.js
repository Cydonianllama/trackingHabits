import renderAnotationLog from '../anotation/anotation'

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
        let anotationComponent = await createAnotation(anotation)
        let templateAnotationLog = await renderAnotationLog(anotationComponent)
        anotationLogs.innerHTML += templateAnotationLog
        postAddAnotation()
    }
    buttonAddAnotation.addEventListener('click', addAnotation)
    //C_addComment()
}