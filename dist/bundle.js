(()=>{const n=document.getElementById("container"),o='\n    <div class = "habitoCard">\n        <h2>nombre del habito</h2>\n        <div class ="habitoCard-logs">\n            <div class = "container-habitoCard-monitoring">\n                <div class="habitoCard-monitoring">\n\n                </div>\n            </div>\n            <div class="tags-habitoCard">\n                aca van a ir los tags \n            </div>\n        </div>\n    </div>\n',a='\n    <nav class = "dashboard-nav-main">\n        <div class="logo">\n            logo\n        </div>\n        <div class="dashboard-options-nav-main">\n            <button>log out</button>\n        </div>\n    </nav>\n    <nav class =  "mav-main-dashboard">\n        <button>Create Habito</button>\n    </nav>\n    <div class = "dashboard-list-habito">\n        <div class ="dashboard-all-habito">\n            '.concat(o,"\n            ").concat(o,"\n            ").concat(o,"\n            ").concat(o,'\n        </div>\n        <div class = "selected-habito">\n            mostrar log completo del habito\n        </div>\n    </div>\n    <footer>\n        this is our footer\n    </footer>\n'),e=async o=>{switch(console.log("aqui antes del switch"+o),await o){case"#/":console.log("aqui"),n.innerHTML='\n    <nav class="home-nav-main">\n        <div class="logo">\n        </div>\n        <div class="options-home-nav-main">\n            <a class = "btn-login" href = "#/Login">login</a>\n        </div>\n    </nav>\n    <div class = "home-hero">\n        here is our hero\n    </div>\n    <div class = "home-description">\n\n    </div>\n    <footer>\n        this is our footer\n    </footer>\n';break;case"#/Login":n.innerHTML='\n    <div class = "container-form">\n        <div class="logo-aplication">\n            <h2>aplication logo</h2>\n            <p>aplication description</p>\n        </div>\n        <div class="switch-options-forms">\n            <div class="option-login">\n                <form>\n                    <input type="text" placeholder="username" name="usename" />\n                    <input type="password" placeholder="password" name="password" />\n                </form>\n                <button id = "btn-submit-login" >login</button>\n                <div class="form-option-register">\n                    <p>no te has registrado ? <button id="btn-register">Registrarse</button> </p>\n                </div>\n            </div>\n            <div class="option-register">\n                <label for="fullaname">Nombres completos</label>\n                <input type="text" placeholder="fullname" name="fullname" required/>\n                <label for="email">Correo</label>\n                <input type="email" placeholder="your email" name="email" required/>\n                <label for="username">Username</label>\n                <input type="text" placeholder="username" name="username" required/>\n                <label for="password">Password</label>\n                <input type="text" placeholder="password" name="password" required/>\n                <label for="password2">Confirm password</label>\n                <input type="text" placeholder="confirm password" name="password2" required>\n                <button>Register</button>\n                <div>\n                    <p>tengo una cuenta <button id = "btn-to-login" >Login</button></p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n',(()=>{const n=document.querySelector(".option-register"),o=document.getElementById("btn-register"),a=document.getElementById("btn-to-login");document.getElementById("btn-submit-login").addEventListener("click",(()=>{window.location.hash="/Dashboard"})),o.addEventListener("click",(()=>{n.style.left="0"})),a.addEventListener("click",(()=>{n.style.left="100%"}))})();break;case"#/Dashboard":n.innerHTML=a;break;default:n.innerHTML='\n    <div class="container-404">\n        <div>\n            <h2>404</h2>\n            <p>ruta no encontrada</p>\n        </div>\n    </div>\n'}};window.onloadstart=()=>{window.location.hash="/"},window.addEventListener("load",(n=>{console.log(window.location.hash),e(window.location.hash)})),window.addEventListener("hashchange",(n=>{console.log(window.location.hash),e(window.location.hash)}))})();