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

/***/ "./components/ListEvent/ListEvent.tsx":
/*!********************************************!*\
  !*** ./components/ListEvent/ListEvent.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListEvent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListEvent.module.scss */ \"./components/ListEvent/ListEvent.module.scss\");\n/* harmony import */ var _ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ListEvent(param) {\n    var events = param.events;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event\"]),\n        __source: {\n            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event__title\"]),\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Events\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event__list\"]),\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            events.map(function(event) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event__item\"]),\n                    __source: {\n                        fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/events/\".concat(event.slug),\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: event['_embedded']['wp:featuredmedia'][0][\"media_details\"].sizes.medium[\"source_url\"],\n                                    width: 288,\n                                    height: 190,\n                                    alt: event['_embedded']['wp:featuredmedia'][0][\"alt_text\"],\n                                    className: \"list-event__item-image\",\n                                    __source: {\n                                        fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                            className: \"list-event__item-title\",\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: event.title.rendered\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"list-event__item-text\",\n                            dangerouslySetInnerHTML: {\n                                __html: event.excerpt.rendered\n                            },\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/events/\".concat(event.slug),\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event__item-btn\"]),\n                                __source: {\n                                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"See more\"\n                            })\n                        })\n                    ]\n                }, event.id);\n            })\n        ]\n    }));\n};\n_c = ListEvent;\nvar _c;\n$RefreshReg$(_c, \"ListEvent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RFdmVudC9MaXN0RXZlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFFYztBQUU3QixRQUFRLENBQUNHLFNBQVMsQ0FBQyxLQUFVLEVBQUUsQ0FBQztRQUFYQyxNQUFNLEdBQVIsS0FBVSxDQUFSQSxNQUFNOztJQUN6QyxNQUFNLHVFQUNFQyxDQUFHO1FBQUNDLFNBQVMsRUFBRUosNkVBQW1COzs7Ozs7OztpRkFDOUJLLENBQUU7Z0JBQUNELFNBQVMsRUFBRUosb0ZBQTBCOzs7Ozs7OzBCQUFHLENBQU07O2lGQUNqRE0sQ0FBRTtnQkFBQ0YsU0FBUyxFQUFFSixtRkFBeUI7Ozs7Ozs7O1lBQ3ZDRSxNQUFNLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEtBQUs7OEJBQ2QsTUFBTSx5REFBTEwsQ0FBRztvQkFBQ0MsU0FBUyxFQUFFSixtRkFBeUI7Ozs7Ozs7OzZGQUNwQ0Ysa0RBQUk7NEJBQUNXLElBQUksRUFBRyxDQUFRLFVBQWEsT0FBWEQsS0FBSyxDQUFDRSxJQUFJOzs7Ozs7OzJHQUM1QkMsQ0FBQzs7Ozs7OzsrR0FDR1osbURBQUs7b0NBQ05hLEdBQUcsRUFBRUosS0FBSyxDQUFDLENBQVcsWUFBRSxDQUFrQixtQkFBRSxDQUFDLEVBQUUsQ0FBZSxnQkFBRUssS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBWTtvQ0FDekZDLEtBQUssRUFBRSxHQUFHO29DQUNWQyxNQUFNLEVBQUUsR0FBRztvQ0FDWEMsR0FBRyxFQUFFVCxLQUFLLENBQUMsQ0FBVyxZQUFFLENBQWtCLG1CQUFFLENBQUMsRUFBRSxDQUFVO29DQUN6REosU0FBUyxFQUFDLENBQXdCOzs7Ozs7Ozs7OzZGQUt6Q2MsQ0FBRTs0QkFBQ2QsU0FBUyxFQUFDLENBQXdCOzs7Ozs7O3NDQUFFSSxLQUFLLENBQUNXLEtBQUssQ0FBQ0MsUUFBUTs7NkZBQzNEakIsQ0FBRzs0QkFDQUMsU0FBUyxFQUFDLENBQXVCOzRCQUNqQ2lCLHVCQUF1QixFQUFFLENBQUM7Z0NBQUNDLE1BQU0sRUFBRWQsS0FBSyxDQUFDZSxPQUFPLENBQUNILFFBQVE7NEJBQUMsQ0FBQzs7Ozs7Ozs7NkZBRzlEdEIsa0RBQUk7NEJBQUNXLElBQUksRUFBRyxDQUFRLFVBQWEsT0FBWEQsS0FBSyxDQUFDRSxJQUFJOzs7Ozs7OzJHQUM1QkMsQ0FBQztnQ0FBQ1AsU0FBUyxFQUFFSix1RkFBNkI7Ozs7Ozs7MENBQUcsQ0FBUTs7OzttQkFwQmJRLEtBQUssQ0FBQ2dCLEVBQUU7Ozs7QUEwQnpFLENBQUM7S0FoQ3VCdkIsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpc3RFdmVudC9MaXN0RXZlbnQudHN4P2YzZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGlzdEV2ZW50Lm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RFdmVudCh7IGV2ZW50cyB9KSB7XG5cdHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJsaXN0LWV2ZW50XCJdfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1tcImxpc3QtZXZlbnRfX3RpdGxlXCJdfT5FdmVudHM8L2gxPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW1wibGlzdC1ldmVudF9fbGlzdFwiXX0+PC91bD5cbiAgICAgICAgICAgIHtldmVudHMubWFwKChldmVudCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJsaXN0LWV2ZW50X19pdGVtXCJdfSBrZXk9e2V2ZW50LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ldmVudHMvJHtldmVudC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtldmVudFsnX2VtYmVkZGVkJ11bJ3dwOmZlYXR1cmVkbWVkaWEnXVswXVtcIm1lZGlhX2RldGFpbHNcIl0uc2l6ZXMubWVkaXVtW1wic291cmNlX3VybFwiXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Mjg4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTkwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZXZlbnRbJ19lbWJlZGRlZCddWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF1bXCJhbHRfdGV4dFwiXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWV2ZW50X19pdGVtLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtZXZlbnRfX2l0ZW0tdGl0bGVcIj57ZXZlbnQudGl0bGUucmVuZGVyZWR9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ldmVudF9faXRlbS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZXZlbnQuZXhjZXJwdC5yZW5kZXJlZCB9fVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ldmVudHMvJHtldmVudC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNbXCJsaXN0LWV2ZW50X19pdGVtLWJ0blwiXX0+U2VlIG1vcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJzdHlsZXMiLCJMaXN0RXZlbnQiLCJldmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibWFwIiwiZXZlbnQiLCJocmVmIiwic2x1ZyIsImEiLCJzcmMiLCJzaXplcyIsIm1lZGl1bSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDUiLCJ0aXRsZSIsInJlbmRlcmVkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJleGNlcnB0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ListEvent/ListEvent.tsx\n");

/***/ })

});