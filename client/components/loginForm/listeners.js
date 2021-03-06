/* login controllers */
const listenersLogin = () => {
    const formRegister = document.querySelector('.option-register')
    const btnRegister = document.getElementById('btn-register')
    const btnToLogin = document.getElementById('btn-to-login')
    const submitLoginbtn = document.getElementById('btn-submit-login')
    const value_left = '0'
    const value_left_toLogin = '100%'

    const changeToRegister = () => {
        formRegister.style.left = value_left
    }
    const changeToLogin = () => {
        formRegister.style.left = value_left_toLogin
    }
    const processDataLogin = () => {
        localStorage.setItem('isLogged', true)
        window.location.hash = '/Dashboard'
    }

    submitLoginbtn.addEventListener('click', processDataLogin)
    btnRegister.addEventListener('click', changeToRegister)
    btnToLogin.addEventListener('click', changeToLogin)
}


export default listenersLogin;