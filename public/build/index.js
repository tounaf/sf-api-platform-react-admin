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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.AutocompleteInput, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.AutocompleteInput, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.SelectInput, {
    optionText: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__.default, {
    source: "entite_types",
    reference: "entite_types",
    label: "Type d'entit\xE9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.SelectInput, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.AutocompleteInput, {
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

/***/ "?8a39":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1eaa":
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e686":
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7a1f":
/*!*************************************!*\
  !*** rdf-canonize-native (ignored) ***!
  \*************************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_index_js","vendors-node_modules_core-js_internals_html_js-node_modules_core-js_internals_iterators_js-no-495b24","vendors-node_modules_ra-core_esm_core_Resource_js-node_modules_ra-core_esm_dataProvider_fetch-5d76cc","vendors-node_modules_api-platform_admin_lib_index_js-node_modules_material-ui_icons_Label_js--069d4e"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZVNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVXNlci9Vc2VyQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xheW91dC9CYXNlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXlvdXQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0L05hdkJhci5qcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy92aG9zdHMva2V0cmlrYS9zZi1hcGktcGxhdGZvcm0tcmVhY3QtYWRtaW4vbm9kZV9tb2R1bGVzL0BhcGktcGxhdGZvcm0vYXBpLWRvYy1wYXJzZXIvbm9kZV9tb2R1bGVzL2pzb25sZC9saWIvZG9jdW1lbnRMb2FkZXJzfGh0dHAiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvdmhvc3RzL2tldHJpa2Evc2YtYXBpLXBsYXRmb3JtLXJlYWN0LWFkbWluL25vZGVfbW9kdWxlcy9AYXBpLXBsYXRmb3JtL2FwaS1kb2MtcGFyc2VyL25vZGVfbW9kdWxlcy9qc29ubGQvbGliL2RvY3VtZW50TG9hZGVyc3xyZXF1ZXN0Iiwid2VicGFjazovLy9pZ25vcmVkfC92YXIvd3d3L3Zob3N0cy9rZXRyaWthL3NmLWFwaS1wbGF0Zm9ybS1yZWFjdC1hZG1pbi9ub2RlX21vZHVsZXMvQGFwaS1wbGF0Zm9ybS9hcGktZG9jLXBhcnNlci9ub2RlX21vZHVsZXMvanNvbmxkL2xpYnx4bWxkb20iLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvdmhvc3RzL2tldHJpa2Evc2YtYXBpLXBsYXRmb3JtLXJlYWN0LWFkbWluL25vZGVfbW9kdWxlcy9AYXBpLXBsYXRmb3JtL2FwaS1kb2MtcGFyc2VyL25vZGVfbW9kdWxlcy9yZGYtY2Fub25pemUvbGlifHJkZi1jYW5vbml6ZS1uYXRpdmUiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvdmhvc3RzL2tldHJpa2Evc2YtYXBpLXBsYXRmb3JtLXJlYWN0LWFkbWluL25vZGVfbW9kdWxlcy9yZGYtY2Fub25pemUvbGlifHJkZi1jYW5vbml6ZS1uYXRpdmUiXSwibmFtZXMiOlsiUm91dGluZyIsIlJvdXRpbmdEYXRhIiwiY29uc29sZSIsImxvZyIsIkVudGl0ZUNyZWF0ZSIsInByb3BzIiwic2VhcmNoVGV4dCIsImxpYmVsbGUiLCJFbnRpdGVFZGl0IiwiRW50aXRlTGlzdCIsIkVudGl0ZVNob3ciLCJVc2VyQ3JlYXRlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJSb3V0ZXIiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJkZWNvZGVKd3QiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicGVybWlzc2lvbnMiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVja0Vycm9yIiwiZXJyb3IiLCJjaGVja0F1dGgiLCJnZXRJdGVtIiwicmVqZWN0IiwiZ2V0UGVybWlzc2lvbnMiLCJyb2xlIiwiZGF0YVByb3ZpZGVyIiwicHJvY2VzcyIsImk4blByb3ZpZGVyIiwicG9seWdsb3RJMThuUHJvdmlkZXIiLCJmcmVuY2hNZXNzYWdlcyIsIkFwcCIsImF1dGhQcm92aWRlciIsIkJhc2VMYXlvdXQiLCJsYWJlbCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdkJhciIsIk1lbnUiLCJvbk1lbnVDbGljayIsImlzWFNtYWxsIiwidXNlTWVkaWFRdWVyeSIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJkb3duIiwib3BlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhZG1pbiIsInVpIiwic2lkZWJhck9wZW4iLCJyZXNvdXJjZXMiLCJnZXRSZXNvdXJjZXMiLCJtYXAiLCJyZXNvdXJjZSIsIm5hbWUiLCJvcHRpb25zIiwiaWNvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZsZXgiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJzcGFjZXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSwwREFBQSxDQUFnQkMscURBQWhCO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxvREFBWjtBQUNBLGlFQUFlQSxvREFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUlBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUs7QUFBQSxzQkFDdEIsaURBQUMsOERBQUQsRUFBbUJBLEtBQW5CLGVBQ0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFESixlQUVJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBRkosZUFHSSxpREFBQyxnREFBRDtBQUNJLFVBQU0sRUFBQyxPQURYO0FBRUksYUFBUyxFQUFDLE9BRmQ7QUFHSSxTQUFLLEVBQUMsTUFIVjtBQUlJLGlCQUFhLEVBQUUsdUJBQUFDLFVBQVU7QUFBQSxhQUFLO0FBQUVDLGVBQU8sRUFBRUQ7QUFBWCxPQUFMO0FBQUE7QUFKN0Isa0JBTUksaURBQUMsMERBQUQ7QUFBbUIsY0FBVSxFQUFDO0FBQTlCLElBTkosQ0FISixlQVdJLGlEQUFDLGdEQUFEO0FBQ0ksVUFBTSxFQUFDLGNBRFg7QUFFSSxhQUFTLEVBQUMsY0FGZDtBQUdJLFNBQUssRUFBQyxrQkFIVjtBQUlJLGlCQUFhLEVBQUUsdUJBQUFBLFVBQVU7QUFBQSxhQUFLO0FBQUVDLGVBQU8sRUFBRUQ7QUFBWCxPQUFMO0FBQUE7QUFKN0Isa0JBTUksaURBQUMsMERBQUQ7QUFBbUIsY0FBVSxFQUFDO0FBQTlCLElBTkosQ0FYSixDQURzQjtBQUFBLENBQTFCOztBQXVCQSxpRUFBZUYsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBSCxLQUFLO0FBQUEsc0JBQ3BCLGlEQUFDLDREQUFELEVBQWlCQSxLQUFqQixlQUNJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBREosZUFFSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQUZKLGVBR0ksaURBQUMsZ0RBQUQ7QUFDSSxVQUFNLEVBQUMsT0FEWDtBQUVJLGFBQVMsRUFBQyxPQUZkO0FBR0ksU0FBSyxFQUFDO0FBSFYsa0JBS0ksaURBQUMsb0RBQUQ7QUFBYSxjQUFVLEVBQUM7QUFBeEIsSUFMSixDQUhKLGVBVUksaURBQUMsZ0RBQUQ7QUFDSSxVQUFNLEVBQUMsY0FEWDtBQUVJLGFBQVMsRUFBQyxjQUZkO0FBR0ksU0FBSyxFQUFDO0FBSFYsa0JBS0ksaURBQUMsb0RBQUQ7QUFBYSxjQUFVLEVBQUM7QUFBeEIsSUFMSixDQVZKLENBRG9CO0FBQUEsQ0FBeEI7O0FBcUJBLGlFQUFlRyxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUlBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFKLEtBQUs7QUFBQSxzQkFDcEIsaURBQUMsNERBQUQsRUFBaUJBLEtBQWpCLGVBQ0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUMsU0FBckI7QUFBK0IsWUFBUSxFQUFFO0FBQXpDLElBREosZUFFSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQyxNQUFyQjtBQUE0QixZQUFRLEVBQUU7QUFBdEMsSUFGSixlQUdJLGlEQUFDLGdEQUFEO0FBQWdCLFNBQUssRUFBQyxNQUF0QjtBQUE2QixVQUFNLEVBQUMsTUFBcEM7QUFBMkMsYUFBUyxFQUFDO0FBQXJELGtCQUNJLGlEQUFDLGdEQUFEO0FBQVcsVUFBTSxFQUFDO0FBQWxCLElBREosQ0FISixlQU1JLGlEQUFDLGdEQUFEO0FBQWdCLFNBQUssRUFBQyxNQUF0QjtBQUE2QixVQUFNLEVBQUMsTUFBcEM7QUFBMkMsYUFBUyxFQUFDO0FBQXJELGtCQUNJLGlEQUFDLGdEQUFEO0FBQVcsVUFBTSxFQUFDO0FBQWxCLElBREosQ0FOSixDQURvQjtBQUFBLENBQXhCOztBQWFBLGlFQUFlSSxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUlBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFMLEtBQUs7QUFBQSxzQkFDcEIsaURBQUMsNERBQUQsRUFBaUJBLEtBQWpCLGVBQ0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUMsU0FBckI7QUFBK0IsWUFBUSxFQUFFO0FBQXpDLElBREosZUFFSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQyxNQUFyQjtBQUE0QixZQUFRLEVBQUU7QUFBdEMsSUFGSixlQUdJLGlEQUFDLGdEQUFEO0FBQWdCLFNBQUssRUFBQyxNQUF0QjtBQUE2QixVQUFNLEVBQUMsTUFBcEM7QUFBMkMsYUFBUyxFQUFDO0FBQXJELGtCQUNJLGlEQUFDLGdEQUFEO0FBQVcsVUFBTSxFQUFDO0FBQWxCLElBREosQ0FISixlQU1JLGlEQUFDLGdEQUFEO0FBQWdCLFNBQUssRUFBQyxNQUF0QjtBQUE2QixVQUFNLEVBQUMsTUFBcEM7QUFBMkMsYUFBUyxFQUFDO0FBQXJELGtCQUNJLGlEQUFDLGdEQUFEO0FBQVcsVUFBTSxFQUFDO0FBQWxCLElBREosQ0FOSixDQURvQjtBQUFBLENBQXhCOztBQWFBLGlFQUFlSyxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUlBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFOLEtBQUs7QUFBQSxzQkFDcEIsaURBQUMsOERBQUQsRUFBbUJBLEtBQW5CLGVBQ0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFESixlQUVJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBRkosZUFHSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQUhKLGVBSUksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFKSixlQUtJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBTEosZUFNSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQU5KLGVBT0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFQSixlQVFJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBUkosZUFTSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQVRKLGVBVUksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFWSixlQVdJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBWEosZUFZSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQVpKLGVBYUksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFiSixlQWNJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBZEosZUFlSSxpREFBQyw2REFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQWZKLGVBZ0JJLGlEQUFDLGdEQUFEO0FBQ0ksVUFBTSxFQUFDLFVBRFg7QUFFSSxhQUFTLEVBQUMsVUFGZDtBQUdJLFNBQUssRUFBQyxTQUhWO0FBSUksaUJBQWEsRUFBRSx1QkFBQUMsVUFBVTtBQUFBLGFBQUs7QUFBRUMsZUFBTyxFQUFFRDtBQUFYLE9BQUw7QUFBQTtBQUo3QixrQkFNSSxpREFBQywwREFBRDtBQUFtQixjQUFVLEVBQUM7QUFBOUIsSUFOSixDQWhCSixDQURvQjtBQUFBLENBQXhCOztBQTRCQSxpRUFBZUssVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNYQyxPQUFLLEVBQUUscUJBQTBCO0FBQUEsUUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLFFBQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM3QixRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZQyxxREFBQSxDQUFnQixpQkFBaEIsQ0FBWixFQUFnRDtBQUM1REMsWUFBTSxFQUFFLE1BRG9EO0FBRTVEQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNSLGdCQUFRLEVBQVJBLFFBQUQ7QUFBV0MsZ0JBQVEsRUFBUkE7QUFBWCxPQUFmLENBRnNEO0FBRzVEUSxhQUFPLEVBQUUsSUFBSUMsT0FBSixDQUFZO0FBQUMsd0JBQWdCO0FBQWpCLE9BQVo7QUFIbUQsS0FBaEQsQ0FBaEI7QUFLQSxXQUFPQyxLQUFLLENBQUNULE9BQUQsQ0FBTCxDQUNGVSxJQURFLENBQ0csVUFBQUMsUUFBUSxFQUFJO0FBQ2QsVUFBSUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLEdBQWxCLElBQXlCRCxRQUFRLENBQUNDLE1BQVQsSUFBbUIsR0FBaEQsRUFBcUQ7QUFDakQsY0FBTSxJQUFJQyxLQUFKLENBQVVGLFFBQVEsQ0FBQ0csVUFBbkIsQ0FBTjtBQUNIOztBQUNELGFBQU9ILFFBQVEsQ0FBQ0ksSUFBVCxFQUFQO0FBQ0gsS0FORSxFQU9GTCxJQVBFLENBT0csaUJBQWE7QUFBQSxVQUFYTSxLQUFXLFNBQVhBLEtBQVc7QUFDZixVQUFNQyxZQUFZLEdBQUdDLG1EQUFTLENBQUNGLEtBQUQsQ0FBOUI7QUFDQUcsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkosS0FBOUI7QUFDQUcsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixFQUFvQ0gsWUFBWSxDQUFDSSxXQUFqRDtBQUNILEtBWEUsQ0FBUDtBQVlILEdBbkJVO0FBb0JYQyxRQUFNLEVBQUUsa0JBQU07QUFDVkgsZ0JBQVksQ0FBQ0ksVUFBYixDQUF3QixPQUF4QjtBQUNBSixnQkFBWSxDQUFDSSxVQUFiLENBQXdCLGFBQXhCO0FBQ0EsV0FBT0MsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSCxHQXhCVTtBQXlCWEMsWUFBVSxFQUFFLG9CQUFBQyxLQUFLLEVBQUksQ0FDakI7QUFDSCxHQTNCVTtBQTRCWEMsV0FBUyxFQUFFLHFCQUFNO0FBQ2IsV0FBT1QsWUFBWSxDQUFDVSxPQUFiLENBQXFCLE9BQXJCLElBQWdDTCxPQUFPLENBQUNDLE9BQVIsRUFBaEMsR0FBb0RELE9BQU8sQ0FBQ00sTUFBUixFQUEzRDtBQUNILEdBOUJVO0FBK0JYQyxnQkFBYyxFQUFFLDBCQUFNO0FBQ2xCLFFBQU1DLElBQUksR0FBR2IsWUFBWSxDQUFDVSxPQUFiLENBQXFCLGFBQXJCLENBQWI7QUFDQSxXQUFPRyxJQUFJLEdBQUdSLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQk8sSUFBaEIsQ0FBSCxHQUEyQlIsT0FBTyxDQUFDTSxNQUFSLEVBQXRDO0FBQ0g7QUFsQ1UsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFFQSxJQUFNRyxZQUFZLEdBQUdDLDJCQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBR0MsMERBQW9CLENBQUM7QUFBQSxTQUFNQyx1REFBTjtBQUFBLENBQUQsRUFBdUIsSUFBdkIsQ0FBeEMsQyxDQUVBOztBQUNBbEQsT0FBTyxDQUFDQyxHQUFSLENBQVk4QywyQkFBWjs7QUFDQSxJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLHNCQUNSLGlEQUFDLDJEQUFEO0FBQVksY0FBVSxFQUFFTCxZQUF4QjtBQUFzQyxnQkFBWSxFQUFFTSw4REFBcEQ7QUFBa0UsVUFBTSxFQUFFQyx1REFBMUU7QUFBc0YsZ0JBQVksRUFBRUwsV0FBcEc7QUFBaUgsVUFBTSxFQUFDO0FBQXhILGtCQUNJLGlEQUFDLGdFQUFEO0FBQWlCLFFBQUksRUFBQyxPQUF0QjtBQUE4QixVQUFNLEVBQUV2QyxnRUFBdEM7QUFBa0QsV0FBTyxFQUFFO0FBQUM2QyxXQUFLLEVBQUU7QUFBUjtBQUEzRCxJQURKLGVBRUksaURBQUMsZ0VBQUQ7QUFBaUIsUUFBSSxFQUFDLFVBQXRCO0FBQWlDLFdBQU8sRUFBRTtBQUFDQSxXQUFLLEVBQUU7QUFBUjtBQUExQyxJQUZKLGVBR0ksaURBQUMsZ0VBQUQ7QUFBaUIsUUFBSSxFQUFDLE9BQXRCO0FBQThCLFdBQU8sRUFBRTtBQUFDQSxXQUFLLEVBQUU7QUFBUjtBQUF2QyxJQUhKLGVBSUksaURBQUMsZ0VBQUQ7QUFBaUIsUUFBSSxFQUFDLFNBQXRCO0FBQWdDLFFBQUksRUFBRS9DLGtFQUF0QztBQUFrRCxRQUFJLEVBQUVDLGtFQUF4RDtBQUFvRSxRQUFJLEVBQUVGLGtFQUExRTtBQUFzRixVQUFNLEVBQUVKLG9FQUE5RjtBQUE0RyxXQUFPLEVBQUU7QUFBQ29ELFdBQUssRUFBRTtBQUFSO0FBQXJILElBSkosZUFLSSxpREFBQyxnRUFBRDtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBcUMsV0FBTyxFQUFFO0FBQUNBLFdBQUssRUFBRTtBQUFSO0FBQTlDLElBTEosQ0FEUTtBQUFBLENBQVo7O0FBU0FDLDZDQUFBLGVBQ0EsaURBQUMsR0FBRCxPQURBLEVBR0lDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUhKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDbEQsS0FBRDtBQUFBLHNCQUFXLGlEQUFDLGdEQUFELGVBQVlBLEtBQVo7QUFBbUIsVUFBTSxFQUFFdUQsNENBQTNCO0FBQW1DLFFBQUksRUFBRUMsMENBQUlBO0FBQTdDLEtBQVg7QUFBQSxDQUFuQjs7QUFFQSxpRUFBZU4sVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBNkI7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCO0FBQUEsTUFBYnpCLE1BQWEsUUFBYkEsTUFBYTtBQUN0QyxNQUFNMEIsUUFBUSxHQUFHQywwREFBYSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUo7QUFBQSxHQUFOLENBQTlCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyx3REFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsRUFBWixDQUFlQyxXQUFuQjtBQUFBLEdBQU4sQ0FBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdMLHdEQUFXLENBQUNNLHFEQUFELENBQTdCO0FBQ0Esc0JBQ0ksMkVBQ0EsaURBQUMsZ0RBQUQ7QUFBbUIsV0FBTyxFQUFFYixXQUE1QjtBQUF5QyxpQkFBYSxFQUFFTTtBQUF4RCxJQURBLEVBRUhNLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUFDLFFBQVE7QUFBQSx3QkFDbkIsaURBQUMsZ0RBQUQ7QUFDQSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsSUFEZDtBQUVBLFFBQUUsYUFBTUQsUUFBUSxDQUFDQyxJQUFmLENBRkY7QUFHQSxpQkFBVyxFQUNORCxRQUFRLENBQUNFLE9BQVQsSUFBb0JGLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQnZCLEtBQXRDLElBQ0FxQixRQUFRLENBQUNDLElBTGI7QUFPQSxjQUFRLEVBQ0pELFFBQVEsQ0FBQ0csSUFBVCxnQkFBZ0IsaURBQUMsUUFBRCxDQUFVLElBQVYsT0FBaEIsZ0JBQW9DLGlEQUFDLGdFQUFELE9BUnhDO0FBVUEsYUFBTyxFQUFFbEIsV0FWVDtBQVdBLG1CQUFhLEVBQUVNO0FBWGYsTUFEbUI7QUFBQSxHQUF0QixDQUZHLGVBaUJSLGlEQUFDLGdEQUFEO0FBQ0ksTUFBRSxFQUFDLGVBRFA7QUFFSSxlQUFXLEVBQUMsZUFGaEI7QUFHSSxZQUFRLGVBQUUsaURBQUMsNkRBQUQsT0FIZDtBQUlJLFdBQU8sRUFBRU4sV0FKYjtBQUtJLGlCQUFhLEVBQUVNO0FBTG5CLElBakJRLEVBd0JITCxRQUFRLElBQUkxQixNQXhCVCxDQURKO0FBNEJILENBaENEOztBQWtDQSxpRUFBZXdCLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTW9CLFNBQVMsR0FBR0MsaUVBQVUsQ0FBQztBQUN6QkMsT0FBSyxFQUFFO0FBQ0hDLFFBQUksRUFBRSxDQURIO0FBRUhDLGdCQUFZLEVBQUUsVUFGWDtBQUdIQyxjQUFVLEVBQUUsUUFIVDtBQUlIQyxZQUFRLEVBQUU7QUFKUCxHQURrQjtBQU96QkMsUUFBTSxFQUFFO0FBQ0pKLFFBQUksRUFBRTtBQURGO0FBUGlCLENBQUQsQ0FBNUI7O0FBWUEsSUFBTXhCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUF2RCxLQUFLLEVBQUk7QUFDcEIsTUFBTW9GLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUNBLHNCQUNJLGlEQUFDLGdEQUFELGVBQVk1RSxLQUFaO0FBQW1CLFNBQUssRUFBQztBQUF6QixtQkFDUixpREFBQyxpRUFBRDtBQUNJLFdBQU8sRUFBQyxJQURaO0FBRUksU0FBSyxFQUFDLFNBRlY7QUFHSSxhQUFTLEVBQUVvRixPQUFPLENBQUNOLEtBSHZCO0FBSUksTUFBRSxFQUFDO0FBSlAsSUFEUSxlQU9BO0FBQU0sYUFBUyxFQUFFTSxPQUFPLENBQUNEO0FBQXpCLElBUEEsQ0FESjtBQVdILENBYkQ7O0FBZUEsaUVBQWU1QixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0aW5nIGZyb20gJ2Zvcy1yb3V0aW5nJztcbmltcG9ydCBSb3V0aW5nRGF0YSBmcm9tICcuLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcyc7XG5cblJvdXRpbmcuc2V0RGF0YShSb3V0aW5nRGF0YSk7XG5jb25zb2xlLmxvZyhSb3V0aW5nKTtcbmV4cG9ydCBkZWZhdWx0IFJvdXRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICAgIENyZWF0ZUd1ZXNzZXIsXG4gICAgSW5wdXRHdWVzc2VyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2VJbnB1dCwgQXV0b2NvbXBsZXRlSW5wdXQgfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcblxuY29uc3QgRW50aXRlQ3JlYXRlID0gcHJvcHMgPT4gKFxuICAgIDxDcmVhdGVHdWVzc2VyIHsuLi5wcm9wc30+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibGliZWxsZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIC8+XG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxuICAgICAgICAgICAgc291cmNlPVwic2l0ZXNcIlxuICAgICAgICAgICAgcmVmZXJlbmNlPVwic2l0ZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJTaXRlXCJcbiAgICAgICAgICAgIGZpbHRlclRvUXVlcnk9e3NlYXJjaFRleHQgPT4gKHsgbGliZWxsZTogc2VhcmNoVGV4dCB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxuICAgICAgICAgICAgc291cmNlPVwiZW50aXRlX3R5cGVzXCJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgZCdlbnRpdMOpXCJcbiAgICAgICAgICAgIGZpbHRlclRvUXVlcnk9e3NlYXJjaFRleHQgPT4gKHsgbGliZWxsZTogc2VhcmNoVGV4dCB9KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cbiAgICA8L0NyZWF0ZUd1ZXNzZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVDcmVhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBFZGl0R3Vlc3NlcixcbiAgICBJbnB1dEd1ZXNzZXJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcbmltcG9ydCB7IFJlZmVyZW5jZUlucHV0LCBBdXRvY29tcGxldGVJbnB1dCwgVGV4dEZpZWxkLCBTZWxlY3RJbnB1dCB9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xuXG5jb25zdCBFbnRpdGVFZGl0ID0gcHJvcHMgPT4gKFxuICAgIDxFZGl0R3Vlc3NlciB7Li4ucHJvcHN9PlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIi8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29kZVwiLz5cbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XG4gICAgICAgICAgICBzb3VyY2U9XCJzaXRlc1wiXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJzaXRlc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlNpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPFNlbGVjdElucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XG4gICAgICAgICAgICBzb3VyY2U9XCJlbnRpdGVfdHlwZXNcIlxuICAgICAgICAgICAgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBkJ2VudGl0w6lcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8U2VsZWN0SW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxuICAgIDwvRWRpdEd1ZXNzZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVFZGl0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgTGlzdEd1ZXNzZXIsXG4gICAgRmllbGRHdWVzc2VyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2VGaWVsZCwgVGV4dEZpZWxkfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcblxuY29uc3QgRW50aXRlTGlzdCA9IHByb3BzID0+IChcbiAgICA8TGlzdEd1ZXNzZXIgey4uLnByb3BzfT5cbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIgYWRkTGFiZWw9e3RydWV9Lz5cbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIgYWRkTGFiZWw9e3RydWV9Lz5cbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiU2l0ZVwiIHNvdXJjZT1cInNpdGVcIiByZWZlcmVuY2U9XCJzaXRlc1wiPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiVHlwZVwiIHNvdXJjZT1cInR5cGVcIiByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XG4gICAgPC9MaXN0R3Vlc3Nlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0ZUxpc3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBTaG93R3Vlc3NlcixcbiAgICBGaWVsZEd1ZXNzZXJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcbmltcG9ydCB7IFJlZmVyZW5jZUZpZWxkLCBUZXh0RmllbGR9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xuXG5jb25zdCBFbnRpdGVTaG93ID0gcHJvcHMgPT4gKFxuICAgIDxTaG93R3Vlc3NlciB7Li4ucHJvcHN9PlxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxuICAgICAgICA8UmVmZXJlbmNlRmllbGQgbGFiZWw9XCJTaXRlXCIgc291cmNlPVwic2l0ZVwiIHJlZmVyZW5jZT1cInNpdGVzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxuICAgICAgICA8UmVmZXJlbmNlRmllbGQgbGFiZWw9XCJUeXBlXCIgc291cmNlPVwidHlwZVwiIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cbiAgICA8L1Nob3dHdWVzc2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXRlU2hvdzsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICAgIENyZWF0ZUd1ZXNzZXIsXG4gICAgSW5wdXRHdWVzc2VyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2VJbnB1dCwgQXV0b2NvbXBsZXRlSW5wdXQgfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcblxuY29uc3QgVXNlckNyZWF0ZSA9IHByb3BzID0+IChcbiAgICA8Q3JlYXRlR3Vlc3NlciB7Li4ucHJvcHN9PlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInBob3RvUHJvZmlsZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZW1haWxcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxvZ2luXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibm9tXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJwcmVub21cIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInNpdHVhdGlvbk1hdHJpbW9uaWFsZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY2l2aWxpdGVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVEZU5haXNzYW5jZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29tcGV0ZW5jZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZGF0ZUVudHJlZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZGF0ZV9zb3J0aWVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInJlbWFycXVlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJlbmFibGVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVudGl0ZVwiIC8+XG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxuICAgICAgICAgICAgc291cmNlPVwicHJvZmlsZXNcIlxuICAgICAgICAgICAgcmVmZXJlbmNlPVwicHJvZmlsZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJQcm9maWxlXCJcbiAgICAgICAgICAgIGZpbHRlclRvUXVlcnk9e3NlYXJjaFRleHQgPT4gKHsgbGliZWxsZTogc2VhcmNoVGV4dCB9KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cbiAgICA8L0NyZWF0ZUd1ZXNzZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ3JlYXRlOyIsIi8vIGluIHNyYy9hdXRoUHJvdmlkZXIuanNcbmltcG9ydCBkZWNvZGVKd3QgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL1JvdXRlcic7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9naW46ICh7dXNlcm5hbWUsIHBhc3N3b3JkfSkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoUm91dGVyLmdlbmVyYXRlKCdhcGlfbG9naW5fY2hlY2snKSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIHBhc3N3b3JkfSksXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoe3Rva2VufSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGRlY29kZUp3dCh0b2tlbik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwZXJtaXNzaW9ucycsIGRlY29kZWRUb2tlbi5wZXJtaXNzaW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIGxvZ291dDogKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Blcm1pc3Npb25zJyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9LFxuICAgIGNoZWNrRXJyb3I6IGVycm9yID0+IHtcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcbiAgICBjaGVja0F1dGg6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH0sXG4gICAgZ2V0UGVybWlzc2lvbnM6ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJtaXNzaW9ucycpO1xuICAgICAgICByZXR1cm4gcm9sZSA/IFByb21pc2UucmVzb2x2ZShyb2xlKSA6IFByb21pc2UucmVqZWN0KCk7XG4gICAgfSxcbn07IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSHlkcmFBZG1pbiwgUmVzb3VyY2VHdWVzc2VyICB9IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XG5pbXBvcnQgcG9seWdsb3RJMThuUHJvdmlkZXIgZnJvbSAncmEtaTE4bi1wb2x5Z2xvdCc7XG5pbXBvcnQgZnJlbmNoTWVzc2FnZXMgZnJvbSAncmEtbGFuZ3VhZ2UtZnJlbmNoJztcbmltcG9ydCBCYXNlTGF5b3V0IGZyb20gXCIuL2xheW91dC9CYXNlTGF5b3V0XCJcbmltcG9ydCBVc2VyQ3JlYXRlIGZyb20gXCIuL2NvbXBvbmVudHMvVXNlci9Vc2VyQ3JlYXRlXCI7XG5pbXBvcnQgRW50aXRlQ3JlYXRlIGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUNyZWF0ZVwiO1xuaW1wb3J0IEVudGl0ZUVkaXQgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlRWRpdFwiO1xuaW1wb3J0IEVudGl0ZVNob3cgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlU2hvd1wiO1xuaW1wb3J0IEVudGl0ZUxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlTGlzdFwiO1xuaW1wb3J0IGF1dGhQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvYXV0aFByb3ZpZGVyJztcbi8vIGRvbWFpbiB0cmFuc2xhdGlvbnNcbi8vIHJlcXVpcmUoJy4vaTE4bi9mcicpO1xuXG5jb25zdCBkYXRhUHJvdmlkZXIgPSBwcm9jZXNzLmVudi5FTlRSWV9QT0lOVF9BUEk7XG5jb25zdCBpOG5Qcm92aWRlciA9IHBvbHlnbG90STE4blByb3ZpZGVyKCgpID0+IGZyZW5jaE1lc3NhZ2VzLCAnZnInKTtcblxuLy8gY29uc3QgaThuUHJvdmlkZXIgPSBwb2x5Z2xvdEkxOG5Qcm92aWRlcihsb2NhbGUgPT4gbWVzc2FnZXMpO1xuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuRU5UUllfUE9JTlRfQVBJKVxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxIeWRyYUFkbWluIGVudHJ5cG9pbnQ9e2RhdGFQcm92aWRlcn0gYXV0aFByb3ZpZGVyPXthdXRoUHJvdmlkZXJ9IGxheW91dD17QmFzZUxheW91dH0gaTE4blByb3ZpZGVyPXtpOG5Qcm92aWRlcn0gbG9jYWxlPVwiZnJcIj5cbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwidXNlcnNcIiBjcmVhdGU9e1VzZXJDcmVhdGV9IG9wdGlvbnM9e3tsYWJlbDogXCJVdGlsaXNhdGV1cnNcIn19Lz5cbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwicHJvZmlsZXNcIiBvcHRpb25zPXt7bGFiZWw6IFwiUHJvZmlsZXNcIn19Lz5cbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwic2l0ZXNcIiBvcHRpb25zPXt7bGFiZWw6IFwiU2l0ZXNcIn19Lz5cbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwiZW50aXRlc1wiIGxpc3Q9e0VudGl0ZUxpc3R9IHNob3c9e0VudGl0ZVNob3d9IGVkaXQ9e0VudGl0ZUVkaXR9IGNyZWF0ZT17RW50aXRlQ3JlYXRlfSBvcHRpb25zPXt7bGFiZWw6IFwiRW50aXTDqXNcIn19Lz5cbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwiZW50aXRlX3R5cGVzXCIgb3B0aW9ucz17e2xhYmVsOiBcIlR5cGUgZCdlbnRpdMOpc1wifX0vPlxuICAgIDwvSHlkcmFBZG1pbj5cbik7XG5SZWFjdERPTS5yZW5kZXIoXG48QXBwXG4vPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pIiwiLy8gaW4gc3JjL015TGF5b3V0LmpzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdyZWFjdC1hZG1pbic7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5cbmNvbnN0IEJhc2VMYXlvdXQgPSAocHJvcHMpID0+IDxMYXlvdXQgey4uLnByb3BzfSBhcHBCYXI9e05hdkJhcn0gbWVudT17TWVudX0vPjtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxheW91dDsiLCIvLyBpbiBzcmMvTWVudS5qc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZE1lbnVJdGVtLCBNZW51SXRlbUxpbmssIGdldFJlc291cmNlcyB9IGZyb20gJ3JlYWN0LWFkbWluJztcbmltcG9ydCBEZWZhdWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3QnO1xuaW1wb3J0IExhYmVsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFiZWwnO1xuXG5jb25zdCBNZW51ID0gKHsgb25NZW51Q2xpY2ssIGxvZ291dCB9KSA9PiB7XG4gICAgY29uc3QgaXNYU21hbGwgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lID0+IHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xuICAgIGNvbnN0IG9wZW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hZG1pbi51aS5zaWRlYmFyT3Blbik7XG4gICAgY29uc3QgcmVzb3VyY2VzID0gdXNlU2VsZWN0b3IoZ2V0UmVzb3VyY2VzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8RGFzaGJvYXJkTWVudUl0ZW0gb25DbGljaz17b25NZW51Q2xpY2t9IHNpZGViYXJJc09wZW49e29wZW59IC8+XG4gICAge3Jlc291cmNlcy5tYXAocmVzb3VyY2UgPT4gKFxuICAgICAgICA8TWVudUl0ZW1MaW5rXG4gICAgICAgIGtleT17cmVzb3VyY2UubmFtZX1cbiAgICAgICAgdG89e2AvJHtyZXNvdXJjZS5uYW1lfWB9XG4gICAgICAgIHByaW1hcnlUZXh0PXtcbiAgICAgICAgICAgIChyZXNvdXJjZS5vcHRpb25zICYmIHJlc291cmNlLm9wdGlvbnMubGFiZWwpIHx8XG4gICAgICAgICAgICByZXNvdXJjZS5uYW1lXG4gICAgfVxuICAgICAgICBsZWZ0SWNvbj17XG4gICAgICAgICAgICByZXNvdXJjZS5pY29uID8gPHJlc291cmNlLmljb24gLz4gOiA8RGVmYXVsdEljb24gLz5cbiAgICB9XG4gICAgICAgIG9uQ2xpY2s9e29uTWVudUNsaWNrfVxuICAgICAgICBzaWRlYmFySXNPcGVuPXtvcGVufVxuICAgICAgICAvPlxuICAgICkpfVxuPE1lbnVJdGVtTGlua1xuICAgIHRvPVwiL2N1c3RvbS1yb3V0ZVwiXG4gICAgcHJpbWFyeVRleHQ9XCJNaXNjZWxsYW5lb3VzXCJcbiAgICBsZWZ0SWNvbj17PExhYmVsSWNvbiAvPn1cbiAgICBvbkNsaWNrPXtvbk1lbnVDbGlja31cbiAgICBzaWRlYmFySXNPcGVuPXtvcGVufVxuICAgIC8+XG4gICAge2lzWFNtYWxsICYmIGxvZ291dH1cbjwvZGl2PlxuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiLy8gaW4gc3JjL015QXBwQmFyLmpzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBCYXIgfSBmcm9tICdyZWFjdC1hZG1pbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICB0aXRsZToge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgICBzcGFjZXI6IHtcbiAgICAgICAgZmxleDogMSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IE5hdkJhciA9IHByb3BzID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcEJhciB7Li4ucHJvcHN9IHRpdGxlPVwiS2FsYSBrYW1hIGtlbHkgXCI+XG48VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgaWQ9XCJyZWFjdC1hZG1pbi10aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZXJ9IC8+XG4gICAgPC9BcHBCYXI+XG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=