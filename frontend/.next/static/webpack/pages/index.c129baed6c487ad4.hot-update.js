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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_ListEvent_ListEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListEvent/ListEvent */ \"./components/ListEvent/ListEvent.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var events = param.events, posts = param.posts;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        home: true,\n        __source: {\n            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    name: \"home page\",\n                    content: \"Home page\",\n                    __source: {\n                        fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Blog\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListPostEvent, {\n                        posts: posts,\n                        __source: {\n                            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ListEvent_ListEvent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        events: events,\n                        __source: {\n                            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNhO0FBRWdCOztBQUcxQyxRQUFRLENBQUNHLElBQUksQ0FBQyxLQUFpQixFQUFFLENBQUM7UUFBbEJDLE1BQU0sR0FBUixLQUFpQixDQUFmQSxNQUFNLEVBQUVDLEtBQUssR0FBZixLQUFpQixDQUFQQSxLQUFLO0lBQzFDLE1BQU0sdUVBQ0hKLDBEQUFNO1FBQUNLLElBQUk7Ozs7Ozs7O2lGQUNUTixrREFBSTs7Ozs7OzsrRkFDRk8sQ0FBSTtvQkFDSEMsSUFBSSxFQUFDLENBQVc7b0JBQ2hCQyxPQUFPLEVBQUMsQ0FBVzs7Ozs7Ozs7O2tGQUl0QkMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7O3lGQUN2QkMsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFJOzt5RkFFUEMsYUFBYTt3QkFBQ1IsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7Ozt5RkFFMUJILHVFQUFTO3dCQUFDRSxNQUFNLEVBQUVBLE1BQU07Ozs7Ozs7Ozs7OztBQUlqQyxDQUFDO0tBbkJ1QkQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldEFsbEV2ZW50cywgZ2V0QWxsUG9zdHMsIGdldFBhZ2UgfSBmcm9tICcuLi91dGlscy93b3JkcHJlc3MnO1xuaW1wb3J0IExpc3RFdmVudCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RFdmVudC9MaXN0RXZlbnQnO1xuaW1wb3J0IExpc3RQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFBvc3QvTGlzdFBvc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZXZlbnRzLCBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImhvbWUgcGFnZVwiXG4gICAgICAgICAgY29udGVudD1cIkhvbWUgcGFnZVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5CbG9nPC9oMT5cblxuICAgICAgICA8TGlzdFBvc3RFdmVudCBwb3N0cz17cG9zdHN9IC8+XG5cbiAgICAgICAgPExpc3RFdmVudCBldmVudHM9e2V2ZW50c30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0cyxcbiAgICAgICAgICAgIGV2ZW50cyxcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAsIC8vIEluIHNlY29uZHNcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwiTGlzdEV2ZW50IiwiSG9tZSIsImV2ZW50cyIsInBvc3RzIiwiaG9tZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiTGlzdFBvc3RFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});