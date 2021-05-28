(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./assets/Router.js":
/*!**************************!*\
  !*** ./assets/Router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fos_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fos-routing */ "./node_modules/fos-routing/dist/routing.js");
/* harmony import */ var fos_routing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fos_routing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_js_fos_js_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/js/fos_js_routes */ "./public/js/fos_js_routes.json");


fos_routing__WEBPACK_IMPORTED_MODULE_0___default().setData(_public_js_fos_js_routes__WEBPACK_IMPORTED_MODULE_1__);
console.log((fos_routing__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((fos_routing__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Router */ "./assets/Router.js");


// in src/authProvider.js


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  login: function login(_ref) {
    var username = _ref.username,
        password = _ref.password;
    var request = new Request(_Router__WEBPACK_IMPORTED_MODULE_3__.default.generate('api_login_check'), {
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

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"api_login_check":{"tokens":[["text","/authentication_token"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost:8001","port":"","scheme":"http","locale":[]}');

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_index_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_expo-1b1321","vendors-node_modules_ra-core_esm_core_Resource_js-node_modules_ra-core_esm_dataProvider_fetch-5d76cc","vendors-node_modules_api-platform_admin_lib_index_js-node_modules_material-ui_icons_Label_js--a1efad"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZVNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVXNlci9Vc2VyQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xheW91dC9CYXNlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXlvdXQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0L05hdkJhci5qcyIsIndlYnBhY2s6Ly8vaWdub3JlZHxEOlxceGFtcHBcXGh0ZG9jc1xca2l0cmFuYVxcc3ltZm9ueVxcZXhvLXN5bWZvbnlcXG5vZGVfbW9kdWxlc1xcanNvbmxkXFxsaWJcXGRvY3VtZW50TG9hZGVyc3xodHRwIiwid2VicGFjazovLy9pZ25vcmVkfEQ6XFx4YW1wcFxcaHRkb2NzXFxraXRyYW5hXFxzeW1mb255XFxleG8tc3ltZm9ueVxcbm9kZV9tb2R1bGVzXFxqc29ubGRcXGxpYlxcZG9jdW1lbnRMb2FkZXJzfHJlcXVlc3QiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8RDpcXHhhbXBwXFxodGRvY3NcXGtpdHJhbmFcXHN5bWZvbnlcXGV4by1zeW1mb255XFxub2RlX21vZHVsZXNcXGpzb25sZFxcbGlifHhtbGRvbSIsIndlYnBhY2s6Ly8vaWdub3JlZHxEOlxceGFtcHBcXGh0ZG9jc1xca2l0cmFuYVxcc3ltZm9ueVxcZXhvLXN5bWZvbnlcXG5vZGVfbW9kdWxlc1xccmRmLWNhbm9uaXplXFxsaWJ8cmRmLWNhbm9uaXplLW5hdGl2ZSJdLCJuYW1lcyI6WyJSb3V0aW5nIiwiUm91dGluZ0RhdGEiLCJjb25zb2xlIiwibG9nIiwiRW50aXRlQ3JlYXRlIiwicHJvcHMiLCJzZWFyY2hUZXh0IiwibGliZWxsZSIsIkVudGl0ZUVkaXQiLCJFbnRpdGVMaXN0IiwiRW50aXRlU2hvdyIsIlVzZXJDcmVhdGUiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIlJvdXRlciIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJ0b2tlbiIsImRlY29kZWRUb2tlbiIsImRlY29kZUp3dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwZXJtaXNzaW9ucyIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrRXJyb3IiLCJlcnJvciIsImNoZWNrQXV0aCIsImdldEl0ZW0iLCJyZWplY3QiLCJnZXRQZXJtaXNzaW9ucyIsInJvbGUiLCJkYXRhUHJvdmlkZXIiLCJwcm9jZXNzIiwiaThuUHJvdmlkZXIiLCJwb2x5Z2xvdEkxOG5Qcm92aWRlciIsImZyZW5jaE1lc3NhZ2VzIiwiQXBwIiwiYXV0aFByb3ZpZGVyIiwiQmFzZUxheW91dCIsImxhYmVsIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTmF2QmFyIiwiTWVudSIsIm9uTWVudUNsaWNrIiwiaXNYU21hbGwiLCJ1c2VNZWRpYVF1ZXJ5IiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJvcGVuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkbWluIiwidWkiLCJzaWRlYmFyT3BlbiIsInJlc291cmNlcyIsImdldFJlc291cmNlcyIsIm1hcCIsInJlc291cmNlIiwibmFtZSIsIm9wdGlvbnMiLCJpY29uIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRpdGxlIiwiZmxleCIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInNwYWNlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUFBLDBEQUFBLENBQWdCQyxxREFBaEI7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILG9EQUFaO0FBQ0EsaUVBQWVBLG9EQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBSUE7O0FBRUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSztBQUFBLHNCQUN0QixpREFBQyw4REFBRCxFQUFtQkEsS0FBbkIsZUFDSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQURKLGVBRUksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFGSixlQUdJLGlEQUFDLGdEQUFEO0FBQ0ksVUFBTSxFQUFDLE9BRFg7QUFFSSxhQUFTLEVBQUMsT0FGZDtBQUdJLFNBQUssRUFBQyxNQUhWO0FBSUksaUJBQWEsRUFBRSx1QkFBQUMsVUFBVTtBQUFBLGFBQUs7QUFBRUMsZUFBTyxFQUFFRDtBQUFYLE9BQUw7QUFBQTtBQUo3QixrQkFNSSxpREFBQyxnREFBRDtBQUFtQixjQUFVLEVBQUM7QUFBOUIsSUFOSixDQUhKLGVBV0ksaURBQUMsZ0RBQUQ7QUFDSSxVQUFNLEVBQUMsY0FEWDtBQUVJLGFBQVMsRUFBQyxjQUZkO0FBR0ksU0FBSyxFQUFDLGtCQUhWO0FBSUksaUJBQWEsRUFBRSx1QkFBQUEsVUFBVTtBQUFBLGFBQUs7QUFBRUMsZUFBTyxFQUFFRDtBQUFYLE9BQUw7QUFBQTtBQUo3QixrQkFNSSxpREFBQyxnREFBRDtBQUFtQixjQUFVLEVBQUM7QUFBOUIsSUFOSixD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RUFBRU07QUFMbkIsSUFqQlEsRUF3QkhMLFFBQVEsSUFBSTFCLE1BeEJULENBREo7QUE0QkgsQ0FoQ0Q7O0FBa0NBLGlFQUFld0IsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNb0IsU0FBUyxHQUFHQyxpRUFBVSxDQUFDO0FBQ3pCQyxPQUFLLEVBQUU7QUFDSEMsUUFBSSxFQUFFLENBREg7QUFFSEMsZ0JBQVksRUFBRSxVQUZYO0FBR0hDLGNBQVUsRUFBRSxRQUhUO0FBSUhDLFlBQVEsRUFBRTtBQUpQLEdBRGtCO0FBT3pCQyxRQUFNLEVBQUU7QUFDSkosUUFBSSxFQUFFO0FBREY7QUFQaUIsQ0FBRCxDQUE1Qjs7QUFZQSxJQUFNeEIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQXZELEtBQUssRUFBSTtBQUNwQixNQUFNb0YsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0ksaURBQUMsZ0RBQUQsZUFBWTVFLEtBQVo7QUFBbUIsU0FBSyxFQUFDO0FBQXpCLG1CQUNSLGlEQUFDLGlFQUFEO0FBQ0ksV0FBTyxFQUFDLElBRFo7QUFFSSxTQUFLLEVBQUMsU0FGVjtBQUdJLGFBQVMsRUFBRW9GLE9BQU8sQ0FBQ04sS0FIdkI7QUFJSSxNQUFFLEVBQUM7QUFKUCxJQURRLGVBT0E7QUFBTSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0Q7QUFBekIsSUFQQSxDQURKO0FBV0gsQ0FiRDs7QUFlQSxpRUFBZTVCLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGluZyBmcm9tICdmb3Mtcm91dGluZyc7XHJcbmltcG9ydCBSb3V0aW5nRGF0YSBmcm9tICcuLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcyc7XHJcblxyXG5Sb3V0aW5nLnNldERhdGEoUm91dGluZ0RhdGEpO1xyXG5jb25zb2xlLmxvZyhSb3V0aW5nKTtcclxuZXhwb3J0IGRlZmF1bHQgUm91dGluZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ3JlYXRlR3Vlc3NlcixcclxuICAgIElucHV0R3Vlc3NlclxyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XHJcbmltcG9ydCB7IFJlZmVyZW5jZUlucHV0LCBBdXRvY29tcGxldGVJbnB1dCB9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xyXG5cclxuY29uc3QgRW50aXRlQ3JlYXRlID0gcHJvcHMgPT4gKFxyXG4gICAgPENyZWF0ZUd1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIC8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cInNpdGVzXCJcclxuICAgICAgICAgICAgcmVmZXJlbmNlPVwic2l0ZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlNpdGVcIlxyXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxyXG4gICAgICAgICAgICBzb3VyY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgZCdlbnRpdMOpXCJcclxuICAgICAgICAgICAgZmlsdGVyVG9RdWVyeT17c2VhcmNoVGV4dCA9PiAoeyBsaWJlbGxlOiBzZWFyY2hUZXh0IH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgPC9DcmVhdGVHdWVzc2VyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50aXRlQ3JlYXRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIEVkaXRHdWVzc2VyLFxyXG4gICAgSW5wdXRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0LCBUZXh0RmllbGQsIFNlbGVjdElucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVFZGl0ID0gcHJvcHMgPT4gKFxyXG4gICAgPEVkaXRHdWVzc2VyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29kZVwiLz5cclxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcclxuICAgICAgICAgICAgc291cmNlPVwic2l0ZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJzaXRlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU2l0ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlbGVjdElucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxyXG4gICAgICAgICAgICBzb3VyY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgZCdlbnRpdMOpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cclxuICAgIDwvRWRpdEd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVFZGl0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIExpc3RHdWVzc2VyLFxyXG4gICAgRmllbGRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlRmllbGQsIFRleHRGaWVsZH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVMaXN0ID0gcHJvcHMgPT4gKFxyXG4gICAgPExpc3RHdWVzc2VyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIgYWRkTGFiZWw9e3RydWV9Lz5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlNpdGVcIiBzb3VyY2U9XCJzaXRlXCIgcmVmZXJlbmNlPVwic2l0ZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlR5cGVcIiBzb3VyY2U9XCJ0eXBlXCIgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cclxuICAgIDwvTGlzdEd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIFNob3dHdWVzc2VyLFxyXG4gICAgRmllbGRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlRmllbGQsIFRleHRGaWVsZH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVTaG93ID0gcHJvcHMgPT4gKFxyXG4gICAgPFNob3dHdWVzc2VyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIgYWRkTGFiZWw9e3RydWV9Lz5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlNpdGVcIiBzb3VyY2U9XCJzaXRlXCIgcmVmZXJlbmNlPVwic2l0ZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlR5cGVcIiBzb3VyY2U9XCJ0eXBlXCIgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cclxuICAgIDwvU2hvd0d1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVTaG93OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENyZWF0ZUd1ZXNzZXIsXHJcbiAgICBJbnB1dEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VJbnB1dCwgQXV0b2NvbXBsZXRlSW5wdXQgfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IFVzZXJDcmVhdGUgPSBwcm9wcyA9PiAoXHJcbiAgICA8Q3JlYXRlR3Vlc3NlciB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicGhvdG9Qcm9maWxlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVtYWlsXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxvZ2luXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInVzZXJuYW1lXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cIm5vbVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJwcmVub21cIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwic2l0dWF0aW9uTWF0cmltb25pYWxlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImNpdmlsaXRlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVEZU5haXNzYW5jZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb21wZXRlbmNlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVFbnRyZWVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZGF0ZV9zb3J0aWVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicmVtYXJxdWVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZW5hYmxlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVudGl0ZVwiIC8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cInByb2ZpbGVzXCJcclxuICAgICAgICAgICAgcmVmZXJlbmNlPVwicHJvZmlsZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlByb2ZpbGVcIlxyXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICA8L0NyZWF0ZUd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ3JlYXRlOyIsIi8vIGluIHNyYy9hdXRoUHJvdmlkZXIuanNcclxuaW1wb3J0IGRlY29kZUp3dCBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9Sb3V0ZXInO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBsb2dpbjogKHt1c2VybmFtZSwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFJvdXRlci5nZW5lcmF0ZSgnYXBpX2xvZ2luX2NoZWNrJyksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgcGFzc3dvcmR9KSxcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHt0b2tlbn0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGRlY29kZUp3dCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVybWlzc2lvbnMnLCBkZWNvZGVkVG9rZW4ucGVybWlzc2lvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsb2dvdXQ6ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVybWlzc2lvbnMnKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tFcnJvcjogZXJyb3IgPT4ge1xyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuICAgIGNoZWNrQXV0aDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcclxuICAgIH0sXHJcbiAgICBnZXRQZXJtaXNzaW9uczogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVybWlzc2lvbnMnKTtcclxuICAgICAgICByZXR1cm4gcm9sZSA/IFByb21pc2UucmVzb2x2ZShyb2xlKSA6IFByb21pc2UucmVqZWN0KCk7XHJcbiAgICB9LFxyXG59OyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEh5ZHJhQWRtaW4sIFJlc291cmNlR3Vlc3NlciAgfSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgcG9seWdsb3RJMThuUHJvdmlkZXIgZnJvbSAncmEtaTE4bi1wb2x5Z2xvdCc7XHJcbmltcG9ydCBmcmVuY2hNZXNzYWdlcyBmcm9tICdyYS1sYW5ndWFnZS1mcmVuY2gnO1xyXG5pbXBvcnQgQmFzZUxheW91dCBmcm9tIFwiLi9sYXlvdXQvQmFzZUxheW91dFwiXHJcbmltcG9ydCBVc2VyQ3JlYXRlIGZyb20gXCIuL2NvbXBvbmVudHMvVXNlci9Vc2VyQ3JlYXRlXCI7XHJcbmltcG9ydCBFbnRpdGVDcmVhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlQ3JlYXRlXCI7XHJcbmltcG9ydCBFbnRpdGVFZGl0IGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUVkaXRcIjtcclxuaW1wb3J0IEVudGl0ZVNob3cgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlU2hvd1wiO1xyXG5pbXBvcnQgRW50aXRlTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVMaXN0XCI7XHJcbmltcG9ydCBhdXRoUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2F1dGhQcm92aWRlcic7XHJcbi8vIGRvbWFpbiB0cmFuc2xhdGlvbnNcclxuLy8gcmVxdWlyZSgnLi9pMThuL2ZyJyk7XHJcblxyXG5jb25zdCBkYXRhUHJvdmlkZXIgPSBwcm9jZXNzLmVudi5FTlRSWV9QT0lOVF9BUEk7XHJcbmNvbnN0IGk4blByb3ZpZGVyID0gcG9seWdsb3RJMThuUHJvdmlkZXIoKCkgPT4gZnJlbmNoTWVzc2FnZXMsICdmcicpO1xyXG5cclxuLy8gY29uc3QgaThuUHJvdmlkZXIgPSBwb2x5Z2xvdEkxOG5Qcm92aWRlcihsb2NhbGUgPT4gbWVzc2FnZXMpO1xyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5FTlRSWV9QT0lOVF9BUEkpXHJcbmNvbnN0IEFwcCA9ICgpID0+IChcclxuICAgIDxIeWRyYUFkbWluIGVudHJ5cG9pbnQ9e2RhdGFQcm92aWRlcn0gYXV0aFByb3ZpZGVyPXthdXRoUHJvdmlkZXJ9IGxheW91dD17QmFzZUxheW91dH0gaTE4blByb3ZpZGVyPXtpOG5Qcm92aWRlcn0gbG9jYWxlPVwiZnJcIj5cclxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJ1c2Vyc1wiIGNyZWF0ZT17VXNlckNyZWF0ZX0gb3B0aW9ucz17e2xhYmVsOiBcIlV0aWxpc2F0ZXVyc1wifX0vPlxyXG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cInByb2ZpbGVzXCIgb3B0aW9ucz17e2xhYmVsOiBcIlByb2ZpbGVzXCJ9fS8+XHJcbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwic2l0ZXNcIiBvcHRpb25zPXt7bGFiZWw6IFwiU2l0ZXNcIn19Lz5cclxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJlbnRpdGVzXCIgbGlzdD17RW50aXRlTGlzdH0gc2hvdz17RW50aXRlU2hvd30gZWRpdD17RW50aXRlRWRpdH0gY3JlYXRlPXtFbnRpdGVDcmVhdGV9IG9wdGlvbnM9e3tsYWJlbDogXCJFbnRpdMOpc1wifX0vPlxyXG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cImVudGl0ZV90eXBlc1wiIG9wdGlvbnM9e3tsYWJlbDogXCJUeXBlIGQnZW50aXTDqXNcIn19Lz5cclxuICAgIDwvSHlkcmFBZG1pbj5cclxuKTtcclxuUmVhY3RET00ucmVuZGVyKFxyXG48QXBwXHJcbi8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pIiwiLy8gaW4gc3JjL015TGF5b3V0LmpzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcclxuXHJcbmNvbnN0IEJhc2VMYXlvdXQgPSAocHJvcHMpID0+IDxMYXlvdXQgey4uLnByb3BzfSBhcHBCYXI9e05hdkJhcn0gbWVudT17TWVudX0vPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VMYXlvdXQ7IiwiLy8gaW4gc3JjL01lbnUuanNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkTWVudUl0ZW0sIE1lbnVJdGVtTGluaywgZ2V0UmVzb3VyY2VzIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgRGVmYXVsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0JztcclxuaW1wb3J0IExhYmVsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFiZWwnO1xyXG5cclxuY29uc3QgTWVudSA9ICh7IG9uTWVudUNsaWNrLCBsb2dvdXQgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNYU21hbGwgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lID0+IHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gICAgY29uc3Qgb3BlbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFkbWluLnVpLnNpZGViYXJPcGVuKTtcclxuICAgIGNvbnN0IHJlc291cmNlcyA9IHVzZVNlbGVjdG9yKGdldFJlc291cmNlcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPERhc2hib2FyZE1lbnVJdGVtIG9uQ2xpY2s9e29uTWVudUNsaWNrfSBzaWRlYmFySXNPcGVuPXtvcGVufSAvPlxyXG4gICAge3Jlc291cmNlcy5tYXAocmVzb3VyY2UgPT4gKFxyXG4gICAgICAgIDxNZW51SXRlbUxpbmtcclxuICAgICAgICBrZXk9e3Jlc291cmNlLm5hbWV9XHJcbiAgICAgICAgdG89e2AvJHtyZXNvdXJjZS5uYW1lfWB9XHJcbiAgICAgICAgcHJpbWFyeVRleHQ9e1xyXG4gICAgICAgICAgICAocmVzb3VyY2Uub3B0aW9ucyAmJiByZXNvdXJjZS5vcHRpb25zLmxhYmVsKSB8fFxyXG4gICAgICAgICAgICByZXNvdXJjZS5uYW1lXHJcbiAgICB9XHJcbiAgICAgICAgbGVmdEljb249e1xyXG4gICAgICAgICAgICByZXNvdXJjZS5pY29uID8gPHJlc291cmNlLmljb24gLz4gOiA8RGVmYXVsdEljb24gLz5cclxuICAgIH1cclxuICAgICAgICBvbkNsaWNrPXtvbk1lbnVDbGlja31cclxuICAgICAgICBzaWRlYmFySXNPcGVuPXtvcGVufVxyXG4gICAgICAgIC8+XHJcbiAgICApKX1cclxuPE1lbnVJdGVtTGlua1xyXG4gICAgdG89XCIvY3VzdG9tLXJvdXRlXCJcclxuICAgIHByaW1hcnlUZXh0PVwiTWlzY2VsbGFuZW91c1wiXHJcbiAgICBsZWZ0SWNvbj17PExhYmVsSWNvbiAvPn1cclxuICAgIG9uQ2xpY2s9e29uTWVudUNsaWNrfVxyXG4gICAgc2lkZWJhcklzT3Blbj17b3Blbn1cclxuICAgIC8+XHJcbiAgICB7aXNYU21hbGwgJiYgbG9nb3V0fVxyXG48L2Rpdj5cclxuKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiLy8gaW4gc3JjL015QXBwQmFyLmpzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQmFyIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgfSxcclxuICAgIHNwYWNlcjoge1xyXG4gICAgICAgIGZsZXg6IDEsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IE5hdkJhciA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcEJhciB7Li4ucHJvcHN9IHRpdGxlPVwiS2FsYSBrYW1hIGtlbHkgXCI+XHJcbjxUeXBvZ3JhcGh5XHJcbiAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgIGlkPVwicmVhY3QtYWRtaW4tdGl0bGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn0gLz5cclxuICAgIDwvQXBwQmFyPlxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=