const listenersAnotationLog = () => {
    const btnEditAnotationLog = document.getElementById('btn-edit-anotation-log')
    const btnDeleteAnotationLog = document.getElementById('btn-delete-anotation-log')

    const EditAnotation = () => {
        console.log('still in development')
    }
    const DeleteAnotation = () => {
        console.log('still in development')
    }
    btnEditAnotationLog.addEventListener('click', EditAnotation)
    btnDeleteAnotationLog.addEventListener('click', DeleteAnotation)
}

export default listenersAnotationLog;