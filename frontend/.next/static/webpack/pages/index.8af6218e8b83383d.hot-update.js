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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListEvent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListEvent.module.scss */ \"./components/ListEvent/ListEvent.module.scss\");\n/* harmony import */ var _ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ListEvent(param) {\n    var events = param.events;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event\"]),\n        __source: {\n            fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Hejhej\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event__list\"]),\n                __source: {\n                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            events.map(function(event) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event__item\"]),\n                    __source: {\n                        fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/events/\".concat(event.slug),\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: event['_embedded']['wp:featuredmedia'][0][\"media_details\"].sizes.medium[\"source_url\"],\n                                    width: 288,\n                                    height: 190,\n                                    alt: event['_embedded']['wp:featuredmedia'][0][\"alt_text\"],\n                                    className: \"list-event__item-image\",\n                                    __source: {\n                                        fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                            className: \"list-event__item-title\",\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: event.title.rendered\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"list-event__item-text\",\n                            dangerouslySetInnerHTML: {\n                                __html: event.excerpt.rendered\n                            },\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/events/\".concat(event.slug),\n                            __source: {\n                                fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: (_ListEvent_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"list-event__item-btn\"]),\n                                __source: {\n                                    fileName: \"/Users/mimilundberg/Projects/Private/wordpress-nextjs/frontend/components/ListEvent/ListEvent.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"See more\"\n                            })\n                        })\n                    ]\n                });\n            })\n        ]\n    }));\n};\n_c = ListEvent;\nvar _c;\n$RefreshReg$(_c, \"ListEvent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RFdmVudC9MaXN0RXZlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFFYztBQUU3QixRQUFRLENBQUNHLFNBQVMsQ0FBQyxLQUFVLEVBQUUsQ0FBQztRQUFYQyxNQUFNLEdBQVIsS0FBVSxDQUFSQSxNQUFNOztJQUN6QyxNQUFNLHVFQUNFQyxDQUFHO1FBQUNDLFNBQVMsRUFBRUosNkVBQW1COzs7Ozs7OztpRkFDOUJLLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBTTs7aUZBQ1RDLENBQUU7Z0JBQUNGLFNBQVMsRUFBRUosbUZBQXlCOzs7Ozs7OztZQUN2Q0UsTUFBTSxDQUFDSyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLOzhCQUNkLE1BQU0seURBQUxMLENBQUc7b0JBQUNDLFNBQVMsRUFBRUosbUZBQXlCOzs7Ozs7Ozs2RkFDcENGLGtEQUFJOzRCQUFDVyxJQUFJLEVBQUcsQ0FBUSxVQUFhLE9BQVhELEtBQUssQ0FBQ0UsSUFBSTs7Ozs7OzsyR0FDNUJDLENBQUM7Ozs7Ozs7K0dBQ0daLG1EQUFLO29DQUNOYSxHQUFHLEVBQUVKLEtBQUssQ0FBQyxDQUFXLFlBQUUsQ0FBa0IsbUJBQUUsQ0FBQyxFQUFFLENBQWUsZ0JBQUVLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQVk7b0NBQ3pGQyxLQUFLLEVBQUUsR0FBRztvQ0FDVkMsTUFBTSxFQUFFLEdBQUc7b0NBQ1hDLEdBQUcsRUFBRVQsS0FBSyxDQUFDLENBQVcsWUFBRSxDQUFrQixtQkFBRSxDQUFDLEVBQUUsQ0FBVTtvQ0FDekRKLFNBQVMsRUFBQyxDQUF3Qjs7Ozs7Ozs7Ozs2RkFLekNjLENBQUU7NEJBQUNkLFNBQVMsRUFBQyxDQUF3Qjs7Ozs7OztzQ0FBRUksS0FBSyxDQUFDVyxLQUFLLENBQUNDLFFBQVE7OzZGQUMzRGpCLENBQUc7NEJBQ0FDLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNpQix1QkFBdUIsRUFBRSxDQUFDO2dDQUFDQyxNQUFNLEVBQUVkLEtBQUssQ0FBQ2UsT0FBTyxDQUFDSCxRQUFROzRCQUFDLENBQUM7Ozs7Ozs7OzZGQUc5RHRCLGtEQUFJOzRCQUFDVyxJQUFJLEVBQUcsQ0FBUSxVQUFhLE9BQVhELEtBQUssQ0FBQ0UsSUFBSTs7Ozs7OzsyR0FDNUJDLENBQUM7Z0NBQUNQLFNBQVMsRUFBRUosdUZBQTZCOzs7Ozs7OzBDQUFHLENBQVE7Ozs7Ozs7O0FBTTlFLENBQUM7S0FoQ3VCQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdEV2ZW50L0xpc3RFdmVudC50c3g/ZjNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MaXN0RXZlbnQubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEV2ZW50KHsgZXZlbnRzIH0pIHtcblx0cmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImxpc3QtZXZlbnRcIl19PlxuICAgICAgICAgICAgPGgxPkhlamhlajwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbXCJsaXN0LWV2ZW50X19saXN0XCJdfT48L3VsPlxuICAgICAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImxpc3QtZXZlbnRfX2l0ZW1cIl19PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V2ZW50cy8ke2V2ZW50LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2V2ZW50WydfZW1iZWRkZWQnXVsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdW1wibWVkaWFfZGV0YWlsc1wiXS5zaXplcy5tZWRpdW1bXCJzb3VyY2VfdXJsXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyODh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxOTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtldmVudFsnX2VtYmVkZGVkJ11bJ3dwOmZlYXR1cmVkbWVkaWEnXVswXVtcImFsdF90ZXh0XCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZXZlbnRfX2l0ZW0taW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlzdC1ldmVudF9faXRlbS10aXRsZVwiPntldmVudC50aXRsZS5yZW5kZXJlZH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWV2ZW50X19pdGVtLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBldmVudC5leGNlcnB0LnJlbmRlcmVkIH19XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V2ZW50cy8ke2V2ZW50LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1tcImxpc3QtZXZlbnRfX2l0ZW0tYnRuXCJdfT5TZWUgbW9yZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInN0eWxlcyIsIkxpc3RFdmVudCIsImV2ZW50cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJldmVudCIsImhyZWYiLCJzbHVnIiwiYSIsInNyYyIsInNpemVzIiwibWVkaXVtIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoNSIsInRpdGxlIiwicmVuZGVyZWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImV4Y2VycHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ListEvent/ListEvent.tsx\n");

/***/ })

});