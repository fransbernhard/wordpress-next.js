"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_ListEvent_ListEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListEvent/ListEvent */ \"./components/ListEvent/ListEvent.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar __N_SSG = true;\nfunction Home(param) {\n    var events = param.events, posts = param.posts;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        home: true,\n        __source: {\n            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    name: \"home page\",\n                    content: \"Home page\",\n                    __source: {\n                        fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Blog\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ListEvent_ListEvent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        posts: true,\n                        __source: {\n                            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ListEvent_ListEvent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({\n                    }, events, {\n                        __source: {\n                            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }))\n                ]\n            })\n        ]\n    }));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNhO0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFDLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLEtBQWlCLEVBQUUsQ0FBQztRQUFsQkMsTUFBTSxHQUFSLEtBQWlCLENBQWZBLE1BQU0sRUFBRUMsS0FBSyxHQUFmLEtBQWlCLENBQVBBLEtBQUs7SUFDMUMsTUFBTSx1RUFDSEosMERBQU07UUFBQ0ssSUFBSTs7Ozs7Ozs7aUZBQ1ROLGtEQUFJOzs7Ozs7OytGQUNGTyxDQUFJO29CQUNIQyxJQUFJLEVBQUMsQ0FBVztvQkFDaEJDLE9BQU8sRUFBQyxDQUFXOzs7Ozs7Ozs7a0ZBSXRCQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7eUZBQ3ZCQyxDQUFFOzs7Ozs7O2tDQUFDLENBQUk7O3lGQUVQVix1RUFBUzt3QkFBQ0csS0FBSzs7Ozs7Ozs7eUZBRWZILHVFQUFTO3VCQUFLRSxNQUFNOzs7Ozs7Ozs7Ozs7QUFJN0IsQ0FBQztLQW5CdUJELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRBbGxFdmVudHMsIGdldEFsbFBvc3RzLCBnZXRQYWdlIH0gZnJvbSAnLi4vdXRpbHMvd29yZHByZXNzJztcbmltcG9ydCBMaXN0RXZlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0RXZlbnQvTGlzdEV2ZW50JztcbmltcG9ydCBMaXN0UG9zdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RQb3N0L0xpc3RQb3N0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGV2ZW50cywgcG9zdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJob21lIHBhZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJIb21lIHBhZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+QmxvZzwvaDE+XG5cbiAgICAgICAgPExpc3RFdmVudCBwb3N0cyAvPlxuXG4gICAgICAgIDxMaXN0RXZlbnQgey4uLmV2ZW50c30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0cyxcbiAgICAgICAgICAgIGV2ZW50cyxcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAsIC8vIEluIHNlY29uZHNcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwiTGlzdEV2ZW50IiwiSG9tZSIsImV2ZW50cyIsInBvc3RzIiwiaG9tZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});