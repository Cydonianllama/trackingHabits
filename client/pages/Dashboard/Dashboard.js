const renderDashboard = async (currentFunctionTemplate) => {
    let dashboard =
        `
     <nav class = "dashboard-nav-main">
        <div class="logo">
            logo
        </div>
        <div class="wraper-profile">
            <div class ="profile">
                <div class ="avatar">

                </div>
                <p>hello <span>name</span></p>
                <div class ="actions-profile">
                    <input type="checkbox" name="chk-action-profile" id="chk-ap"> <label for="chk-ap">v</label>
                    <ul class ="slider-mav-profile">
                        <li><button>an action</button></li>
                        <li><button id="btn-log-out-dashboard">log out</button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </nav>
    <div class = "routes-dashboard">
        <input type="radio" name="choice" id ="rb1" checked > <label for="rb1">Habitos</label>
        <input type="radio" name="choice" id ="rb2"> <label for="rb2">Horario</label>
        <input type="radio" name="choice" id ="rb3"> <label for="rb3">Archivados</label>
        <input type="radio" name="choice" id ="rb4"> <label for="rb4">preferencias</label>
    </div>
    <div class = "dashboard-list-habito">
        ${await currentFunctionTemplate}
    </div>
    <footer class ="footer-dashboard">
        <p>@All right reserve by CydonianLlama</p>
        <a href="https://storyset.com/web">Illustration by Freepik Storyset</a>
    </footer>
    `
    return dashboard
}


export default renderDashboard;