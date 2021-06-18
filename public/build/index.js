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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
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

var dataProvider = "http://localhost:8000/api";
var i8nProvider = (0,ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_11__.default)(function () {
  return ra_language_french__WEBPACK_IMPORTED_MODULE_3__.default;
}, 'fr'); // const i8nProvider = polyglotI18nProvider(locale => messages);

console.log("http://localhost:8000/api");

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_ra-core_esm_core_Resource_js-node_modules_ra-core_esm_dataProvider_fetch-5d76cc","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_expo-1b1321","vendors-node_modules_api-platform_admin_lib_index_js-node_modules_material-ui_icons_Label_js--a1efad"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZVNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVXNlci9Vc2VyQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xheW91dC9CYXNlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXlvdXQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0L05hdkJhci5qcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy92aG9zdHMva2V0cmlrYS9zZi1hcGktcGxhdGZvcm0tcmVhY3QtYWRtaW4vbm9kZV9tb2R1bGVzL2pzb25sZC9saWIvZG9jdW1lbnRMb2FkZXJzfGh0dHAiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvdmhvc3RzL2tldHJpa2Evc2YtYXBpLXBsYXRmb3JtLXJlYWN0LWFkbWluL25vZGVfbW9kdWxlcy9qc29ubGQvbGliL2RvY3VtZW50TG9hZGVyc3xyZXF1ZXN0Iiwid2VicGFjazovLy9pZ25vcmVkfC92YXIvd3d3L3Zob3N0cy9rZXRyaWthL3NmLWFwaS1wbGF0Zm9ybS1yZWFjdC1hZG1pbi9ub2RlX21vZHVsZXMvanNvbmxkL2xpYnx4bWxkb20iLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvdmhvc3RzL2tldHJpa2Evc2YtYXBpLXBsYXRmb3JtLXJlYWN0LWFkbWluL25vZGVfbW9kdWxlcy9yZGYtY2Fub25pemUvbGlifHJkZi1jYW5vbml6ZS1uYXRpdmUiXSwibmFtZXMiOlsiUm91dGluZyIsIlJvdXRpbmdEYXRhIiwiY29uc29sZSIsImxvZyIsIkVudGl0ZUNyZWF0ZSIsInByb3BzIiwic2VhcmNoVGV4dCIsImxpYmVsbGUiLCJFbnRpdGVFZGl0IiwiRW50aXRlTGlzdCIsIkVudGl0ZVNob3ciLCJVc2VyQ3JlYXRlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJSb3V0ZXIiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJkZWNvZGVKd3QiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicGVybWlzc2lvbnMiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVja0Vycm9yIiwiZXJyb3IiLCJjaGVja0F1dGgiLCJnZXRJdGVtIiwicmVqZWN0IiwiZ2V0UGVybWlzc2lvbnMiLCJyb2xlIiwiZGF0YVByb3ZpZGVyIiwicHJvY2VzcyIsImk4blByb3ZpZGVyIiwicG9seWdsb3RJMThuUHJvdmlkZXIiLCJmcmVuY2hNZXNzYWdlcyIsIkFwcCIsImF1dGhQcm92aWRlciIsIkJhc2VMYXlvdXQiLCJsYWJlbCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdkJhciIsIk1lbnUiLCJvbk1lbnVDbGljayIsImlzWFNtYWxsIiwidXNlTWVkaWFRdWVyeSIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJkb3duIiwib3BlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhZG1pbiIsInVpIiwic2lkZWJhck9wZW4iLCJyZXNvdXJjZXMiLCJnZXRSZXNvdXJjZXMiLCJtYXAiLCJyZXNvdXJjZSIsIm5hbWUiLCJvcHRpb25zIiwiaWNvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZsZXgiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJzcGFjZXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSwwREFBQSxDQUFnQkMscURBQWhCO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxvREFBWjtBQUNBLGlFQUFlQSxvREFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUlBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUs7QUFBQSxzQkFDdEIsaURBQUMsOERBQUQsRUFBbUJBLEtBQW5CLGVBQ0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFESixlQUVJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBRkosZUFHSSxpREFBQyxnREFBRDtBQUNJLFVBQU0sRUFBQyxPQURYO0FBRUksYUFBUyxFQUFDLE9BRmQ7QUFHSSxTQUFLLEVBQUMsTUFIVjtBQUlJLGlCQUFhLEVBQUUsdUJBQUFDLFVBQVU7QUFBQSxhQUFLO0FBQUVDLGVBQU8sRUFBRUQ7QUFBWCxPQUFMO0FBQUE7QUFKN0Isa0JBTUksaURBQUMsZ0RBQUQ7QUFBbUIsY0FBVSxFQUFDO0FBQTlCLElBTkosQ0FISixlQVdJLGlEQUFDLGdEQUFEO0FBQ0ksVUFBTSxFQUFDLGNBRFg7QUFFSSxhQUFTLEVBQUMsY0FGZDtBQUdJLFNBQUssRUFBQyxrQkFIVjtBQUlJLGlCQUFhLEVBQUUsdUJBQUFBLFVBQVU7QUFBQSxhQUFLO0FBQUVDLGVBQU8sRUFBRUQ7QUFBWCxPQUFMO0FBQUE7QUFKN0Isa0JBTUksaURBQUMsZ0RBQUQ7QUFBbUIsY0FBVSxFQUFDO0FBQTlCLElBTkosQ0FY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QUVNO0FBTG5CLElBakJRLEVBd0JITCxRQUFRLElBQUkxQixNQXhCVCxDQURKO0FBNEJILENBaENEOztBQWtDQSxpRUFBZXdCLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTW9CLFNBQVMsR0FBR0MsaUVBQVUsQ0FBQztBQUN6QkMsT0FBSyxFQUFFO0FBQ0hDLFFBQUksRUFBRSxDQURIO0FBRUhDLGdCQUFZLEVBQUUsVUFGWDtBQUdIQyxjQUFVLEVBQUUsUUFIVDtBQUlIQyxZQUFRLEVBQUU7QUFKUCxHQURrQjtBQU96QkMsUUFBTSxFQUFFO0FBQ0pKLFFBQUksRUFBRTtBQURGO0FBUGlCLENBQUQsQ0FBNUI7O0FBWUEsSUFBTXhCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUF2RCxLQUFLLEVBQUk7QUFDcEIsTUFBTW9GLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUNBLHNCQUNJLGlEQUFDLGdEQUFELGVBQVk1RSxLQUFaO0FBQW1CLFNBQUssRUFBQztBQUF6QixtQkFDUixpREFBQyxpRUFBRDtBQUNJLFdBQU8sRUFBQyxJQURaO0FBRUksU0FBSyxFQUFDLFNBRlY7QUFHSSxhQUFTLEVBQUVvRixPQUFPLENBQUNOLEtBSHZCO0FBSUksTUFBRSxFQUFDO0FBSlAsSUFEUSxlQU9BO0FBQU0sYUFBUyxFQUFFTSxPQUFPLENBQUNEO0FBQXpCLElBUEEsQ0FESjtBQVdILENBYkQ7O0FBZUEsaUVBQWU1QixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRpbmcgZnJvbSAnZm9zLXJvdXRpbmcnO1xuaW1wb3J0IFJvdXRpbmdEYXRhIGZyb20gJy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzJztcblxuUm91dGluZy5zZXREYXRhKFJvdXRpbmdEYXRhKTtcbmNvbnNvbGUubG9nKFJvdXRpbmcpO1xuZXhwb3J0IGRlZmF1bHQgUm91dGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgQ3JlYXRlR3Vlc3NlcixcbiAgICBJbnB1dEd1ZXNzZXJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcbmltcG9ydCB7IFJlZmVyZW5jZUlucHV0LCBBdXRvY29tcGxldGVJbnB1dCB9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xuXG5jb25zdCBFbnRpdGVDcmVhdGUgPSBwcm9wcyA9PiAoXG4gICAgPENyZWF0ZUd1ZXNzZXIgey4uLnByb3BzfT5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIgLz5cbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XG4gICAgICAgICAgICBzb3VyY2U9XCJzaXRlc1wiXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJzaXRlc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlNpdGVcIlxuICAgICAgICAgICAgZmlsdGVyVG9RdWVyeT17c2VhcmNoVGV4dCA9PiAoeyBsaWJlbGxlOiBzZWFyY2hUZXh0IH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XG4gICAgICAgICAgICBzb3VyY2U9XCJlbnRpdGVfdHlwZXNcIlxuICAgICAgICAgICAgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBkJ2VudGl0w6lcIlxuICAgICAgICAgICAgZmlsdGVyVG9RdWVyeT17c2VhcmNoVGV4dCA9PiAoeyBsaWJlbGxlOiBzZWFyY2hUZXh0IH0pfVxuICAgICAgICA+XG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxuICAgIDwvQ3JlYXRlR3Vlc3Nlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0ZUNyZWF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICAgIEVkaXRHdWVzc2VyLFxuICAgIElucHV0R3Vlc3NlclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0LCBUZXh0RmllbGQsIFNlbGVjdElucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XG5cbmNvbnN0IEVudGl0ZUVkaXQgPSBwcm9wcyA9PiAoXG4gICAgPEVkaXRHdWVzc2VyIHsuLi5wcm9wc30+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibGliZWxsZVwiLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIvPlxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcbiAgICAgICAgICAgIHNvdXJjZT1cInNpdGVzXCJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cInNpdGVzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiU2l0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8U2VsZWN0SW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcbiAgICAgICAgICAgIHNvdXJjZT1cImVudGl0ZV90eXBlc1wiXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJUeXBlIGQnZW50aXTDqVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XG4gICAgPC9FZGl0R3Vlc3Nlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0ZUVkaXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBMaXN0R3Vlc3NlcixcbiAgICBGaWVsZEd1ZXNzZXJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcbmltcG9ydCB7IFJlZmVyZW5jZUZpZWxkLCBUZXh0RmllbGR9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xuXG5jb25zdCBFbnRpdGVMaXN0ID0gcHJvcHMgPT4gKFxuICAgIDxMaXN0R3Vlc3NlciB7Li4ucHJvcHN9PlxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxuICAgICAgICA8UmVmZXJlbmNlRmllbGQgbGFiZWw9XCJTaXRlXCIgc291cmNlPVwic2l0ZVwiIHJlZmVyZW5jZT1cInNpdGVzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxuICAgICAgICA8UmVmZXJlbmNlRmllbGQgbGFiZWw9XCJUeXBlXCIgc291cmNlPVwidHlwZVwiIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cbiAgICA8L0xpc3RHdWVzc2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXRlTGlzdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICAgIFNob3dHdWVzc2VyLFxuICAgIEZpZWxkR3Vlc3NlclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlRmllbGQsIFRleHRGaWVsZH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XG5cbmNvbnN0IEVudGl0ZVNob3cgPSBwcm9wcyA9PiAoXG4gICAgPFNob3dHdWVzc2VyIHsuLi5wcm9wc30+XG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwibGliZWxsZVwiIGFkZExhYmVsPXt0cnVlfS8+XG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIGFkZExhYmVsPXt0cnVlfS8+XG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlNpdGVcIiBzb3VyY2U9XCJzaXRlXCIgcmVmZXJlbmNlPVwic2l0ZXNcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlR5cGVcIiBzb3VyY2U9XCJ0eXBlXCIgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxuICAgIDwvU2hvd0d1ZXNzZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVTaG93OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgQ3JlYXRlR3Vlc3NlcixcbiAgICBJbnB1dEd1ZXNzZXJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcbmltcG9ydCB7IFJlZmVyZW5jZUlucHV0LCBBdXRvY29tcGxldGVJbnB1dCB9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xuXG5jb25zdCBVc2VyQ3JlYXRlID0gcHJvcHMgPT4gKFxuICAgIDxDcmVhdGVHdWVzc2VyIHsuLi5wcm9wc30+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicGhvdG9Qcm9maWxlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJlbWFpbFwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibG9naW5cIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJub21cIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInByZW5vbVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwic2l0dWF0aW9uTWF0cmltb25pYWxlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjaXZpbGl0ZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZGF0ZURlTmFpc3NhbmNlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb21wZXRlbmNlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJkYXRlRW50cmVlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJkYXRlX3NvcnRpZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicmVtYXJxdWVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVuYWJsZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZW50aXRlXCIgLz5cbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XG4gICAgICAgICAgICBzb3VyY2U9XCJwcm9maWxlc1wiXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJwcm9maWxlc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlByb2ZpbGVcIlxuICAgICAgICAgICAgZmlsdGVyVG9RdWVyeT17c2VhcmNoVGV4dCA9PiAoeyBsaWJlbGxlOiBzZWFyY2hUZXh0IH0pfVxuICAgICAgICA+XG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxuICAgIDwvQ3JlYXRlR3Vlc3Nlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDcmVhdGU7IiwiLy8gaW4gc3JjL2F1dGhQcm92aWRlci5qc1xuaW1wb3J0IGRlY29kZUp3dCBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vUm91dGVyJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2dpbjogKHt1c2VybmFtZSwgcGFzc3dvcmR9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChSb3V0ZXIuZ2VuZXJhdGUoJ2FwaV9sb2dpbl9jaGVjaycpLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgcGFzc3dvcmR9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCh7dG9rZW59KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gZGVjb2RlSnd0KHRva2VuKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blcm1pc3Npb25zJywgZGVjb2RlZFRva2VuLnBlcm1pc3Npb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgbG9nb3V0OiAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVybWlzc2lvbnMnKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0sXG4gICAgY2hlY2tFcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICAvLyAuLi5cbiAgICB9LFxuICAgIGNoZWNrQXV0aDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVqZWN0KCk7XG4gICAgfSxcbiAgICBnZXRQZXJtaXNzaW9uczogKCkgPT4ge1xuICAgICAgICBjb25zdCByb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blcm1pc3Npb25zJyk7XG4gICAgICAgIHJldHVybiByb2xlID8gUHJvbWlzZS5yZXNvbHZlKHJvbGUpIDogUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9LFxufTsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIeWRyYUFkbWluLCBSZXNvdXJjZUd1ZXNzZXIgIH0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcbmltcG9ydCBwb2x5Z2xvdEkxOG5Qcm92aWRlciBmcm9tICdyYS1pMThuLXBvbHlnbG90JztcbmltcG9ydCBmcmVuY2hNZXNzYWdlcyBmcm9tICdyYS1sYW5ndWFnZS1mcmVuY2gnO1xuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Jhc2VMYXlvdXRcIlxuaW1wb3J0IFVzZXJDcmVhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9Vc2VyL1VzZXJDcmVhdGVcIjtcbmltcG9ydCBFbnRpdGVDcmVhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlQ3JlYXRlXCI7XG5pbXBvcnQgRW50aXRlRWRpdCBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVFZGl0XCI7XG5pbXBvcnQgRW50aXRlU2hvdyBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVTaG93XCI7XG5pbXBvcnQgRW50aXRlTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVMaXN0XCI7XG5pbXBvcnQgYXV0aFByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9hdXRoUHJvdmlkZXInO1xuLy8gZG9tYWluIHRyYW5zbGF0aW9uc1xuLy8gcmVxdWlyZSgnLi9pMThuL2ZyJyk7XG5cbmNvbnN0IGRhdGFQcm92aWRlciA9IHByb2Nlc3MuZW52LkVOVFJZX1BPSU5UX0FQSTtcbmNvbnN0IGk4blByb3ZpZGVyID0gcG9seWdsb3RJMThuUHJvdmlkZXIoKCkgPT4gZnJlbmNoTWVzc2FnZXMsICdmcicpO1xuXG4vLyBjb25zdCBpOG5Qcm92aWRlciA9IHBvbHlnbG90STE4blByb3ZpZGVyKGxvY2FsZSA9PiBtZXNzYWdlcyk7XG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5FTlRSWV9QT0lOVF9BUEkpXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gICAgPEh5ZHJhQWRtaW4gZW50cnlwb2ludD17ZGF0YVByb3ZpZGVyfSBhdXRoUHJvdmlkZXI9e2F1dGhQcm92aWRlcn0gbGF5b3V0PXtCYXNlTGF5b3V0fSBpMThuUHJvdmlkZXI9e2k4blByb3ZpZGVyfSBsb2NhbGU9XCJmclwiPlxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJ1c2Vyc1wiIGNyZWF0ZT17VXNlckNyZWF0ZX0gb3B0aW9ucz17e2xhYmVsOiBcIlV0aWxpc2F0ZXVyc1wifX0vPlxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJwcm9maWxlc1wiIG9wdGlvbnM9e3tsYWJlbDogXCJQcm9maWxlc1wifX0vPlxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJzaXRlc1wiIG9wdGlvbnM9e3tsYWJlbDogXCJTaXRlc1wifX0vPlxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJlbnRpdGVzXCIgbGlzdD17RW50aXRlTGlzdH0gc2hvdz17RW50aXRlU2hvd30gZWRpdD17RW50aXRlRWRpdH0gY3JlYXRlPXtFbnRpdGVDcmVhdGV9IG9wdGlvbnM9e3tsYWJlbDogXCJFbnRpdMOpc1wifX0vPlxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJlbnRpdGVfdHlwZXNcIiBvcHRpb25zPXt7bGFiZWw6IFwiVHlwZSBkJ2VudGl0w6lzXCJ9fS8+XG4gICAgPC9IeWRyYUFkbWluPlxuKTtcblJlYWN0RE9NLnJlbmRlcihcbjxBcHBcbi8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbikiLCIvLyBpbiBzcmMvTXlMYXlvdXQuanNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ3JlYWN0LWFkbWluJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcblxuY29uc3QgQmFzZUxheW91dCA9IChwcm9wcykgPT4gPExheW91dCB7Li4ucHJvcHN9IGFwcEJhcj17TmF2QmFyfSBtZW51PXtNZW51fS8+O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlTGF5b3V0OyIsIi8vIGluIHNyYy9NZW51LmpzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTWVudUl0ZW0sIE1lbnVJdGVtTGluaywgZ2V0UmVzb3VyY2VzIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xuaW1wb3J0IERlZmF1bHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdCc7XG5pbXBvcnQgTGFiZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MYWJlbCc7XG5cbmNvbnN0IE1lbnUgPSAoeyBvbk1lbnVDbGljaywgbG9nb3V0IH0pID0+IHtcbiAgICBjb25zdCBpc1hTbWFsbCA9IHVzZU1lZGlhUXVlcnkodGhlbWUgPT4gdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XG4gICAgY29uc3Qgb3BlbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFkbWluLnVpLnNpZGViYXJPcGVuKTtcbiAgICBjb25zdCByZXNvdXJjZXMgPSB1c2VTZWxlY3RvcihnZXRSZXNvdXJjZXMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxEYXNoYm9hcmRNZW51SXRlbSBvbkNsaWNrPXtvbk1lbnVDbGlja30gc2lkZWJhcklzT3Blbj17b3Blbn0gLz5cbiAgICB7cmVzb3VyY2VzLm1hcChyZXNvdXJjZSA9PiAoXG4gICAgICAgIDxNZW51SXRlbUxpbmtcbiAgICAgICAga2V5PXtyZXNvdXJjZS5uYW1lfVxuICAgICAgICB0bz17YC8ke3Jlc291cmNlLm5hbWV9YH1cbiAgICAgICAgcHJpbWFyeVRleHQ9e1xuICAgICAgICAgICAgKHJlc291cmNlLm9wdGlvbnMgJiYgcmVzb3VyY2Uub3B0aW9ucy5sYWJlbCkgfHxcbiAgICAgICAgICAgIHJlc291cmNlLm5hbWVcbiAgICB9XG4gICAgICAgIGxlZnRJY29uPXtcbiAgICAgICAgICAgIHJlc291cmNlLmljb24gPyA8cmVzb3VyY2UuaWNvbiAvPiA6IDxEZWZhdWx0SWNvbiAvPlxuICAgIH1cbiAgICAgICAgb25DbGljaz17b25NZW51Q2xpY2t9XG4gICAgICAgIHNpZGViYXJJc09wZW49e29wZW59XG4gICAgICAgIC8+XG4gICAgKSl9XG48TWVudUl0ZW1MaW5rXG4gICAgdG89XCIvY3VzdG9tLXJvdXRlXCJcbiAgICBwcmltYXJ5VGV4dD1cIk1pc2NlbGxhbmVvdXNcIlxuICAgIGxlZnRJY29uPXs8TGFiZWxJY29uIC8+fVxuICAgIG9uQ2xpY2s9e29uTWVudUNsaWNrfVxuICAgIHNpZGViYXJJc09wZW49e29wZW59XG4gICAgLz5cbiAgICB7aXNYU21hbGwgJiYgbG9nb3V0fVxuPC9kaXY+XG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCIvLyBpbiBzcmMvTXlBcHBCYXIuanNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcEJhciB9IGZyb20gJ3JlYWN0LWFkbWluJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHRpdGxlOiB7XG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9LFxuICAgIHNwYWNlcjoge1xuICAgICAgICBmbGV4OiAxLFxuICAgIH0sXG59KTtcblxuY29uc3QgTmF2QmFyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwQmFyIHsuLi5wcm9wc30gdGl0bGU9XCJLYWxhIGthbWEga2VseSBcIj5cbjxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImg2XCJcbiAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICBpZD1cInJlYWN0LWFkbWluLXRpdGxlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn0gLz5cbiAgICA8L0FwcEJhcj5cbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==