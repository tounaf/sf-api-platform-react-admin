(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details"],{

/***/ "./assets/components/achat/detailsAchat.js":
/*!*************************************************!*\
  !*** ./assets/components/achat/detailsAchat.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_ingredientService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ingredientService */ "./assets/components/service/ingredientService.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    produit: "",
    quantite: "",
    prix: ""
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      inputList = _useState2[0],
      setInputList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      ingredients = _useState4[0],
      setIngredients = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getList();
    console.log(ingredients);
  }, []);

  var getList = function getList() {
    _service_ingredientService__WEBPACK_IMPORTED_MODULE_3__["default"].getAll().then(function (res) {
      setIngredients({
        ingredients: res.data
      });
    });
  }; // handle input change


  var handleInputChange = function handleInputChange(e, index) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;

    var list = _toConsumableArray(inputList);

    list[index][name] = value;
    setInputList(list);
  }; // handle click event of the Remove button


  var handleRemoveClick = function handleRemoveClick(index) {
    var list = _toConsumableArray(inputList);

    list.splice(index, 1);
    setInputList(list);
  }; // handle click event of the Add button


  var handleAddClick = function handleAddClick() {
    setInputList([].concat(_toConsumableArray(inputList), [{
      produit: "",
      quantite: "",
      prix: ""
    }]));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://cluemediator.com"
  }, "Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", null, ingredients.map(function (ing, index) {
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: ing.id,
      key: index
    }, ing.libelle);
  })), inputList.map(function (x, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "box row",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      name: "achat[details][" + i + "][ingredient]",
      className: "form-control col-md-3",
      placeholder: "Ingredient",
      value: x.produit,
      onChange: function onChange(e) {
        return handleInputChange(e, i);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "form-control ml10 col-md-3",
      name: "achat[details][" + i + "][quantite]",
      placeholder: "Quantit\xE9",
      value: x.quantite,
      onChange: function onChange(e) {
        return handleInputChange(e, i);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "form-control ml10 col-md-3",
      name: "achat[details][" + i + "][prixUnitaire]",
      placeholder: "Prix Unitaire",
      value: x.prix,
      onChange: function onChange(e) {
        return handleInputChange(e, i);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "btn-box col-md-3"
    }, inputList.length !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "mr10 btn btn-danger",
      onClick: function onClick() {
        return handleRemoveClick(i);
      }
    }, "Remove"), inputList.length - 1 === i && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-success",
      onClick: handleAddClick
    }, "Add")));
  })));
}

react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null), document.getElementById('details'));

/***/ }),

/***/ "./assets/components/http-common.js":
/*!******************************************!*\
  !*** ./assets/components/http-common.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8001/api",
  headers: {
    'Content-Type': 'Application/json',
    'Accept': 'Application/json'
  }
}));

/***/ }),

/***/ "./assets/components/service/ingredientService.js":
/*!********************************************************!*\
  !*** ./assets/components/service/ingredientService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-common */ "./assets/components/http-common.js");


var getAll = function getAll() {
  return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/ingredients");
};

var get = function get(id) {
  return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/ingredients/".concat(id));
};

var create = function create(data) {
  return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("/ingredients", data);
};

var update = function update(id, data) {
  return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].put("/ingredients/".concat(id), data);
};

var remove = function remove(id) {
  return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/ingredients/".concat(id));
};

var removeAll = function removeAll() {
  return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/ingredients");
};

var findByTitle = function findByTitle(title) {
  return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/ingredients?libelle=".concat(libelle));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getAll: getAll,
  get: get,
  create: create,
  update: update,
  remove: remove,
  removeAll: removeAll,
  findByTitle: findByTitle
});

/***/ })

},[["./assets/components/achat/detailsAchat.js","runtime","vendors~details~home~index","vendors~details"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hY2hhdC9kZXRhaWxzQWNoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaHR0cC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2VydmljZS9pbmdyZWRpZW50U2VydmljZS5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInByb2R1aXQiLCJxdWFudGl0ZSIsInByaXgiLCJpbnB1dExpc3QiLCJzZXRJbnB1dExpc3QiLCJpbmdyZWRpZW50cyIsInNldEluZ3JlZGllbnRzIiwidXNlRWZmZWN0IiwiZ2V0TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJpbmdyZWRpZW50U2VydmljZSIsImdldEFsbCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwiaW5kZXgiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsaXN0IiwiaGFuZGxlUmVtb3ZlQ2xpY2siLCJzcGxpY2UiLCJoYW5kbGVBZGRDbGljayIsIm1hcCIsImluZyIsImlkIiwibGliZWxsZSIsIngiLCJpIiwibGVuZ3RoIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImh0dHAiLCJnZXQiLCJwb3N0IiwidXBkYXRlIiwicHV0IiwicmVtb3ZlIiwicmVtb3ZlQWxsIiwiZmluZEJ5VGl0bGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFBQSxrQkFDdUJDLHNEQUFRLENBQUMsQ0FBQztBQUFFQyxXQUFPLEVBQUUsRUFBWDtBQUFlQyxZQUFRLEVBQUUsRUFBekI7QUFBNkJDLFFBQUksRUFBRTtBQUFuQyxHQUFELENB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JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBpbmdyZWRpZW50U2VydmljZSBmcm9tIFwiLi4vc2VydmljZS9pbmdyZWRpZW50U2VydmljZVwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgW2lucHV0TGlzdCwgc2V0SW5wdXRMaXN0XSA9IHVzZVN0YXRlKFt7IHByb2R1aXQ6IFwiXCIsIHF1YW50aXRlOiBcIlwiLCBwcml4OiBcIlwiIH1dKTtcbiAgICBjb25zdCBbaW5ncmVkaWVudHMsIHNldEluZ3JlZGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldExpc3QoKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5ncmVkaWVudHMpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGluZ3JlZGllbnRTZXJ2aWNlLmdldEFsbCgpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHNldEluZ3JlZGllbnRzKHtpbmdyZWRpZW50czogcmVzLmRhdGF9KVxuICAgICAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGlucHV0IGNoYW5nZVxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBsaXN0ID0gWy4uLmlucHV0TGlzdF07XG4gICAgICAgIGxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHNldElucHV0TGlzdChsaXN0KTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGNsaWNrIGV2ZW50IG9mIHRoZSBSZW1vdmUgYnV0dG9uXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlQ2xpY2sgPSBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBzZXRJbnB1dExpc3QobGlzdCk7XG4gICAgfTtcblxuICAgIC8vIGhhbmRsZSBjbGljayBldmVudCBvZiB0aGUgQWRkIGJ1dHRvblxuICAgIGNvbnN0IGhhbmRsZUFkZENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRJbnB1dExpc3QoWy4uLmlucHV0TGlzdCwgeyBwcm9kdWl0OiBcIlwiLCBxdWFudGl0ZTogXCJcIiwgcHJpeDogXCJcIiB9XSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxoMz48YSBocmVmPVwiaHR0cHM6Ly9jbHVlbWVkaWF0b3IuY29tXCI+RGV0YWlsczwvYT48L2gzPlxuICAgICAgICA8Zm9ybT5cblxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50cy5tYXAoKGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZy5pZH0ga2V5PXtpbmRleH0+e2luZy5saWJlbGxlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIHtpbnB1dExpc3QubWFwKCh4LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggcm93XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiYWNoYXRbZGV0YWlsc11bXCIgKyBpICtcIl1baW5ncmVkaWVudF1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLW1kLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVkaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3gucHJvZHVpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWwxMCBjb2wtbWQtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJhY2hhdFtkZXRhaWxzXVtcIiArIGkgK1wiXVtxdWFudGl0ZV1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXTDqVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3gucXVhbnRpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSwgaSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1sMTAgY29sLW1kLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiYWNoYXRbZGV0YWlsc11bXCIgKyBpICtcIl1bcHJpeFVuaXRhaXJlXVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpeCBVbml0YWlyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3gucHJpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ib3ggY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRMaXN0Lmxlbmd0aCAhPT0gMSAmJiA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXIxMCBidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlQ2xpY2soaSl9PlJlbW92ZTwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRMaXN0Lmxlbmd0aCAtIDEgPT09IGkgJiYgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtoYW5kbGVBZGRDbGlja30+QWRkPC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuUmVhY3RET00ucmVuZGVyKFxuPEFwcFxuLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKVxuKSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMS9hcGlcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnQXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQnOiAnQXBwbGljYXRpb24vanNvbid9XG59KTsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiLi4vaHR0cC1jb21tb25cIjtcblxuY29uc3QgZ2V0QWxsID0gKCkgPT4ge1xuICAgIHJldHVybiBodHRwLmdldChcIi9pbmdyZWRpZW50c1wiKTtcbn07XG5cbmNvbnN0IGdldCA9IGlkID0+IHtcbiAgICByZXR1cm4gaHR0cC5nZXQoYC9pbmdyZWRpZW50cy8ke2lkfWApO1xufTtcblxuY29uc3QgY3JlYXRlID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIGh0dHAucG9zdChcIi9pbmdyZWRpZW50c1wiLCBkYXRhKTtcbn07XG5cbmNvbnN0IHVwZGF0ZSA9IChpZCwgZGF0YSkgPT4ge1xuICAgIHJldHVybiBodHRwLnB1dChgL2luZ3JlZGllbnRzLyR7aWR9YCwgZGF0YSk7XG59O1xuXG5jb25zdCByZW1vdmUgPSBpZCA9PiB7XG4gICAgcmV0dXJuIGh0dHAuZGVsZXRlKGAvaW5ncmVkaWVudHMvJHtpZH1gKTtcbn07XG5cbmNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gaHR0cC5kZWxldGUoYC9pbmdyZWRpZW50c2ApO1xufTtcblxuY29uc3QgZmluZEJ5VGl0bGUgPSB0aXRsZSA9PiB7XG4gICAgcmV0dXJuIGh0dHAuZ2V0KGAvaW5ncmVkaWVudHM/bGliZWxsZT0ke2xpYmVsbGV9YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0QWxsLFxuICAgIGdldCxcbiAgICBjcmVhdGUsXG4gICAgdXBkYXRlLFxuICAgIHJlbW92ZSxcbiAgICByZW1vdmVBbGwsXG4gICAgZmluZEJ5VGl0bGVcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==