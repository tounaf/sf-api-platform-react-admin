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
/* harmony import */ var ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ra-i18n-polyglot */ "./node_modules/ra-i18n-polyglot/esm/index.js");
/* harmony import */ var ra_language_french__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ra-language-french */ "./node_modules/ra-language-french/esm/index.js");
/* harmony import */ var _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/BaseLayout */ "./assets/layout/BaseLayout.js");
/* harmony import */ var _components_User_UserCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/User/UserCreate */ "./assets/components/User/UserCreate.js");
/* harmony import */ var _components_Entite_EntiteCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Entite/EntiteCreate */ "./assets/components/Entite/EntiteCreate.js");
/* harmony import */ var _components_Entite_EntiteEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Entite/EntiteEdit */ "./assets/components/Entite/EntiteEdit.js");
/* harmony import */ var _components_Entite_EntiteShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Entite/EntiteShow */ "./assets/components/Entite/EntiteShow.js");
/* harmony import */ var _components_Entite_EntiteList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Entite/EntiteList */ "./assets/components/Entite/EntiteList.js");










 // domain translations
// require('./i18n/fr');

var dataProvider = "http://localhost:8001/api";
var i8nProvider = (0,ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_10__.default)(function () {
  return ra_language_french__WEBPACK_IMPORTED_MODULE_3__.default;
}, 'fr'); // const i8nProvider = polyglotI18nProvider(locale => messages);

console.log("http://localhost:8001/api");

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_2__.HydraAdmin, {
    entrypoint: dataProvider,
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_ra-core_esm_core_Resource_js-node_modules_ra-core_esm_dataProvider_fetch-5d76cc","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_expo-d23a98","vendors-node_modules_api-platform_admin_lib_index_js-node_modules_material-ui_icons_Label_js--0de5ce"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FbnRpdGUvRW50aXRlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVTaG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1VzZXIvVXNlckNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xheW91dC9CYXNlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXlvdXQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0L05hdkJhci5qcyIsIndlYnBhY2s6Ly8vaWdub3JlZHxEOlxceGFtcHBcXGh0ZG9jc1xca2l0cmFuYVxcc3ltZm9ueVxcZXhvLXN5bWZvbnlcXG5vZGVfbW9kdWxlc1xcanNvbmxkXFxsaWJcXGRvY3VtZW50TG9hZGVyc3xodHRwIiwid2VicGFjazovLy9pZ25vcmVkfEQ6XFx4YW1wcFxcaHRkb2NzXFxraXRyYW5hXFxzeW1mb255XFxleG8tc3ltZm9ueVxcbm9kZV9tb2R1bGVzXFxqc29ubGRcXGxpYlxcZG9jdW1lbnRMb2FkZXJzfHJlcXVlc3QiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8RDpcXHhhbXBwXFxodGRvY3NcXGtpdHJhbmFcXHN5bWZvbnlcXGV4by1zeW1mb255XFxub2RlX21vZHVsZXNcXGpzb25sZFxcbGlifHhtbGRvbSIsIndlYnBhY2s6Ly8vaWdub3JlZHxEOlxceGFtcHBcXGh0ZG9jc1xca2l0cmFuYVxcc3ltZm9ueVxcZXhvLXN5bWZvbnlcXG5vZGVfbW9kdWxlc1xccmRmLWNhbm9uaXplXFxsaWJ8cmRmLWNhbm9uaXplLW5hdGl2ZSJdLCJuYW1lcyI6WyJFbnRpdGVDcmVhdGUiLCJwcm9wcyIsInNlYXJjaFRleHQiLCJsaWJlbGxlIiwiRW50aXRlRWRpdCIsIkVudGl0ZUxpc3QiLCJFbnRpdGVTaG93IiwiVXNlckNyZWF0ZSIsImRhdGFQcm92aWRlciIsInByb2Nlc3MiLCJpOG5Qcm92aWRlciIsInBvbHlnbG90STE4blByb3ZpZGVyIiwiZnJlbmNoTWVzc2FnZXMiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwiQmFzZUxheW91dCIsImxhYmVsIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTmF2QmFyIiwiTWVudSIsIm9uTWVudUNsaWNrIiwibG9nb3V0IiwiaXNYU21hbGwiLCJ1c2VNZWRpYVF1ZXJ5IiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJvcGVuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkbWluIiwidWkiLCJzaWRlYmFyT3BlbiIsInJlc291cmNlcyIsImdldFJlc291cmNlcyIsIm1hcCIsInJlc291cmNlIiwibmFtZSIsIm9wdGlvbnMiLCJpY29uIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRpdGxlIiwiZmxleCIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInNwYWNlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUs7QUFBQSxzQkFDdEIsaURBQUMsOERBQUQsRUFBbUJBLEtBQW5CLGVBQ0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFESixlQUVJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBRkosZUFHSSxpREFBQyxnREFBRDtBQUNJLFVBQU0sRUFBQyxPQURYO0FBRUksYUFBUyxFQUFDLE9BRmQ7QUFHSSxTQUFLLEVBQUMsTUFIVjtBQUlJLGlCQUFhLEVB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UUFBSSxFQUFFLENBREg7QUFFSEMsZ0JBQVksRUFBRSxVQUZYO0FBR0hDLGNBQVUsRUFBRSxRQUhUO0FBSUhDLFlBQVEsRUFBRTtBQUpQLEdBRGtCO0FBT3pCQyxRQUFNLEVBQUU7QUFDSkosUUFBSSxFQUFFO0FBREY7QUFQaUIsQ0FBRCxDQUE1Qjs7QUFZQSxJQUFNekIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQXBCLEtBQUssRUFBSTtBQUNwQixNQUFNa0QsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0ksaURBQUMsZ0RBQUQsZUFBWTFDLEtBQVo7QUFBbUIsU0FBSyxFQUFDO0FBQXpCLG1CQUNSLGlEQUFDLGlFQUFEO0FBQ0ksV0FBTyxFQUFDLElBRFo7QUFFSSxTQUFLLEVBQUMsU0FGVjtBQUdJLGFBQVMsRUFBRWtELE9BQU8sQ0FBQ04sS0FIdkI7QUFJSSxNQUFFLEVBQUM7QUFKUCxJQURRLGVBT0E7QUFBTSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0Q7QUFBekIsSUFQQSxDQURKO0FBV0gsQ0FiRDs7QUFlQSxpRUFBZTdCLE1BQWYsRTs7Ozs7Ozs7OztBQ2pDQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ3JlYXRlR3Vlc3NlcixcclxuICAgIElucHV0R3Vlc3NlclxyXG59IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XHJcbmltcG9ydCB7IFJlZmVyZW5jZUlucHV0LCBBdXRvY29tcGxldGVJbnB1dCB9IGZyb20gXCJyZWFjdC1hZG1pblwiO1xyXG5cclxuY29uc3QgRW50aXRlQ3JlYXRlID0gcHJvcHMgPT4gKFxyXG4gICAgPENyZWF0ZUd1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIC8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cInNpdGVzXCJcclxuICAgICAgICAgICAgcmVmZXJlbmNlPVwic2l0ZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlNpdGVcIlxyXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxyXG4gICAgICAgICAgICBzb3VyY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgZCdlbnRpdMOpXCJcclxuICAgICAgICAgICAgZmlsdGVyVG9RdWVyeT17c2VhcmNoVGV4dCA9PiAoeyBsaWJlbGxlOiBzZWFyY2hUZXh0IH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgPC9DcmVhdGVHdWVzc2VyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50aXRlQ3JlYXRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIEVkaXRHdWVzc2VyLFxyXG4gICAgSW5wdXRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0LCBUZXh0RmllbGQsIFNlbGVjdElucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVFZGl0ID0gcHJvcHMgPT4gKFxyXG4gICAgPEVkaXRHdWVzc2VyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29kZVwiLz5cclxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcclxuICAgICAgICAgICAgc291cmNlPVwic2l0ZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJzaXRlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU2l0ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlbGVjdElucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxyXG4gICAgICAgICAgICBzb3VyY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgZCdlbnRpdMOpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBvcHRpb25UZXh0PVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPC9SZWZlcmVuY2VJbnB1dD5cclxuICAgIDwvRWRpdEd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVFZGl0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIExpc3RHdWVzc2VyLFxyXG4gICAgRmllbGRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlRmllbGQsIFRleHRGaWVsZH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVMaXN0ID0gcHJvcHMgPT4gKFxyXG4gICAgPExpc3RHdWVzc2VyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIgYWRkTGFiZWw9e3RydWV9Lz5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlNpdGVcIiBzb3VyY2U9XCJzaXRlXCIgcmVmZXJlbmNlPVwic2l0ZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlR5cGVcIiBzb3VyY2U9XCJ0eXBlXCIgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cclxuICAgIDwvTGlzdEd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIFNob3dHdWVzc2VyLFxyXG4gICAgRmllbGRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlRmllbGQsIFRleHRGaWVsZH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVTaG93ID0gcHJvcHMgPT4gKFxyXG4gICAgPFNob3dHdWVzc2VyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEZpZWxkR3Vlc3NlciBzb3VyY2U9XCJsaWJlbGxlXCIgYWRkTGFiZWw9e3RydWV9Lz5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImNvZGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlNpdGVcIiBzb3VyY2U9XCJzaXRlXCIgcmVmZXJlbmNlPVwic2l0ZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgICAgIDxSZWZlcmVuY2VGaWVsZCBsYWJlbD1cIlR5cGVcIiBzb3VyY2U9XCJ0eXBlXCIgcmVmZXJlbmNlPVwiZW50aXRlX3R5cGVzXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPC9SZWZlcmVuY2VGaWVsZD5cclxuICAgIDwvU2hvd0d1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVTaG93OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIENyZWF0ZUd1ZXNzZXIsXHJcbiAgICBJbnB1dEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VJbnB1dCwgQXV0b2NvbXBsZXRlSW5wdXQgfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IFVzZXJDcmVhdGUgPSBwcm9wcyA9PiAoXHJcbiAgICA8Q3JlYXRlR3Vlc3NlciB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicGhvdG9Qcm9maWxlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVtYWlsXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxvZ2luXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInVzZXJuYW1lXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cIm5vbVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJwcmVub21cIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwic2l0dWF0aW9uTWF0cmltb25pYWxlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImNpdmlsaXRlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVEZU5haXNzYW5jZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb21wZXRlbmNlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVFbnRyZWVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZGF0ZV9zb3J0aWVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicmVtYXJxdWVcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiZW5hYmxlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVudGl0ZVwiIC8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cInByb2ZpbGVzXCJcclxuICAgICAgICAgICAgcmVmZXJlbmNlPVwicHJvZmlsZXNcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlByb2ZpbGVcIlxyXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICA8L0NyZWF0ZUd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ3JlYXRlOyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEh5ZHJhQWRtaW4sIFJlc291cmNlR3Vlc3NlciAgfSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgcG9seWdsb3RJMThuUHJvdmlkZXIgZnJvbSAncmEtaTE4bi1wb2x5Z2xvdCc7XHJcbmltcG9ydCBmcmVuY2hNZXNzYWdlcyBmcm9tICdyYS1sYW5ndWFnZS1mcmVuY2gnO1xyXG5pbXBvcnQgQmFzZUxheW91dCBmcm9tIFwiLi9sYXlvdXQvQmFzZUxheW91dFwiXHJcbmltcG9ydCBVc2VyQ3JlYXRlIGZyb20gXCIuL2NvbXBvbmVudHMvVXNlci9Vc2VyQ3JlYXRlXCI7XHJcbmltcG9ydCBFbnRpdGVDcmVhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlQ3JlYXRlXCI7XHJcbmltcG9ydCBFbnRpdGVFZGl0IGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUVkaXRcIjtcclxuaW1wb3J0IEVudGl0ZVNob3cgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlU2hvd1wiO1xyXG5pbXBvcnQgRW50aXRlTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVMaXN0XCI7XHJcbi8vIGRvbWFpbiB0cmFuc2xhdGlvbnNcclxuLy8gcmVxdWlyZSgnLi9pMThuL2ZyJyk7XHJcblxyXG5jb25zdCBkYXRhUHJvdmlkZXIgPSBwcm9jZXNzLmVudi5FTlRSWV9QT0lOVF9BUEk7XHJcbmNvbnN0IGk4blByb3ZpZGVyID0gcG9seWdsb3RJMThuUHJvdmlkZXIoKCkgPT4gZnJlbmNoTWVzc2FnZXMsICdmcicpO1xyXG5cclxuLy8gY29uc3QgaThuUHJvdmlkZXIgPSBwb2x5Z2xvdEkxOG5Qcm92aWRlcihsb2NhbGUgPT4gbWVzc2FnZXMpO1xyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5FTlRSWV9QT0lOVF9BUEkpXHJcbmNvbnN0IEFwcCA9ICgpID0+IChcclxuICAgIDxIeWRyYUFkbWluIGVudHJ5cG9pbnQ9e2RhdGFQcm92aWRlcn0gbGF5b3V0PXtCYXNlTGF5b3V0fSBpMThuUHJvdmlkZXI9e2k4blByb3ZpZGVyfSBsb2NhbGU9XCJmclwiPlxyXG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cInVzZXJzXCIgY3JlYXRlPXtVc2VyQ3JlYXRlfSBvcHRpb25zPXt7bGFiZWw6IFwiVXRpbGlzYXRldXJzXCJ9fS8+XHJcbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwicHJvZmlsZXNcIiBvcHRpb25zPXt7bGFiZWw6IFwiUHJvZmlsZXNcIn19Lz5cclxuICAgICAgICA8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJzaXRlc1wiIG9wdGlvbnM9e3tsYWJlbDogXCJTaXRlc1wifX0vPlxyXG4gICAgICAgIDxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cImVudGl0ZXNcIiBsaXN0PXtFbnRpdGVMaXN0fSBzaG93PXtFbnRpdGVTaG93fSBlZGl0PXtFbnRpdGVFZGl0fSBjcmVhdGU9e0VudGl0ZUNyZWF0ZX0gb3B0aW9ucz17e2xhYmVsOiBcIkVudGl0w6lzXCJ9fS8+XHJcbiAgICAgICAgPFJlc291cmNlR3Vlc3NlciBuYW1lPVwiZW50aXRlX3R5cGVzXCIgb3B0aW9ucz17e2xhYmVsOiBcIlR5cGUgZCdlbnRpdMOpc1wifX0vPlxyXG4gICAgPC9IeWRyYUFkbWluPlxyXG4pO1xyXG5SZWFjdERPTS5yZW5kZXIoXHJcbjxBcHBcclxuLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbikiLCIvLyBpbiBzcmMvTXlMYXlvdXQuanNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdyZWFjdC1hZG1pbic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xyXG5cclxuY29uc3QgQmFzZUxheW91dCA9IChwcm9wcykgPT4gPExheW91dCB7Li4ucHJvcHN9IGFwcEJhcj17TmF2QmFyfSBtZW51PXtNZW51fS8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUxheW91dDsiLCIvLyBpbiBzcmMvTWVudS5qc1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRNZW51SXRlbSwgTWVudUl0ZW1MaW5rLCBnZXRSZXNvdXJjZXMgfSBmcm9tICdyZWFjdC1hZG1pbic7XHJcbmltcG9ydCBEZWZhdWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3QnO1xyXG5pbXBvcnQgTGFiZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MYWJlbCc7XHJcblxyXG5jb25zdCBNZW51ID0gKHsgb25NZW51Q2xpY2ssIGxvZ291dCB9KSA9PiB7XHJcbiAgICBjb25zdCBpc1hTbWFsbCA9IHVzZU1lZGlhUXVlcnkodGhlbWUgPT4gdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XHJcbiAgICBjb25zdCBvcGVuID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWRtaW4udWkuc2lkZWJhck9wZW4pO1xyXG4gICAgY29uc3QgcmVzb3VyY2VzID0gdXNlU2VsZWN0b3IoZ2V0UmVzb3VyY2VzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8RGFzaGJvYXJkTWVudUl0ZW0gb25DbGljaz17b25NZW51Q2xpY2t9IHNpZGViYXJJc09wZW49e29wZW59IC8+XHJcbiAgICB7cmVzb3VyY2VzLm1hcChyZXNvdXJjZSA9PiAoXHJcbiAgICAgICAgPE1lbnVJdGVtTGlua1xyXG4gICAgICAgIGtleT17cmVzb3VyY2UubmFtZX1cclxuICAgICAgICB0bz17YC8ke3Jlc291cmNlLm5hbWV9YH1cclxuICAgICAgICBwcmltYXJ5VGV4dD17XHJcbiAgICAgICAgICAgIChyZXNvdXJjZS5vcHRpb25zICYmIHJlc291cmNlLm9wdGlvbnMubGFiZWwpIHx8XHJcbiAgICAgICAgICAgIHJlc291cmNlLm5hbWVcclxuICAgIH1cclxuICAgICAgICBsZWZ0SWNvbj17XHJcbiAgICAgICAgICAgIHJlc291cmNlLmljb24gPyA8cmVzb3VyY2UuaWNvbiAvPiA6IDxEZWZhdWx0SWNvbiAvPlxyXG4gICAgfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uTWVudUNsaWNrfVxyXG4gICAgICAgIHNpZGViYXJJc09wZW49e29wZW59XHJcbiAgICAgICAgLz5cclxuICAgICkpfVxyXG48TWVudUl0ZW1MaW5rXHJcbiAgICB0bz1cIi9jdXN0b20tcm91dGVcIlxyXG4gICAgcHJpbWFyeVRleHQ9XCJNaXNjZWxsYW5lb3VzXCJcclxuICAgIGxlZnRJY29uPXs8TGFiZWxJY29uIC8+fVxyXG4gICAgb25DbGljaz17b25NZW51Q2xpY2t9XHJcbiAgICBzaWRlYmFySXNPcGVuPXtvcGVufVxyXG4gICAgLz5cclxuICAgIHtpc1hTbWFsbCAmJiBsb2dvdXR9XHJcbjwvZGl2PlxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCIvLyBpbiBzcmMvTXlBcHBCYXIuanNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBCYXIgfSBmcm9tICdyZWFjdC1hZG1pbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc3BhY2VyOiB7XHJcbiAgICAgICAgZmxleDogMSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTmF2QmFyID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQmFyIHsuLi5wcm9wc30gdGl0bGU9XCJLYWxhIGthbWEga2VseSBcIj5cclxuPFR5cG9ncmFwaHlcclxuICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgaWQ9XCJyZWFjdC1hZG1pbi10aXRsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VyfSAvPlxyXG4gICAgPC9BcHBCYXI+XHJcbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==