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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/router */ \"./client/router/router.js\");\n\n\nclass App {\n  constructor(components, router) {\n    // handle of the change the page when hash change\n    this.router = router; // global state of the applicaction\n\n    this.state = {}; //local variables\n\n    localStorage.setItem('isLogged', 'false');\n    localStorage.setItem('currentPage', '/');\n  }\n\n  initConfiguration() {\n    window.location.hash = '/';\n\n    const locationHash = () => {\n      window.location.hash = '/';\n      (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.default)(window.location.hash);\n    };\n\n    window.onloadstart = locationHash;\n    window.addEventListener('hashchange', e => {\n      localStorage.setItem('currentPage', window.location.hash);\n      this.router.routing(window.location.hash);\n    });\n  }\n\n  run() {\n    this.initConfiguration();\n  }\n\n}\n\nconst aplication = new App([], _router_router__WEBPACK_IMPORTED_MODULE_0__.default);\naplication.run();\n\n//# sourceURL=webpack://notas/./client/app.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass AnotationLog {\n  constructor(data) {\n    this.data = data;\n    this.currentComponent = null;\n  }\n\n  render(container) {\n    let div = this.getTemplate();\n    container.prepend(div);\n    this.listener();\n  }\n\n  listener() {\n    let anotationComponent = this.currentComponent;\n    let btnEdit = this.currentComponent.querySelector('.btn-edit-anotation-log');\n    let btnDelete = this.currentComponent.querySelector('.btn-delete-anotation-log');\n    btnDelete.addEventListener('click', event => {\n      anotationComponent.remove();\n      event.preventDefault();\n    });\n  }\n\n  getTemplate() {\n    const {\n      text\n    } = this.data;\n    const div = document.createElement('div');\n    div.classList.add('anotation-log');\n    const anotationLog = \"\\n                <div class = \\\"header-anotation-log\\\">\\n                    <small>fehca de anotacion</small>\\n                    <small>tag de anotacion</small>\\n                </div>\\n                <div class = \\\"description-anotation-log\\\">\\n                    <p>\".concat(text, \"</p>\\n                </div>\\n                <div class = \\\"options-anotation-log\\\">\\n                    <button class = \\\"btn-edit-anotation-log\\\" >edit</button>\\n                    <button class = \\\"btn-delete-anotation-log\\\">delete</button>\\n                </div>\\n            \");\n    div.innerHTML = anotationLog;\n    this.currentComponent = div;\n    return div;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnotationLog);\n\n//# sourceURL=webpack://notas/./client/components/anotation/anotation.js?");

/***/ }),

/***/ "./client/components/completeHabitInfo/completeHabitInfo.js":
/*!******************************************************************!*\
  !*** ./client/components/completeHabitInfo/completeHabitInfo.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _anotation_anotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anotation/anotation */ \"./client/components/anotation/anotation.js\");\n/* harmony import */ var _store_completeInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/completeInformation */ \"./client/store/completeInformation.js\");\n// components\n\n\n\nclass CompleteInfoHabit {\n  cosntructor() {\n    this.currentComponent = null;\n    this.currentIDhabit = null;\n  } // this bind the ui with the data of the habit selected\n\n\n  setIDhabit(id) {\n    this.currentIDhabit = id;\n  }\n\n  listeners() {\n    const buttonAddAnotation = document.getElementById('btn-add-anotation');\n    const anotationLogs = document.querySelector('.anotation-logs');\n    const textAreaAnotation = document.getElementById('text-area-anotation');\n\n    let postAddAnotation = () => {\n      textAreaAnotation.value = '';\n      textAreaAnotation.focus();\n    };\n\n    let createAnotation = ({\n      text\n    }) => {\n      return {\n        text\n      };\n    };\n\n    const addAnotation = async event => {\n      if (textAreaAnotation.value.length === 0) return;\n      let anotation = {\n        text: textAreaAnotation.value\n      };\n      let anotationData = createAnotation(anotation);\n      let anotationLog = new _anotation_anotation__WEBPACK_IMPORTED_MODULE_0__.default(anotationData);\n      _store_completeInformation__WEBPACK_IMPORTED_MODULE_1__.completeInformation_.createAnotation(this.currentIDhabit, {\n        idAnotation: 'a',\n        text: anotationData,\n        dateCreation: new Date().toString()\n      });\n      await anotationLog.render(anotationLogs); //anotationLogs.innerHTML += templateAnotationLog\n\n      postAddAnotation();\n    };\n\n    buttonAddAnotation.addEventListener('click', addAnotation);\n  }\n\n  getTemplate() {\n    const div = document.createElement('div');\n    div.classList.add('completeInfoHabito');\n    const completeInfoHabit = \"       \\n            <h2 class = \\\"complete-info-title\\\"></h2>\\n            <div class=\\\"completelog\\\">\\n                <div class = \\\"log-habito\\\">\\n                    <div class=\\\"graf1\\\">\\n                        grafico de dias usando\\n                    </div>\\n                    <div class=\\\"graf2\\\">\\n                        grafico de otros elementos\\n                    </div>               \\n                </div>\\n            </div>\\n            <nav class =\\\"funcionalidades-anotation\\\">\\n                <form action=\\\"\\\" id = \\\"form-create-anotation\\\">\\n                    <textarea id=\\\"text-area-anotation\\\"name=\\\"comentario\\\" id=\\\"\\\" cols=\\\"30\\\" rows=\\\"2\\\"></textarea>\\n                    <button type = \\\"button\\\" id = \\\"btn-add-anotation\\\"> <img src=\\\"./resources/vectors/plus-circle.svg\\\" alt=\\\"o\\\">agregar</button>\\n                </form>\\n            </nav>\\n            <div class = \\\"anotation-logs\\\">\\n               \\n            </div>\\n        \\n            \";\n    this.currentComponent = div;\n    div.innerHTML = completeInfoHabit;\n    return div;\n  }\n\n  render(container) {\n    let div = this.getTemplate();\n    container.append(div);\n    this.listeners();\n    let reportCompleteInfoHabit = _store_completeInformation__WEBPACK_IMPORTED_MODULE_1__.completeInformation_.findByHabitID(this.currentIDhabit);\n    const {\n      id,\n      idHabit,\n      title,\n      daysTracking,\n      anotations\n    } = reportCompleteInfoHabit[0];\n    div.querySelector('.complete-info-title').innerText = title;\n    console.log('report before rendering : ', reportCompleteInfoHabit);\n    let AnotationComponents = anotations.map(data => new _anotation_anotation__WEBPACK_IMPORTED_MODULE_0__.default(data));\n    const anotationLogsContainer = document.querySelector('.anotation-logs');\n    AnotationComponents.forEach(component => {\n      anotationLogsContainer.prepend(component.getTemplate());\n      component.listener();\n    });\n  }\n\n}\n\nconst completeInfoHabit = new CompleteInfoHabit();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeInfoHabit);\n\n//# sourceURL=webpack://notas/./client/components/completeHabitInfo/completeHabitInfo.js?");

/***/ }),

/***/ "./client/components/containerHabits/containerHabits.js":
/*!**************************************************************!*\
  !*** ./client/components/containerHabits/containerHabits.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _habitCard_habitCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../habitCard/habitCard */ \"./client/components/habitCard/habitCard.js\");\n/* harmony import */ var _store_habits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/habits */ \"./client/store/habits.js\");\n\n\n\nclass ContainerHabits {\n  constructor(repo) {\n    this.repo = repo;\n  }\n\n  render() {\n    let container = document.querySelector('.dashboard-list-habito');\n    container.innerHTML = this.getTemplate();\n    this.listener();\n    let reportHabits = _store_habits__WEBPACK_IMPORTED_MODULE_1__.default.find();\n    let habitComponents = reportHabits.map(data => new _habitCard_habitCard__WEBPACK_IMPORTED_MODULE_0__.default(data));\n    console.log(habitComponents);\n    const container_ = document.querySelector('.dashboard-all-habito');\n    habitComponents.forEach(component => {\n      component.render(container_);\n    });\n  }\n\n  listener() {\n    // dom elements\n    const dashboardAllHabit = document.querySelector('.dashboard-all-habito');\n    const btnCreateHabit = document.getElementById('btn-create-habito'); // fieldset from the input\n\n    const inputNameHabito = document.getElementById('input-name-habito');\n    const selectTagsHabito = document.getElementById('select-tags-habito');\n\n    const verifyDataHabito = (input_name, tag_habito) => {\n      console.log('verifyDataHabito', input_name, tag_habito);\n      if (!input_name) return false;\n      if (tag_habito === \"seleccionar\" || tag_habito === \"seleccionar\") return false;\n      return true;\n    };\n\n    const createHabit = ({\n      name,\n      type\n    }) => {\n      return {\n        id: new Date().getTime().toString(),\n        name: name,\n        type: type\n      };\n    };\n\n    const postProcesssCreateHabito = () => {\n      inputNameHabito.value = '';\n      selectTagsHabito.value = 'seleccionar';\n      inputNameHabito.focus();\n    };\n\n    btnCreateHabit.addEventListener('click', async event => {\n      console.log('im here');\n      event.preventDefault();\n\n      if (verifyDataHabito(inputNameHabito.value, selectTagsHabito.value)) {\n        let indexTagHabito = selectTagsHabito.selectedIndex;\n        let tagHabitoName = selectTagsHabito.options[indexTagHabito].text;\n        let nameHabito = inputNameHabito.value;\n        let Habito = createHabit({\n          name: nameHabito,\n          type: tagHabitoName\n        }); // process component creation\n\n        let componentHabitoCard = new _habitCard_habitCard__WEBPACK_IMPORTED_MODULE_0__.default(Habito);\n        let habitCard = await componentHabitoCard.getTemplate();\n        dashboardAllHabit.prepend(habitCard); // class -> dashboard-all-habit\n\n        componentHabitoCard.listener();\n        this.repo.create(Habito);\n        postProcesssCreateHabito();\n      } else {\n        return null;\n      }\n    });\n  }\n\n  getTemplate() {\n    let formCreateHabit = \"\\n            <form>\\n                <input type=\\\"text\\\" placeholder = \\\"nombre del habito\\\" id = \\\"input-name-habito\\\">\\n                <label for=\\\"tags\\\"> <img src='./resources/vectors/tag.svg' alt=\\\"o\\\"> Select Tags :</label>\\n                <select name=\\\"tags\\\" id=\\\"select-tags-habito\\\">\\n                    <option value=\\\"seleccionar\\\">Seleccionar</option>\\n                    <option value=\\\"personal\\\">Personal</option>\\n                    <option value=\\\"trabajo\\\">Trabajo</option>\\n                    <option value=\\\"pasion\\\">Pasion</option>\\n                </select>\\n                <button type=\\\"button\\\" id=\\\"btn-create-habito\\\"> <img src='./resources/vectors/plus-circle.svg' alt=\\\"o\\\" type=\\\"image/svg\\\">crear</button>\\n            </form>\\n        \";\n    let container = \"\\n                <div class = \\\"dlh1\\\">\\n\\n                    <nav class=\\\"mav-main-dashboard\\\">\\n                        \".concat(formCreateHabit, \"\\n                    </nav>\\n\\n                    <div class=\\\"container-table\\\">\\n                        <table class=\\\"table-habito\\\">\\n                            <thead>\\n                                <tr>\\n                                    <th class =\\\"th1\\\">Name</th>\\n                                    <th class =\\\"th2\\\">Type</th>\\n                                    <th class =\\\"th3\\\">Actions</th>\\n                                </tr>\\n                            </thead>\\n\\n                            <tbody class =\\\"dashboard-all-habito\\\">\\n\\n                            </tbody>\\n\\n                        </table>\\n                    </div>\\n                </div>\\n\\n                <div class = \\\"selected-habito\\\">\\n\\n                </div>\\n            \");\n    return container;\n  }\n\n}\n\nconst containerHabits = new ContainerHabits(_store_habits__WEBPACK_IMPORTED_MODULE_1__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (containerHabits);\n\n//# sourceURL=webpack://notas/./client/components/containerHabits/containerHabits.js?");

/***/ }),

/***/ "./client/components/habitCard/components/tagHabit.js":
/*!************************************************************!*\
  !*** ./client/components/habitCard/components/tagHabit.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst renderTagHabito = async name => {\n  const tagHabito = \"\\n    <span class = \\\"tag-habito\\\">\".concat(name, \"</span>\\n    \");\n  return tagHabito;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTagHabito);\n\n//# sourceURL=webpack://notas/./client/components/habitCard/components/tagHabit.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _store_habits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/habits */ \"./client/store/habits.js\");\n/* harmony import */ var _store_completeInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/completeInformation */ \"./client/store/completeInformation.js\");\n/* harmony import */ var _components_tagHabit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tagHabit */ \"./client/components/habitCard/components/tagHabit.js\");\n/* harmony import */ var _completeHabitInfo_completeHabitInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../completeHabitInfo/completeHabitInfo */ \"./client/components/completeHabitInfo/completeHabitInfo.js\");\n\n\n\n\n\nclass HabitCard {\n  constructor(data) {\n    this.data = data; // the component assigned\n\n    this.currentComponent = null;\n  }\n\n  async getTemplate() {\n    const {\n      name,\n      type,\n      id\n    } = this.data;\n    const tr = document.createElement('tr');\n    tr.dataset.idHabitCard = id;\n    tr.innerHTML = \"\\n        \\n            <td class = \\\"clickable-habit-card habit-card-name\\\" >\".concat(name, \"</td>\\n            <td class = \\\"clickable-habit-card\\\" > \").concat(await (0,_components_tagHabit__WEBPACK_IMPORTED_MODULE_2__.default)(type), \" </td>\\n            <td>\\n                <div class=\\\"actions-habito-card\\\">\\n                    <button class=\\\"btn-edit-habitocard\\\"> <img src='./resources/vectors/edit-2.svg' alt=\\\"o\\\"></button>\\n                    <button><img src='./resources/vectors/archive.svg' alt=\\\"o\\\"></button>\\n                    <button class=\\\"btn-delete-habitocard\\\"> <img src='./resources/vectors/trash-2.svg' alt=\\\"o\\\"></button>\\n                </div>\\n            </td>\\n        \\t\\n\\n        \");\n    this.currentComponent = tr;\n    return tr;\n  }\n\n  listener() {\n    const {\n      id\n    } = this.data;\n    let clickable = this.currentComponent.querySelectorAll('.clickable-habit-card');\n    const currentComponent = this.currentComponent;\n    clickable.forEach(item => {\n      item.addEventListener('click', function (event) {\n        document.querySelector('.selected-habito').firstChild.remove();\n        _completeHabitInfo_completeHabitInfo__WEBPACK_IMPORTED_MODULE_3__.default.setIDhabit(id);\n        _completeHabitInfo_completeHabitInfo__WEBPACK_IMPORTED_MODULE_3__.default.render(document.querySelector('.selected-habito'));\n        event.preventDefault();\n      });\n    });\n    const actionsHabitCard = document.querySelector('.actions-habito-card');\n    let btnDelete = actionsHabitCard.querySelector('.btn-delete-habitocard');\n    let btnEdit = actionsHabitCard.querySelector('.btn-edit-habitocard');\n    let nameHabit = actionsHabitCard.querySelector('.habit-card-name');\n    btnDelete.addEventListener('click', event => {\n      let reportDelete = _store_habits__WEBPACK_IMPORTED_MODULE_0__.default.delete(id); // some error in the store interrupt the process of delete to the UI\n\n      if (!reportDelete) return;\n      currentComponent.remove();\n    });\n    btnEdit.addEventListener('click', event => {\n      nameHabit.contentEditable = \"true\";\n    });\n  }\n\n  createCompleteInfo() {\n    // the creation of complete information\n    var completeInfoInitialData = {\n      id: 'habit-' + _store_completeInformation__WEBPACK_IMPORTED_MODULE_1__.completeInformation_.getLengthString(),\n      idHabit: data.id,\n      title: data.name,\n      daysTracking: [],\n      anotations: []\n    };\n    _store_completeInformation__WEBPACK_IMPORTED_MODULE_1__.completeInformation_.create(completeInfoInitialData);\n  }\n\n  async render(container) {\n    let html = await this.getTemplate();\n    container.prepend(html);\n    this.listener();\n  }\n\n}\n\nconst renderHabitoCard = async ({\n  name,\n  type\n}) => {\n  const obtainTagHabito = () => {\n    console.log('still in development');\n  };\n\n  const habitoCard = \"\\n        <tr class =\\\"habitoCard\\\">\\n            <td>\".concat(name, \"</td>\\n            <td> \").concat(await (0,_components_tagHabit__WEBPACK_IMPORTED_MODULE_2__.default)(type), \" </td>\\n            <td>\\n                <div class=\\\"actions-habito-card\\\">\\n                    <button id=\\\"btn-edit-habitocard\\\"> <img src='./resources/vectors/edit-2.svg' alt=\\\"o\\\"></button>\\n                    <button><img src='./resources/vectors/archive.svg' alt=\\\"o\\\"></button>\\n                    <button id=\\\"btn-delete-habitocard\\\"> <img src='./resources/vectors/trash-2.svg' alt=\\\"o\\\"></button>\\n                </div>\\n            </td>\\n        </tr>\\t\\n\\n    \");\n  return habitoCard;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HabitCard);\n\n//# sourceURL=webpack://notas/./client/components/habitCard/habitCard.js?");

/***/ }),

/***/ "./client/components/loginForm/listeners.js":
/*!**************************************************!*\
  !*** ./client/components/loginForm/listeners.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* login controllers */\nconst listenersLogin = () => {\n  const formRegister = document.querySelector('.option-register');\n  const btnRegister = document.getElementById('btn-register');\n  const btnToLogin = document.getElementById('btn-to-login');\n  const submitLoginbtn = document.getElementById('btn-submit-login');\n  const value_left = '0';\n  const value_left_toLogin = '100%';\n\n  const changeToRegister = () => {\n    formRegister.style.left = value_left;\n  };\n\n  const changeToLogin = () => {\n    formRegister.style.left = value_left_toLogin;\n  };\n\n  const processDataLogin = () => {\n    localStorage.setItem('isLogged', true);\n    window.location.hash = '/Dashboard';\n  };\n\n  submitLoginbtn.addEventListener('click', processDataLogin);\n  btnRegister.addEventListener('click', changeToRegister);\n  btnToLogin.addEventListener('click', changeToLogin);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listenersLogin);\n\n//# sourceURL=webpack://notas/./client/components/loginForm/listeners.js?");

/***/ }),

/***/ "./client/components/loginForm/login.js":
/*!**********************************************!*\
  !*** ./client/components/loginForm/login.js ***!
  \**********************************************/
/*! namespace exports */
/*! export loginForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginForm\": () => /* binding */ loginForm\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./client/components/loginForm/listeners.js\");\n\n\nclass LoginForm {\n  constructor() {}\n\n  listeners() {\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }\n\n  getTemplate() {\n    const login = \"\\n                <div class = \\\"container-form\\\">\\n                    <div class=\\\"logo-aplication\\\">\\n                        <h2>aplication logo</h2>\\n                        <p>aplication description</p>\\n                    </div>\\n                    <div class=\\\"switch-options-forms\\\">\\n                        <div class=\\\"option-login\\\">\\n                            <form>\\n                                <input type=\\\"text\\\" placeholder=\\\"username\\\" name=\\\"usename\\\" />\\n                                <input type=\\\"password\\\" placeholder=\\\"password\\\" name=\\\"password\\\" />\\n                            </form>\\n                            <button id = \\\"btn-submit-login\\\" >login</button>\\n                            <div class=\\\"form-option-register\\\">\\n                                <p>no te has registrado ? <button id=\\\"btn-register\\\">Registrarse</button> </p>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"option-register\\\">\\n                            <label for=\\\"fullaname\\\">Nombres completos</label>\\n                            <input type=\\\"text\\\" placeholder=\\\"fullname\\\" name=\\\"fullname\\\" required/>\\n                            <label for=\\\"email\\\">Correo</label>\\n                            <input type=\\\"email\\\" placeholder=\\\"your email\\\" name=\\\"email\\\" required/>\\n                            <label for=\\\"username\\\">Username</label>\\n                            <input type=\\\"text\\\" placeholder=\\\"username\\\" name=\\\"username\\\" required/>\\n                            <label for=\\\"password\\\">Password</label>\\n                            <input type=\\\"text\\\" placeholder=\\\"password\\\" name=\\\"password\\\" required/>\\n                            <label for=\\\"password2\\\">Confirm password</label>\\n                            <input type=\\\"text\\\" placeholder=\\\"confirm password\\\" name=\\\"password2\\\" required>\\n                            <button>Register</button>\\n                            <div class = \\\"come-to-login\\\">\\n                                <p>tengo una cuenta <button id = \\\"btn-to-login\\\" >Login</button></p>\\n                            </div>\\n                        </div>\\n                    </div>\\n                </div>\\n        \\n            \";\n    return login;\n  }\n\n  render() {\n    let html = this.getTemplate();\n    container.innerHTML = html;\n    this.listeners();\n  }\n\n}\n\nconst loginForm = new LoginForm();\n\n//# sourceURL=webpack://notas/./client/components/loginForm/login.js?");

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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _components_containerHabits_containerHabits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/containerHabits/containerHabits */ \"./client/components/containerHabits/containerHabits.js\");\n/* harmony import */ var _components_listenersSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/listenersSchedule */ \"./client/pages/Dashboard/components/listenersSchedule.js\");\n/* harmony import */ var _components_archivedTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/archivedTemplate */ \"./client/pages/Dashboard/components/archivedTemplate.js\");\n/* harmony import */ var _components_viewPreferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/viewPreferences */ \"./client/pages/Dashboard/components/viewPreferences.js\");\n\n\n\n\n\nclass DashboardPage {\n  constructor() {}\n\n  listeners() {\n    const switchDashboardScreens = (id, container) => {\n      switch (id) {\n        case 'rb1':\n          _components_containerHabits_containerHabits__WEBPACK_IMPORTED_MODULE_0__.default.render();\n          listenersDashboard();\n          break;\n\n        case 'rb2':\n          container.innerHTML = _components_listenersSchedule__WEBPACK_IMPORTED_MODULE_1__.default; //listenersHorario()\n\n          break;\n\n        case 'rb3':\n          container.innerHTML = _components_archivedTemplate__WEBPACK_IMPORTED_MODULE_2__.default;\n          break;\n\n        case 'rb4':\n          container.innerHTML = _components_viewPreferences__WEBPACK_IMPORTED_MODULE_3__.default;\n          break;\n      }\n    };\n\n    const listenersDashboard = () => {\n      const routesToGo = document.querySelector('.routes-dashboard');\n      const dashboardAllHabito = document.querySelector('.dashboard-all-habito');\n      const btnLogutDashboard = document.getElementById('btn-log-out-dashboard');\n\n      const processSignOut = () => {\n        window.localStorage.setItem('isLogged', false);\n        window.location.hash = '#/Home';\n        C_signout(); //fetching information\n      };\n\n      btnLogutDashboard.addEventListener('click', processSignOut);\n      routesToGo.childNodes.forEach(item => {\n        item.addEventListener('click', async e => {\n          let container = document.querySelector('.dashboard-list-habito');\n\n          if (e.target.checked === true) {\n            switchDashboardScreens(e.target.id, container);\n          }\n        });\n      });\n    };\n  }\n\n  async getTemplate() {\n    const renderDashboard = async () => {\n      let dashboard = \"\\n                 <nav class = \\\"dashboard-nav-main\\\">\\n                    <div class=\\\"logo\\\">\\n                        logo\\n                    </div>\\n                    <div class=\\\"wraper-profile\\\">\\n                        <div class =\\\"profile\\\">\\n                            <div class =\\\"avatar\\\">\\n\\n                            </div>\\n                            <p>hello <span>name</span></p>\\n                            <div class =\\\"actions-profile\\\">\\n                                <input type=\\\"checkbox\\\" name=\\\"chk-action-profile\\\" id=\\\"chk-ap\\\"> <label for=\\\"chk-ap\\\">v</label>\\n                                <ul class =\\\"slider-mav-profile\\\">\\n                                    <li><button>an action</button></li>\\n                                    <li><button id=\\\"btn-log-out-dashboard\\\">log out</button></li>\\n                                </ul>\\n                            </div>\\n                        </div>\\n\\n                    </div>\\n                </nav>\\n                <div class = \\\"routes-dashboard\\\">\\n                    <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb1\\\" checked > <label for=\\\"rb1\\\">Habitos</label>\\n                    <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb2\\\"> <label for=\\\"rb2\\\">Horario</label>\\n                    <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb3\\\"> <label for=\\\"rb3\\\">Archivados</label>\\n                    <input type=\\\"radio\\\" name=\\\"choice\\\" id =\\\"rb4\\\"> <label for=\\\"rb4\\\">preferencias</label>\\n                </div>\\n\\n\\n                <div class = \\\"dashboard-list-habito\\\">\\n                    \\n                </div>\\n\\n\\n                <footer class =\\\"footer-dashboard\\\">\\n                    <p>@All right reserve by CydonianLlama</p>\\n                    <a href=\\\"https://storyset.com/web\\\">Illustration by Freepik Storyset</a>\\n                </footer>\\n            \";\n      return dashboard;\n    }; // return await renderDashboard(mainHabits)\n\n\n    return await renderDashboard();\n  }\n\n  async render() {\n    let template = await this.getTemplate();\n    container.innerHTML = template;\n    this.listeners();\n    _components_containerHabits_containerHabits__WEBPACK_IMPORTED_MODULE_0__.default.render();\n  }\n\n}\n\nconst dashboardPage = new DashboardPage();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboardPage);\n\n//# sourceURL=webpack://notas/./client/pages/Dashboard/Dashboard.js?");

/***/ }),

/***/ "./client/pages/Dashboard/components/archivedTemplate.js":
/*!***************************************************************!*\
  !*** ./client/pages/Dashboard/components/archivedTemplate.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet archivedTemplate = \"\\n    <div class =\\\"archivados\\\">\\n        <h2>Aca irian todos los habitos pasados</h2>\\n    </div>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (archivedTemplate);\n\n//# sourceURL=webpack://notas/./client/pages/Dashboard/components/archivedTemplate.js?");

/***/ }),

/***/ "./client/pages/Dashboard/components/listenersSchedule.js":
/*!****************************************************************!*\
  !*** ./client/pages/Dashboard/components/listenersSchedule.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst listenersHorario = () => {\n  function generate_year_range(start, end) {\n    var years = \"\";\n\n    for (var year = start; year <= end; year++) {\n      years += \"<option value='\" + year + \"'>\" + year + \"</option>\";\n    }\n\n    return years;\n  }\n\n  today = new Date();\n  currentMonth = today.getMonth();\n  currentYear = today.getFullYear();\n  selectYear = document.getElementById(\"year\");\n  selectMonth = document.getElementById(\"month\");\n  createYear = generate_year_range(1970, 2050);\n  /** or\r\n   * createYear = generate_year_range( 1970, currentYear );\r\n   */\n\n  document.getElementById(\"year\").innerHTML = createYear;\n  var calendar = document.getElementById(\"calendar\");\n  var lang = calendar.getAttribute('data-lang');\n  var months = \"\";\n  var days = \"\";\n  var monthDefault = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  var dayDefault = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n\n  if (lang == \"en\") {\n    months = monthDefault;\n    days = dayDefault;\n  } else {\n    months = monthDefault;\n    days = dayDefault;\n  }\n\n  var $dataHead = \"<tr>\";\n\n  for (dhead in days) {\n    $dataHead += \"<th data-days='\" + days[dhead] + \"'>\" + days[dhead] + \"</th>\";\n  }\n\n  $dataHead += \"</tr>\"; //alert($dataHead);\n\n  document.getElementById(\"thead-month\").innerHTML = $dataHead;\n  monthAndYear = document.getElementById(\"monthAndYear\");\n  showCalendar(currentMonth, currentYear);\n\n  function next() {\n    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;\n    currentMonth = (currentMonth + 1) % 12;\n    showCalendar(currentMonth, currentYear);\n  }\n\n  function previous() {\n    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;\n    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;\n    showCalendar(currentMonth, currentYear);\n  }\n\n  function jump() {\n    currentYear = parseInt(selectYear.value);\n    currentMonth = parseInt(selectMonth.value);\n    showCalendar(currentMonth, currentYear);\n  }\n\n  function showCalendar(month, year) {\n    var firstDay = new Date(year, month).getDay();\n    tbl = document.getElementById(\"calendar-body\");\n    tbl.innerHTML = \"\";\n    monthAndYear.innerHTML = months[month] + \" \" + year;\n    selectYear.value = year;\n    selectMonth.value = month; // creating all cells\n\n    var date = 1;\n\n    for (var i = 0; i < 6; i++) {\n      var row = document.createElement(\"tr\");\n\n      for (var j = 0; j < 7; j++) {\n        if (i === 0 && j < firstDay) {\n          cell = document.createElement(\"td\");\n          cellText = document.createTextNode(\"\");\n          cell.appendChild(cellText);\n          row.appendChild(cell);\n        } else if (date > daysInMonth(month, year)) {\n          break;\n        } else {\n          cell = document.createElement(\"td\");\n          cell.setAttribute(\"data-date\", date);\n          cell.setAttribute(\"data-month\", month + 1);\n          cell.setAttribute(\"data-year\", year);\n          cell.setAttribute(\"data-month_name\", months[month]);\n          cell.className = \"date-picker\";\n          cell.innerHTML = \"<span>\" + date + \"</span>\";\n\n          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {\n            cell.className = \"date-picker selected\";\n          }\n\n          row.appendChild(cell);\n          date++;\n        }\n      }\n\n      tbl.appendChild(row);\n    }\n  }\n\n  function daysInMonth(iMonth, iYear) {\n    return 32 - new Date(iYear, iMonth, 32).getDate();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listenersHorario);\n\n//# sourceURL=webpack://notas/./client/pages/Dashboard/components/listenersSchedule.js?");

/***/ }),

/***/ "./client/pages/Dashboard/components/viewPreferences.js":
/*!**************************************************************!*\
  !*** ./client/pages/Dashboard/components/viewPreferences.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet preferencesTemplate = \"\\n    <div class = \\\"preferences\\\">\\n        <ul class =\\\"nav-preferences\\\">\\n            <li><input type=\\\"radio\\\" name=\\\"opt-chk-preferences\\\" id=\\\"chk-preferences1\\\"><label for=\\\"chk-preferences1\\\">Tags</label></li>\\n            <li><input type=\\\"radio\\\" name=\\\"opt-chk-preferences\\\" id=\\\"chk-preferences2\\\"><label for=\\\"chk-preferences2\\\">type of something</label></li>\\n        </ul>\\n    </div>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preferencesTemplate);\n\n//# sourceURL=webpack://notas/./client/pages/Dashboard/components/viewPreferences.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Home/utils */ \"./client/pages/Home/utils.js\");\n\n\n\nclass HomePage {\n  constructor() {}\n\n  listeners() {\n    if (window.localStorage.getItem('isLogged') === 'true') (0,_utils__WEBPACK_IMPORTED_MODULE_0__.ListenerShowOptionsProfile)();\n  }\n\n  async getTemplate() {\n    var renderHome = async () => {\n      var home = \"\\n                <nav class=\\\"home-nav-main\\\">\\n                    <div class=\\\"logo\\\">\\n                        LOGO\\n                    </div>\\n                    <ul class = \\\"ul-nav-main\\\">\\n                        <li><a class = \\\"a-tag-nav\\\" href=\\\"#Home\\\">Home</a></li>\\n                        <li><a class = \\\"a-tag-nav\\\" href=\\\"#features\\\">Features</a> </li>\\n                        <li><a class = \\\"a-tag-nav\\\" href=\\\"#fake-pricing\\\">Pricing</a></li>\\n                        <li><a class = \\\"a-tag-nav\\\" href=\\\"#git-hub-integration\\\">GitHub Repo</a></li>\\n                    </ul>\\n                    <div class=\\\"options-home-nav-main\\\">\\n                        \".concat(await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isLoggedChangeLoginHome)(window.localStorage.getItem('isLogged')), \"\\n                    </div>\\n                </nav>\\n\\n                <div class = \\\"home-hero\\\">\\n\\n                    <div class =\\\"hero-content\\\">\\n                        <h2>This is my <span>APP</span> Tracking</h2>\\n                        <p>my firts app, developed in all aspects by me , im so happy with this project, i hope that you enjoy it like me enjoyed when i was            developed this app</p>\\n                        <a class=\\\"btn cta\\\" href=\\\"https://github.com/Cydonianllama\\\" target=\\\"_blank\\\">Contact Me</a>\\n                    </div>\\n\\n                    <img class=\\\"programming-amico\\\"src='./resources/vectors/Programming_amico.svg' alt=\\\"esta en una imagen\\\">\\n\\n                    <div style=\\\"height: 150px; width : 100%;overflow: hidden; position:absolute; bottom:0;\\\">\\n                        <svg viewBox=\\\"0 0 500 150\\\" preserveAspectRatio=\\\"none\\\" style=\\\"height: 100%; width: 100%;\\\">\\n                            <path d=\\\"M0.00,49.98 C222.63,159.38 349.20,-49.98 605.80,128.78 L538.66,210.69 L0.00,150.00 Z\\\"\\n                                style=\\\"stroke: none; fill: #00000027;\\\"></path>\\n                        </svg>\\n                    </div>\\n                </div>\\n\\n                <div class =\\\"features\\\" id =\\\"features\\\">\\n                    <div class =\\\"container-features\\\">\\n                        <div class =\\\"feature-1\\\">\\n                            <h2>Manage Habits</h2>\\n                            <p> <img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\"> you can create all your habit for managemment</p>\\n                        </div>\\n                        <div class =\\\"feature-2\\\">\\n                            <h2>Audit Your Habits</h2>\\n                            <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">you can see your progress and improve your skills</p>\\n                        </div>\\n                        <div class =\\\"feature-3\\\">\\n                            <h2>Establish your Habits</h2>\\n                            <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">you can program your habits in a moth ,day and year</p>\\n                        </div>\\n                        <div class =\\\"feature-4\\\">\\n                            <h2>Export your data anytime you want</h2>\\n                            <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">your have complete access to the data that you were creating</p>\\n                        </div>\\n                        <div class=\\\"feature-5\\\">\\n                            <h2>Integrations with your tools</h2>\\n                            <p><img src=\\\"./resources/vectors/star.svg\\\" alt=\\\"asd\\\">in progress but i promise this feature</p>\\n                        </div>\\n                    </div>\\n                </div>\\n                <div class =\\\"fake-pricing\\\" id =\\\"fake-pricing\\\">\\n                    <div class=\\\"container-pricing\\\">\\n                        <div class =\\\"pricing-basic\\\">\\n                            <h2>Basic</h2>\\n                            <ul class=\\\"list-features\\\">\\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">limited numbers of habits : 5</li> \\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">limeted calendar actions</li>  \\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">limited anotation actions</li>\\n                            </ul>\\n                            <button>Basic</button>\\n                        </div>\\n                        <div class=\\\"pricing-standar my-precious\\\">\\n                            <h2>Standar</h2>\\n                            <ul class=\\\"list-features\\\">\\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unlimited numbers of Habits</li>\\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unlimited calendar Actions</li>\\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unlimited anotation Actions</li>\\n                            </ul>\\n                            <button>Standar</button>\\n                        </div>\\n                        <div class=\\\"pricing-proffesional\\\">\\n                            <h2>Professional</h2>\\n                            <ul class=\\\"list-features\\\">\\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">all in standar features</li>\\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">unique session</li>\\n                                <li><img src=\\\"./resources/vectors/check-circle.svg\\\" alt=\\\"asd\\\">support team</li>\\n                            </ul>\\n                            <button>Professional</button>\\n                        </div>\\n                    </div>\\n                </div>\\n                <div class = \\\"git-hub-integration\\\" id =\\\"git-hub-integration\\\">\\n                    <div class =\\\"line-app-container\\\">\\n                        <div class = \\\"la\\\">\\n                            mi primer deploying de una app\\n                        </div>\\n                        <div class =\\\"lal\\\">\\n                            conociendo algunos de los conceptos que debo aprender\\n                        </div>\\n                        <div class=\\\"la\\\">\\n                            pues, creo que no se hacer lineTimes :( , pero es mi primer intento ... lo har\\xE9 mejor despues :)\\n                        </div>\\n                    </div>\\n                </div>  \\n                <footer class=\\\"footer-main\\\">\\n                    <p>SPA desarrollada por Erick Grandez :)</p>\\n                    <p>Gracias a:<a href=\\\"https://storyset.com/web\\\">Illustration by Freepik Storyset</a></p>\\n                </footer>\\n                \");\n      return home;\n    };\n\n    let html = await renderHome();\n    return html;\n  }\n\n  async render() {\n    let html = await this.getTemplate();\n    container.innerHTML = html;\n    this.listeners();\n  }\n\n}\n\nconst homePage = new HomePage();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://notas/./client/pages/Home/Home.js?");

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

/***/ "./client/pages/PageLogin/PageLogin.js":
/*!*********************************************!*\
  !*** ./client/pages/PageLogin/PageLogin.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _components_loginForm_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/loginForm/login */ \"./client/components/loginForm/login.js\");\n\n\nclass PageLogin {\n  constructor() {}\n\n  getTemplate() {}\n\n  listeners() {\n    _components_loginForm_login__WEBPACK_IMPORTED_MODULE_0__.loginForm.listeners();\n  }\n\n  render() {\n    _components_loginForm_login__WEBPACK_IMPORTED_MODULE_0__.loginForm.render();\n    this.listeners(); //container.innerHTML = this.getTemplate()\n  }\n\n}\n\nconst pageLogin = new PageLogin();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLogin);\n\n//# sourceURL=webpack://notas/./client/pages/PageLogin/PageLogin.js?");

/***/ }),

/***/ "./client/router/ignoreAnclas.js":
/*!***************************************!*\
  !*** ./client/router/ignoreAnclas.js ***!
  \***************************************/
/*! namespace exports */
/*! export ignoreAnclas [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ignoreAnclas\": () => /* binding */ ignoreAnclas\n/* harmony export */ });\nconst ignoreAnclas = hashCode => {\n  switch (hashCode) {\n    case '#Home':\n      return true;\n\n    case '#features':\n      return true;\n\n    case '#fake-pricing':\n      return true;\n\n    case '#git-hub-integration':\n      return true;\n\n    default:\n      return false;\n  }\n};\n\n//# sourceURL=webpack://notas/./client/router/ignoreAnclas.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _ignoreAnclas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ignoreAnclas */ \"./client/router/ignoreAnclas.js\");\n/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home/Home */ \"./client/pages/Home/Home.js\");\n/* harmony import */ var _pages_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Dashboard/Dashboard */ \"./client/pages/Dashboard/Dashboard.js\");\n/* harmony import */ var _pages_PageLogin_PageLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/PageLogin/PageLogin */ \"./client/pages/PageLogin/PageLogin.js\");\n/* harmony import */ var _pages_404Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/404Page */ \"./client/pages/404Page.js\");\n\n\n\n\n\nconst routes = [{\n  realPath: '#/',\n  path: '/',\n  component: _pages_Home_Home__WEBPACK_IMPORTED_MODULE_1__.default\n}, {\n  realPath: '#/Login',\n  path: '/login',\n  component: _pages_PageLogin_PageLogin__WEBPACK_IMPORTED_MODULE_3__.default\n}, {\n  realPath: '#/Dashboard',\n  path: '/dashboard',\n  component: _pages_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__.default\n}, {\n  realPath: '#/404',\n  path: '/404',\n  component: _pages_404Page__WEBPACK_IMPORTED_MODULE_4__.default\n}];\n\nclass Router {\n  async routing(hash) {\n    let hash_ = hash;\n    let isPageFounded = false;\n    let indexNotFoundPage = 0; //for my anchor verify - if exits cause a conflict\n\n    if ((0,_ignoreAnclas__WEBPACK_IMPORTED_MODULE_0__.ignoreAnclas)(hash_)) return;\n    this.routes.forEach((route, index) => {\n      if (route.realPath === hash_) {\n        history.replaceState(null, null, route.path);\n        route.component.render();\n        isPageFounded = true;\n      }\n\n      if (route.path === '/404') {\n        indexNotFoundPage = index;\n      }\n    });\n\n    if (!isPageFounded) {\n      container.innerHTML = this.routes[indexNotFoundPage].component;\n      history.replaceState(null, null, this.routes[indexNotFoundPage].path);\n    }\n  }\n\n  constructor(routes) {\n    // componenst in an array of page components\n    this.routes = routes;\n  }\n\n}\n\nconst router = new Router(routes);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://notas/./client/router/router.js?");

/***/ }),

/***/ "./client/store/completeInformation.js":
/*!*********************************************!*\
  !*** ./client/store/completeInformation.js ***!
  \*********************************************/
/*! namespace exports */
/*! export completeInformation_ [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completeInformation_\": () => /* binding */ completeInformation_\n/* harmony export */ });\nvar completeInformation = [{\n  id: 'complete-1',\n  idHabit: 'hola1',\n  title: 'ejercicio',\n  daysTracking: [],\n  anotations: [{\n    idAnotation: 'anot-1',\n    text: 'this is a test 1 ',\n    dateCreattion: '---'\n  }, {\n    idAnotation: 'anot-2',\n    text: 'this is a test 2',\n    dateCreattion: '---'\n  }]\n}, {\n  id: 'complete-2',\n  idHabit: 'hola2',\n  title: 'perrear',\n  daysTracking: [],\n  anotations: [{\n    idAnotation: 'anot-1',\n    text: 'this is a test for perrear ',\n    dateCreattion: '---'\n  }]\n}, {\n  id: 'complete-3',\n  idHabit: 'hola3',\n  title: 'bailar',\n  daysTracking: [],\n  anotations: [{\n    idAnotation: 'anot-1',\n    text: 'this is a test for bailar ',\n    dateCreattion: '---'\n  }]\n}];\n\nclass CompleteInformation {\n  constructor(data) {\n    this.data = data;\n    this.limit = 15;\n  }\n\n  getLengthString() {\n    return this.data.length.toString();\n  }\n\n  find(id) {\n    if (id) {\n      let report = this.data.filter(data => {\n        if (data.id === id) {\n          return data;\n        }\n      });\n      return report;\n    } else {\n      let report = this.data.slice(0, this.limit);\n      return report;\n    }\n  }\n\n  findByHabitID(id) {\n    if (id) {\n      let report = this.data.filter(data => {\n        if (data.idHabit === id) {\n          return data;\n        }\n      });\n      return report;\n    } else {\n      let report = this.data.slice(0, this.limit);\n      return report;\n    }\n  }\n\n  createAnotation(idHabit, object) {\n    let newArray = this.data.map(data => {\n      if (data.idHabit === idHabit) {\n        console.log('puching in :', data);\n        data.anotations.push(object);\n        return data;\n      }\n\n      return data;\n    });\n    this.data = newArray;\n  }\n\n  create(object) {\n    if (object) {\n      this.data.push(object);\n      return object;\n    } else {\n      return null;\n    }\n  }\n\n  update(object) {\n    if (object) {\n      this.data.map(data => {\n        if (object.id === data.id) {\n          return object;\n        } else {\n          return data;\n        }\n      });\n      return object;\n    } else {\n      return null;\n    }\n  }\n\n  delete(_id) {\n    if (!_id) {\n      return null;\n    } else {\n      let newData = this.data.filter(data => data.id !== _id);\n      this.data = newData;\n      return _id;\n    }\n  }\n\n}\n\nconst completeInformation_ = new CompleteInformation(completeInformation);\n\n//# sourceURL=webpack://notas/./client/store/completeInformation.js?");

/***/ }),

/***/ "./client/store/habits.js":
/*!********************************!*\
  !*** ./client/store/habits.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar habits = [{\n  id: 'hola1',\n  name: 'ejercicio',\n  type: 'Pasion'\n}, {\n  id: 'hola2',\n  name: 'perrear',\n  type: 'Pasion'\n}, {\n  id: 'hola3',\n  name: 'bailar',\n  type: 'Pasion'\n}];\n/*\r\n    habit \r\n        id\r\n        name\r\n        type\r\n*/\n\nclass HabitRepo {\n  constructor(data) {\n    this.data = data;\n    this.limit = 15;\n  }\n\n  find(id) {\n    if (id) {\n      let report = this.data.filter(data => {\n        if (data.id === id) {\n          return data;\n        }\n      });\n      return report;\n    } else {\n      let report = this.data.slice(0, this.limit);\n      return report;\n    }\n  }\n\n  create(object) {\n    if (object) {\n      this.data.push(object);\n      return object;\n    } else {\n      return null;\n    }\n  }\n\n  update(object) {\n    if (object) {\n      this.data.map(data => {\n        if (object.id === data.id) {\n          return object;\n        } else {\n          return data;\n        }\n      });\n      return object;\n    } else {\n      return null;\n    }\n  }\n\n  delete(_id) {\n    if (!_id) {\n      return null;\n    } else {\n      let newData = this.data.filter(data => data.id !== _id);\n      this.data = newData;\n      return _id;\n    }\n  }\n\n}\n\nconst habitRepo = new HabitRepo(habits);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (habitRepo);\n\n//# sourceURL=webpack://notas/./client/store/habits.js?");

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