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

/***/ "./assets/components/PageLogin.js":
/*!****************************************!*\
  !*** ./assets/components/PageLogin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLogin": () => (/* binding */ PageLogin)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var PageLogin = /*#__PURE__*/function (_Component) {
  _inherits(PageLogin, _Component);

  var _super = _createSuper(PageLogin);

  function PageLogin() {
    var _this;

    _classCallCheck(this, PageLogin);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "submit", function (e) {
      e.preventDefault();
      console.log('kamam'); // gather your data/credentials here

      var credentials = {}; // Dispatch the userLogin action (injected by connect)

      _this.props.userLogin(credentials);
    });

    return _this;
  }

  _createClass(PageLogin, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__.default, {
        theme: this.props.theme
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("form", {
        onSubmit: this.submit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.default, {
        id: "standard-disabled",
        label: "Disabled",
        defaultValue: "login"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.default, {
        id: "standard-password-input",
        label: "Password",
        type: "password",
        autoComplete: "current-password"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.default, {
        type: "submit",
        variant: "contained",
        color: "primary"
      }, "Login")));
    }
  }]);

  return PageLogin;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);
; // export PageLogin // connect(undefined, { userLogin })();

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
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-core/esm/auth/types.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (type, params) {
  console.log(type, params);

  if (type === react_admin__WEBPACK_IMPORTED_MODULE_2__.AUTH_LOGIN) {
    alert('kama');
    var username = params.username,
        password = params.password;
    var request = new Request('https://localhost:8001/authenticate_token', {
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
    }).then(function (_ref) {
      var token = _ref.token;
      localStorage.setItem('token', token);
    });
  }

  return Promise.resolve();
});

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_api_doc_parser_lib_hydra_parseHydraDocumentation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation */ "./node_modules/@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation.js");
/* harmony import */ var ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ra-i18n-polyglot */ "./node_modules/ra-i18n-polyglot/esm/index.js");
/* harmony import */ var ra_language_french__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ra-language-french */ "./node_modules/ra-language-french/esm/index.js");
/* harmony import */ var _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/BaseLayout */ "./assets/layout/BaseLayout.js");
/* harmony import */ var _components_User_UserCreate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/User/UserCreate */ "./assets/components/User/UserCreate.js");
/* harmony import */ var _components_Entite_EntiteCreate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Entite/EntiteCreate */ "./assets/components/Entite/EntiteCreate.js");
/* harmony import */ var _components_Entite_EntiteEdit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Entite/EntiteEdit */ "./assets/components/Entite/EntiteEdit.js");
/* harmony import */ var _components_Entite_EntiteShow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Entite/EntiteShow */ "./assets/components/Entite/EntiteShow.js");
/* harmony import */ var _components_Entite_EntiteList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Entite/EntiteList */ "./assets/components/Entite/EntiteList.js");
/* harmony import */ var _components_authProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/authProvider */ "./assets/components/authProvider.js");
/* harmony import */ var _components_PageLogin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/PageLogin */ "./assets/components/PageLogin.js");













function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // domain translations
// require('./i18n/fr');

var entrypoint = "http://localhost:8001/api";

var getHeaders = function getHeaders() {
  return localStorage.getItem("token") ? {
    Authorization: "Bearer ".concat(localStorage.getItem("token"))
  } : {};
};

var fetchHydra = function fetchHydra(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_api_platform_admin__WEBPACK_IMPORTED_MODULE_14__.fetchHydra)(url, _objectSpread(_objectSpread({}, options), {}, {
    headers: getHeaders
  }));
};

var RedirectToLogin = function RedirectToLogin() {
  var introspect = (0,_api_platform_admin__WEBPACK_IMPORTED_MODULE_14__.useIntrospection)();

  if (localStorage.getItem("token")) {
    introspect();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react__WEBPACK_IMPORTED_MODULE_13__.Fragment, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_25__.Redirect, {
    to: "/login"
  });
};

var apiDocumentationParser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(entrypoint) {
    var _yield$parseHydraDocu, api;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,_api_platform_api_doc_parser_lib_hydra_parseHydraDocumentation__WEBPACK_IMPORTED_MODULE_15__.default)(entrypoint, {
              headers: getHeaders
            });

          case 3:
            _yield$parseHydraDocu = _context.sent;
            api = _yield$parseHydraDocu.api;
            return _context.abrupt("return", {
              api: api
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            if (!(_context.t0.status === 401)) {
              _context.next = 13;
              break;
            }

            // Prevent infinite loop if the token is expired
            localStorage.removeItem("token");
            return _context.abrupt("return", {
              api: _context.t0.api,
              customRoutes: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_25__.Route, {
                path: "/",
                component: RedirectToLogin
              })]
            });

          case 13:
            throw _context.t0;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function apiDocumentationParser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var dataProvider = (0,_api_platform_admin__WEBPACK_IMPORTED_MODULE_14__.hydraDataProvider)(entrypoint, fetchHydra, apiDocumentationParser);
var i8nProvider = (0,ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_26__.default)(function () {
  return ra_language_french__WEBPACK_IMPORTED_MODULE_16__.default;
}, 'fr'); // const i8nProvider = polyglotI18nProvider(locale => messages);

console.log("http://localhost:8001/api");

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_14__.HydraAdmin, {
    dataProvider: dataProvider,
    authProvider: _components_authProvider__WEBPACK_IMPORTED_MODULE_23__.default,
    entrypoint: entrypoint,
    layout: _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_17__.default,
    i18nProvider: i8nProvider,
    locale: "fr"
  });
};

react_dom__WEBPACK_IMPORTED_MODULE_12__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(App, null), document.getElementById('root'));

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_ra-core_esm_core_Resource_js-node_modules_ra-core_esm_dataProvider_fetch-5d76cc","vendors-node_modules_core-js_modules_es_object_create_js-node_modules_core-js_modules_es_obje-e078df","vendors-node_modules_api-platform_admin_lib_index_js-node_modules_material-ui_icons_Label_js--451826"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FbnRpdGUvRW50aXRlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVTaG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1BhZ2VMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Vc2VyL1VzZXJDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXV0aFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0L0Jhc2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xheW91dC9NZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXlvdXQvTmF2QmFyLmpzIiwid2VicGFjazovLy9pZ25vcmVkfEQ6XFx4YW1wcFxcaHRkb2NzXFxraXRyYW5hXFxzeW1mb255XFxleG8tc3ltZm9ueVxcbm9kZV9tb2R1bGVzXFxqc29ubGRcXGxpYlxcZG9jdW1lbnRMb2FkZXJzfGh0dHAiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8RDpcXHhhbXBwXFxodGRvY3NcXGtpdHJhbmFcXHN5bWZvbnlcXGV4by1zeW1mb255XFxub2RlX21vZHVsZXNcXGpzb25sZFxcbGliXFxkb2N1bWVudExvYWRlcnN8cmVxdWVzdCIsIndlYnBhY2s6Ly8vaWdub3JlZHxEOlxceGFtcHBcXGh0ZG9jc1xca2l0cmFuYVxcc3ltZm9ueVxcZXhvLXN5bWZvbnlcXG5vZGVfbW9kdWxlc1xcanNvbmxkXFxsaWJ8eG1sZG9tIiwid2VicGFjazovLy9pZ25vcmVkfEQ6XFx4YW1wcFxcaHRkb2NzXFxraXRyYW5hXFxzeW1mb255XFxleG8tc3ltZm9ueVxcbm9kZV9tb2R1bGVzXFxyZGYtY2Fub25pemVcXGxpYnxyZGYtY2Fub25pemUtbmF0aXZlIl0sIm5hbWVzIjpbIkVudGl0ZUNyZWF0ZSIsInByb3BzIiwic2VhcmNoVGV4dCIsImxpYmVsbGUiLCJFbnRpdGVFZGl0IiwiRW50aXRlTGlzdCIsIkVudGl0ZVNob3ciLCJQYWdlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3JlZGVudGlhbHMiLCJ1c2VyTG9naW4iLCJ0aGVtZSIsInN1Ym1pdCIsIkNvbXBvbmVudCIsIlVzZXJDcmVhdGUiLCJ0eXBlIiwicGFyYW1zIiwiQVVUSF9MT0dJTiIsImFsZXJ0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlcXVlc3QiLCJSZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiSGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZW50cnlwb2ludCIsInByb2Nlc3MiLCJnZXRIZWFkZXJzIiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iLCJmZXRjaEh5ZHJhIiwidXJsIiwib3B0aW9ucyIsImJhc2VGZXRjaEh5ZHJhIiwiUmVkaXJlY3RUb0xvZ2luIiwiaW50cm9zcGVjdCIsInVzZUludHJvc3BlY3Rpb24iLCJhcGlEb2N1bWVudGF0aW9uUGFyc2VyIiwicGFyc2VIeWRyYURvY3VtZW50YXRpb24iLCJhcGkiLCJyZW1vdmVJdGVtIiwiY3VzdG9tUm91dGVzIiwiZGF0YVByb3ZpZGVyIiwiYmFzZUh5ZHJhRGF0YVByb3ZpZGVyIiwiaThuUHJvdmlkZXIiLCJwb2x5Z2xvdEkxOG5Qcm92aWRlciIsImZyZW5jaE1lc3NhZ2VzIiwiQXBwIiwiYXV0aFByb3ZpZGVyIiwiQmFzZUxheW91dCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk5hdkJhciIsIk1lbnUiLCJvbk1lbnVDbGljayIsImxvZ291dCIsImlzWFNtYWxsIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsIm9wZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRtaW4iLCJ1aSIsInNpZGViYXJPcGVuIiwicmVzb3VyY2VzIiwiZ2V0UmVzb3VyY2VzIiwibWFwIiwicmVzb3VyY2UiLCJuYW1lIiwibGFiZWwiLCJpY29uIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRpdGxlIiwiZmxleCIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInNwYWNlciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUs7QUFBQSxzQkFDdEIsaURBQUMsOERBQUQsRUFBbUJBLEtBQW5CLGVBQ0ksaURBQUMsNkRBQUQ7QUFBYyxVQUFNLEVBQUM7QUFBckIsSUFESixlQUVJLGlEQUFDLDZEQUFEO0FBQWMsVUFBTSxFQUFDO0FBQXJCLElBRkosZUFHSSxpREFBQyxnREFBRDtBQUNJLFVBQU0sRUFBQyxPQURYO0FBRUksYUFBUyxFQUFDLE9BRmQ7QUFHSSxTQUFLLEVBQUMsTUFIVjtBQUlJLGlCQUFhLEVBQUUsdUJBQUFDLFVBQVU7QUFBQSxhQUFLO0FBQUVDLGVBQU8sRUFBRUQ7QUFBWCxPQUFMO0FBQUE7QUFKN0Isa0JBTUksaURBQUMsZ0RBQUQ7QUFBbUIsY0FBVSxFQUFDO0FBQTlCLElBTkosQ0FISixlQVdJLGlEQUFDLGdEQUFEO0FBQ0ksVUFBTSxFQUFDLGNBRFg7QUFFSSxhQUFTLEVBQUMsY0FGZDtBQUdJLFNBQUssRUFBQyxrQkFIVjtBQUlJLGlCQUFhLEVBQUUsdUJBQUFB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QVBBLENBREo7QUFXSCxDQWJEOztBQWVBLGlFQUFlNUIsTUFBZixFOzs7Ozs7Ozs7O0FDakNBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDcmVhdGVHdWVzc2VyLFxyXG4gICAgSW5wdXRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBFbnRpdGVDcmVhdGUgPSBwcm9wcyA9PiAoXHJcbiAgICA8Q3JlYXRlR3Vlc3NlciB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwibGliZWxsZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIgLz5cclxuICAgICAgICA8UmVmZXJlbmNlSW5wdXRcclxuICAgICAgICAgICAgc291cmNlPVwic2l0ZXNcIlxyXG4gICAgICAgICAgICByZWZlcmVuY2U9XCJzaXRlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU2l0ZVwiXHJcbiAgICAgICAgICAgIGZpbHRlclRvUXVlcnk9e3NlYXJjaFRleHQgPT4gKHsgbGliZWxsZTogc2VhcmNoVGV4dCB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBkJ2VudGl0w6lcIlxyXG4gICAgICAgICAgICBmaWx0ZXJUb1F1ZXJ5PXtzZWFyY2hUZXh0ID0+ICh7IGxpYmVsbGU6IHNlYXJjaFRleHQgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlSW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICA8L0NyZWF0ZUd1ZXNzZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdGVDcmVhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgRWRpdEd1ZXNzZXIsXHJcbiAgICBJbnB1dEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VJbnB1dCwgQXV0b2NvbXBsZXRlSW5wdXQsIFRleHRGaWVsZCwgU2VsZWN0SW5wdXQgfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IEVudGl0ZUVkaXQgPSBwcm9wcyA9PiAoXHJcbiAgICA8RWRpdEd1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIi8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjb2RlXCIvPlxyXG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxyXG4gICAgICAgICAgICBzb3VyY2U9XCJzaXRlc1wiXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cInNpdGVzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJTaXRlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VsZWN0SW5wdXQgb3B0aW9uVGV4dD1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlSW5wdXQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUlucHV0XHJcbiAgICAgICAgICAgIHNvdXJjZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cImVudGl0ZV90eXBlc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBkJ2VudGl0w6lcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFNlbGVjdElucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgPC9FZGl0R3Vlc3Nlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0ZUVkaXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgTGlzdEd1ZXNzZXIsXHJcbiAgICBGaWVsZEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VGaWVsZCwgVGV4dEZpZWxkfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IEVudGl0ZUxpc3QgPSBwcm9wcyA9PiAoXHJcbiAgICA8TGlzdEd1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIGFkZExhYmVsPXt0cnVlfS8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiU2l0ZVwiIHNvdXJjZT1cInNpdGVcIiByZWZlcmVuY2U9XCJzaXRlc1wiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiVHlwZVwiIHNvdXJjZT1cInR5cGVcIiByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgPC9MaXN0R3Vlc3Nlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0ZUxpc3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgU2hvd0d1ZXNzZXIsXHJcbiAgICBGaWVsZEd1ZXNzZXJcclxufSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xyXG5pbXBvcnQgeyBSZWZlcmVuY2VGaWVsZCwgVGV4dEZpZWxkfSBmcm9tIFwicmVhY3QtYWRtaW5cIjtcclxuXHJcbmNvbnN0IEVudGl0ZVNob3cgPSBwcm9wcyA9PiAoXHJcbiAgICA8U2hvd0d1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8RmllbGRHdWVzc2VyIHNvdXJjZT1cImxpYmVsbGVcIiBhZGRMYWJlbD17dHJ1ZX0vPlxyXG4gICAgICAgIDxGaWVsZEd1ZXNzZXIgc291cmNlPVwiY29kZVwiIGFkZExhYmVsPXt0cnVlfS8+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiU2l0ZVwiIHNvdXJjZT1cInNpdGVcIiByZWZlcmVuY2U9XCJzaXRlc1wiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImxpYmVsbGVcIiAvPlxyXG4gICAgICAgIDwvUmVmZXJlbmNlRmllbGQ+XHJcbiAgICAgICAgPFJlZmVyZW5jZUZpZWxkIGxhYmVsPVwiVHlwZVwiIHNvdXJjZT1cInR5cGVcIiByZWZlcmVuY2U9XCJlbnRpdGVfdHlwZXNcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUZpZWxkPlxyXG4gICAgPC9TaG93R3Vlc3Nlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0ZVNob3c7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlckxvZ2luIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmV4cG9ydCBjbGFzcyBQYWdlTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygna2FtYW0nKTtcclxuICAgICAgICAvLyBnYXRoZXIgeW91ciBkYXRhL2NyZWRlbnRpYWxzIGhlcmVcclxuICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IHsgfTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIHVzZXJMb2dpbiBhY3Rpb24gKGluamVjdGVkIGJ5IGNvbm5lY3QpXHJcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyTG9naW4oY3JlZGVudGlhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhpcy5wcm9wcy50aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJzdGFuZGFyZC1kaXNhYmxlZFwiIGxhYmVsPVwiRGlzYWJsZWRcIiBkZWZhdWx0VmFsdWU9XCJsb2dpblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXBhc3N3b3JkLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IFBhZ2VMb2dpbiAvLyBjb25uZWN0KHVuZGVmaW5lZCwgeyB1c2VyTG9naW4gfSkoKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDcmVhdGVHdWVzc2VyLFxyXG4gICAgSW5wdXRHdWVzc2VyXHJcbn0gZnJvbSBcIkBhcGktcGxhdGZvcm0vYWRtaW5cIjtcclxuaW1wb3J0IHsgUmVmZXJlbmNlSW5wdXQsIEF1dG9jb21wbGV0ZUlucHV0IH0gZnJvbSBcInJlYWN0LWFkbWluXCI7XHJcblxyXG5jb25zdCBVc2VyQ3JlYXRlID0gcHJvcHMgPT4gKFxyXG4gICAgPENyZWF0ZUd1ZXNzZXIgey4uLnByb3BzfT5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInBob3RvUHJvZmlsZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJsb2dpblwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJub21cIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwicHJlbm9tXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInNpdHVhdGlvbk1hdHJpbW9uaWFsZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJjaXZpbGl0ZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJkYXRlRGVOYWlzc2FuY2VcIiAvPlxyXG4gICAgICAgIDxJbnB1dEd1ZXNzZXIgc291cmNlPVwiY29tcGV0ZW5jZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJkYXRlRW50cmVlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImRhdGVfc29ydGllXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cInJlbWFycXVlXCIgLz5cclxuICAgICAgICA8SW5wdXRHdWVzc2VyIHNvdXJjZT1cImVuYWJsZVwiIC8+XHJcbiAgICAgICAgPElucHV0R3Vlc3NlciBzb3VyY2U9XCJlbnRpdGVcIiAvPlxyXG4gICAgICAgIDxSZWZlcmVuY2VJbnB1dFxyXG4gICAgICAgICAgICBzb3VyY2U9XCJwcm9maWxlc1wiXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZT1cInByb2ZpbGVzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQcm9maWxlXCJcclxuICAgICAgICAgICAgZmlsdGVyVG9RdWVyeT17c2VhcmNoVGV4dCA9PiAoeyBsaWJlbGxlOiBzZWFyY2hUZXh0IH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IG9wdGlvblRleHQ9XCJsaWJlbGxlXCIgLz5cclxuICAgICAgICA8L1JlZmVyZW5jZUlucHV0PlxyXG4gICAgPC9DcmVhdGVHdWVzc2VyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNyZWF0ZTsiLCJpbXBvcnQgeyBBVVRIX0xPR0lOIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAodHlwZSwgcGFyYW1zKSA9PiB7XHJcblxyXG4gICAgY29uc29sZS5sb2codHlwZSwgcGFyYW1zKTtcclxuICAgIGlmICh0eXBlID09PSBBVVRIX0xPR0lOKSB7XHJcbiAgICAgICAgYWxlcnQoJ2thbWEnKVxyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBwYXJhbXM7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCdodHRwczovL2xvY2FsaG9zdDo4MDAxL2F1dGhlbnRpY2F0ZV90b2tlbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgdG9rZW4gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufSIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEh5ZHJhQWRtaW4sIFJlc291cmNlR3Vlc3NlciwgaHlkcmFEYXRhUHJvdmlkZXIgYXMgYmFzZUh5ZHJhRGF0YVByb3ZpZGVyLCBmZXRjaEh5ZHJhIGFzIGJhc2VGZXRjaEh5ZHJhLCB1c2VJbnRyb3NwZWN0aW9uICB9IGZyb20gXCJAYXBpLXBsYXRmb3JtL2FkbWluXCI7XHJcbmltcG9ydCBwYXJzZUh5ZHJhRG9jdW1lbnRhdGlvbiBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hcGktZG9jLXBhcnNlci9saWIvaHlkcmEvcGFyc2VIeWRyYURvY3VtZW50YXRpb25cIjtcclxuaW1wb3J0IHBvbHlnbG90STE4blByb3ZpZGVyIGZyb20gJ3JhLWkxOG4tcG9seWdsb3QnO1xyXG5pbXBvcnQgZnJlbmNoTWVzc2FnZXMgZnJvbSAncmEtbGFuZ3VhZ2UtZnJlbmNoJztcclxuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Jhc2VMYXlvdXRcIlxyXG5pbXBvcnQgVXNlckNyZWF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL1VzZXIvVXNlckNyZWF0ZVwiO1xyXG5pbXBvcnQgRW50aXRlQ3JlYXRlIGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZUNyZWF0ZVwiO1xyXG5pbXBvcnQgRW50aXRlRWRpdCBmcm9tIFwiLi9jb21wb25lbnRzL0VudGl0ZS9FbnRpdGVFZGl0XCI7XHJcbmltcG9ydCBFbnRpdGVTaG93IGZyb20gXCIuL2NvbXBvbmVudHMvRW50aXRlL0VudGl0ZVNob3dcIjtcclxuaW1wb3J0IEVudGl0ZUxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9FbnRpdGUvRW50aXRlTGlzdFwiO1xyXG5pbXBvcnQgYXV0aFByb3ZpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvYXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IFBhZ2VMb2dpbiB9IGZyb20gJy4vY29tcG9uZW50cy9QYWdlTG9naW4nO1xyXG5cclxuLy8gZG9tYWluIHRyYW5zbGF0aW9uc1xyXG4vLyByZXF1aXJlKCcuL2kxOG4vZnInKTtcclxuXHJcbmNvbnN0IGVudHJ5cG9pbnQgPSBwcm9jZXNzLmVudi5FTlRSWV9QT0lOVF9BUEk7XHJcbmNvbnN0IGdldEhlYWRlcnMgPSAoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpID8ge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIil9YCxcclxufSA6IHt9O1xyXG5jb25zdCBmZXRjaEh5ZHJhID0gKHVybCwgb3B0aW9ucyA9IHt9KSA9PlxyXG4gICAgYmFzZUZldGNoSHlkcmEodXJsLCB7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXJzLFxyXG4gICAgfSk7XHJcbmNvbnN0IFJlZGlyZWN0VG9Mb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGludHJvc3BlY3QgPSB1c2VJbnRyb3NwZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgICBpbnRyb3NwZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIDw+PC8+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+O1xyXG59O1xyXG5jb25zdCBhcGlEb2N1bWVudGF0aW9uUGFyc2VyID0gYXN5bmMgKGVudHJ5cG9pbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhcGkgfSA9IGF3YWl0IHBhcnNlSHlkcmFEb2N1bWVudGF0aW9uKGVudHJ5cG9pbnQsIHsgaGVhZGVyczogZ2V0SGVhZGVycyB9KTtcclxuICAgICAgICByZXR1cm4geyBhcGkgfTtcclxuICAgIH0gY2F0Y2ggKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wIGlmIHRoZSB0b2tlbiBpcyBleHBpcmVkXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXBpOiByZXN1bHQuYXBpLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUm91dGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtSZWRpcmVjdFRvTG9naW59IC8+XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgcmVzdWx0O1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBkYXRhUHJvdmlkZXIgPSBiYXNlSHlkcmFEYXRhUHJvdmlkZXIoZW50cnlwb2ludCwgZmV0Y2hIeWRyYSwgYXBpRG9jdW1lbnRhdGlvblBhcnNlcik7XHJcblxyXG5jb25zdCBpOG5Qcm92aWRlciA9IHBvbHlnbG90STE4blByb3ZpZGVyKCgpID0+IGZyZW5jaE1lc3NhZ2VzLCAnZnInKTtcclxuXHJcbi8vIGNvbnN0IGk4blByb3ZpZGVyID0gcG9seWdsb3RJMThuUHJvdmlkZXIobG9jYWxlID0+IG1lc3NhZ2VzKTtcclxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuRU5UUllfUE9JTlRfQVBJKVxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgICA8SHlkcmFBZG1pbiBkYXRhUHJvdmlkZXI9e2RhdGFQcm92aWRlcn0gYXV0aFByb3ZpZGVyPXthdXRoUHJvdmlkZXJ9IGVudHJ5cG9pbnQ9e2VudHJ5cG9pbnR9IGxheW91dD17QmFzZUxheW91dH0gaTE4blByb3ZpZGVyPXtpOG5Qcm92aWRlcn0gbG9jYWxlPVwiZnJcIj5cclxuICAgICAgICB7Lyo8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJ1c2Vyc1wiIGNyZWF0ZT17VXNlckNyZWF0ZX0gb3B0aW9ucz17e2xhYmVsOiBcIlV0aWxpc2F0ZXVyc1wifX0vPiovfVxyXG4gICAgICAgIHsvKjxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cInByb2ZpbGVzXCIgb3B0aW9ucz17e2xhYmVsOiBcIlByb2ZpbGVzXCJ9fS8+Ki99XHJcbiAgICAgICAgey8qPFJlc291cmNlR3Vlc3NlciBuYW1lPVwic2l0ZXNcIiBvcHRpb25zPXt7bGFiZWw6IFwiU2l0ZXNcIn19Lz4qL31cclxuICAgICAgICB7Lyo8UmVzb3VyY2VHdWVzc2VyIG5hbWU9XCJlbnRpdGVzXCIgbGlzdD17RW50aXRlTGlzdH0gc2hvdz17RW50aXRlU2hvd30gZWRpdD17RW50aXRlRWRpdH0gY3JlYXRlPXtFbnRpdGVDcmVhdGV9IG9wdGlvbnM9e3tsYWJlbDogXCJFbnRpdMOpc1wifX0vPiovfVxyXG4gICAgICAgIHsvKjxSZXNvdXJjZUd1ZXNzZXIgbmFtZT1cImVudGl0ZV90eXBlc1wiIG9wdGlvbnM9e3tsYWJlbDogXCJUeXBlIGQnZW50aXTDqXNcIn19Lz4qL31cclxuICAgIDwvSHlkcmFBZG1pbj5cclxuKTtcclxuUmVhY3RET00ucmVuZGVyKFxyXG48QXBwXHJcbi8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pIiwiLy8gaW4gc3JjL015TGF5b3V0LmpzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcclxuXHJcbmNvbnN0IEJhc2VMYXlvdXQgPSAocHJvcHMpID0+IDxMYXlvdXQgey4uLnByb3BzfSBhcHBCYXI9e05hdkJhcn0gbWVudT17TWVudX0vPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VMYXlvdXQ7IiwiLy8gaW4gc3JjL01lbnUuanNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkTWVudUl0ZW0sIE1lbnVJdGVtTGluaywgZ2V0UmVzb3VyY2VzIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgRGVmYXVsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0JztcclxuaW1wb3J0IExhYmVsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFiZWwnO1xyXG5cclxuY29uc3QgTWVudSA9ICh7IG9uTWVudUNsaWNrLCBsb2dvdXQgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNYU21hbGwgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lID0+IHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpO1xyXG4gICAgY29uc3Qgb3BlbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFkbWluLnVpLnNpZGViYXJPcGVuKTtcclxuICAgIGNvbnN0IHJlc291cmNlcyA9IHVzZVNlbGVjdG9yKGdldFJlc291cmNlcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPERhc2hib2FyZE1lbnVJdGVtIG9uQ2xpY2s9e29uTWVudUNsaWNrfSBzaWRlYmFySXNPcGVuPXtvcGVufSAvPlxyXG4gICAge3Jlc291cmNlcy5tYXAocmVzb3VyY2UgPT4gKFxyXG4gICAgICAgIDxNZW51SXRlbUxpbmtcclxuICAgICAgICBrZXk9e3Jlc291cmNlLm5hbWV9XHJcbiAgICAgICAgdG89e2AvJHtyZXNvdXJjZS5uYW1lfWB9XHJcbiAgICAgICAgcHJpbWFyeVRleHQ9e1xyXG4gICAgICAgICAgICAocmVzb3VyY2Uub3B0aW9ucyAmJiByZXNvdXJjZS5vcHRpb25zLmxhYmVsKSB8fFxyXG4gICAgICAgICAgICByZXNvdXJjZS5uYW1lXHJcbiAgICB9XHJcbiAgICAgICAgbGVmdEljb249e1xyXG4gICAgICAgICAgICByZXNvdXJjZS5pY29uID8gPHJlc291cmNlLmljb24gLz4gOiA8RGVmYXVsdEljb24gLz5cclxuICAgIH1cclxuICAgICAgICBvbkNsaWNrPXtvbk1lbnVDbGlja31cclxuICAgICAgICBzaWRlYmFySXNPcGVuPXtvcGVufVxyXG4gICAgICAgIC8+XHJcbiAgICApKX1cclxuPE1lbnVJdGVtTGlua1xyXG4gICAgdG89XCIvY3VzdG9tLXJvdXRlXCJcclxuICAgIHByaW1hcnlUZXh0PVwiTWlzY2VsbGFuZW91c1wiXHJcbiAgICBsZWZ0SWNvbj17PExhYmVsSWNvbiAvPn1cclxuICAgIG9uQ2xpY2s9e29uTWVudUNsaWNrfVxyXG4gICAgc2lkZWJhcklzT3Blbj17b3Blbn1cclxuICAgIC8+XHJcbiAgICB7aXNYU21hbGwgJiYgbG9nb3V0fVxyXG48L2Rpdj5cclxuKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiLy8gaW4gc3JjL015QXBwQmFyLmpzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQmFyIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgfSxcclxuICAgIHNwYWNlcjoge1xyXG4gICAgICAgIGZsZXg6IDEsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IE5hdkJhciA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcEJhciB7Li4ucHJvcHN9IHRpdGxlPVwiS2FsYSBrYW1hIGtlbHkgXCI+XHJcbjxUeXBvZ3JhcGh5XHJcbiAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgIGlkPVwicmVhY3QtYWRtaW4tdGl0bGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlcn0gLz5cclxuICAgIDwvQXBwQmFyPlxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=