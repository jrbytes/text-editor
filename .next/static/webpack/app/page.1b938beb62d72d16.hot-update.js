"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_contenteditable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-contenteditable */ \"(app-pages-browser)/./node_modules/react-contenteditable/lib/react-contenteditable.js\");\n/* harmony import */ var react_contenteditable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_contenteditable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Container */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Row */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Col */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _hooks_handleShortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/handleShortcuts */ \"(app-pages-browser)/./app/hooks/handleShortcuts.tsx\");\n/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Notice */ \"(app-pages-browser)/./app/components/Notice.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Button */ \"(app-pages-browser)/./app/components/Button/index.tsx\");\n/* harmony import */ var _components_Button_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Button/data */ \"(app-pages-browser)/./app/components/Button/data.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar App = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), text = _useState[0], setText = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), notice = _useState1[0], setNotice = _useState1[1];\n    var _useHandleShortcut = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,_hooks_handleShortcuts__WEBPACK_IMPORTED_MODULE_4__.useHandleShortcut)(), 1), handleSetText = _useHandleShortcut[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var applyFocus = function applyFocus() {\n            return _applyFocus.apply(this, arguments);\n        };\n        function _applyFocus() {\n            _applyFocus = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__._)(function() {\n                var _document_getElementById;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                (_document_getElementById = document.getElementById(\"editable\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.focus()\n                            ];\n                        case 1:\n                            _state.sent();\n                            console.log(text);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _applyFocus.apply(this, arguments);\n        }\n        applyFocus();\n    }, [\n        text\n    ]);\n    var buttons = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        return _components_Button_data__WEBPACK_IMPORTED_MODULE_7__.ButtonData.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                setTextFormat: item.title,\n                setTooltipText: item.tooltip,\n                button: item.button\n            }, item.title, false, {\n                fileName: \"/Users/jrbytes/dev/text-editor/app/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            style: {\n                backgroundColor: \"rgb(231,231,231)\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                style: {\n                    height: \"350px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        md: 8,\n                        className: \"main\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_contenteditable__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            id: \"editable\",\n                            html: text,\n                            style: {\n                                backgroundColor: \"white\",\n                                margin: \"20px\",\n                                height: \"200px\"\n                            },\n                            onChange: function(e) {\n                                return setText(e.target.value);\n                            },\n                            onKeyUp: handleSetText\n                        }, void 0, false, {\n                            fileName: \"/Users/jrbytes/dev/text-editor/app/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jrbytes/dev/text-editor/app/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notice__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        show: notice,\n                        onHide: function() {\n                            return setNotice(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jrbytes/dev/text-editor/app/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jrbytes/dev/text-editor/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/jrbytes/dev/text-editor/app/page.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(App, \"PNeAUTwCXWoiPGPA6gDCDEhdtEg=\", false, function() {\n    return [\n        _hooks_handleShortcuts__WEBPACK_IMPORTED_MODULE_4__.useHandleShortcut\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM2QztBQUVjO0FBQ1I7QUFDUztBQUFBO0FBQUE7QUFHRDtBQUVuQjtBQUNBO0FBQ2E7QUFFckQsSUFBTVksTUFBZ0I7O0lBQ3BCLElBQXdCWCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBMUJZLE9BQWlCWixjQUFYYSxVQUFXYjtJQUN4QixJQUE0QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQTlCYyxTQUFxQmQsZUFBYmUsWUFBYWY7SUFFNUIsSUFBd0JPLHFCQUFBQSwrREFBQUEsQ0FBQUEseUVBQWlCQSxRQUFsQ1MsZ0JBQWlCVDtJQUV4QkwsZ0RBQVNBLENBQUM7WUFDT2Usc0JBQUFBO21CQUFBQTs7aUJBQUFBO1lBQUFBLGNBQWY7b0JBQ1FDOzs7OzRCQUFOOztpQ0FBTUEsMkJBQUFBLFNBQVNDLGNBQWMsQ0FBQyx5QkFBeEJELCtDQUFBQSx5QkFBcUNFLEtBQUs7Ozs0QkFBaEQ7NEJBQ0FDLFFBQVFDLEdBQUcsQ0FBQ1Y7Ozs7OztZQUNkO21CQUhlSzs7UUFJZkE7SUFDRixHQUFHO1FBQUNMO0tBQUs7SUFFVCxJQUFNVyxVQUFVdEIsOENBQU9BLENBQUM7UUFDdEIsT0FBT1MsK0RBQVVBLENBQUNjLEdBQUcsQ0FBQ0MsU0FBQUE7aUNBQ3BCLDhEQUFDaEIsMERBQU1BO2dCQUVMaUIsZUFBZUQsS0FBS0UsS0FBSztnQkFDekJDLGdCQUFnQkgsS0FBS0ksT0FBTztnQkFDNUJDLFFBQVFMLEtBQUtLLE1BQU07ZUFIZEwsS0FBS0UsS0FBSzs7Ozs7O0lBTXJCLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDdkIsa0VBQVNBO1lBQUMyQixPQUFPO2dCQUNoQkMsaUJBQWlCO1lBQ25CO3NCQUNFLDRFQUFDM0IsNERBQUdBO2dCQUFDMEIsT0FBTztvQkFBRUUsUUFBUTtnQkFBUTs7a0NBQzVCLDhEQUFDM0IsNERBQUdBO3dCQUFDNEIsSUFBSTt3QkFBR0MsV0FBVTtrQ0FXcEIsNEVBQUNoQyw4REFBZUE7NEJBQ2RpQyxJQUFHOzRCQUNIQyxNQUFNekI7NEJBQ05tQixPQUFPO2dDQUNMQyxpQkFBaUI7Z0NBQ2pCTSxRQUFRO2dDQUNSTCxRQUFROzRCQUNWOzRCQUNBTSxVQUFVQyxTQUFBQTt1Q0FBSzNCLFFBQVEyQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7OzRCQUNyQ0MsU0FBUzNCOzs7Ozs7Ozs7OztrQ0FJYiw4REFBQ1IsMERBQU1BO3dCQUFDb0MsTUFBTTlCO3dCQUFRK0IsUUFBUTttQ0FBTTlCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQ7R0E1RE1KOztRQUlvQkoscUVBQWlCQTs7O0tBSnJDSTtBQThETiwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGVudEVkaXRhYmxlIGZyb20gJ3JlYWN0LWNvbnRlbnRlZGl0YWJsZSdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucy8nXG5cbmltcG9ydCB7IHVzZUhhbmRsZVNob3J0Y3V0IH0gZnJvbSAnLi9ob29rcy9oYW5kbGVTaG9ydGN1dHMnXG5cbmltcG9ydCBOb3RpY2UgZnJvbSAnLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkRhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uL2RhdGEnXG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbm90aWNlLCBzZXROb3RpY2VdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2hhbmRsZVNldFRleHRdID0gdXNlSGFuZGxlU2hvcnRjdXQoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gYXBwbHlGb2N1cygpIHtcbiAgICAgIGF3YWl0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0YWJsZScpPy5mb2N1cygpXG4gICAgICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgIH1cbiAgICBhcHBseUZvY3VzKClcbiAgfSwgW3RleHRdKVxuXG4gIGNvbnN0IGJ1dHRvbnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gQnV0dG9uRGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgc2V0VGV4dEZvcm1hdD17aXRlbS50aXRsZX1cbiAgICAgICAgc2V0VG9vbHRpcFRleHQ9e2l0ZW0udG9vbHRpcH1cbiAgICAgICAgYnV0dG9uPXtpdGVtLmJ1dHRvbn1cbiAgICAgIC8+XG4gICAgKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjMxLDIzMSwyMzEpJyxcbiAgICAgIH19PlxuICAgICAgICA8Um93IHN0eWxlPXt7IGhlaWdodDogJzM1MHB4JyB9fT5cbiAgICAgICAgICA8Q29sIG1kPXs4fSBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICB7LyogPEljb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgc2l6ZTogJzEuM2VtJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdpY29ucycsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj4gKi99XG4gICAgICAgICAgICA8Q29udGVudEVkaXRhYmxlXG4gICAgICAgICAgICAgIGlkPVwiZWRpdGFibGVcIlxuICAgICAgICAgICAgICBodG1sPXt0ZXh0fVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMDBweCdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIG9uS2V5VXA9e2hhbmRsZVNldFRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgPE5vdGljZSBzaG93PXtub3RpY2V9IG9uSGlkZT17KCkgPT4gc2V0Tm90aWNlKGZhbHNlKX0gLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZUVmZmVjdCIsIkNvbnRlbnRFZGl0YWJsZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsInVzZUhhbmRsZVNob3J0Y3V0IiwiTm90aWNlIiwiQnV0dG9uIiwiQnV0dG9uRGF0YSIsIkFwcCIsInRleHQiLCJzZXRUZXh0Iiwibm90aWNlIiwic2V0Tm90aWNlIiwiaGFuZGxlU2V0VGV4dCIsImFwcGx5Rm9jdXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9ucyIsIm1hcCIsIml0ZW0iLCJzZXRUZXh0Rm9ybWF0IiwidGl0bGUiLCJzZXRUb29sdGlwVGV4dCIsInRvb2x0aXAiLCJidXR0b24iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIm1kIiwiY2xhc3NOYW1lIiwiaWQiLCJodG1sIiwibWFyZ2luIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbktleVVwIiwic2hvdyIsIm9uSGlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Col.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCol: function() { return /* binding */ useCol; }\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\nfunction useCol({\n  as,\n  bsPrefix,\n  className,\n  ...props\n}) {\n  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'col');\n  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapBreakpoints)();\n  const minBreakpoint = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapMinBreakpoint)();\n  const spans = [];\n  const classes = [];\n  breakpoints.forEach(brkPoint => {\n    const propValue = props[brkPoint];\n    delete props[brkPoint];\n    let span;\n    let offset;\n    let order;\n    if (typeof propValue === 'object' && propValue != null) {\n      ({\n        span,\n        offset,\n        order\n      } = propValue);\n    } else {\n      span = propValue;\n    }\n    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';\n    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);\n    if (order != null) classes.push(`order${infix}-${order}`);\n    if (offset != null) classes.push(`offset${infix}-${offset}`);\n  });\n  return [{\n    ...props,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, ...spans, ...classes)\n  }, {\n    as,\n    bsPrefix,\n    spans\n  }];\n}\nconst Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(\n// Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n(props, ref) => {\n  const [{\n    className,\n    ...colProps\n  }, {\n    as: Component = 'div',\n    bsPrefix,\n    spans\n  }] = useCol(props);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ...colProps,\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, !spans.length && bsPrefix)\n  });\n});\nCol.displayName = 'Col';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Col);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0NvbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRW9DO0FBQ0w7QUFDMEU7QUFDekQ7QUFDekM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxhQUFhLGtFQUFrQjtBQUMvQixzQkFBc0IsdUVBQXVCO0FBQzdDLHdCQUF3Qix5RUFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RCw0Q0FBNEMsU0FBUyxFQUFFLE1BQU0sT0FBTyxTQUFTLEVBQUUsTUFBTSxHQUFHLEtBQUs7QUFDN0YsNENBQTRDLE1BQU0sR0FBRyxNQUFNO0FBQzNELDhDQUE4QyxNQUFNLEdBQUcsT0FBTztBQUM5RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsaURBQVU7QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHlCQUF5Qiw2Q0FBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLHNEQUFJO0FBQzFCO0FBQ0E7QUFDQSxlQUFlLGlEQUFVO0FBQ3pCLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSwrREFBZSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0NvbC5qcz8zY2Q0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCwgdXNlQm9vdHN0cmFwQnJlYWtwb2ludHMsIHVzZUJvb3RzdHJhcE1pbkJyZWFrcG9pbnQgfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb2woe1xuICBhcyxcbiAgYnNQcmVmaXgsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgYnNQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdjb2wnKTtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSB1c2VCb290c3RyYXBCcmVha3BvaW50cygpO1xuICBjb25zdCBtaW5CcmVha3BvaW50ID0gdXNlQm9vdHN0cmFwTWluQnJlYWtwb2ludCgpO1xuICBjb25zdCBzcGFucyA9IFtdO1xuICBjb25zdCBjbGFzc2VzID0gW107XG4gIGJyZWFrcG9pbnRzLmZvckVhY2goYnJrUG9pbnQgPT4ge1xuICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW2Jya1BvaW50XTtcbiAgICBkZWxldGUgcHJvcHNbYnJrUG9pbnRdO1xuICAgIGxldCBzcGFuO1xuICAgIGxldCBvZmZzZXQ7XG4gICAgbGV0IG9yZGVyO1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnb2JqZWN0JyAmJiBwcm9wVmFsdWUgIT0gbnVsbCkge1xuICAgICAgKHtcbiAgICAgICAgc3BhbixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBvcmRlclxuICAgICAgfSA9IHByb3BWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW4gPSBwcm9wVmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGluZml4ID0gYnJrUG9pbnQgIT09IG1pbkJyZWFrcG9pbnQgPyBgLSR7YnJrUG9pbnR9YCA6ICcnO1xuICAgIGlmIChzcGFuKSBzcGFucy5wdXNoKHNwYW4gPT09IHRydWUgPyBgJHtic1ByZWZpeH0ke2luZml4fWAgOiBgJHtic1ByZWZpeH0ke2luZml4fS0ke3NwYW59YCk7XG4gICAgaWYgKG9yZGVyICE9IG51bGwpIGNsYXNzZXMucHVzaChgb3JkZXIke2luZml4fS0ke29yZGVyfWApO1xuICAgIGlmIChvZmZzZXQgIT0gbnVsbCkgY2xhc3Nlcy5wdXNoKGBvZmZzZXQke2luZml4fS0ke29mZnNldH1gKTtcbiAgfSk7XG4gIHJldHVybiBbe1xuICAgIC4uLnByb3BzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIC4uLnNwYW5zLCAuLi5jbGFzc2VzKVxuICB9LCB7XG4gICAgYXMsXG4gICAgYnNQcmVmaXgsXG4gICAgc3BhbnNcbiAgfV07XG59XG5jb25zdCBDb2wgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihcbi8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbihwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IFt7XG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLmNvbFByb3BzXG4gIH0sIHtcbiAgICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gICAgYnNQcmVmaXgsXG4gICAgc3BhbnNcbiAgfV0gPSB1c2VDb2wocHJvcHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7XG4gICAgLi4uY29sUHJvcHMsXG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgIXNwYW5zLmxlbmd0aCAmJiBic1ByZWZpeClcbiAgfSk7XG59KTtcbkNvbC5kaXNwbGF5TmFtZSA9ICdDb2wnO1xuZXhwb3J0IGRlZmF1bHQgQ29sOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\n"));

/***/ })

});