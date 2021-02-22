export const ListenerShowOptionsProfile = () => {
    let btnProfileHome = document.getElementById('btn-profile-home')
    const show = () => {
        console.log('still in development');
    }
    btnProfileHome.addEventListener('click', show)
}

export const isLoggedChangeLoginHome = async (isLogged) => {
    let optionsProfileTemplate =
        `
        <div class = "options-profile">
            <button id = "btn-myProfile">my profile</button>
            <button id = "btn-myDashboard">my dashboard</button>
            <button id = "btn-logOut">Log out</button>
        </div>
    `
    let UserTemplate =
        `
        <div class = "userProfile-home">
            <button id = "btn-profile-home">
                see opttions
            </button>
            ${optionsProfileTemplate}
        </di>
    `
    let loginTemplate =
        `
        <a class = "btn-login" href = "#/Login">login</a>
    `
    if (isLogged === 'true') return UserTemplate
    else if (isLogged === 'false') return loginTemplate
    else return `An error has ocurred`
}
