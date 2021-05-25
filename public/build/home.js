(self["webpackChunk"] = self["webpackChunk"] || []).push([["home"],{

/***/ "./assets/home.js":
/*!************************!*\
  !*** ./assets/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/Admin.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-core/esm/core/Resource.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/list/List.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/list/datagrid/Datagrid.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/field/TextField.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-admin */ "./node_modules/ra-ui-materialui/esm/field/EmailField.js");
/* harmony import */ var ra_data_json_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ra-data-json-server */ "./node_modules/ra-data-json-server/esm/index.js");




var dataProvider = (0,ra_data_json_server__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8001/api');

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__.default, {
    dataProvider: dataProvider
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__.default, {
    name: "users",
    list: UserList
  }));
};

var UserList = function UserList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_5__.default, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_6__.default, {
    rowClick: "edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_7__.default, {
    source: "id"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_7__.default, {
    source: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_7__.default, {
    source: "username"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_admin__WEBPACK_IMPORTED_MODULE_8__.default, {
    source: "email"
  })));
};

react_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./node_modules/ra-data-json-server/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ra-data-json-server/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var ra_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ra-core */ "./node_modules/ra-core/esm/dataProvider/fetch.js");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (apiUrl, httpClient) {
    if (httpClient === void 0) { httpClient = ra_core__WEBPACK_IMPORTED_MODULE_1__.fetchJson; }
    return ({
        getList: function (resource, params) {
            var _a = params.pagination, page = _a.page, perPage = _a.perPage;
            var _b = params.sort, field = _b.field, order = _b.order;
            var query = __assign(__assign({}, ra_core__WEBPACK_IMPORTED_MODULE_1__.flattenObject(params.filter)), { _sort: field, _order: order, _start: (page - 1) * perPage, _end: page * perPage });
            var url = apiUrl + "/" + resource + "?" + (0,query_string__WEBPACK_IMPORTED_MODULE_0__.stringify)(query);
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
            var url = apiUrl + "/" + resource + "?" + (0,query_string__WEBPACK_IMPORTED_MODULE_0__.stringify)(query);
            return httpClient(url).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        getManyReference: function (resource, params) {
            var _a;
            var _b = params.pagination, page = _b.page, perPage = _b.perPage;
            var _c = params.sort, field = _c.field, order = _c.order;
            var query = __assign(__assign({}, ra_core__WEBPACK_IMPORTED_MODULE_1__.flattenObject(params.filter)), (_a = {}, _a[params.target] = params.id, _a._sort = field, _a._order = order, _a._start = (page - 1) * perPage, _a._end = page * perPage, _a));
            var url = apiUrl + "/" + resource + "?" + (0,query_string__WEBPACK_IMPORTED_MODULE_0__.stringify)(query);
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_index_js","vendors-node_modules_ra-core_esm_core_Resource_js-node_modules_ra-core_esm_dataProvider_fetch-5d76cc"], () => (__webpack_exec__("./assets/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmEtZGF0YS1qc29uLXNlcnZlci9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZGF0YVByb3ZpZGVyIiwianNvblNlcnZlclByb3ZpZGVyIiwiQXBwIiwiVXNlckxpc3QiLCJwcm9wcyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyw0REFBa0IsQ0FBQywyQkFBRCxDQUF2Qzs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLHNCQUNSLGlEQUFDLGdEQUFEO0FBQU8sZ0JBQVksRUFBRUY7QUFBckIsa0JBQ0ksaURBQUMsZ0RBQUQ7QUFBVSxRQUFJLEVBQUMsT0FBZjtBQUF1QixRQUFJLEVBQUVHO0FBQTdCLElBREosQ0FEUTtBQUFBLENBQVo7O0FBS0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSztBQUFBLHNCQUNsQixpREFBQyxnREFBRCxFQUFVQSxLQUFWLGVBQ0ksaURBQUMsZ0RBQUQ7QUFBVSxZQUFRLEVBQUM7QUFBbkIsa0JBQ0ksaURBQUMsZ0RBQUQ7QUFBVyxVQUFNLEVBQUM7QUFBbEIsSUFESixlQUVJLGlEQUFDLGdEQUFEO0FBQVcsVUFBTSxFQUFDO0FBQWxCLElBRkosZUFHSSxpREFBQyxnREFBRDtBQUFXLFVBQU0sRUFBQztBQUFsQixJQUhKLGVBSUksaURBQUMsZ0RBQUQ7QUFBWSxVQUFNLEVBQUM7QUFBbkIsSUFKSixDQURKLENBRGtCO0FBQUEsQ0FBdEI7O0FBVUFDLDZDQUFBLGVBQ0EsaURBQUMsR0FBRCxPQURBLEVBR0lDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUhKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7QUFDSjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBLDRCQUE0QiwwREFBMEQ7QUFDdEYsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnQjtBQUNoQixnQ0FBZ0MsY0FBYyw4Q0FBb0IsQ0FBQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFLGtEQUF3QixtQkFBbUIsa0ZBQWtGO0FBQzNLLHNEQUFzRCx1REFBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx1REFBUztBQUMvRDtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFLGtEQUF3QiwwQkFBMEI7QUFDaEcsc0RBQXNELHVEQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLDhCQUE4QixVQUFVO0FBQ3JEO0FBQ0E7QUFDQSxpQkFBaUIsR0FBRyxFQUFFLEVBQUU7QUFDeEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw4Q0FBOEMsaUJBQWlCLGNBQWM7QUFDN0UsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsOEJBQThCLFVBQVU7QUFDckQ7QUFDQTtBQUNBLGlCQUFpQixHQUFHLEVBQUUsRUFBRTtBQUN4QixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUMsRUFBRSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWRtaW4sIFJlc291cmNlLCBMaXN0R3Vlc3NlciwgTGlzdCwgRGF0YWdyaWQsIFRleHRGaWVsZCwgRW1haWxGaWVsZCB9IGZyb20gJ3JlYWN0LWFkbWluJztcbmltcG9ydCBqc29uU2VydmVyUHJvdmlkZXIgZnJvbSAncmEtZGF0YS1qc29uLXNlcnZlcic7XG5cbmNvbnN0IGRhdGFQcm92aWRlciA9IGpzb25TZXJ2ZXJQcm92aWRlcignaHR0cDovL2xvY2FsaG9zdDo4MDAxL2FwaScpO1xuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxBZG1pbiBkYXRhUHJvdmlkZXI9e2RhdGFQcm92aWRlcn0gPlxuICAgICAgICA8UmVzb3VyY2UgbmFtZT1cInVzZXJzXCIgbGlzdD17VXNlckxpc3R9IC8+XG4gICAgPC9BZG1pbj5cbik7XG5jb25zdCBVc2VyTGlzdCA9IHByb3BzID0+IChcbiAgICA8TGlzdCB7Li4ucHJvcHN9PlxuICAgICAgICA8RGF0YWdyaWQgcm93Q2xpY2s9XCJlZGl0XCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cImlkXCIgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc291cmNlPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNvdXJjZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgIDxFbWFpbEZpZWxkIHNvdXJjZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPC9EYXRhZ3JpZD5cbiAgICA8L0xpc3Q+XG4pO1xuUmVhY3RET00ucmVuZGVyKFxuPEFwcFxuLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKSIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IHsgZmV0Y2hVdGlscyB9IGZyb20gJ3JhLWNvcmUnO1xuLyoqXG4gKiBNYXBzIHJlYWN0LWFkbWluIHF1ZXJpZXMgdG8gYSBqc29uLXNlcnZlciBwb3dlcmVkIFJFU1QgQVBJXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHlwaWNvZGUvanNvbi1zZXJ2ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGdldExpc3QgICAgICAgICAgPT4gR0VUIGh0dHA6Ly9teS5hcGkudXJsL3Bvc3RzP19zb3J0PXRpdGxlJl9vcmRlcj1BU0MmX3N0YXJ0PTAmX2VuZD0yNFxuICogZ2V0T25lICAgICAgICAgICA9PiBHRVQgaHR0cDovL215LmFwaS51cmwvcG9zdHMvMTIzXG4gKiBnZXRNYW55UmVmZXJlbmNlID0+IEdFVCBodHRwOi8vbXkuYXBpLnVybC9wb3N0cz9hdXRob3JfaWQ9MzQ1XG4gKiBnZXRNYW55ICAgICAgICAgID0+IEdFVCBodHRwOi8vbXkuYXBpLnVybC9wb3N0cz9pZD0xMjMmaWQ9NDU2JmlkPTc4OVxuICogY3JlYXRlICAgICAgICAgICA9PiBQT1NUIGh0dHA6Ly9teS5hcGkudXJsL3Bvc3RzLzEyM1xuICogdXBkYXRlICAgICAgICAgICA9PiBQVVQgaHR0cDovL215LmFwaS51cmwvcG9zdHMvMTIzXG4gKiB1cGRhdGVNYW55ICAgICAgID0+IFBVVCBodHRwOi8vbXkuYXBpLnVybC9wb3N0cy8xMjMsIFBVVCBodHRwOi8vbXkuYXBpLnVybC9wb3N0cy80NTYsIFBVVCBodHRwOi8vbXkuYXBpLnVybC9wb3N0cy83ODlcbiAqIGRlbGV0ZSAgICAgICAgICAgPT4gREVMRVRFIGh0dHA6Ly9teS5hcGkudXJsL3Bvc3RzLzEyM1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4gKiBpbXBvcnQgeyBBZG1pbiwgUmVzb3VyY2UgfSBmcm9tICdyZWFjdC1hZG1pbic7XG4gKiBpbXBvcnQganNvblNlcnZlclByb3ZpZGVyIGZyb20gJ3JhLWRhdGEtanNvbi1zZXJ2ZXInO1xuICpcbiAqIGltcG9ydCB7IFBvc3RMaXN0IH0gZnJvbSAnLi9wb3N0cyc7XG4gKlxuICogY29uc3QgQXBwID0gKCkgPT4gKFxuICogICAgIDxBZG1pbiBkYXRhUHJvdmlkZXI9e2pzb25TZXJ2ZXJQcm92aWRlcignaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nKX0+XG4gKiAgICAgICAgIDxSZXNvdXJjZSBuYW1lPVwicG9zdHNcIiBsaXN0PXtQb3N0TGlzdH0gLz5cbiAqICAgICA8L0FkbWluPlxuICogKTtcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBBcHA7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoYXBpVXJsLCBodHRwQ2xpZW50KSB7XG4gICAgaWYgKGh0dHBDbGllbnQgPT09IHZvaWQgMCkgeyBodHRwQ2xpZW50ID0gZmV0Y2hVdGlscy5mZXRjaEpzb247IH1cbiAgICByZXR1cm4gKHtcbiAgICAgICAgZ2V0TGlzdDogZnVuY3Rpb24gKHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHBhcmFtcy5wYWdpbmF0aW9uLCBwYWdlID0gX2EucGFnZSwgcGVyUGFnZSA9IF9hLnBlclBhZ2U7XG4gICAgICAgICAgICB2YXIgX2IgPSBwYXJhbXMuc29ydCwgZmllbGQgPSBfYi5maWVsZCwgb3JkZXIgPSBfYi5vcmRlcjtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBmZXRjaFV0aWxzLmZsYXR0ZW5PYmplY3QocGFyYW1zLmZpbHRlcikpLCB7IF9zb3J0OiBmaWVsZCwgX29yZGVyOiBvcmRlciwgX3N0YXJ0OiAocGFnZSAtIDEpICogcGVyUGFnZSwgX2VuZDogcGFnZSAqIHBlclBhZ2UgfSk7XG4gICAgICAgICAgICB2YXIgdXJsID0gYXBpVXJsICsgXCIvXCIgKyByZXNvdXJjZSArIFwiP1wiICsgc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgICAgICAgIHJldHVybiBodHRwQ2xpZW50KHVybCkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgIGlmICghaGVhZGVycy5oYXMoJ3gtdG90YWwtY291bnQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBYLVRvdGFsLUNvdW50IGhlYWRlciBpcyBtaXNzaW5nIGluIHRoZSBIVFRQIFJlc3BvbnNlLiBUaGUganNvblNlcnZlciBEYXRhIFByb3ZpZGVyIGV4cGVjdHMgcmVzcG9uc2VzIGZvciBsaXN0cyBvZiByZXNvdXJjZXMgdG8gY29udGFpbiB0aGlzIGhlYWRlciB3aXRoIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVzdWx0cyB0byBidWlsZCB0aGUgcGFnaW5hdGlvbi4gSWYgeW91IGFyZSB1c2luZyBDT1JTLCBkaWQgeW91IGRlY2xhcmUgWC1Ub3RhbC1Db3VudCBpbiB0aGUgQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMgaGVhZGVyPycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBqc29uLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogcGFyc2VJbnQoaGVhZGVycy5nZXQoJ3gtdG90YWwtY291bnQnKS5zcGxpdCgnLycpLnBvcCgpLCAxMCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRPbmU6IGZ1bmN0aW9uIChyZXNvdXJjZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudChhcGlVcmwgKyBcIi9cIiArIHJlc291cmNlICsgXCIvXCIgKyBwYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBqc29uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE1hbnk6IGZ1bmN0aW9uIChyZXNvdXJjZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5pZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHVybCA9IGFwaVVybCArIFwiL1wiICsgcmVzb3VyY2UgKyBcIj9cIiArIHN0cmluZ2lmeShxdWVyeSk7XG4gICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudCh1cmwpLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgIHJldHVybiAoeyBkYXRhOiBqc29uIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE1hbnlSZWZlcmVuY2U6IGZ1bmN0aW9uIChyZXNvdXJjZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgX2IgPSBwYXJhbXMucGFnaW5hdGlvbiwgcGFnZSA9IF9iLnBhZ2UsIHBlclBhZ2UgPSBfYi5wZXJQYWdlO1xuICAgICAgICAgICAgdmFyIF9jID0gcGFyYW1zLnNvcnQsIGZpZWxkID0gX2MuZmllbGQsIG9yZGVyID0gX2Mub3JkZXI7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmV0Y2hVdGlscy5mbGF0dGVuT2JqZWN0KHBhcmFtcy5maWx0ZXIpKSwgKF9hID0ge30sIF9hW3BhcmFtcy50YXJnZXRdID0gcGFyYW1zLmlkLCBfYS5fc29ydCA9IGZpZWxkLCBfYS5fb3JkZXIgPSBvcmRlciwgX2EuX3N0YXJ0ID0gKHBhZ2UgLSAxKSAqIHBlclBhZ2UsIF9hLl9lbmQgPSBwYWdlICogcGVyUGFnZSwgX2EpKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBhcGlVcmwgKyBcIi9cIiArIHJlc291cmNlICsgXCI/XCIgKyBzdHJpbmdpZnkocXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQodXJsKS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0gX2EuaGVhZGVycywganNvbiA9IF9hLmpzb247XG4gICAgICAgICAgICAgICAgaWYgKCFoZWFkZXJzLmhhcygneC10b3RhbC1jb3VudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIFgtVG90YWwtQ291bnQgaGVhZGVyIGlzIG1pc3NpbmcgaW4gdGhlIEhUVFAgUmVzcG9uc2UuIFRoZSBqc29uU2VydmVyIERhdGEgUHJvdmlkZXIgZXhwZWN0cyByZXNwb25zZXMgZm9yIGxpc3RzIG9mIHJlc291cmNlcyB0byBjb250YWluIHRoaXMgaGVhZGVyIHdpdGggdGhlIHRvdGFsIG51bWJlciBvZiByZXN1bHRzIHRvIGJ1aWxkIHRoZSBwYWdpbmF0aW9uLiBJZiB5b3UgYXJlIHVzaW5nIENPUlMsIGRpZCB5b3UgZGVjbGFyZSBYLVRvdGFsLUNvdW50IGluIHRoZSBBY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVycyBoZWFkZXI/Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGpzb24sXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBwYXJzZUludChoZWFkZXJzLmdldCgneC10b3RhbC1jb3VudCcpLnNwbGl0KCcvJykucG9wKCksIDEwKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBodHRwQ2xpZW50KGFwaVVybCArIFwiL1wiICsgcmVzb3VyY2UgKyBcIi9cIiArIHBhcmFtcy5pZCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zLmRhdGEpLFxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IF9hLmpzb247XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7IGRhdGE6IGpzb24gfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8ganNvbi1zZXJ2ZXIgZG9lc24ndCBoYW5kbGUgZmlsdGVycyBvbiBVUERBVEUgcm91dGUsIHNvIHdlIGZhbGxiYWNrIHRvIGNhbGxpbmcgVVBEQVRFIG4gdGltZXMgaW5zdGVhZFxuICAgICAgICB1cGRhdGVNYW55OiBmdW5jdGlvbiAocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHBhcmFtcy5pZHMubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBodHRwQ2xpZW50KGFwaVVybCArIFwiL1wiICsgcmVzb3VyY2UgKyBcIi9cIiArIGlkLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5kYXRhKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZXMpIHsgcmV0dXJuICh7IGRhdGE6IHJlc3BvbnNlcy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uID0gX2EuanNvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uaWQ7XG4gICAgICAgICAgICAgICAgfSkgfSk7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uIChyZXNvdXJjZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudChhcGlVcmwgKyBcIi9cIiArIHJlc291cmNlLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zLmRhdGEpLFxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IF9hLmpzb247XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwYXJhbXMuZGF0YSksIHsgaWQ6IGpzb24uaWQgfSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiBmdW5jdGlvbiAocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQoYXBpVXJsICsgXCIvXCIgKyByZXNvdXJjZSArIFwiL1wiICsgcGFyYW1zLmlkLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgIHJldHVybiAoeyBkYXRhOiBqc29uIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGpzb24tc2VydmVyIGRvZXNuJ3QgaGFuZGxlIGZpbHRlcnMgb24gREVMRVRFIHJvdXRlLCBzbyB3ZSBmYWxsYmFjayB0byBjYWxsaW5nIERFTEVURSBuIHRpbWVzIGluc3RlYWRcbiAgICAgICAgZGVsZXRlTWFueTogZnVuY3Rpb24gKHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwYXJhbXMuaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudChhcGlVcmwgKyBcIi9cIiArIHJlc291cmNlICsgXCIvXCIgKyBpZCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlcykgeyByZXR1cm4gKHsgZGF0YTogcmVzcG9uc2VzLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGpzb24gPSBfYS5qc29uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5pZDtcbiAgICAgICAgICAgICAgICB9KSB9KTsgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=