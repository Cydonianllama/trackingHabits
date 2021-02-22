/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/router */ \"./client/router/router.js\");\n\n\nconst app = () => {\n  //localStorage para pruebas \n  localStorage.setItem('isLogged', 'false');\n  window.location.hash = '/Home';\n\n  const locationHash = () => {\n    window.location.hash = '/Home';\n    (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.default)(window.location.hash);\n  };\n\n  window.onloadstart = locationHash;\n  window.addEventListener('load', e => {\n    console.log(window.location.hash);\n    (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.default)(window.location.hash);\n  });\n  window.addEventListener('hashchange', e => {\n    console.log(window.location.hash);\n    (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.default)(window.location.hash);\n  });\n};\n\napp();\n\n//# sourceURL=webpack://notas/./client/app.js?");

/***/ }),

/***/ "./client/components/anotation/anotation.js":
/*!**************************************************!*\
  !*** ./client/components/anotation/anotation.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst renderAnotationLog = async ({\n  content\n}) => {\n  const anotationLog = \"\\n    <div class = \\\"anotation-log\\\">\\n        <div class = \\\"header-anotation-log\\\">\\n            <span>fehca de anotacion</span>\\n            <span>tag de anotacion</span>\\n        </div>\\n        <div class = \\\"description-anotation-log\\\">\\n            <p>\".concat(content, \"</p>\\n        </div>\\n        <div class = \\\"options-anotation-log\\\">\\n            <button id = \\\"btn-edit-anotation-log\\\" >edit</button>\\n            <button id = \\\"btn-delete-anotation-log\\\">delete</button>\\n        </div>\\n    </div>\\n    \");\n  return anotationLog;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAnotationLog);\n\n//# sourceURL=webpack://notas/./client/components/anotation/anotation.js?");

/***/ }),

/***/ "./client/components/completeHabitInfo/completeHabitInfo.js":
/*!******************************************************************!*\
  !*** ./client/components/completeHabitInfo/completeHabitInfo.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst renderCompleteHabito = () => {\n  const processNumeration = () => {\n    console.log('still in development');\n  };\n\n  const completeInfoHabito = \"\\n    <div class = \\\"completeInfoHabito\\\">\\n        <h2>Titulo de habito</h2>\\n        <div class=\\\"completelog\\\">\\n            <div class = \\\"log-habito\\\">\\n                <div class=\\\"graf1\\\">\\n                    grafico de dias usando\\n                </div>\\n                <div class=\\\"graf2\\\">\\n                    grafico de otros elementos\\n                </div>               \\n            </div>\\n        </div>\\n        <nav class =\\\"funcionalidades-anotation\\\">\\n            <form action=\\\"\\\" id = \\\"form-create-anotation\\\">\\n                <textarea id=\\\"text-area-anotation\\\"name=\\\"comentario\\\" id=\\\"\\\" cols=\\\"30\\\" rows=\\\"2\\\"></textarea>\\n                <button id = \\\"btn-add-anotation\\\"> <img src=\\\"./resources/vectors/plus-circle.svg\\\" alt=\\\"o\\\">agregar</button>\\n            </form>\\n        </nav>\\n        <div class = \\\"anotation-logs\\\">\\n        </div>\\n    </div>\\n    \";\n  return completeInfoHabito;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCompleteHabito);\n\n//# sourceURL=webpack://notas/./client/components/completeHabitInfo/completeHabitInfo.js?");

/***/ }),

/***/ "./client/components/completeHabitInfo/listeners.js":
/*!**********************************************************!*\
  !*** ./client/components/completeHabitInfo/listeners.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export listenersCompleteInfoHabito [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenersCompleteInfoHabito\": () => /* binding */ listenersCompleteInfoHabito\n/* harmony export */ });\n/* harmony import */ var _anotation_anotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anotation/anotation */ \"./client/components/anotation/anotation.js\");\n\nconst listenersCompleteInfoHabito = () => {\n  const buttonAddAnotation = document.getElementById('btn-add-anotation');\n  const anotationLogs = document.querySelector('.anotation-logs');\n  const textAreaAnotation = document.getElementById('text-area-anotation');\n\n  let postAddAnotation = () => {\n    textAreaAnotation.value = '';\n    textAreaAnotation.focus();\n  };\n\n  let createAnotation = async ({\n    content\n  }) => {\n    return {\n      content: content\n    };\n  };\n\n  const addAnotation = async event => {\n    let anotation = {\n      content: textAreaAnotation.value\n    };\n    event.preventDefault();\n    let anotationComponent = await createAnotation(anotation);\n    let templateAnotationLog = await (0,_anotation_anotation__WEBPACK_IMPORTED_MODULE_0__.default)(anotationComponent);\n    anotationLogs.innerHTML += templateAnotationLog;\n    postAddAnotation();\n  };\n\n  buttonAddAnotation.addEventListener('click', addAnotation); //C_addComment()\n};\n\n//# sourceURL=webpack://notas/./client/components/completeHabitInfo/listeners.js?");

/***/ }),

/***/ "./client/components/habitCard/habitCard.js":
/*!**************************************************!*\
  !*** ./client/components/habitCard/habitCard.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _tagHabit_tagHabit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tagHabit/tagHabit */ \"./client/components/tagHabit/tagHabit.js\");\n\n\nconst renderHabitoCard = async ({\n  name,\n  type\n}) => {\n  const obtainTagHabito = () => {\n    console.log('still in development');\n  };\n\n  const habitoCard = \"\\n        <tr class =\\\"habitoCard\\\">\\n            <td>\".concat(name, \"</td>\\n            <td> \").concat(await (0,_tagHabit_tagHabit__WEBPACK_IMPORTED_MODULE_0__.default)(type), \" </td>\\n            <td>\\n                <div class=\\\"actions-habito-card\\\">\\n                    <button id=\\\"btn-edit-habitocard\\\"> <img src='./resources/vectors/edit-2.svg' alt=\\\"o\\\"></button>\\n                    <button><img src='./resources/vectors/archive.svg' alt=\\\"o\\\"></button>\\n                    <button id=\\\"btn-delete-habitocard\\\"> <img src='./resources/vectors/trash-2.svg' alt=\\\"o\\\"></button>\\n                </div>\\n            </td>\\n        </tr>\\t\\n\\n    \");\n  return habitoCard;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHabitoCard);\n\n//# sourceURL=webpack://notas/./client/components/habitCard/habitCard.js?");

/***/ }),

/***/ "./client/components/habitCard/listeners.js":
/*!**************************************************!*\
  !*** ./client/components/habitCard/listeners.js ***!
  \**************************************************/
/*! namespace exports */
/*! export listenerHabitoCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenerHabitoCard\": () => /* binding */ listenerHabitoCard\n/* harmony export */ });\n/* harmony import */ var _completeHabitInfo_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../completeHabitInfo/listeners */ \"./client/components/completeHabitInfo/listeners.js\");\n/* harmony import */ var _completeHabitInfo_completeHabitInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../completeHabitInfo/completeHabitInfo */ \"./client/components/completeHabitInfo/completeHabitInfo.js\");\n\n\nconst listenerHabitoCard = () => {\n  const habitoCard_ = document.querySelectorAll('.habitoCard'); // conatiner - in dashboard template \n\n  const completeInfoHabitoContainer = document.querySelector('.selected-habito');\n\n  const activateCompleteinfoHabitoListener = () => {\n    if (completeInfoHabitoContainer === null) return;else (0,_completeHabitInfo_listeners__WEBPACK_IMPORTED_MODULE_0__.listenersCompleteInfoHabito)();\n  }; //selected-habito - is in dashboard\n\n\n  const ContainerSelectedHabito = document.querySelector('.selected-habito');\n  habitoCard_.forEach(item => {\n    item.addEventListener('click', async e => {\n      let templateCompleteInfoHabito = await (0,_completeHabitInfo_completeHabitInfo__WEBPACK_IMPORTED_MODULE_1__.default)();\n      ContainerSelectedHabito.innerHTML = templateCompleteInfoHabito;\n      activateCompleteinfoHabitoListener();\n      console.log('activate complete log habito : still in development');\n    });\n  });\n};\n\n//# sourceURL=webpack://notas/./client/components/habitCard/listeners.js?");

/***/ }),

/***/ "./client/components/login/listeners.js":
/*!**********************************************!*\
  !*** ./client/components/login/listeners.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* login controllers */\nconst listenersLogin = () => {\n  const formRegister = document.querySelector('.option-register');\n  const btnRegister = document.getElementById('btn-register');\n  const btnToLogin = document.getElementById('btn-to-login');\n  const submitLoginbtn = document.getElementById('btn-submit-login');\n  const value_left = '0';\n  const value_left_toLogin = '100%';\n\n  const changeToRegister = () => {\n    formRegister.style.left = value_left;\n  };\n\n  const changeToLogin = () => {\n    formRegister.style.left = value_left_toLogin;\n  };\n\n  const processDataLogin = () => {\n    localStorage.setItem('isLogged', true);\n    window.location.hash = '/Dashboard';\n  };\n\n  submitLoginbtn.addEventListener('click', processDataLogin);\n  btnRegister.addEventListener('click', changeToRegister);\n  btnToLogin.addEventListener('click', changeToLogin);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listenersLogin);\n\n//# sourceURL=webpack://notas/./client/components/login/listeners.js?");

/***/ }),

/***/ "./client/components/login/login.js":
/*!******************************************!*\
  !*** ./client/components/login/login.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst login = \"\\n    <div class = \\\"container-form\\\">\\n        <div class=\\\"logo-aplication\\\">\\n            <h2>aplication logo</h2>\\n            <p>aplication description</p>\\n        </div>\\n        <div class=\\\"switch-options-forms\\\">\\n            <div class=\\\"option-login\\\">\\n                <form>\\n                    <input type=\\\"text\\\" placeholder=\\\"username\\\" name=\\\"usename\\\" />\\n                    <input type=\\\"password\\\" placeholder=\\\"password\\\" name=\\\"password\\\" />\\n                </form>\\n                <button id = \\\"btn-submit-login\\\" >login</button>\\n                <div class=\\\"form-option-register\\\">\\n                    <p>no te has registrado ? <button id=\\\"btn-register\\\">Registrarse</button> </p>\\n                </div>\\n            </div>\\n            <div class=\\\"option-register\\\">\\n                <label for=\\\"fullaname\\\">Nombres completos</label>\\n                <input type=\\\"text\\\" placeholder=\\\"fullname\\\" name=\\\"fullname\\\" required/>\\n                <label for=\\\"email\\\">Correo</label>\\n                <input type=\\\"email\\\" placeholder=\\\"your email\\\" name=\\\"email\\\" required/>\\n                <label for=\\\"username\\\">Username</label>\\n                <input type=\\\"text\\\" placeholder=\\\"username\\\" name=\\\"username\\\" required/>\\n                <label for=\\\"password\\\">Password</label>\\n                <input type=\\\"text\\\" placeholder=\\\"password\\\" name=\\\"password\\\" required/>\\n                <label for=\\\"password2\\\">Confirm password</label>\\n                <input type=\\\"text\\\" placeholder=\\\"confirm password\\\" name=\\\"password2\\\" required>\\n                <button>Register</button>\\n                <div class = \\\"come-to-login\\\">\\n                    <p>tengo una cuenta <button id = \\\"btn-to-login\\\" >Login</button></p>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n//# sourceURL=webpack://notas/./client/components/login/login.js?");

/***/ }),

/***/ "./client/components/tagHabit/tagHabit.js":
/*!************************************************!*\
  !*** ./client/components/tagHabit/tagHabit.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst renderTagHabito = async name => {\n  const tagHabito = \"\\n    <span class = \\\"tag-habito\\\">\".concat(name, \"</span>\\n    \");\n  return tagHabito;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTagHabito);\n\n//# sourceURL=webpack://notas/./client/components/tagHabit/tagHabit.js?");

/***/ }),

/***/ "./client/helpers/ignoreAnclas.js":
/*!****************************************!*\
  !*** ./client/helpers/ignoreAnclas.js ***!
  \****************************************/
/*! namespace exports */
/*! export ignoreAnclas [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ignoreAnclas\": () => /* binding */ ignoreAnclas\n/* harmony export */ });\nconst ignoreAnclas = hashCode => {\n  switch (hashCode) {\n    case '#Home':\n      return true;\n\n    case '#features':\n      return true;\n\n    case '#fake-pricing':\n      return true;\n\n    case '#git-hub-integration':\n      return true;\n\n    default:\n      return false;\n  }\n};\n\n//# sourceURL=webpack://notas/./client/helpers/ignoreAnclas.js?");

/***/ }),

/***/ "./client/pages/404Page.js":
/*!*********************************!*\
  !*** ./client/pages/404Page.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst page404 = \"\\n    <div class=\\\"container-404\\\">\\n        <div>\\n            <h2>404</h2>\\n            <p>ruta no encontrada</p>\\n        </div>\\n    </div>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page404);\n\n//# sourceURL=webpack://notas/./client/pages/404Page.js?");

/***/ }),

/***/ "./client/pages/Dashboard/Dashboard.js":
/*!*********************************************!*\
  !*** ./client/pages/Dashboard/Dashboard.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst renderDashboard = async currentFunctionTemplate => {\n  let dashboard = \"\\n     <nav class = \\\"dashboard-nav-main\\\">\\n        <div class=\\\"logo\\\">\\n            logo\\n        </div>\\n        <div class=\\\"wraper-profile\\\">\\n            <div class =\\\"profile\\\">\\n                <div class =\\\"avatar\\\">\\n\\n                </div>\\n                <p>hello <span>name</span></p>\\n                <div class =\\\"actions-profile\\\">\\n                    <input type=\\\"checkbox\\\" name=\\\"chk-action-profile\\\" id=\\\"chk-ap\\\"> <label for=\\\"chk-ap\\\">v</label>\\n                    <ul class =\\\"slider-mav-profile\\\">\\n                        <li><button>an action</button></li>\\n                        <li><button id=\\\"btn-log-out-dashboard\\\">log out</button></li>\\n                    </ul>\\n                </div>\\n            </div>\\n            \\n        </div>\\n    </nav>\\n    <div class = \\\"routes-dashboard\\\">\\n        <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb1\\\" checked > <label for=\\\"rb1\\\">Habitos</label>\\n        <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb2\\\"> <label for=\\\"rb2\\\">Horario</label>\\n        <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb3\\\"> <label for=\\\"rb3\\\">Archivados</label>\\n        <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb4\\\"> <label for=\\\"rb4\\\">preferencias</label>\\n    </div>\\n    <div class = \\\"dashboard-list-habito\\\">\\n        \".concat(await currentFunctionTemplate, \"\\n    </div>\\n    <footer class =\\\"footer-dashboard\\\">\\n        <p>@All right reserve by CydonianLlama</p>\\n        <a href=\\\"https://storyset.com/web\\\">Illustration by Freepik Storyset</a>\\n    </footer>\\n    \");\n  return dashboard;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderDashboard);\n\n//# sourceURL=webpack://notas/./client/pages/Dashboard/Dashboard.js?");

/***/ }),

/***/ "./client/pages/Dashboard/listenersDashboard.js":
/*!******************************************************!*\
  !*** ./client/pages/Dashboard/listenersDashboard.js ***!
  \******************************************************/
/*! namespace exports */
/*! export listenersDashboard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenersDashboard\": () => /* binding */ listenersDashboard\n/* harmony export */ });\n/* harmony import */ var _views_viewHabits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/viewHabits */ \"./client/views/viewHabits.js\");\n/* harmony import */ var _views_listenersSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/listenersSchedule */ \"./client/views/listenersSchedule.js\");\n/* harmony import */ var _views_archivedTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/archivedTemplate */ \"./client/views/archivedTemplate.js\");\n/* harmony import */ var _views_viewPreferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/viewPreferences */ \"./client/views/viewPreferences.js\");\n/* harmony import */ var _components_habitCard_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/habitCard/listeners */ \"./client/components/habitCard/listeners.js\");\n/* harmony import */ var _components_habitCard_habitCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/habitCard/habitCard */ \"./client/components/habitCard/habitCard.js\");\n\n\n\n\n\n\n\nconst switchDashboardScreens = (id, container) => {\n  switch (id) {\n    case 'rb1':\n      container.innerHTML = _views_viewHabits__WEBPACK_IMPORTED_MODULE_0__.default;\n      listenersDashboard();\n      break;\n\n    case 'rb2':\n      container.innerHTML = _views_listenersSchedule__WEBPACK_IMPORTED_MODULE_1__.default; //listenersHorario()\n\n      break;\n\n    case 'rb3':\n      container.innerHTML = _views_archivedTemplate__WEBPACK_IMPORTED_MODULE_2__.default;\n      break;\n\n    case 'rb4':\n      container.innerHTML = _views_viewPreferences__WEBPACK_IMPORTED_MODULE_3__.default;\n      break;\n  }\n};\n\nconst listenersDashboard = () => {\n  const routesToGo = document.querySelector('.routes-dashboard');\n  const dashboardAllHabito = document.querySelector('.dashboard-all-habito');\n  const btnLogutDashboard = document.getElementById('btn-log-out-dashboard');\n  const btnCreateHabito = document.getElementById('btn-create-habito'); //actions for the form of create an habit\n\n  const inputNameHabito = document.getElementById('input-name-habito');\n  const selectTagsHabito = document.getElementById('select-tags-habito');\n\n  const verifyDataHabito = (input_name, tag_habito) => {\n    console.log('verifyDataHabito', input_name, tag_habito);\n    if (input_name === null || input_name === undefined) return false;\n    if (tag_habito === \"seleccionar\" || tag_habito === \"seleccionar\") return false;\n    return true;\n  };\n\n  const postProcesssCreateHabito = () => {\n    inputNameHabito.value = '';\n    selectTagsHabito.value = 'seleccionar';\n    inputNameHabito.focus();\n  };\n\n  const createHabito = ({\n    name,\n    type\n  }) => {\n    return {\n      id: new Date().getTime().toString(),\n      name: name,\n      type: type\n    };\n  };\n\n  const activateHabitoCardsListener = () => {\n    if (dashboardAllHabito.innerHTML === null) return;else (0,_components_habitCard_listeners__WEBPACK_IMPORTED_MODULE_4__.listenerHabitoCard)();\n  };\n\n  const processDataHabito = async event => {\n    //data of the form of habit \n    event.preventDefault();\n\n    if (verifyDataHabito(inputNameHabito.value, selectTagsHabito.value)) {\n      let indexTagHabito = selectTagsHabito.selectedIndex;\n      let tagHabitoName = selectTagsHabito.options[indexTagHabito].text;\n      let nameHabito = inputNameHabito.value;\n      let Habito = createHabito({\n        name: nameHabito,\n        type: tagHabitoName\n      }); //C_createHabito(Habito)//fetching information\n\n      let templateHabitoCard = await (0,_components_habitCard_habitCard__WEBPACK_IMPORTED_MODULE_5__.default)(Habito);\n      dashboardAllHabito.innerHTML += templateHabitoCard;\n      postProcesssCreateHabito();\n      activateHabitoCardsListener(); //if any card there ,this does not activate  \n    } else {\n      return null;\n    }\n  };\n\n  const processSignOut = () => {\n    window.localStorage.setItem('isLogged', false);\n    window.location.hash = '#/Home';\n    C_signout(); //fetching information\n  };\n\n  activateHabitoCardsListener(); //if any card there ,this does not activate  \n\n  btnLogutDashboard.addEventListener('click', processSignOut);\n  btnCreateHabito.addEventListener('click', processDataHabito);\n  routesToGo.childNodes.forEach(item => {\n    item.addEventListener('click', async e => {\n      let container = document.querySelector('.dashboard-list-habito');\n\n      if (e.target.checked === true) {\n        switchDashboardScreens(e.target.id, container);\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://notas/./client/pages/Dashboard/listenersDashboard.js?");

/***/ }),

/***/ "./client/pages/Home/Home.js":
/*!***********************************!*\
  !*** ./client/pages/Home/Home.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./client/pages/Home/utils.js\");\n\n\nvar renderHome = async () => {\n  var home = \"\\n    <nav class=\\\"home-nav-main\\\">\\n        <div class=\\\"logo\\\">\\n            LOGO\\n        </div>\\n        <ul class = \\\"ul-nav-main\\\">\\n            <li><a class = \\\"a-tag-nav\\\" href=\\\"#Home\\\">Home</a></li>\\n            <li><a class = \\\"a-tag-nav\\\" href=\\\"#features\\\">Features</a> </li>\\n            <li><a class = \\\"a-tag-nav\\\" href=\\\"#fake-pricing\\\">Pricing</a></li>\\n            <li><a class = \\\"a-tag-nav\\\" href=\\\"#git-hub-integration\\\">GitHub Repo</a></li>\\n        </ul>\\n        <div class=\\\"options-home-nav-main\\\">\\n            \".concat(await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isLoggedChangeLoginHome)(window.localStorage.getItem('isLogged')), \"\\n        </div>\\n    </nav>\\n\\n    <div class = \\\"home-hero\\\">\\n\\n        <div class =\\\"hero-content\\\">\\n            <h2>This is my <span>APP</span> Tracking</h2>\\n            <p>my firts app, developed in all aspects by me , im so happy with this project, i hope that you enjoy it like me enjoyed when i was developed this app</p>\\n            <a class=\\\"btn cta\\\" href=\\\"https://github.com/Cydonianllama\\\" target=\\\"_blank\\\">Contact Me</a>\\n        </div>\\n\\n        <img class=\\\"programming-amico\\\"src='./resources/vectors/Programming_amico.svg' alt=\\\"esta en una imagen\\\">\\n        \\n        <div style=\\\"height: 150px; width : 100%;overflow: hidden; position:absolute; bottom:0;\\\">\\n            <svg viewBox=\\\"0 0 500 150\\\" preserveAspectRatio=\\\"none\\\" style=\\\"height: 100%; width: 100%;\\\">\\n                <path d=\\\"M0.00,49.98 C222.63,159.38 349.20,-49.98 605.80,128.78 L538.66,210.69 L0.00,150.00 Z\\\"\\n                    style=\\\"stroke: none; fill: #00000027;\\\"></path>\\n            </svg>\\n        </div>\\n    </div>\\n\\n    <div class =\\\"features\\\" id =\\\"features\\\">\\n        <div class =\\\"container-features\\\">\\n            <div class =\\\"feature-1\\\">\\n                <h2>Manage Habits</h2>\\n                <p> <img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\"> you can create all your habit for managemment</p>\\n            </div>\\n            <div class =\\\"feature-2\\\">\\n                <h2>Audit Your Habits</h2>\\n                <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">you can see your progress and improve your skills</p>\\n            </div>\\n            <div class =\\\"feature-3\\\">\\n                <h2>Establish your Habits</h2>\\n                <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">you can program your habits in a moth ,day and year</p>\\n            </div>\\n            <div class =\\\"feature-4\\\">\\n                <h2>Export your data anytime you want</h2>\\n                <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">your have complete access to the data that you were creating</p>\\n            </div>\\n            <div class=\\\"feature-5\\\">\\n                <h2>Integrations with your tools</h2>\\n                <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">in progress but i promise this feature</p>\\n            </div>\\n        </div>\\n    </div>\\n    <div class =\\\"fake-pricing\\\" id =\\\"fake-pricing\\\">\\n        <div class=\\\"container-pricing\\\">\\n            <div class =\\\"pricing-basic\\\">\\n                <h2>Basic</h2>\\n                <ul class=\\\"list-features\\\">\\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">limited numbers of habits : 5</li> \\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">limeted calendar actions</li>  \\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">limited anotation actions</li>\\n                </ul>\\n                <button>Basic</button>\\n            </div>\\n            <div class=\\\"pricing-standar my-precious\\\">\\n                <h2>Standar</h2>\\n                <ul class=\\\"list-features\\\">\\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unlimited numbers of Habits</li>\\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unlimited calendar Actions</li>\\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unlimited anotation Actions</li>\\n                </ul>\\n                <button>Standar</button>\\n            </div>\\n            <div class=\\\"pricing-proffesional\\\">\\n                <h2>Professional</h2>\\n                <ul class=\\\"list-features\\\">\\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">all in standar features</li>\\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unique session</li>\\n                    <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">support team</li>\\n                </ul>\\n                <button>Professional</button>\\n            </div>\\n        </div>\\n    </div>\\n    <div class = \\\"git-hub-integration\\\" id =\\\"git-hub-integration\\\">\\n        <div class =\\\"line-app-container\\\">\\n            <div class = \\\"la\\\">\\n                mi primer deploying de una app\\n            </div>\\n            <div class =\\\"lal\\\">\\n                conociendo algunos de los conceptos que debo aprender\\n            </div>\\n            <div class=\\\"la\\\">\\n                pues, creo que no se hacer lineTimes :( , pero es mi primer intento ... lo har\\xE9 mejor despues :)\\n            </div>\\n        </div>\\n    </div>  \\n    <footer class=\\\"footer-main\\\">\\n        <p>SPA desarrollada por Erick Grandez :)</p>\\n        <p>Gracias a:<a href=\\\"https://storyset.com/web\\\">Illustration by Freepik Storyset</a></p>\\n    </footer>\\n    \");\n  container.innerHTML = home;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://notas/./client/pages/Home/Home.js?");

/***/ }),

/***/ "./client/pages/Home/utils.js":
/*!************************************!*\
  !*** ./client/pages/Home/utils.js ***!
  \************************************/
/*! namespace exports */
/*! export ListenerShowOptionsProfile [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isLoggedChangeLoginHome [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListenerShowOptionsProfile\": () => /* binding */ ListenerShowOptionsProfile,\n/* harmony export */   \"isLoggedChangeLoginHome\": () => /* binding */ isLoggedChangeLoginHome\n/* harmony export */ });\nconst ListenerShowOptionsProfile = () => {\n  let btnProfileHome = document.getElementById('btn-profile-home');\n\n  const show = () => {\n    console.log('still in development');\n  };\n\n  btnProfileHome.addEventListener('click', show);\n};\nconst isLoggedChangeLoginHome = async isLogged => {\n  let optionsProfileTemplate = \"\\n        <div class = \\\"options-profile\\\">\\n            <button id = \\\"btn-myProfile\\\">my profile</button>\\n            <button id = \\\"btn-myDashboard\\\">my dashboard</button>\\n            <button id = \\\"btn-logOut\\\">Log out</button>\\n        </div>\\n    \";\n  let UserTemplate = \"\\n        <div class = \\\"userProfile-home\\\">\\n            <button id = \\\"btn-profile-home\\\">\\n                see opttions\\n            </button>\\n            \".concat(optionsProfileTemplate, \"\\n        </di>\\n    \");\n  let loginTemplate = \"\\n        <a class = \\\"btn-login\\\" href = \\\"#/Login\\\">login</a>\\n    \";\n  if (isLogged === 'true') return UserTemplate;else if (isLogged === 'false') return loginTemplate;else return \"An error has ocurred\";\n};\n\n//# sourceURL=webpack://notas/./client/pages/Home/utils.js?");

/***/ }),

/***/ "./client/router/router.js":
/*!*********************************!*\
  !*** ./client/router/router.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _helpers_ignoreAnclas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/ignoreAnclas */ \"./client/helpers/ignoreAnclas.js\");\n/* harmony import */ var _views_viewHabits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/viewHabits */ \"./client/views/viewHabits.js\");\n/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Home/Home */ \"./client/pages/Home/Home.js\");\n/* harmony import */ var _pages_Home_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home/utils */ \"./client/pages/Home/utils.js\");\n/* harmony import */ var _components_login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/login */ \"./client/components/login/login.js\");\n/* harmony import */ var _components_login_listeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/login/listeners */ \"./client/components/login/listeners.js\");\n/* harmony import */ var _pages_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Dashboard/Dashboard */ \"./client/pages/Dashboard/Dashboard.js\");\n/* harmony import */ var _pages_Dashboard_listenersDashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Dashboard/listenersDashboard */ \"./client/pages/Dashboard/listenersDashboard.js\");\n/* harmony import */ var _pages_404Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/404Page */ \"./client/pages/404Page.js\");\n\n\n\n\n\n\n\n\n\n\nconst router = async hash => {\n  console.log('funcion router accionada  : ' + hash);\n  console.log('isLogged log : ' + window.localStorage.getItem('isLogged'));\n  let hash_ = await hash;\n  if ((0,_helpers_ignoreAnclas__WEBPACK_IMPORTED_MODULE_0__.ignoreAnclas)(hash_)) return;\n\n  switch (hash_) {\n    case '#/Home':\n      await (0,_pages_Home_Home__WEBPACK_IMPORTED_MODULE_2__.default)();\n      if (window.localStorage.getItem('isLogged') === 'true') (0,_pages_Home_utils__WEBPACK_IMPORTED_MODULE_3__.ListenerShowOptionsProfile)();\n      break;\n\n    case '#/Login':\n      container.innerHTML = _components_login_login__WEBPACK_IMPORTED_MODULE_4__.default;\n      (0,_components_login_listeners__WEBPACK_IMPORTED_MODULE_5__.default)();\n      break;\n\n    case '#/Dashboard':\n      //container.innerHTML = dashboard\n      container.innerHTML = await (0,_pages_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__.default)(_views_viewHabits__WEBPACK_IMPORTED_MODULE_1__.default);\n      (0,_pages_Dashboard_listenersDashboard__WEBPACK_IMPORTED_MODULE_7__.listenersDashboard)(); //renderAllHabitoCard()\n\n      break;\n\n    default:\n      container.innerHTML = _pages_404Page__WEBPACK_IMPORTED_MODULE_8__.default;\n      break;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://notas/./client/router/router.js?");

/***/ }),

/***/ "./client/views/archivedTemplate.js":
/*!******************************************!*\
  !*** ./client/views/archivedTemplate.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet archivedTemplate = \"\\n    <div class =\\\"archivados\\\">\\n        <h2>Aca irian todos los habitos pasados</h2>\\n    </div>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (archivedTemplate);\n\n//# sourceURL=webpack://notas/./client/views/archivedTemplate.js?");

/***/ }),

/***/ "./client/views/listenersSchedule.js":
/*!*******************************************!*\
  !*** ./client/views/listenersSchedule.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst listenersHorario = () => {\n  function generate_year_range(start, end) {\n    var years = \"\";\n\n    for (var year = start; year <= end; year++) {\n      years += \"<option value='\" + year + \"'>\" + year + \"</option>\";\n    }\n\n    return years;\n  }\n\n  today = new Date();\n  currentMonth = today.getMonth();\n  currentYear = today.getFullYear();\n  selectYear = document.getElementById(\"year\");\n  selectMonth = document.getElementById(\"month\");\n  createYear = generate_year_range(1970, 2050);\n  /** or\r\n   * createYear = generate_year_range( 1970, currentYear );\r\n   */\n\n  document.getElementById(\"year\").innerHTML = createYear;\n  var calendar = document.getElementById(\"calendar\");\n  var lang = calendar.getAttribute('data-lang');\n  var months = \"\";\n  var days = \"\";\n  var monthDefault = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  var dayDefault = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n\n  if (lang == \"en\") {\n    months = monthDefault;\n    days = dayDefault;\n  } else {\n    months = monthDefault;\n    days = dayDefault;\n  }\n\n  var $dataHead = \"<tr>\";\n\n  for (dhead in days) {\n    $dataHead += \"<th data-days='\" + days[dhead] + \"'>\" + days[dhead] + \"</th>\";\n  }\n\n  $dataHead += \"</tr>\"; //alert($dataHead);\n\n  document.getElementById(\"thead-month\").innerHTML = $dataHead;\n  monthAndYear = document.getElementById(\"monthAndYear\");\n  showCalendar(currentMonth, currentYear);\n\n  function next() {\n    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;\n    currentMonth = (currentMonth + 1) % 12;\n    showCalendar(currentMonth, currentYear);\n  }\n\n  function previous() {\n    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;\n    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;\n    showCalendar(currentMonth, currentYear);\n  }\n\n  function jump() {\n    currentYear = parseInt(selectYear.value);\n    currentMonth = parseInt(selectMonth.value);\n    showCalendar(currentMonth, currentYear);\n  }\n\n  function showCalendar(month, year) {\n    var firstDay = new Date(year, month).getDay();\n    tbl = document.getElementById(\"calendar-body\");\n    tbl.innerHTML = \"\";\n    monthAndYear.innerHTML = months[month] + \" \" + year;\n    selectYear.value = year;\n    selectMonth.value = month; // creating all cells\n\n    var date = 1;\n\n    for (var i = 0; i < 6; i++) {\n      var row = document.createElement(\"tr\");\n\n      for (var j = 0; j < 7; j++) {\n        if (i === 0 && j < firstDay) {\n          cell = document.createElement(\"td\");\n          cellText = document.createTextNode(\"\");\n          cell.appendChild(cellText);\n          row.appendChild(cell);\n        } else if (date > daysInMonth(month, year)) {\n          break;\n        } else {\n          cell = document.createElement(\"td\");\n          cell.setAttribute(\"data-date\", date);\n          cell.setAttribute(\"data-month\", month + 1);\n          cell.setAttribute(\"data-year\", year);\n          cell.setAttribute(\"data-month_name\", months[month]);\n          cell.className = \"date-picker\";\n          cell.innerHTML = \"<span>\" + date + \"</span>\";\n\n          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {\n            cell.className = \"date-picker selected\";\n          }\n\n          row.appendChild(cell);\n          date++;\n        }\n      }\n\n      tbl.appendChild(row);\n    }\n  }\n\n  function daysInMonth(iMonth, iYear) {\n    return 32 - new Date(iYear, iMonth, 32).getDate();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listenersHorario);\n\n//# sourceURL=webpack://notas/./client/views/listenersSchedule.js?");

/***/ }),

/***/ "./client/views/viewHabits.js":
/*!************************************!*\
  !*** ./client/views/viewHabits.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet mainHabits = \"\\n        <div class = \\\"dlh1\\\">\\n            <nav class=\\\"mav-main-dashboard\\\">\\n                <form action=\\\"\\\">\\n                    <input type=\\\"text\\\" placeholder = \\\"nombre del habito\\\" id = \\\"input-name-habito\\\">\\n                    <label for=\\\"tags\\\"> <img src='./resources/vectors/tag.svg' alt=\\\"o\\\"> Select Tags :</label>\\n                    <select name=\\\"tags\\\" id=\\\"select-tags-habito\\\">\\n                        <option value=\\\"seleccionar\\\">Seleccionar</option>\\n                        <option value=\\\"personal\\\">Personal</option>\\n                        <option value=\\\"trabajo\\\">Trabajo</option>\\n                        <option value=\\\"pasion\\\">Pasion</option>\\n                    </select>\\n                    <button type=\\\"submit\\\" id=\\\"btn-create-habito\\\"> <img src='./resources/vectors/plus-circle.svg' alt=\\\"o\\\" type=\\\"image/svg\\\"> Create Habito</button>\\n                </form>\\n            </nav>\\n            <div class=\\\"container-table\\\">\\n                <table class=\\\"table-habito\\\">\\n                    <thead>\\n                        <tr>\\n                            <th class =\\\"th1\\\">Name</th>\\n                            <th class =\\\"th2\\\">Type</th>\\n                            <th class =\\\"th3\\\">Actions</th>\\n                        </tr>\\n                    </thead>\\n                    <tbody class=\\\"dashboard-all-habito\\\">\\n                \\n                    </tbody>\\n                </table>\\n            </div>\\n        </div>\\n        <div class = \\\"selected-habito\\\">\\n            \\n        </div>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainHabits);\n\n//# sourceURL=webpack://notas/./client/views/viewHabits.js?");

/***/ }),

/***/ "./client/views/viewPreferences.js":
/*!*****************************************!*\
  !*** ./client/views/viewPreferences.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet preferencesTemplate = \"\\n    <div class = \\\"preferences\\\">\\n        <ul class =\\\"nav-preferences\\\">\\n            <li><input type=\\\"radio\\\" name=\\\"opt-chk-preferences\\\" id=\\\"chk-preferences1\\\"><label for=\\\"chk-preferences1\\\">Tags</label></li>\\n            <li><input type=\\\"radio\\\" name=\\\"opt-chk-preferences\\\" id=\\\"chk-preferences2\\\"><label for=\\\"chk-preferences2\\\">type of something</label></li>\\n        </ul>\\n    </div>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preferencesTemplate);\n\n//# sourceURL=webpack://notas/./client/views/viewPreferences.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./client/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;