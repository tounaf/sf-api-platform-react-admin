(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./assets/home.js":
/*!************************!*\
  !*** ./assets/home.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var ra_data_json_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ra-data-json-server */ "./node_modules/ra-data-json-server/esm/index.js");




var dataProvider = Object(ra_data_json_server__WEBPACK_IMPORTED_MODULE_3__["default"])('http://localhost:8001/api');

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["Admin"], {
    dataProvider: dataProvider
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["Resource"], {
    name: "users",
    list: UserList
  }));
};

var UserList = function UserList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["List"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["Datagrid"], {
    rowClick: "edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    source: "id"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    source: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    source: "username"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_admin__WEBPACK_IMPORTED_MODULE_2__["EmailField"], {
    source: "email"
  })));
};

react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](App, null), document.getElementById('root'));

/***/ }),

/***/ "./node_modules/ra-data-json-server/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ra-data-json-server/esm/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ra_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ra-core */ "./node_modules/ra-core/esm/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * Maps react-admin queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 *
 * @example
 *
 * getList          => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * getOne           => GET http://my.api.url/posts/123
 * getManyReference => GET http://my.api.url/posts?author_id=345
 * getMany          => GET http://my.api.url/posts?id=123&id=456&id=789
 * create           => POST http://my.api.url/posts/123
 * update           => PUT http://my.api.url/posts/123
 * updateMany       => PUT http://my.api.url/posts/123, PUT http://my.api.url/posts/456, PUT http://my.api.url/posts/789
 * delete           => DELETE http://my.api.url/posts/123
 *
 * @example
 *
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 * import jsonServerProvider from 'ra-data-json-server';
 *
 * import { PostList } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>
 *         <Resource name="posts" list={PostList} />
 *     </Admin>
 * );
 *
 * export default App;
 */
/* harmony default export */ __webpack_exports__["default"] = (function (apiUrl, httpClient) {
    if (httpClient === void 0) { httpClient = ra_core__WEBPACK_IMPORTED_MODULE_1__["fetchUtils"].fetchJson; }
    return ({
        getList: function (resource, params) {
            var _a = params.pagination, page = _a.page, perPage = _a.perPage;
            var _b = params.sort, field = _b.field, order = _b.order;
            var query = __assign(__assign({}, ra_core__WEBPACK_IMPORTED_MODULE_1__["fetchUtils"].flattenObject(params.filter)), { _sort: field, _order: order, _start: (page - 1) * perPage, _end: page * perPage });
            var url = apiUrl + "/" + resource + "?" + Object(query_string__WEBPACK_IMPORTED_MODULE_0__["stringify"])(query);
            return httpClient(url).then(function (_a) {
                var headers = _a.headers, json = _a.json;
                if (!headers.has('x-total-count')) {
                    throw new Error('The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?');
                }
                return {
                    data: json,
                    total: parseInt(headers.get('x-total-count').split('/').pop(), 10),
                };
            });
        },
        getOne: function (resource, params) {
            return httpClient(apiUrl + "/" + resource + "/" + params.id).then(function (_a) {
                var json = _a.json;
                return ({
                    data: json,
                });
            });
        },
        getMany: function (resource, params) {
            var query = {
                id: params.ids,
            };
            var url = apiUrl + "/" + resource + "?" + Object(query_string__WEBPACK_IMPORTED_MODULE_0__["stringify"])(query);
            return httpClient(url).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        getManyReference: function (resource, params) {
            var _a;
            var _b = params.pagination, page = _b.page, perPage = _b.perPage;
            var _c = params.sort, field = _c.field, order = _c.order;
            var query = __assign(__assign({}, ra_core__WEBPACK_IMPORTED_MODULE_1__["fetchUtils"].flattenObject(params.filter)), (_a = {}, _a[params.target] = params.id, _a._sort = field, _a._order = order, _a._start = (page - 1) * perPage, _a._end = page * perPage, _a));
            var url = apiUrl + "/" + resource + "?" + Object(query_string__WEBPACK_IMPORTED_MODULE_0__["stringify"])(query);
            return httpClient(url).then(function (_a) {
                var headers = _a.headers, json = _a.json;
                if (!headers.has('x-total-count')) {
                    throw new Error('The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?');
                }
                return {
                    data: json,
                    total: parseInt(headers.get('x-total-count').split('/').pop(), 10),
                };
            });
        },
        update: function (resource, params) {
            return httpClient(apiUrl + "/" + resource + "/" + params.id, {
                method: 'PUT',
                body: JSON.stringify(params.data),
            }).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
        updateMany: function (resource, params) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                });
            })).then(function (responses) { return ({ data: responses.map(function (_a) {
                    var json = _a.json;
                    return json.id;
                }) }); });
        },
        create: function (resource, params) {
            return httpClient(apiUrl + "/" + resource, {
                method: 'POST',
                body: JSON.stringify(params.data),
            }).then(function (_a) {
                var json = _a.json;
                return ({
                    data: __assign(__assign({}, params.data), { id: json.id }),
                });
            });
        },
        delete: function (resource, params) {
            return httpClient(apiUrl + "/" + resource + "/" + params.id, {
                method: 'DELETE',
            }).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
        deleteMany: function (resource, params) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'DELETE',
                });
            })).then(function (responses) { return ({ data: responses.map(function (_a) {
                    var json = _a.json;
                    return json.id;
                }) }); });
        },
    });
});


/***/ })

},[["./assets/home.js","runtime","vendors~details~home~index","vendors~home~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmEtZGF0YS1qc29uLXNlcnZlci9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZGF0YVByb3ZpZGVyIiwianNvblNlcnZlclByb3ZpZGVyIiwiQXBwIiwiVXNlckxpc3QiLCJwcm9wcyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLG1FQUFrQixDQUFDLDJCQUFELENBQXZDOztBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsc0JBQ1Isb0RBQUMsaURBQUQ7QUFBTyxnQkFBWSxFQUFFRjtBQUFyQixrQkFDSSxvREFBQyxvREFBRDtBQUFVLFFBQUksRUFBQyxPQUFmO0FBQXVCLFFBQUksRUFBRUc7QUFBN0IsSUFESixDQURRO0FBQUEsQ0FBWjs7QUFLQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLO0FBQUEsc0JBQ2xCLG9EQUFDLGdEQUFELEVBQVVBLEtBQVYsZUFDSSxvREFBQyxvREFBRDtBQUFVLFlBQVEsRUFBQztBQUFuQixrQkFDSSxvREFBQyxxREFBRDtBQUFXLFVBQU0sRUFBQztBQUFsQixJQURKLGVBRUksb0RBQUMscURBQUQ7QUFBVyxVQUFNLEVBQUM7QUFBbEIsSUFGSixlQUdJLG9EQUFDLHFEQUFEO0FBQVcsVUFBTSxFQUFDO0FBQWxCLElBSEosZUFJSSxvREFBQyxzREFBRDtBQUFZLFVBQU0sRUFBQztBQUFuQixJQUpKLENBREosQ0FEa0I7QUFBQSxDQUF0Qjs7QUFVQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNBLG9EQUFDLEdBQUQsT0FEQSxFQUdJQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FISixFOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBQ0o7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQSw0QkFBNEIsMERBQTBEO0FBQ3RGLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7QUFDaEIsZ0NBQWdDLGNBQWMsa0RBQVUsV0FBVztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFLGtEQUFVLGlDQUFpQyxrRkFBa0Y7QUFDM0ssc0RBQXNELDhEQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDhEQUFTO0FBQy9EO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEVBQUUsa0RBQVUsd0NBQXdDO0FBQ2hHLHNEQUFzRCw4REFBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSw4QkFBOEIsVUFBVTtBQUNyRDtBQUNBO0FBQ0EsaUJBQWlCLEdBQUcsRUFBRSxFQUFFO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOENBQThDLGlCQUFpQixjQUFjO0FBQzdFLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLDhCQUE4QixVQUFVO0FBQ3JEO0FBQ0E7QUFDQSxpQkFBaUIsR0FBRyxFQUFFLEVBQUU7QUFDeEIsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDLEVBQUUiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFkbWluLCBSZXNvdXJjZSwgTGlzdEd1ZXNzZXIsIExpc3QsIERhdGFncmlkLCBUZXh0RmllbGQsIEVtYWlsRmllbGQgfSBmcm9tICdyZWFjdC1hZG1pbic7XG5pbXBvcnQganNvblNlcnZlclByb3ZpZGVyIGZyb20gJ3JhLWRhdGEtanNvbi1zZXJ2ZXInO1xuXG5jb25zdCBkYXRhUHJvdmlkZXIgPSBqc29uU2VydmVyUHJvdmlkZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMS9hcGknKTtcbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgICA8QWRtaW4gZGF0YVByb3ZpZGVyPXtkYXRhUHJvdmlkZXJ9ID5cbiAgICAgICAgPFJlc291cmNlIG5hbWU9XCJ1c2Vyc1wiIGxpc3Q9e1VzZXJMaXN0fSAvPlxuICAgIDwvQWRtaW4+XG4pO1xuY29uc3QgVXNlckxpc3QgPSBwcm9wcyA9PiAoXG4gICAgPExpc3Qgey4uLnByb3BzfT5cbiAgICAgICAgPERhdGFncmlkIHJvd0NsaWNrPVwiZWRpdFwiPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJpZFwiIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzb3VyY2U9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgICAgICA8RW1haWxGaWVsZCBzb3VyY2U9XCJlbWFpbFwiIC8+XG4gICAgICAgIDwvRGF0YWdyaWQ+XG4gICAgPC9MaXN0PlxuKTtcblJlYWN0RE9NLnJlbmRlcihcbjxBcHBcbi8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbikiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCB7IGZldGNoVXRpbHMgfSBmcm9tICdyYS1jb3JlJztcbi8qKlxuICogTWFwcyByZWFjdC1hZG1pbiBxdWVyaWVzIHRvIGEganNvbi1zZXJ2ZXIgcG93ZXJlZCBSRVNUIEFQSVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R5cGljb2RlL2pzb24tc2VydmVyXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBnZXRMaXN0ICAgICAgICAgID0+IEdFVCBodHRwOi8vbXkuYXBpLnVybC9wb3N0cz9fc29ydD10aXRsZSZfb3JkZXI9QVNDJl9zdGFydD0wJl9lbmQ9MjRcbiAqIGdldE9uZSAgICAgICAgICAgPT4gR0VUIGh0dHA6Ly9teS5hcGkudXJsL3Bvc3RzLzEyM1xuICogZ2V0TWFueVJlZmVyZW5jZSA9PiBHRVQgaHR0cDovL215LmFwaS51cmwvcG9zdHM/YXV0aG9yX2lkPTM0NVxuICogZ2V0TWFueSAgICAgICAgICA9PiBHRVQgaHR0cDovL215LmFwaS51cmwvcG9zdHM/aWQ9MTIzJmlkPTQ1NiZpZD03ODlcbiAqIGNyZWF0ZSAgICAgICAgICAgPT4gUE9TVCBodHRwOi8vbXkuYXBpLnVybC9wb3N0cy8xMjNcbiAqIHVwZGF0ZSAgICAgICAgICAgPT4gUFVUIGh0dHA6Ly9teS5hcGkudXJsL3Bvc3RzLzEyM1xuICogdXBkYXRlTWFueSAgICAgICA9PiBQVVQgaHR0cDovL215LmFwaS51cmwvcG9zdHMvMTIzLCBQVVQgaHR0cDovL215LmFwaS51cmwvcG9zdHMvNDU2LCBQVVQgaHR0cDovL215LmFwaS51cmwvcG9zdHMvNzg5XG4gKiBkZWxldGUgICAgICAgICAgID0+IERFTEVURSBodHRwOi8vbXkuYXBpLnVybC9wb3N0cy8xMjNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuICogaW1wb3J0IHsgQWRtaW4sIFJlc291cmNlIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xuICogaW1wb3J0IGpzb25TZXJ2ZXJQcm92aWRlciBmcm9tICdyYS1kYXRhLWpzb24tc2VydmVyJztcbiAqXG4gKiBpbXBvcnQgeyBQb3N0TGlzdCB9IGZyb20gJy4vcG9zdHMnO1xuICpcbiAqIGNvbnN0IEFwcCA9ICgpID0+IChcbiAqICAgICA8QWRtaW4gZGF0YVByb3ZpZGVyPXtqc29uU2VydmVyUHJvdmlkZXIoJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJyl9PlxuICogICAgICAgICA8UmVzb3VyY2UgbmFtZT1cInBvc3RzXCIgbGlzdD17UG9zdExpc3R9IC8+XG4gKiAgICAgPC9BZG1pbj5cbiAqICk7XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgQXBwO1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGFwaVVybCwgaHR0cENsaWVudCkge1xuICAgIGlmIChodHRwQ2xpZW50ID09PSB2b2lkIDApIHsgaHR0cENsaWVudCA9IGZldGNoVXRpbHMuZmV0Y2hKc29uOyB9XG4gICAgcmV0dXJuICh7XG4gICAgICAgIGdldExpc3Q6IGZ1bmN0aW9uIChyZXNvdXJjZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBwYXJhbXMucGFnaW5hdGlvbiwgcGFnZSA9IF9hLnBhZ2UsIHBlclBhZ2UgPSBfYS5wZXJQYWdlO1xuICAgICAgICAgICAgdmFyIF9iID0gcGFyYW1zLnNvcnQsIGZpZWxkID0gX2IuZmllbGQsIG9yZGVyID0gX2Iub3JkZXI7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmV0Y2hVdGlscy5mbGF0dGVuT2JqZWN0KHBhcmFtcy5maWx0ZXIpKSwgeyBfc29ydDogZmllbGQsIF9vcmRlcjogb3JkZXIsIF9zdGFydDogKHBhZ2UgLSAxKSAqIHBlclBhZ2UsIF9lbmQ6IHBhZ2UgKiBwZXJQYWdlIH0pO1xuICAgICAgICAgICAgdmFyIHVybCA9IGFwaVVybCArIFwiL1wiICsgcmVzb3VyY2UgKyBcIj9cIiArIHN0cmluZ2lmeShxdWVyeSk7XG4gICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudCh1cmwpLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBqc29uID0gX2EuanNvbjtcbiAgICAgICAgICAgICAgICBpZiAoIWhlYWRlcnMuaGFzKCd4LXRvdGFsLWNvdW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgWC1Ub3RhbC1Db3VudCBoZWFkZXIgaXMgbWlzc2luZyBpbiB0aGUgSFRUUCBSZXNwb25zZS4gVGhlIGpzb25TZXJ2ZXIgRGF0YSBQcm92aWRlciBleHBlY3RzIHJlc3BvbnNlcyBmb3IgbGlzdHMgb2YgcmVzb3VyY2VzIHRvIGNvbnRhaW4gdGhpcyBoZWFkZXIgd2l0aCB0aGUgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHMgdG8gYnVpbGQgdGhlIHBhZ2luYXRpb24uIElmIHlvdSBhcmUgdXNpbmcgQ09SUywgZGlkIHlvdSBkZWNsYXJlIFgtVG90YWwtQ291bnQgaW4gdGhlIEFjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzIGhlYWRlcj8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToganNvbixcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBhcnNlSW50KGhlYWRlcnMuZ2V0KCd4LXRvdGFsLWNvdW50Jykuc3BsaXQoJy8nKS5wb3AoKSwgMTApLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T25lOiBmdW5jdGlvbiAocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQoYXBpVXJsICsgXCIvXCIgKyByZXNvdXJjZSArIFwiL1wiICsgcGFyYW1zLmlkKS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0gX2EuanNvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToganNvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRNYW55OiBmdW5jdGlvbiAocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuaWRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBhcGlVcmwgKyBcIi9cIiArIHJlc291cmNlICsgXCI/XCIgKyBzdHJpbmdpZnkocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQodXJsKS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0gX2EuanNvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHsgZGF0YToganNvbiB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRNYW55UmVmZXJlbmNlOiBmdW5jdGlvbiAocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIF9iID0gcGFyYW1zLnBhZ2luYXRpb24sIHBhZ2UgPSBfYi5wYWdlLCBwZXJQYWdlID0gX2IucGVyUGFnZTtcbiAgICAgICAgICAgIHZhciBfYyA9IHBhcmFtcy5zb3J0LCBmaWVsZCA9IF9jLmZpZWxkLCBvcmRlciA9IF9jLm9yZGVyO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGZldGNoVXRpbHMuZmxhdHRlbk9iamVjdChwYXJhbXMuZmlsdGVyKSksIChfYSA9IHt9LCBfYVtwYXJhbXMudGFyZ2V0XSA9IHBhcmFtcy5pZCwgX2EuX3NvcnQgPSBmaWVsZCwgX2EuX29yZGVyID0gb3JkZXIsIF9hLl9zdGFydCA9IChwYWdlIC0gMSkgKiBwZXJQYWdlLCBfYS5fZW5kID0gcGFnZSAqIHBlclBhZ2UsIF9hKSk7XG4gICAgICAgICAgICB2YXIgdXJsID0gYXBpVXJsICsgXCIvXCIgKyByZXNvdXJjZSArIFwiP1wiICsgc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgICAgICAgIHJldHVybiBodHRwQ2xpZW50KHVybCkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgIGlmICghaGVhZGVycy5oYXMoJ3gtdG90YWwtY291bnQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBYLVRvdGFsLUNvdW50IGhlYWRlciBpcyBtaXNzaW5nIGluIHRoZSBIVFRQIFJlc3BvbnNlLiBUaGUganNvblNlcnZlciBEYXRhIFByb3ZpZGVyIGV4cGVjdHMgcmVzcG9uc2VzIGZvciBsaXN0cyBvZiByZXNvdXJjZXMgdG8gY29udGFpbiB0aGlzIGhlYWRlciB3aXRoIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVzdWx0cyB0byBidWlsZCB0aGUgcGFnaW5hdGlvbi4gSWYgeW91IGFyZSB1c2luZyBDT1JTLCBkaWQgeW91IGRlY2xhcmUgWC1Ub3RhbC1Db3VudCBpbiB0aGUgQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMgaGVhZGVyPycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBqc29uLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogcGFyc2VJbnQoaGVhZGVycy5nZXQoJ3gtdG90YWwtY291bnQnKS5zcGxpdCgnLycpLnBvcCgpLCAxMCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChyZXNvdXJjZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudChhcGlVcmwgKyBcIi9cIiArIHJlc291cmNlICsgXCIvXCIgKyBwYXJhbXMuaWQsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5kYXRhKSxcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgIHJldHVybiAoeyBkYXRhOiBqc29uIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGpzb24tc2VydmVyIGRvZXNuJ3QgaGFuZGxlIGZpbHRlcnMgb24gVVBEQVRFIHJvdXRlLCBzbyB3ZSBmYWxsYmFjayB0byBjYWxsaW5nIFVQREFURSBuIHRpbWVzIGluc3RlYWRcbiAgICAgICAgdXBkYXRlTWFueTogZnVuY3Rpb24gKHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwYXJhbXMuaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudChhcGlVcmwgKyBcIi9cIiArIHJlc291cmNlICsgXCIvXCIgKyBpZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMuZGF0YSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2VzKSB7IHJldHVybiAoeyBkYXRhOiByZXNwb25zZXMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIganNvbiA9IF9hLmpzb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uLmlkO1xuICAgICAgICAgICAgICAgIH0pIH0pOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQoYXBpVXJsICsgXCIvXCIgKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5kYXRhKSxcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFyYW1zLmRhdGEpLCB7IGlkOiBqc29uLmlkIH0pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBodHRwQ2xpZW50KGFwaVVybCArIFwiL1wiICsgcmVzb3VyY2UgKyBcIi9cIiArIHBhcmFtcy5pZCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0gX2EuanNvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHsgZGF0YToganNvbiB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBqc29uLXNlcnZlciBkb2Vzbid0IGhhbmRsZSBmaWx0ZXJzIG9uIERFTEVURSByb3V0ZSwgc28gd2UgZmFsbGJhY2sgdG8gY2FsbGluZyBERUxFVEUgbiB0aW1lcyBpbnN0ZWFkXG4gICAgICAgIGRlbGV0ZU1hbnk6IGZ1bmN0aW9uIChyZXNvdXJjZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocGFyYW1zLmlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQoYXBpVXJsICsgXCIvXCIgKyByZXNvdXJjZSArIFwiL1wiICsgaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZXMpIHsgcmV0dXJuICh7IGRhdGE6IHJlc3BvbnNlcy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uID0gX2EuanNvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uaWQ7XG4gICAgICAgICAgICAgICAgfSkgfSk7IH0pO1xuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9