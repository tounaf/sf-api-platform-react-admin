(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./assets/components/Entite/EntiteCreate.js":
/*!**************************************************!*\
  !*** ./assets/components/Entite/EntiteCreate.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/input/ReferenceInput.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/input/AutocompleteInput.js");




var EntiteCreate = function EntiteCreate(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.CreateGuesser, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "libelle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    source: "sites",
    reference: "sites",
    label: "Site",
    filterToQuery: function filterToQuery(searchText) {
      return {
        libelle: searchText
      };
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    optionText: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    source: "entite_types",
    reference: "entite_types",
    label: "Type d'entit\xE9",
    filterToQuery: function filterToQuery(searchText) {
      return {
        libelle: searchText
      };
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    optionText: "libelle"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntiteCreate);

/***/ }),

/***/ "./assets/components/Entite/EntiteEdit.js":
/*!************************************************!*\
  !*** ./assets/components/Entite/EntiteEdit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/input/ReferenceInput.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/input/SelectInput.js");




var EntiteEdit = function EntiteEdit(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.EditGuesser, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "libelle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    source: "sites",
    reference: "sites",
    label: "Site"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    optionText: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    source: "entite_types",
    reference: "entite_types",
    label: "Type d'entit\xE9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    optionText: "libelle"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntiteEdit);

/***/ }),

/***/ "./assets/components/Entite/EntiteList.js":
/*!************************************************!*\
  !*** ./assets/components/Entite/EntiteList.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/field/ReferenceField.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/field/TextField.js");




var EntiteList = function EntiteList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.ListGuesser, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.FieldGuesser, {
    source: "libelle",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.FieldGuesser, {
    source: "code",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    label: "Site",
    source: "site",
    reference: "sites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    source: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    label: "Type",
    source: "type",
    reference: "entite_types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    source: "libelle"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntiteList);

/***/ }),

/***/ "./assets/components/Entite/EntiteShow.js":
/*!************************************************!*\
  !*** ./assets/components/Entite/EntiteShow.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/field/ReferenceField.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/field/TextField.js");




var EntiteShow = function EntiteShow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.ShowGuesser, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.FieldGuesser, {
    source: "libelle",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.FieldGuesser, {
    source: "code",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    label: "Site",
    source: "site",
    reference: "sites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    source: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    label: "Type",
    source: "type",
    reference: "entite_types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    source: "libelle"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntiteShow);

/***/ }),

/***/ "./assets/components/User/UserCreate.js":
/*!**********************************************!*\
  !*** ./assets/components/User/UserCreate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/input/ReferenceInput.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/input/AutocompleteInput.js");




var UserCreate = function UserCreate(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.CreateGuesser, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "photoProfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "username"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "nom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "prenom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "situationMatrimoniale"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "civilite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "dateDeNaissance"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "competence"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "dateEntree"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "date_sortie"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "remarque"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "enable"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__.InputGuesser, {
    source: "entite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    source: "profiles",
    reference: "profiles",
    label: "Profile",
    filterToQuery: function filterToQuery(searchText) {
      return {
        libelle: searchText
      };
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    optionText: "libelle"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCreate);

/***/ }),

/***/ "./assets/components/authProvider.js":
/*!*******************************************!*\
  !*** ./assets/components/authProvider.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");


// in src/authProvider.js

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  login: function login(_ref) {
    var username = _ref.username,
        password = _ref.password;
    var request = new Request('http://localhost:8001/authentication_token', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return fetch(request).then(function (response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }

      return response.json();
    }).then(function (_ref2) {
      var token = _ref2.token;
      var decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.default)(token);
      localStorage.setItem('token', token);
      localStorage.setItem('permissions', decodedToken.permissions);
    });
  },
  logout: function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    return Promise.resolve();
  },
  checkError: function checkError(error) {// ...
  },
  checkAuth: function checkAuth() {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: function getPermissions() {
    var role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
  }
});

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ra-i18n-polyglot */ "./node_modules/ra-i18n-polyglot/esm/index.js");
/* harmony import */ var ra_language_french__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ra-language-french */ "./node_modules/ra-language-french/esm/index.js");
/* harmony import */ var _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/BaseLayout */ "./assets/layout/BaseLayout.js");
/* harmony import */ var _components_User_UserCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/User/UserCreate */ "./assets/components/User/UserCreate.js");
/* harmony import */ var _components_Entite_EntiteCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Entite/EntiteCreate */ "./assets/components/Entite/EntiteCreate.js");
/* harmony import */ var _components_Entite_EntiteEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Entite/EntiteEdit */ "./assets/components/Entite/EntiteEdit.js");
/* harmony import */ var _components_Entite_EntiteShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Entite/EntiteShow */ "./assets/components/Entite/EntiteShow.js");
/* harmony import */ var _components_Entite_EntiteList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Entite/EntiteList */ "./assets/components/Entite/EntiteList.js");
/* harmony import */ var _components_authProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/authProvider */ "./assets/components/authProvider.js");











 // domain translations
// require('./i18n/fr');

var dataProvider = "http://localhost:8001/api";
var i8nProvider = (0,ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_11__.default)(function () {
  return ra_language_french__WEBPACK_IMPORTED_MODULE_3__.default;
}, 'fr'); // const i8nProvider = polyglotI18nProvider(locale => messages);

console.log("http://localhost:8001/api");

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__.HydraAdmin, {
    entrypoint: dataProvider,
    authProvider: _components_authProvider__WEBPACK_IMPORTED_MODULE_10__.default,
    layout: _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_4__.default,
    i18nProvider: i8nProvider,
    locale: "fr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__.ResourceGuesser, {
    name: "users",
    create: _components_User_UserCreate__WEBPACK_IMPORTED_MODULE_5__.default,
    options: {
      label: "Utilisateurs"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__.ResourceGuesser, {
    name: "profiles",
    options: {
      label: "Profiles"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__.ResourceGuesser, {
    name: "sites",
    options: {
      label: "Sites"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__.ResourceGuesser, {
    name: "entites",
    list: _components_Entite_EntiteList__WEBPACK_IMPORTED_MODULE_9__.default,
    show: _components_Entite_EntiteShow__WEBPACK_IMPORTED_MODULE_8__.default,
    edit: _components_Entite_EntiteEdit__WEBPACK_IMPORTED_MODULE_7__.default,
    create: _components_Entite_EntiteCreate__WEBPACK_IMPORTED_MODULE_6__.default,
    options: {
      label: "Entités"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__.ResourceGuesser, {
    name: "entite_types",
    options: {
      label: "Type d'entités"
    }
  }));
};

react_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/layout/BaseLayout.js":
/*!*************************************!*\
  !*** ./assets/layout/BaseLayout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/layout/Layout.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./assets/layout/NavBar.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./assets/layout/Menu.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// in src/MyLayout.js





var BaseLayout = function BaseLayout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__.default, _extends({}, props, {
    appBar: _NavBar__WEBPACK_IMPORTED_MODULE_2__.default,
    menu: _Menu__WEBPACK_IMPORTED_MODULE_3__.default
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseLayout);

/***/ }),

/***/ "./assets/layout/Menu.js":
/*!*******************************!*\
  !*** ./assets/layout/Menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-core/esm/reducer/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/layout/DashboardMenuItem.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/layout/MenuItemLink.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "./node_modules/@material-ui/icons/ViewList.js");
/* harmony import */ var _material_ui_icons_Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Label */ "./node_modules/@material-ui/icons/Label.js");


// in src/Menu.js








var Menu = function Menu(_ref) {
  var onMenuClick = _ref.onMenuClick,
      logout = _ref.logout;
  var isXSmall = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)(function (theme) {
    return theme.breakpoints.down('xs');
  });
  var open = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.admin.ui.sidebarOpen;
  });
  var resources = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(react_admin__WEBPACK_IMPORTED_MODULE_5__.getResources);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_6__.default, {
    onClick: onMenuClick,
    sidebarIsOpen: open
  }), resources.map(function (resource) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_7__.default, {
      key: resource.name,
      to: "/".concat(resource.name),
      primaryText: resource.options && resource.options.label || resource.name,
      leftIcon: resource.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(resource.icon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_8__.default, null),
      onClick: onMenuClick,
      sidebarIsOpen: open
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_7__.default, {
    to: "/custom-route",
    primaryText: "Miscellaneous",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_Label__WEBPACK_IMPORTED_MODULE_9__.default, null),
    onClick: onMenuClick,
    sidebarIsOpen: open
  }), isXSmall && logout);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./assets/layout/NavBar.js":
/*!*********************************!*\
  !*** ./assets/layout/NavBar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/layout/AppBar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// in src/MyAppBar.js




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  spacer: {
    flex: 1
  }
});

var NavBar = function NavBar(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, _extends({}, props, {
    title: "Kala kama kely "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "h6",
    color: "inherit",
    className: classes.title,
    id: "react-admin-title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: classes.spacer
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "?b4c2":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f60a":
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?53dd":
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2b19":
/*!*************************************!*\
  !*** rdf-canonize-native (ignored) ***!
  \*************************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ra-core_esm_core_Resource_js-node_modules_ra-core_esm_dataProvider_fetch-5d76cc","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_expo-1b1321","vendors-node_modules_api-platform_admin_lib_index_js-node_modules_material-ui_icons_Label_js--175f9f"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FbnRpdGUvRW50aXRlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVTaG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1VzZXIvVXNlckNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hdXRoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXlvdXQvQmFzZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0L01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xheW91dC9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8RDpcXHhhbXBwXFxodGRvY3NcXGtpdHJhbmFcXHN5bWZvbnlcXGV4by1zeW1mb255XFxub2RlX21vZHVsZXNcXGpzb25sZFxcbGliXFxkb2N1bWVudExvYWRlcnN8aHR0cCIsIndlYnBhY2s6Ly8vaWdub3JlZHxEOlxceGFtcHBcXGh0ZG9jc1xca2l0cmFuYVxcc3ltZm9ueVxcZXhvLXN5bWZvbnlcXG5vZGVfbW9kdWxlc1xcanNvbmxkXFxsaWJcXGRvY3VtZW50TG9hZGVyc3xyZXF1ZXN0Iiwid2VicGFjazovLy9pZ25vcmVkfEQ6XFx4YW1wcFxcaHRkb2NzXFxraXRyYW5hXFxzeW1mb255XFxleG8tc3ltZm9ueVxcbm9kZV9tb2R1bGVzXFxqc29ubGRcXGxpYnx4bWxkb20iLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8RDpcXHhhbXBwXFxodGRvY3NcXGtpdHJhbmFcXHN5bWZvbnlcXGV4by1zeW1mb255XFxub2RlX21vZHVsZXNcXHJkZi1jYW5vbml6ZVxcbGlifHJkZi1jYW5vbml6ZS1uYXRpdmUiXSwibmFtZXMiOlsiRW50aXRlQ3JlYXRlIiwicHJvcHMiLCJzZWFyY2hUZXh0IiwibGliZWxsZSIsIkVudGl0ZUVkaXQiLCJFbnRpdGVMaXN0IiwiRW50aXRlU2hvdyIsIlVzZXJDcmVhdGUiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJ0b2tlbiIsImRlY29kZWRUb2tlbiIsImRlY29kZUp3dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwZXJtaXNzaW9ucyIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrRXJyb3IiLCJlcnJvciIsImNoZWNrQXV0aCIsImdldEl0ZW0iLCJyZWplY3QiLCJnZXRQZXJtaXNzaW9ucyIsInJvbGUiLCJkYXRhUHJvdmlkZXIiLCJwcm9jZXNzIiwiaThuUHJvdmlkZXIiLCJwb2x5Z2xvdEkxOG5Qcm92aWRlciIsImZyZW5jaE1lc3NhZ2VzIiwiY29uc29sZSIsImxvZyIsIkFwcCIsImF1dGhQcm92aWRlciIsIkJhc2VMYXlvdXQiLCJsYWJlbCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdkJhciIsIk1lbnUiLCJvbk1lbnVDbGljayIsImlzWFNtYWxsIiwidXNlTWVkaWFRdWVyeSIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJkb3duIiwib3BlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhZG1pbiIsInVpIiwic2lkZWJhck9wZW4iLCJyZXNvdXJjZXMiLCJnZXRSZXNvdXJjZXMiLCJtYXAiLCJyZXNvdXJjZSIsIm5hbWUiLCJvcHRpb25zIiwiaWNvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZsZXgiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJzcGFjZXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0FBQUEsc0JBQ3RCLGlEQUFDLDhEQUFELEVBQW1CQSxLQUFuQixlQUNJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBREosZUFFSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQUZKLGVBR0ksaURBQUMsZ0RBQUQ7QUFDSSxVQUFNLEVBQUMsT0FEWDtBQUVJLGFBQVMsRUFBQyxPQUZkO0FBR0ksU0FBSyxFQUFDLE1BSFY7QUFJSSxpQkFBYSxFQUFFLHVCQUFBQyxVQUFVO0FBQUEsYUFBSztBQUFFQyxlQUFPLEVBQUVEO0FBQVgsT0FBTDtBQUFBO0FBSjdCLGtCQU1JLGlEQUFDLGdEQUFEO0FBQW1CLGNBQVUsRUFBQztBQUE5QixJQU5KLENBSEosZUFXSSxpREFBQyxnREFBRDtBQUNJLFVBQU0sRUFBQyxjQURYO0FBRUksYUFBUyxFQUFDLGNBRmQ7QUFHSSxTQUFLLEVBQUMsa0JBSFY7QUFJSSxpQkFBYSxFQUFFLHVCQUFBQSxVQUFVO0FBQUEsYUFBSztBQUFFQyxlQUFPLEVBQUVEO0FBQVgsT0FBTDtBQUFBO0FBSjdCLGtCQU1JLGlEQUFDLGdEQUFEO0FBQW1CLGNBQVUsRUFBQztBQUE5QixJQU5KLENBWEosQ0FEc0I7QUFBQSxDQUExQjs7QUF1QkEsaUVBQWVGLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBSUE7O0FBRUEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUgsS0FBSztBQUFBLHNCQUNwQixpREFBQyw0REFBRCxFQUFpQkEsS0FBakIsZUFDSSxpREFBQyw2REFB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Q0FESDtBQUVIQyxnQkFBWSxFQUFFLFVBRlg7QUFHSEMsY0FBVSxFQUFFLFFBSFQ7QUFJSEMsWUFBUSxFQUFFO0FBSlAsR0FEa0I7QUFPekJDLFFBQU0sRUFBRTtBQUNKSixRQUFJLEVBQUU7QUFERjtBQVBpQixDQUFELENBQTVCOztBQVlBLElBQU14QixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBeEQsS0FBSyxFQUFJO0FBQ3BCLE1BQU1xRixPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFDQSxzQkFDSSxpREFBQyxnREFBRCxlQUFZN0UsS0FBWjtBQUFtQixTQUFLLEVBQUM7QUFBekIsbUJBQ1IsaURBQUMsaUVBQUQ7QUFDSSxXQUFPLEVBQUMsSUFEWjtBQUVJLFNBQUssRUFBQyxTQUZWO0FBR0ksYUFBUyxFQUFFcUYsT0FBTyxDQUFDTixLQUh2QjtBQUlJLE1BQUUsRUFBQztBQUpQLElBRFEsZUFPQTtBQUFNLGFBQVMsRUFBRU0sT0FBTyxDQUFDRDtBQUF6QixJQVBBLENBREo7QUFXSCxDQWJEOztBQWVBLGlFQUFlNUIsTUFBZixFOzs7Ozs7Ozs7O0FDakNBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDcmVhdGVHdWVzc2VyLFxyXG4gICAgSW5wdXRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVDcmVhdGUgPSBwcm9wcyA9PiAoXHJcbiAgICA8Q3JlYXRlR3Vlc3NlciB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIgLz5cclxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcclxuICAgICAgICAgICAgc291cmNlPVwic2l0ZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJzaXRlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU2l0ZVwiXHJcbiAgICAgICAgICAgIGZpbHRlclRvUXVlcnk9e3NlYXJjaFRleHQgPT4gKHsgbGliZWxsZTogc2VhcmNoVGV4dCB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBkJ2VudGl0w6lcIlxyXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICA8L0NyZWF0ZUd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVDcmVhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgRWRpdEd1ZXNzZXIsXHJcbiAgICBJbnB1dEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VJbnB1dCwgQXV0b2NvbXBsZXRlSW5wdXQsIFRleHRGaWVsZCwgU2VsZWN0SW5wdXQgfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IEVudGl0ZUVkaXQgPSBwcm9wcyA9PiAoXHJcbiAgICA8RWRpdEd1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIi8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIvPlxyXG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxyXG4gICAgICAgICAgICBzb3VyY2U9XCJzaXRlc1wiXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cInNpdGVzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJTaXRlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VsZWN0SW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBkJ2VudGl0w6lcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFNlbGVjdElucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgPC9FZGl0R3Vlc3Nlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0ZUVkaXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgTGlzdEd1ZXNzZXIsXHJcbiAgICBGaWVsZEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VGaWVsZCwgVGV4dEZpZWxkfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IEVudGl0ZUxpc3QgPSBwcm9wcyA9PiAoXHJcbiAgICA8TGlzdEd1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIGFkZExhYmVsPXt0cnVlfS8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiU2l0ZVwiIHNvdXJjZT1cInNpdGVcIiByZWZlcmVuY2U9XCJzaXRlc1wiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiVHlwZVwiIHNvdXJjZT1cInR5cGVcIiByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgPC9MaXN0R3Vlc3Nlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0ZUxpc3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgU2hvd0d1ZXNzZXIsXHJcbiAgICBGaWVsZEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VGaWVsZCwgVGV4dEZpZWxkfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IEVudGl0ZVNob3cgPSBwcm9wcyA9PiAoXHJcbiAgICA8U2hvd0d1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIGFkZExhYmVsPXt0cnVlfS8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiU2l0ZVwiIHNvdXJjZT1cInNpdGVcIiByZWZlcmVuY2U9XCJzaXRlc1wiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiVHlwZVwiIHNvdXJjZT1cInR5cGVcIiByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgPC9TaG93R3Vlc3Nlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0ZVNob3c7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ3JlYXRlR3Vlc3NlcixcclxuICAgIElucHV0R3Vlc3NlclxyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XHJcbmltcG9ydCB7IFJlZmVyZW5jZUlucHV0LCBBdXRvY29tcGxldGVJbnB1dCB9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xyXG5cclxuY29uc3QgVXNlckNyZWF0ZSA9IHByb3BzID0+IChcclxuICAgIDxDcmVhdGVHdWVzc2VyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJwaG90b1Byb2ZpbGVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZW1haWxcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibG9naW5cIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibm9tXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInByZW5vbVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJzaXR1YXRpb25NYXRyaW1vbmlhbGVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY2l2aWxpdGVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZGF0ZURlTmFpc3NhbmNlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImNvbXBldGVuY2VcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZGF0ZUVudHJlZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJkYXRlX3NvcnRpZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJyZW1hcnF1ZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJlbmFibGVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZW50aXRlXCIgLz5cclxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcclxuICAgICAgICAgICAgc291cmNlPVwicHJvZmlsZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJwcm9maWxlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUHJvZmlsZVwiXHJcbiAgICAgICAgICAgIGZpbHRlclRvUXVlcnk9e3NlYXJjaFRleHQgPT4gKHsgbGliZWxsZTogc2VhcmNoVGV4dCB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cclxuICAgIDwvQ3JlYXRlR3Vlc3Nlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDcmVhdGU7IiwiLy8gaW4gc3JjL2F1dGhQcm92aWRlci5qc1xyXG5pbXBvcnQgZGVjb2RlSnd0IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbG9naW46ICh7dXNlcm5hbWUsIHBhc3N3b3JkfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL2F1dGhlbnRpY2F0aW9uX3Rva2VuJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLCBwYXNzd29yZH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoe3Rva2VufSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gZGVjb2RlSnd0KHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwZXJtaXNzaW9ucycsIGRlY29kZWRUb2tlbi5wZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxvZ291dDogKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0Vycm9yOiBlcnJvciA9PiB7XHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG4gICAgY2hlY2tBdXRoOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgfSxcclxuICAgIGdldFBlcm1pc3Npb25zOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIHJldHVybiByb2xlID8gUHJvbWlzZS5yZXNvbHZlKHJvbGUpIDogUHJvbWlzZS5yZWplY3QoKTtcclxuICAgIH0sXHJcbn07IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSHlkcmFBZG1pbiwgUmVzb3VyY2VHdWVzc2VyICB9IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XHJcbmltcG9ydCBwb2x5Z2xvdEkxOG5Qcm92aWRlciBmcm9tICdyYS1pMThuLXBvbHlnbG90JztcclxuaW1wb3J0IGZyZW5jaE1lc3NhZ2VzIGZyb20gJ3JhLWxhbmd1YWdlLWZyZW5jaCc7XHJcbmltcG9ydCBCYXNlTGF5b3V0IGZyb20gXCIuL2xheW91dC9CYXNlTGF5b3V0XCJcclxuaW1wb3J0IFVzZXJDcmVhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9Vc2VyL1VzZXJDcmVhdGVcIjtcclxuaW1wb3J0IEVudGl0ZUNyZWF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVDcmVhdGVcIjtcclxuaW1wb3J0IEVudGl0ZUVkaXQgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlRWRpdFwiO1xyXG5pbXBvcnQgRW50aXRlU2hvdyBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVTaG93XCI7XHJcbmltcG9ydCBFbnRpdGVMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUxpc3RcIjtcclxuaW1wb3J0IGF1dGhQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvYXV0aFByb3ZpZGVyJztcclxuLy8gZG9tYWluIHRyYW5zbGF0aW9uc1xyXG4vLyByZXF1aXJlKCcuL2kxOG4vZnInKTtcclxuXHJcbmNvbnN0IGRhdGFQcm92aWRlciA9IHByb2Nlc3MuZW52LkVOVFJZX1BPSU5UX0FQSTtcclxuY29uc3QgaThuUHJvdmlkZXIgPSBwb2x5Z2xvdEkxOG5Qcm92aWRlcigoKSA9PiBmcmVuY2hNZXNzYWdlcywgJ2ZyJyk7XHJcblxyXG4vLyBjb25zdCBpOG5Qcm92aWRlciA9IHBvbHlnbG90STE4blByb3ZpZGVyKGxvY2FsZSA9PiBtZXNzYWdlcyk7XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkVOVFJZX1BPSU5UX0FQSSlcclxuY29uc3QgQXBwID0gKCkgPT4gKFxyXG4gICAgPEh5ZHJhQWRtaW4gZW50cnlwb2ludD17ZGF0YVByb3ZpZGVyfSBhdXRoUHJvdmlkZXI9e2F1dGhQcm92aWRlcn0gbGF5b3V0PXtCYXNlTGF5b3V0fSBpMThuUHJvdmlkZXI9e2k4blByb3ZpZGVyfSBsb2NhbGU9XCJmclwiPlxyXG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cInVzZXJzXCIgY3JlYXRlPXtVc2VyQ3JlYXRlfSBvcHRpb25zPXt7bGFiZWw6IFwiVXRpbGlzYXRldXJzXCJ9fS8+XHJcbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwicHJvZmlsZXNcIiBvcHRpb25zPXt7bGFiZWw6IFwiUHJvZmlsZXNcIn19Lz5cclxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJzaXRlc1wiIG9wdGlvbnM9e3tsYWJlbDogXCJTaXRlc1wifX0vPlxyXG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cImVudGl0ZXNcIiBsaXN0PXtFbnRpdGVMaXN0fSBzaG93PXtFbnRpdGVTaG93fSBlZGl0PXtFbnRpdGVFZGl0fSBjcmVhdGU9e0VudGl0ZUNyZWF0ZX0gb3B0aW9ucz17e2xhYmVsOiBcIkVudGl0w6lzXCJ9fS8+XHJcbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwiZW50aXRlX3R5cGVzXCIgb3B0aW9ucz17e2xhYmVsOiBcIlR5cGUgZCdlbnRpdMOpc1wifX0vPlxyXG4gICAgPC9IeWRyYUFkbWluPlxyXG4pO1xyXG5SZWFjdERPTS5yZW5kZXIoXHJcbjxBcHBcclxuLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbikiLCIvLyBpbiBzcmMvTXlMYXlvdXQuanNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdyZWFjdC1hZG1pbic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xyXG5cclxuY29uc3QgQmFzZUxheW91dCA9IChwcm9wcykgPT4gPExheW91dCB7Li4ucHJvcHN9IGFwcEJhcj17TmF2QmFyfSBtZW51PXtNZW51fS8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUxheW91dDsiLCIvLyBpbiBzcmMvTWVudS5qc1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRNZW51SXRlbSwgTWVudUl0ZW1MaW5rLCBnZXRSZXNvdXJjZXMgfSBmcm9tICdyZWFjdC1hZG1pbic7XHJcbmltcG9ydCBEZWZhdWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3QnO1xyXG5pbXBvcnQgTGFiZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MYWJlbCc7XHJcblxyXG5jb25zdCBNZW51ID0gKHsgb25NZW51Q2xpY2ssIGxvZ291dCB9KSA9PiB7XHJcbiAgICBjb25zdCBpc1hTbWFsbCA9IHVzZU1lZGlhUXVlcnkodGhlbWUgPT4gdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XHJcbiAgICBjb25zdCBvcGVuID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWRtaW4udWkuc2lkZWJhck9wZW4pO1xyXG4gICAgY29uc3QgcmVzb3VyY2VzID0gdXNlU2VsZWN0b3IoZ2V0UmVzb3VyY2VzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8RGFzaGJvYXJkTWVudUl0ZW0gb25DbGljaz17b25NZW51Q2xpY2t9IHNpZGViYXJJc09wZW49e29wZW59IC8+XHJcbiAgICB7cmVzb3VyY2VzLm1hcChyZXNvdXJjZSA9PiAoXHJcbiAgICAgICAgPE1lbnVJdGVtTGlua1xyXG4gICAgICAgIGtleT17cmVzb3VyY2UubmFtZX1cclxuICAgICAgICB0bz17YC8ke3Jlc291cmNlLm5hbWV9YH1cclxuICAgICAgICBwcmltYXJ5VGV4dD17XHJcbiAgICAgICAgICAgIChyZXNvdXJjZS5vcHRpb25zICYmIHJlc291cmNlLm9wdGlvbnMubGFiZWwpIHx8XHJcbiAgICAgICAgICAgIHJlc291cmNlLm5hbWVcclxuICAgIH1cclxuICAgICAgICBsZWZ0SWNvbj17XHJcbiAgICAgICAgICAgIHJlc291cmNlLmljb24gPyA8cmVzb3VyY2UuaWNvbiAvPiA6IDxEZWZhdWx0SWNvbiAvPlxyXG4gICAgfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uTWVudUNsaWNrfVxyXG4gICAgICAgIHNpZGViYXJJc09wZW49e29wZW59XHJcbiAgICAgICAgLz5cclxuICAgICkpfVxyXG48TWVudUl0ZW1MaW5rXHJcbiAgICB0bz1cIi9jdXN0b20tcm91dGVcIlxyXG4gICAgcHJpbWFyeVRleHQ9XCJNaXNjZWxsYW5lb3VzXCJcclxuICAgIGxlZnRJY29uPXs8TGFiZWxJY29uIC8+fVxyXG4gICAgb25DbGljaz17b25NZW51Q2xpY2t9XHJcbiAgICBzaWRlYmFySXNPcGVuPXtvcGVufVxyXG4gICAgLz5cclxuICAgIHtpc1hTbWFsbCAmJiBsb2dvdXR9XHJcbjwvZGl2PlxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCIvLyBpbiBzcmMvTXlBcHBCYXIuanNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBCYXIgfSBmcm9tICdyZWFjdC1hZG1pbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc3BhY2VyOiB7XHJcbiAgICAgICAgZmxleDogMSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTmF2QmFyID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQmFyIHsuLi5wcm9wc30gdGl0bGU9XCJLYWxhIGthbWEga2VseSBcIj5cclxuPFR5cG9ncmFwaHlcclxuICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgaWQ9XCJyZWFjdC1hZG1pbi10aXRsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VyfSAvPlxyXG4gICAgPC9BcHBCYXI+XHJcbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==