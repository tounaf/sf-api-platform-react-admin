(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./assets/Router.js":
/*!**************************!*\
  !*** ./assets/Router.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fos_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fos-routing */ "./node_modules/fos-routing/dist/routing.js");
/* harmony import */ var fos_routing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fos_routing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_js_fos_js_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/js/fos_js_routes */ "./public/js/fos_js_routes.json");
var _public_js_fos_js_routes__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/js/fos_js_routes */ "./public/js/fos_js_routes.json", 1);


fos_routing__WEBPACK_IMPORTED_MODULE_0___default.a.setData(_public_js_fos_js_routes__WEBPACK_IMPORTED_MODULE_1__);
console.log(fos_routing__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = (fos_routing__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./assets/components/Entite/EntiteCreate.js":
/*!**************************************************!*\
  !*** ./assets/components/Entite/EntiteCreate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");




var EntiteCreate = function EntiteCreate(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["CreateGuesser"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "libelle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceInput"], {
    source: "sites",
    reference: "sites",
    label: "Site",
    filterToQuery: function filterToQuery(searchText) {
      return {
        libelle: searchText
      };
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["AutocompleteInput"], {
    optionText: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceInput"], {
    source: "entite_types",
    reference: "entite_types",
    label: "Type d'entit\xE9",
    filterToQuery: function filterToQuery(searchText) {
      return {
        libelle: searchText
      };
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["AutocompleteInput"], {
    optionText: "libelle"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EntiteCreate);

/***/ }),

/***/ "./assets/components/Entite/EntiteEdit.js":
/*!************************************************!*\
  !*** ./assets/components/Entite/EntiteEdit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");




var EntiteEdit = function EntiteEdit(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["EditGuesser"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "libelle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceInput"], {
    source: "sites",
    reference: "sites",
    label: "Site"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["SelectInput"], {
    optionText: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceInput"], {
    source: "entite_types",
    reference: "entite_types",
    label: "Type d'entit\xE9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["SelectInput"], {
    optionText: "libelle"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EntiteEdit);

/***/ }),

/***/ "./assets/components/Entite/EntiteList.js":
/*!************************************************!*\
  !*** ./assets/components/Entite/EntiteList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");




var EntiteList = function EntiteList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["ListGuesser"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["FieldGuesser"], {
    source: "libelle",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["FieldGuesser"], {
    source: "code",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceField"], {
    label: "Site",
    source: "site",
    reference: "sites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    source: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceField"], {
    label: "Type",
    source: "type",
    reference: "entite_types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    source: "libelle"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EntiteList);

/***/ }),

/***/ "./assets/components/Entite/EntiteShow.js":
/*!************************************************!*\
  !*** ./assets/components/Entite/EntiteShow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");




var EntiteShow = function EntiteShow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["ShowGuesser"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["FieldGuesser"], {
    source: "libelle",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["FieldGuesser"], {
    source: "code",
    addLabel: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceField"], {
    label: "Site",
    source: "site",
    reference: "sites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    source: "libelle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceField"], {
    label: "Type",
    source: "type",
    reference: "entite_types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    source: "libelle"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EntiteShow);

/***/ }),

/***/ "./assets/components/User/UserCreate.js":
/*!**********************************************!*\
  !*** ./assets/components/User/UserCreate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");




var UserCreate = function UserCreate(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["CreateGuesser"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "photoProfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "username"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "nom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "prenom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "situationMatrimoniale"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "civilite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "dateDeNaissance"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "competence"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "dateEntree"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "date_sortie"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "remarque"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "enable"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_1__["InputGuesser"], {
    source: "entite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["ReferenceInput"], {
    source: "profiles",
    reference: "profiles",
    label: "Profile",
    filterToQuery: function filterToQuery(searchText) {
      return {
        libelle: searchText
      };
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_2__["AutocompleteInput"], {
    optionText: "libelle"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCreate);

/***/ }),

/***/ "./assets/components/authProvider.js":
/*!*******************************************!*\
  !*** ./assets/components/authProvider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Router */ "./assets/Router.js");
// in src/authProvider.js


/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(_ref) {
    var username = _ref.username,
        password = _ref.password;
    var request = new Request(_Router__WEBPACK_IMPORTED_MODULE_1__["default"].generate('api_login_check'), {
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
      var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ra-i18n-polyglot */ "./node_modules/ra-i18n-polyglot/esm/index.js");
/* harmony import */ var ra_language_french__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ra-language-french */ "./node_modules/ra-language-french/esm/index.js");
/* harmony import */ var _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/BaseLayout */ "./assets/layout/BaseLayout.js");
/* harmony import */ var _components_User_UserCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/User/UserCreate */ "./assets/components/User/UserCreate.js");
/* harmony import */ var _components_Entite_EntiteCreate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Entite/EntiteCreate */ "./assets/components/Entite/EntiteCreate.js");
/* harmony import */ var _components_Entite_EntiteEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Entite/EntiteEdit */ "./assets/components/Entite/EntiteEdit.js");
/* harmony import */ var _components_Entite_EntiteShow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Entite/EntiteShow */ "./assets/components/Entite/EntiteShow.js");
/* harmony import */ var _components_Entite_EntiteList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Entite/EntiteList */ "./assets/components/Entite/EntiteList.js");
/* harmony import */ var _components_authProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/authProvider */ "./assets/components/authProvider.js");











 // domain translations
// require('./i18n/fr');

var dataProvider = "http://localhost:8001/api";
var i8nProvider = Object(ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return ra_language_french__WEBPACK_IMPORTED_MODULE_4__["default"];
}, 'fr'); // const i8nProvider = polyglotI18nProvider(locale => messages);

console.log("http://localhost:8001/api");

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__["HydraAdmin"], {
    entrypoint: dataProvider,
    authProvider: _components_authProvider__WEBPACK_IMPORTED_MODULE_11__["default"],
    layout: _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_5__["default"],
    i18nProvider: i8nProvider,
    locale: "fr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__["ResourceGuesser"], {
    name: "users",
    create: _components_User_UserCreate__WEBPACK_IMPORTED_MODULE_6__["default"],
    options: {
      label: "Utilisateurs"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__["ResourceGuesser"], {
    name: "profiles",
    options: {
      label: "Profiles"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__["ResourceGuesser"], {
    name: "sites",
    options: {
      label: "Sites"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__["ResourceGuesser"], {
    name: "entites",
    list: _components_Entite_EntiteList__WEBPACK_IMPORTED_MODULE_10__["default"],
    show: _components_Entite_EntiteShow__WEBPACK_IMPORTED_MODULE_9__["default"],
    edit: _components_Entite_EntiteEdit__WEBPACK_IMPORTED_MODULE_8__["default"],
    create: _components_Entite_EntiteCreate__WEBPACK_IMPORTED_MODULE_7__["default"],
    options: {
      label: "Entités"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__["ResourceGuesser"], {
    name: "entite_types",
    options: {
      label: "Type d'entités"
    }
  }));
};

react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/layout/BaseLayout.js":
/*!*************************************!*\
  !*** ./assets/layout/BaseLayout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./assets/layout/NavBar.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./assets/layout/Menu.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// in src/MyLayout.js





var BaseLayout = function BaseLayout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_1__["Layout"], _extends({}, props, {
    appBar: _NavBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    menu: _Menu__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./assets/layout/Menu.js":
/*!*******************************!*\
  !*** ./assets/layout/Menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "./node_modules/@material-ui/icons/ViewList.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Label */ "./node_modules/@material-ui/icons/Label.js");
/* harmony import */ var _material_ui_icons_Label__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Label__WEBPACK_IMPORTED_MODULE_5__);
// in src/Menu.js








var Menu = function Menu(_ref) {
  var onMenuClick = _ref.onMenuClick,
      logout = _ref.logout;
  var isXSmall = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(function (theme) {
    return theme.breakpoints.down('xs');
  });
  var open = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.admin.ui.sidebarOpen;
  });
  var resources = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(react_admin__WEBPACK_IMPORTED_MODULE_3__["getResources"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_3__["DashboardMenuItem"], {
    onClick: onMenuClick,
    sidebarIsOpen: open
  }), resources.map(function (resource) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_3__["MenuItemLink"], {
      key: resource.name,
      to: "/".concat(resource.name),
      primaryText: resource.options && resource.options.label || resource.name,
      leftIcon: resource.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](resource.icon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_4___default.a, null),
      onClick: onMenuClick,
      sidebarIsOpen: open
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_3__["MenuItemLink"], {
    to: "/custom-route",
    primaryText: "Miscellaneous",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Label__WEBPACK_IMPORTED_MODULE_5___default.a, null),
    onClick: onMenuClick,
    sidebarIsOpen: open
  }), isXSmall && logout);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./assets/layout/NavBar.js":
/*!*********************************!*\
  !*** ./assets/layout/NavBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// in src/MyAppBar.js




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_1__["AppBar"], _extends({}, props, {
    title: "Kala kama kely "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h6",
    color: "inherit",
    className: classes.title,
    id: "react-admin-title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classes.spacer
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"api_login_check\":{\"tokens\":[[\"text\",\"/authentication_token\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost:8001\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** rdf-canonize-native (ignored) ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** rdf-canonize-native (ignored) ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./assets/index.js","runtime","vendors~details~home~index","vendors~home~index","vendors~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZVNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVXNlci9Vc2VyQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xheW91dC9CYXNlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXlvdXQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0L05hdkJhci5qcyIsIndlYnBhY2s6Ly8vcmRmLWNhbm9uaXplLW5hdGl2ZSAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3htbGRvbSAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3JlcXVlc3QgKGlnbm9yZWQpIiwid2VicGFjazovLy9odHRwIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vcmRmLWNhbm9uaXplLW5hdGl2ZSAoaWdub3JlZCk/YjdmMyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwic2V0RGF0YSIsIlJvdXRpbmdEYXRhIiwiY29uc29sZSIsImxvZyIsIkVudGl0ZUNyZWF0ZSIsInByb3BzIiwic2VhcmNoVGV4dCIsImxpYmVsbGUiLCJFbnRpdGVFZGl0IiwiRW50aXRlTGlzdCIsIkVudGl0ZVNob3ciLCJVc2VyQ3JlYXRlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJSb3V0ZXIiLCJnZW5lcmF0ZSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJ0b2tlbiIsImRlY29kZWRUb2tlbiIsImRlY29kZUp3dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwZXJtaXNzaW9ucyIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrRXJyb3IiLCJlcnJvciIsImNoZWNrQXV0aCIsImdldEl0ZW0iLCJyZWplY3QiLCJnZXRQZXJtaXNzaW9ucyIsInJvbGUiLCJkYXRhUHJvdmlkZXIiLCJwcm9jZXNzIiwiaThuUHJvdmlkZXIiLCJwb2x5Z2xvdEkxOG5Qcm92aWRlciIsImZyZW5jaE1lc3NhZ2VzIiwiQXBwIiwiYXV0aFByb3ZpZGVyIiwiQmFzZUxheW91dCIsImxhYmVsIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTmF2QmFyIiwiTWVudSIsIm9uTWVudUNsaWNrIiwiaXNYU21hbGwiLCJ1c2VNZWRpYVF1ZXJ5IiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJvcGVuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkbWluIiwidWkiLCJzaWRlYmFyT3BlbiIsInJlc291cmNlcyIsImdldFJlc291cmNlcyIsIm1hcCIsInJlc291cmNlIiwibmFtZSIsIm9wdGlvbnMiLCJpY29uIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRpdGxlIiwiZmxleCIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInNwYWNlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxrREFBTyxDQUFDQyxPQUFSLENBQWdCQyxxREFBaEI7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLGtEQUFaO0FBQ2VBLGlIQUFmLEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0FBQUEsc0JBQ3RCLDJEQUFDLGlFQUFELEVBQW1CQSxLQUFuQixlQUNJLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBREosZUFFSSwyREFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQUZKLGVBR0ksMkRBQUMsMERBQUQ7QUFDSSxVQUFNLEVBQUMsT0FEWDtBQUVJLGFBQVMsRUFBQyxPQUZkO0FBR0ksU0FBSyxFQUFDLE1BSFY7QUFJSSxpQkFBYSxFQUFFLHVCQUFBQyxVQUFVO0FBQUEsYUFBSztBQUFFQyxlQUFPLEVBQUVEO0FBQVgsT0FBTDtBQUFBO0FBSjdCLGtCQU1JLDJEQUFDLDZEQUFEO0FBQW1CLGNBQVUsRUFBQztBQUE5QixJQU5KLENBSEosZUFXSSwyREFBQywwREFBRDtBQUNJLFVBQU0sRUFBQyxjQURYO0FBRUksYUFBUyxFQUFDLGNBRmQ7QUFHSSxTQUFLLEVBQUMsa0JBSFY7QUFJSSxpQkFBYSxFQUFFLHVCQUFBQSxVQUFVO0FBQUEsYUFBSztBQUFFQyxlQUFPLEVBQUVEO0FBQVgsT0FBTDtBQUFBO0FBSjdCLGtCQU1JLDJEQUFDLDZEQUFEO0FBQW1CLGNBQVUsRUFBQztBQUE5QixJQU5KLENBWEosQ0FEc0I7QUFBQSxDQUExQjs7QUF1QmVGLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7O0FBRUEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUgsS0FBSztBQUFBLHNCQUNwQiwyREFBQywrREFBRCxFQUFpQkEsS0FBakIsZUFDSSwyREFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQURKLGVBRUksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFGSixlQUdJLDJEQUFDLDBEQUFEO0FBQ0ksVUFBTSxFQUFDLE9BRFg7QUFFSSxhQUFTLEVBQUMsT0FGZDtBQUdJLFNBQUssRUFBQztBQUhWLGtCQUtJLDJEQUFDLHVEQUFEO0FBQWEsY0FBVSxFQUFDO0FBQXhCLElBTEosQ0FISixlQVVJLDJEQUFDLDBEQUFEO0FBQ0ksVUFBTSxFQUFDLGNBRFg7QUFFSSxhQUFTLEVBQUMsY0FGZDtBQUdJLFNBQUssRUFBQztBQUhWLGtCQUtJLDJEQUFDLHVEQUFEO0FBQWEsY0FBVSxFQUFDO0FBQXhCLElBTEosQ0FWSixDQURvQjtBQUFBLENBQXhCOztBQXFCZUcseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBSixLQUFLO0FBQUEsc0JBQ3BCLDJEQUFDLCtEQUFELEVBQWlCQSxLQUFqQixlQUNJLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDLFNBQXJCO0FBQStCLFlBQVEsRUFBRTtBQUF6QyxJQURKLGVBRUksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUMsTUFBckI7QUFBNEIsWUFBUSxFQUFFO0FBQXRDLElBRkosZUFHSSwyREFBQywwREFBRDtBQUFnQixTQUFLLEVBQUMsTUFBdEI7QUFBNkIsVUFBTSxFQUFDLE1BQXBDO0FBQTJDLGFBQVMsRUFBQztBQUFyRCxrQkFDSSwyREFBQyxxREFBRDtBQUFXLFVBQU0sRUFBQztBQUFsQixJQURKLENBSEosZUFNSSwyREFBQywwREFBRDtBQUFnQixTQUFLLEVBQUMsTUFBdEI7QUFBNkIsVUFBTSxFQUFDLE1BQXBDO0FBQTJDLGFBQVMsRUFBQztBQUFyRCxrQkFDSSwyREFBQyxxREFBRDtBQUFXLFVBQU0sRUFBQztBQUFsQixJQURKLENBTkosQ0FEb0I7QUFBQSxDQUF4Qjs7QUFhZUkseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBTCxLQUFLO0FBQUEsc0JBQ3BCLDJEQUFDLCtEQUFELEVBQWlCQSxLQUFqQixlQUNJLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDLFNBQXJCO0FBQStCLFlBQVEsRUFBRTtBQUF6QyxJQURKLGVBRUksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUMsTUFBckI7QUFBNEIsWUFBUSxFQUFFO0FBQXRDLElBRkosZUFHSSwyREFBQywwREFBRDtBQUFnQixTQUFLLEVBQUMsTUFBdEI7QUFBNkIsVUFBTSxFQUFDLE1BQXBDO0FBQTJDLGFBQVMsRUFBQztBQUFyRCxrQkFDSSwyREFBQyxxREFBRDtBQUFXLFVBQU0sRUFBQztBQUFsQixJQURKLENBSEosZUFNSSwyREFBQywwREFBRDtBQUFnQixTQUFLLEVBQUMsTUFBdEI7QUFBNkIsVUFBTSxFQUFDLE1BQXBDO0FBQTJDLGFBQVMsRUFBQztBQUFyRCxrQkFDSSwyREFBQyxxREFBRDtBQUFXLFVBQU0sRUFBQztBQUFsQixJQURKLENBTkosQ0FEb0I7QUFBQSxDQUF4Qjs7QUFhZUsseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBTixLQUFLO0FBQUEsc0JBQ3BCLDJEQUFDLGlFQUFELEVBQW1CQSxLQUFuQixlQUNJLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBREosZUFFSSwyREFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQUZKLGVBR0ksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFISixlQUlJLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBSkosZUFLSSwyREFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQUxKLGVBTUksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFOSixlQU9JLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBUEosZUFRSSwyREFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQVJKLGVBU0ksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFUSixlQVVJLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBVkosZUFXSSwyREFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQVhKLGVBWUksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFaSixlQWFJLDJEQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBYkosZUFjSSwyREFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQztBQUFyQixJQWRKLGVBZUksMkRBQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFmSixlQWdCSSwyREFBQywwREFBRDtBQUNJLFVBQU0sRUFBQyxVQURYO0FBRUksYUFBUyxFQUFDLFVBRmQ7QUFHSSxTQUFLLEVBQUMsU0FIVjtBQUlJLGlCQUFhLEVBQUUsdUJBQUFDLFVBQVU7QUFBQSxhQUFLO0FBQUVDLGVBQU8sRUFBRUQ7QUFBWCxPQUFMO0FBQUE7QUFKN0Isa0JBTUksMkRBQUMsNkRBQUQ7QUFBbUIsY0FBVSxFQUFDO0FBQTlCLElBTkosQ0FoQkosQ0FEb0I7QUFBQSxDQUF4Qjs7QUE0QmVLLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDZTtBQUNYQyxPQUFLLEVBQUUscUJBQTBCO0FBQUEsUUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLFFBQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM3QixRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZQywrQ0FBTSxDQUFDQyxRQUFQLENBQWdCLGlCQUFoQixDQUFaLEVBQWdEO0FBQzVEQyxZQUFNLEVBQUUsTUFEb0Q7QUFFNURDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ1QsZ0JBQVEsRUFBUkEsUUFBRDtBQUFXQyxnQkFBUSxFQUFSQTtBQUFYLE9BQWYsQ0FGc0Q7QUFHNURTLGFBQU8sRUFBRSxJQUFJQyxPQUFKLENBQVk7QUFBQyx3QkFBZ0I7QUFBakIsT0FBWjtBQUhtRCxLQUFoRCxDQUFoQjtBQUtBLFdBQU9DLEtBQUssQ0FBQ1YsT0FBRCxDQUFMLENBQ0ZXLElBREUsQ0FDRyxVQUFBQyxRQUFRLEVBQUk7QUFDZCxVQUFJQSxRQUFRLENBQUNDLE1BQVQsR0FBa0IsR0FBbEIsSUFBeUJELFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixHQUFoRCxFQUFxRDtBQUNqRCxjQUFNLElBQUlDLEtBQUosQ0FBVUYsUUFBUSxDQUFDRyxVQUFuQixDQUFOO0FBQ0g7O0FBQ0QsYUFBT0gsUUFBUSxDQUFDSSxJQUFULEVBQVA7QUFDSCxLQU5FLEVBT0ZMLElBUEUsQ0FPRyxpQkFBYTtBQUFBLFVBQVhNLEtBQVcsU0FBWEEsS0FBVztBQUNmLFVBQU1DLFlBQVksR0FBR0MsMERBQVMsQ0FBQ0YsS0FBRCxDQUE5QjtBQUNBRyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixLQUE5QjtBQUNBRyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DSCxZQUFZLENBQUNJLFdBQWpEO0FBQ0gsS0FYRSxDQUFQO0FBWUgsR0FuQlU7QUFvQlhDLFFBQU0sRUFBRSxrQkFBTTtBQUNWSCxnQkFBWSxDQUFDSSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FKLGdCQUFZLENBQUNJLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQSxXQUFPQyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNILEdBeEJVO0FBeUJYQyxZQUFVLEVBQUUsb0JBQUFDLEtBQUssRUFBSSxDQUNqQjtBQUNILEdBM0JVO0FBNEJYQyxXQUFTLEVBQUUscUJBQU07QUFDYixXQUFPVCxZQUFZLENBQUNVLE9BQWIsQ0FBcUIsT0FBckIsSUFBZ0NMLE9BQU8sQ0FBQ0MsT0FBUixFQUFoQyxHQUFvREQsT0FBTyxDQUFDTSxNQUFSLEVBQTNEO0FBQ0gsR0E5QlU7QUErQlhDLGdCQUFjLEVBQUUsMEJBQU07QUFDbEIsUUFBTUMsSUFBSSxHQUFHYixZQUFZLENBQUNVLE9BQWIsQ0FBcUIsYUFBckIsQ0FBYjtBQUNBLFdBQU9HLElBQUksR0FBR1IsT0FBTyxDQUFDQyxPQUFSLENBQWdCTyxJQUFoQixDQUFILEdBQTJCUixPQUFPLENBQUNNLE1BQVIsRUFBdEM7QUFDSDtBQWxDVSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUEsSUFBTUcsWUFBWSxHQUFHQywyQkFBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUdDLGdFQUFvQixDQUFDO0FBQUEsU0FBTUMsMERBQU47QUFBQSxDQUFELEVBQXVCLElBQXZCLENBQXhDLEMsQ0FFQTs7QUFDQW5ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0MsMkJBQVo7O0FBQ0EsSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxzQkFDUixvREFBQyw4REFBRDtBQUFZLGNBQVUsRUFBRUwsWUFBeEI7QUFBc0MsZ0JBQVksRUFBRU0saUVBQXBEO0FBQWtFLFVBQU0sRUFBRUMsMERBQTFFO0FBQXNGLGdCQUFZLEVBQUVMLFdBQXBHO0FBQWlILFVBQU0sRUFBQztBQUF4SCxrQkFDSSxvREFBQyxtRUFBRDtBQUFpQixRQUFJLEVBQUMsT0FBdEI7QUFBOEIsVUFBTSxFQUFFeEMsbUVBQXRDO0FBQWtELFdBQU8sRUFBRTtBQUFDOEMsV0FBSyxFQUFFO0FBQVI7QUFBM0QsSUFESixlQUVJLG9EQUFDLG1FQUFEO0FBQWlCLFFBQUksRUFBQyxVQUF0QjtBQUFpQyxXQUFPLEVBQUU7QUFBQ0EsV0FBSyxFQUFFO0FBQVI7QUFBMUMsSUFGSixlQUdJLG9EQUFDLG1FQUFEO0FBQWlCLFFBQUksRUFBQyxPQUF0QjtBQUE4QixXQUFPLEVBQUU7QUFBQ0EsV0FBSyxFQUFFO0FBQVI7QUFBdkMsSUFISixlQUlJLG9EQUFDLG1FQUFEO0FBQWlCLFFBQUksRUFBQyxTQUF0QjtBQUFnQyxRQUFJLEVBQUVoRCxzRUFBdEM7QUFBa0QsUUFBSSxFQUFFQyxxRUFBeEQ7QUFBb0UsUUFBSSxFQUFFRixxRUFBMUU7QUFBc0YsVUFBTSxFQUFFSix1RUFBOUY7QUFBNEcsV0FBTyxFQUFFO0FBQUNxRCxXQUFLLEVBQUU7QUFBUjtBQUFySCxJQUpKLGVBS0ksb0RBQUMsbUVBQUQ7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQXFDLFdBQU8sRUFBRTtBQUFDQSxXQUFLLEVBQUU7QUFBUjtBQUE5QyxJQUxKLENBRFE7QUFBQSxDQUFaOztBQVNBQyxnREFBUSxDQUFDQyxNQUFULGVBQ0Esb0RBQUMsR0FBRCxPQURBLEVBR0lDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUhKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUwsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ25ELEtBQUQ7QUFBQSxzQkFBVyxvREFBQyxrREFBRCxlQUFZQSxLQUFaO0FBQW1CLFVBQU0sRUFBRXlELCtDQUEzQjtBQUFtQyxRQUFJLEVBQUVDLDZDQUFJQTtBQUE3QyxLQUFYO0FBQUEsQ0FBbkI7O0FBRWVQLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QjtBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiMUIsTUFBYSxRQUFiQSxNQUFhO0FBQ3RDLE1BQU0yQixRQUFRLEdBQUdDLHVFQUFhLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBSjtBQUFBLEdBQU4sQ0FBOUI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxFQUFaLENBQWVDLFdBQW5CO0FBQUEsR0FBTixDQUF4QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0wsK0RBQVcsQ0FBQ00sd0RBQUQsQ0FBN0I7QUFDQSxzQkFDSSw4RUFDQSxvREFBQyw2REFBRDtBQUFtQixXQUFPLEVBQUViLFdBQTVCO0FBQXlDLGlCQUFhLEVBQUVNO0FBQXhELElBREEsRUFFSE0sU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQUMsUUFBUTtBQUFBLHdCQUNuQixvREFBQyx3REFBRDtBQUNBLFNBQUcsRUFBRUEsUUFBUSxDQUFDQyxJQURkO0FBRUEsUUFBRSxhQUFNRCxRQUFRLENBQUNDLElBQWYsQ0FGRjtBQUdBLGlCQUFXLEVBQ05ELFFBQVEsQ0FBQ0UsT0FBVCxJQUFvQkYsUUFBUSxDQUFDRSxPQUFULENBQWlCeEIsS0FBdEMsSUFDQXNCLFFBQVEsQ0FBQ0MsSUFMYjtBQU9BLGNBQVEsRUFDSkQsUUFBUSxDQUFDRyxJQUFULGdCQUFnQixvREFBQyxRQUFELENBQVUsSUFBVixPQUFoQixnQkFBb0Msb0RBQUMsa0VBQUQsT0FSeEM7QUFVQSxhQUFPLEVBQUVsQixXQVZUO0FBV0EsbUJBQWEsRUFBRU07QUFYZixNQURtQjtBQUFBLEdBQXRCLENBRkcsZUFpQlIsb0RBQUMsd0RBQUQ7QUFDSSxNQUFFLEVBQUMsZUFEUDtBQUVJLGVBQVcsRUFBQyxlQUZoQjtBQUdJLFlBQVEsZUFBRSxvREFBQywrREFBRCxPQUhkO0FBSUksV0FBTyxFQUFFTixXQUpiO0FBS0ksaUJBQWEsRUFBRU07QUFMbkIsSUFqQlEsRUF3QkhMLFFBQVEsSUFBSTNCLE1BeEJULENBREo7QUE0QkgsQ0FoQ0Q7O0FBa0NleUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1vQixTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUUsQ0FESDtBQUVIQyxnQkFBWSxFQUFFLFVBRlg7QUFHSEMsY0FBVSxFQUFFLFFBSFQ7QUFJSEMsWUFBUSxFQUFFO0FBSlAsR0FEa0I7QUFPekJDLFFBQU0sRUFBRTtBQUNKSixRQUFJLEVBQUU7QUFERjtBQVBpQixDQUFELENBQTVCOztBQVlBLElBQU14QixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBekQsS0FBSyxFQUFJO0FBQ3BCLE1BQU1zRixPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFDQSxzQkFDSSxvREFBQyxrREFBRCxlQUFZOUUsS0FBWjtBQUFtQixTQUFLLEVBQUM7QUFBekIsbUJBQ1Isb0RBQUMsb0VBQUQ7QUFDSSxXQUFPLEVBQUMsSUFEWjtBQUVJLFNBQUssRUFBQyxTQUZWO0FBR0ksYUFBUyxFQUFFc0YsT0FBTyxDQUFDTixLQUh2QjtBQUlJLE1BQUUsRUFBQztBQUpQLElBRFEsZUFPQTtBQUFNLGFBQVMsRUFBRU0sT0FBTyxDQUFDRDtBQUF6QixJQVBBLENBREo7QUFXSCxDQWJEOztBQWVlNUIscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGluZyBmcm9tICdmb3Mtcm91dGluZyc7XG5pbXBvcnQgUm91dGluZ0RhdGEgZnJvbSAnLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMnO1xuXG5Sb3V0aW5nLnNldERhdGEoUm91dGluZ0RhdGEpO1xuY29uc29sZS5sb2coUm91dGluZyk7XG5leHBvcnQgZGVmYXVsdCBSb3V0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBDcmVhdGVHdWVzc2VyLFxuICAgIElucHV0R3Vlc3NlclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XG5cbmNvbnN0IEVudGl0ZUNyZWF0ZSA9IHByb3BzID0+IChcbiAgICA8Q3JlYXRlR3Vlc3NlciB7Li4ucHJvcHN9PlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIiAvPlxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcbiAgICAgICAgICAgIHNvdXJjZT1cInNpdGVzXCJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cInNpdGVzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiU2l0ZVwiXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcbiAgICAgICAgICAgIHNvdXJjZT1cImVudGl0ZV90eXBlc1wiXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJUeXBlIGQnZW50aXTDqVwiXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XG4gICAgPC9DcmVhdGVHdWVzc2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXRlQ3JlYXRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgRWRpdEd1ZXNzZXIsXG4gICAgSW5wdXRHdWVzc2VyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2VJbnB1dCwgQXV0b2NvbXBsZXRlSW5wdXQsIFRleHRGaWVsZCwgU2VsZWN0SW5wdXQgfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcblxuY29uc3QgRW50aXRlRWRpdCA9IHByb3BzID0+IChcbiAgICA8RWRpdEd1ZXNzZXIgey4uLnByb3BzfT5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIi8+XG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxuICAgICAgICAgICAgc291cmNlPVwic2l0ZXNcIlxuICAgICAgICAgICAgcmVmZXJlbmNlPVwic2l0ZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJTaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxuICAgICAgICAgICAgc291cmNlPVwiZW50aXRlX3R5cGVzXCJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgZCdlbnRpdMOpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPFNlbGVjdElucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cbiAgICA8L0VkaXRHdWVzc2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXRlRWRpdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICAgIExpc3RHdWVzc2VyLFxuICAgIEZpZWxkR3Vlc3NlclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlRmllbGQsIFRleHRGaWVsZH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XG5cbmNvbnN0IEVudGl0ZUxpc3QgPSBwcm9wcyA9PiAoXG4gICAgPExpc3RHdWVzc2VyIHsuLi5wcm9wc30+XG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwibGliZWxsZVwiIGFkZExhYmVsPXt0cnVlfS8+XG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIGFkZExhYmVsPXt0cnVlfS8+XG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlNpdGVcIiBzb3VyY2U9XCJzaXRlXCIgcmVmZXJlbmNlPVwic2l0ZXNcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlR5cGVcIiBzb3VyY2U9XCJ0eXBlXCIgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxuICAgIDwvTGlzdEd1ZXNzZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgU2hvd0d1ZXNzZXIsXG4gICAgRmllbGRHdWVzc2VyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2VGaWVsZCwgVGV4dEZpZWxkfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcblxuY29uc3QgRW50aXRlU2hvdyA9IHByb3BzID0+IChcbiAgICA8U2hvd0d1ZXNzZXIgey4uLnByb3BzfT5cbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIgYWRkTGFiZWw9e3RydWV9Lz5cbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIgYWRkTGFiZWw9e3RydWV9Lz5cbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiU2l0ZVwiIHNvdXJjZT1cInNpdGVcIiByZWZlcmVuY2U9XCJzaXRlc1wiPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiVHlwZVwiIHNvdXJjZT1cInR5cGVcIiByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XG4gICAgPC9TaG93R3Vlc3Nlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0ZVNob3c7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBDcmVhdGVHdWVzc2VyLFxuICAgIElucHV0R3Vlc3NlclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XG5cbmNvbnN0IFVzZXJDcmVhdGUgPSBwcm9wcyA9PiAoXG4gICAgPENyZWF0ZUd1ZXNzZXIgey4uLnByb3BzfT5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJwaG90b1Byb2ZpbGVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJsb2dpblwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cIm5vbVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicHJlbm9tXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJzaXR1YXRpb25NYXRyaW1vbmlhbGVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImNpdmlsaXRlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJkYXRlRGVOYWlzc2FuY2VcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImNvbXBldGVuY2VcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVFbnRyZWVcIiAvPlxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVfc29ydGllXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJyZW1hcnF1ZVwiIC8+XG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZW5hYmxlXCIgLz5cbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJlbnRpdGVcIiAvPlxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcbiAgICAgICAgICAgIHNvdXJjZT1cInByb2ZpbGVzXCJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cInByb2ZpbGVzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUHJvZmlsZVwiXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XG4gICAgPC9DcmVhdGVHdWVzc2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckNyZWF0ZTsiLCIvLyBpbiBzcmMvYXV0aFByb3ZpZGVyLmpzXG5pbXBvcnQgZGVjb2RlSnd0IGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9Sb3V0ZXInO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvZ2luOiAoe3VzZXJuYW1lLCBwYXNzd29yZH0pID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFJvdXRlci5nZW5lcmF0ZSgnYXBpX2xvZ2luX2NoZWNrJyksIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLCBwYXNzd29yZH0pLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPCAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHt0b2tlbn0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBkZWNvZGVKd3QodG9rZW4pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVybWlzc2lvbnMnLCBkZWNvZGVkVG9rZW4ucGVybWlzc2lvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcbiAgICBsb2dvdXQ6ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZXJtaXNzaW9ucycpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSxcbiAgICBjaGVja0Vycm9yOiBlcnJvciA9PiB7XG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG4gICAgY2hlY2tBdXRoOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9LFxuICAgIGdldFBlcm1pc3Npb25zOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVybWlzc2lvbnMnKTtcbiAgICAgICAgcmV0dXJuIHJvbGUgPyBQcm9taXNlLnJlc29sdmUocm9sZSkgOiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH0sXG59OyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEh5ZHJhQWRtaW4sIFJlc291cmNlR3Vlc3NlciAgfSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xuaW1wb3J0IHBvbHlnbG90STE4blByb3ZpZGVyIGZyb20gJ3JhLWkxOG4tcG9seWdsb3QnO1xuaW1wb3J0IGZyZW5jaE1lc3NhZ2VzIGZyb20gJ3JhLWxhbmd1YWdlLWZyZW5jaCc7XG5pbXBvcnQgQmFzZUxheW91dCBmcm9tIFwiLi9sYXlvdXQvQmFzZUxheW91dFwiXG5pbXBvcnQgVXNlckNyZWF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL1VzZXIvVXNlckNyZWF0ZVwiO1xuaW1wb3J0IEVudGl0ZUNyZWF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVDcmVhdGVcIjtcbmltcG9ydCBFbnRpdGVFZGl0IGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUVkaXRcIjtcbmltcG9ydCBFbnRpdGVTaG93IGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZVNob3dcIjtcbmltcG9ydCBFbnRpdGVMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUxpc3RcIjtcbmltcG9ydCBhdXRoUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2F1dGhQcm92aWRlcic7XG4vLyBkb21haW4gdHJhbnNsYXRpb25zXG4vLyByZXF1aXJlKCcuL2kxOG4vZnInKTtcblxuY29uc3QgZGF0YVByb3ZpZGVyID0gcHJvY2Vzcy5lbnYuRU5UUllfUE9JTlRfQVBJO1xuY29uc3QgaThuUHJvdmlkZXIgPSBwb2x5Z2xvdEkxOG5Qcm92aWRlcigoKSA9PiBmcmVuY2hNZXNzYWdlcywgJ2ZyJyk7XG5cbi8vIGNvbnN0IGk4blByb3ZpZGVyID0gcG9seWdsb3RJMThuUHJvdmlkZXIobG9jYWxlID0+IG1lc3NhZ2VzKTtcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkVOVFJZX1BPSU5UX0FQSSlcbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgICA8SHlkcmFBZG1pbiBlbnRyeXBvaW50PXtkYXRhUHJvdmlkZXJ9IGF1dGhQcm92aWRlcj17YXV0aFByb3ZpZGVyfSBsYXlvdXQ9e0Jhc2VMYXlvdXR9IGkxOG5Qcm92aWRlcj17aThuUHJvdmlkZXJ9IGxvY2FsZT1cImZyXCI+XG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cInVzZXJzXCIgY3JlYXRlPXtVc2VyQ3JlYXRlfSBvcHRpb25zPXt7bGFiZWw6IFwiVXRpbGlzYXRldXJzXCJ9fS8+XG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cInByb2ZpbGVzXCIgb3B0aW9ucz17e2xhYmVsOiBcIlByb2ZpbGVzXCJ9fS8+XG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cInNpdGVzXCIgb3B0aW9ucz17e2xhYmVsOiBcIlNpdGVzXCJ9fS8+XG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cImVudGl0ZXNcIiBsaXN0PXtFbnRpdGVMaXN0fSBzaG93PXtFbnRpdGVTaG93fSBlZGl0PXtFbnRpdGVFZGl0fSBjcmVhdGU9e0VudGl0ZUNyZWF0ZX0gb3B0aW9ucz17e2xhYmVsOiBcIkVudGl0w6lzXCJ9fS8+XG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cImVudGl0ZV90eXBlc1wiIG9wdGlvbnM9e3tsYWJlbDogXCJUeXBlIGQnZW50aXTDqXNcIn19Lz5cbiAgICA8L0h5ZHJhQWRtaW4+XG4pO1xuUmVhY3RET00ucmVuZGVyKFxuPEFwcFxuLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKSIsIi8vIGluIHNyYy9NeUxheW91dC5qc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAncmVhY3QtYWRtaW4nO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuXG5jb25zdCBCYXNlTGF5b3V0ID0gKHByb3BzKSA9PiA8TGF5b3V0IHsuLi5wcm9wc30gYXBwQmFyPXtOYXZCYXJ9IG1lbnU9e01lbnV9Lz47XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMYXlvdXQ7IiwiLy8gaW4gc3JjL01lbnUuanNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNZW51SXRlbSwgTWVudUl0ZW1MaW5rLCBnZXRSZXNvdXJjZXMgfSBmcm9tICdyZWFjdC1hZG1pbic7XG5pbXBvcnQgRGVmYXVsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0JztcbmltcG9ydCBMYWJlbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xhYmVsJztcblxuY29uc3QgTWVudSA9ICh7IG9uTWVudUNsaWNrLCBsb2dvdXQgfSkgPT4ge1xuICAgIGNvbnN0IGlzWFNtYWxsID0gdXNlTWVkaWFRdWVyeSh0aGVtZSA9PiB0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpKTtcbiAgICBjb25zdCBvcGVuID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWRtaW4udWkuc2lkZWJhck9wZW4pO1xuICAgIGNvbnN0IHJlc291cmNlcyA9IHVzZVNlbGVjdG9yKGdldFJlc291cmNlcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPERhc2hib2FyZE1lbnVJdGVtIG9uQ2xpY2s9e29uTWVudUNsaWNrfSBzaWRlYmFySXNPcGVuPXtvcGVufSAvPlxuICAgIHtyZXNvdXJjZXMubWFwKHJlc291cmNlID0+IChcbiAgICAgICAgPE1lbnVJdGVtTGlua1xuICAgICAgICBrZXk9e3Jlc291cmNlLm5hbWV9XG4gICAgICAgIHRvPXtgLyR7cmVzb3VyY2UubmFtZX1gfVxuICAgICAgICBwcmltYXJ5VGV4dD17XG4gICAgICAgICAgICAocmVzb3VyY2Uub3B0aW9ucyAmJiByZXNvdXJjZS5vcHRpb25zLmxhYmVsKSB8fFxuICAgICAgICAgICAgcmVzb3VyY2UubmFtZVxuICAgIH1cbiAgICAgICAgbGVmdEljb249e1xuICAgICAgICAgICAgcmVzb3VyY2UuaWNvbiA/IDxyZXNvdXJjZS5pY29uIC8+IDogPERlZmF1bHRJY29uIC8+XG4gICAgfVxuICAgICAgICBvbkNsaWNrPXtvbk1lbnVDbGlja31cbiAgICAgICAgc2lkZWJhcklzT3Blbj17b3Blbn1cbiAgICAgICAgLz5cbiAgICApKX1cbjxNZW51SXRlbUxpbmtcbiAgICB0bz1cIi9jdXN0b20tcm91dGVcIlxuICAgIHByaW1hcnlUZXh0PVwiTWlzY2VsbGFuZW91c1wiXG4gICAgbGVmdEljb249ezxMYWJlbEljb24gLz59XG4gICAgb25DbGljaz17b25NZW51Q2xpY2t9XG4gICAgc2lkZWJhcklzT3Blbj17b3Blbn1cbiAgICAvPlxuICAgIHtpc1hTbWFsbCAmJiBsb2dvdXR9XG48L2Rpdj5cbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsIi8vIGluIHNyYy9NeUFwcEJhci5qc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwQmFyIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgc3BhY2VyOiB7XG4gICAgICAgIGZsZXg6IDEsXG4gICAgfSxcbn0pO1xuXG5jb25zdCBOYXZCYXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBCYXIgey4uLnByb3BzfSB0aXRsZT1cIkthbGEga2FtYSBrZWx5IFwiPlxuPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDZcIlxuICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgIGlkPVwicmVhY3QtYWRtaW4tdGl0bGVcIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VyfSAvPlxuICAgIDwvQXBwQmFyPlxuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9