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

/***/ "./components/mint.js":
/*!****************************!*\
  !*** ./components/mint.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mint.module.scss */ \"./styles/mint.module.scss\");\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Mint(props) {\n    var clickHandler = /** both plus and minus use the same function, but value is set by the class of the button */ function clickHandler(event) {\n        var val = Number(document.querySelector(\".quantity\").value);\n        if (event.target.className.match(/\\bminusBtn\\b/)) {\n            if (val <= 1) {\n                val = 1;\n            } else {\n                val--;\n                if (props.saleState == 1 && props.ownerBalance + val <= props.ogBalance * 5) {\n                    document.getElementById(\"plusButton\").style.display = \"block\";\n                }\n            }\n        } else if (event.target.className.match(/\\bplusBtn\\b/)) {\n            val = val + 1;\n            if (val > 1) {\n                setPrice(0.75);\n            }\n            if (props.saleState == 1 && props.ownerBalance + val >= props.ogBalance * 5) {\n                document.getElementById(\"plusButton\").style.display = \"none\";\n            }\n        }\n        document.querySelector(\".quantity\").value = val;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), price = ref[0], setPrice = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.querySelector(\".minusBtn\").addEventListener(\"click\", clickHandler);\n        document.querySelector(\".plusBtn\").addEventListener(\"click\", clickHandler);\n        if (props.ownerBalance + 1 >= props.allowance) {\n            document.getElementById(\"plusButton\").style.display = \"none\";\n        }\n        return function() {\n            document.querySelector(\".minusBtn\").removeEventListener(\"click\", clickHandler, true);\n            document.querySelector(\".plusBtn\").removeEventListener(\"click\", clickHandler, true);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btnMint minusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"quantity \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().quantity),\n                                min: 1,\n                                defaultValue: 1,\n                                readOnly: \"readonly\",\n                                id: \"quantity\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"plusButton\",\n                                className: \"btnMint plusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: props.data,\n                        className: \"btn\",\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            props.total,\n                            \" / 6666\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),\n                        children: \" \\uD83D\\uDD3A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Mint, \"vJ8yrrrKycTvuzfGJd8hlgMhQLA=\");\n_c = Mint;\nvar _c;\n$RefreshReg$(_c, \"Mint\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBTTtnQ0FBQ2hCLFNBQVMsRUFBRSxtQkFBbUIsR0FBR1gscUVBQVU7MENBQUUsR0FBQzs7Ozs7b0NBQVM7MENBQy9ELDhEQUFDNkIsT0FBSztnQ0FBQ2xCLFNBQVMsRUFBRSxXQUFXLEdBQUdYLDBFQUFlO2dDQUFFK0IsR0FBRyxFQUFFLENBQUM7Z0NBQUVDLFlBQVksRUFBRSxDQUFDO2dDQUFFQyxRQUFRLEVBQUMsVUFBVTtnQ0FBQ0MsRUFBRSxFQUFDLFVBQVU7Z0NBQUNDLElBQUksRUFBQyxRQUFROzs7OztvQ0FBRTswQ0FDM0gsOERBQUNSLFFBQU07Z0NBQUNPLEVBQUUsRUFBQyxZQUFZO2dDQUFDdkIsU0FBUyxFQUFFLGtCQUFrQixHQUFHWCxxRUFBVTswQ0FBRSxHQUFDOzs7OztvQ0FBUzs7Ozs7OzRCQUM1RTtrQ0FDTiw4REFBQzJCLFFBQU07d0JBQUNTLE9BQU8sRUFBRWxDLEtBQUssQ0FBQ21DLElBQUk7d0JBQUUxQixTQUFTLEVBQUMsS0FBSztrQ0FBQyxNQUFJOzs7Ozs0QkFBUzs7Ozs7O29CQUN4RDswQkFDTiw4REFBQ2EsS0FBRztnQkFBQ2IsU0FBUyxFQUFFWCwyRUFBZ0I7O2tDQUM1Qiw4REFBQ3dCLEtBQUc7d0JBQUNiLFNBQVMsRUFBRVgsMEVBQWU7OzRCQUMxQkUsS0FBSyxDQUFDb0MsS0FBSzs0QkFBQyxTQUNqQjs7Ozs7OzRCQUFNO2tDQUNOLDhEQUFDZCxLQUFHO3dCQUFDYixTQUFTLEVBQUVYLHVFQUFZO2tDQUFFLGVBQUU7Ozs7OzRCQUFNOzs7Ozs7b0JBQ3BDOztvQkFDUCxDQUNOO0NBQ0o7R0ExRHVCQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taW50LmpzPzQwMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9taW50Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWludChwcm9wcykge1xyXG4gICAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbnVzQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c0J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihwcm9wcy5vd25lckJhbGFuY2UrMSA+PSBwcm9wcy5hbGxvd2FuY2Upe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNCdXR0b25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWludXNCdG5cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c0J0blwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiogYm90aCBwbHVzIGFuZCBtaW51cyB1c2UgdGhlIHNhbWUgZnVuY3Rpb24sIGJ1dCB2YWx1ZSBpcyBzZXQgYnkgdGhlIGNsYXNzIG9mIHRoZSBidXR0b24gKi9cclxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGxldCB2YWwgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YW50aXR5JykudmFsdWUpO1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9cXGJtaW51c0J0blxcYi8pKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhbC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNhbGVTdGF0ZSA9PSAxICYmIHByb3BzLm93bmVyQmFsYW5jZSArdmFsIDw9IHByb3BzLm9nQmFsYW5jZSAqNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0J1dHRvblwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9cXGJwbHVzQnRuXFxiLykpIHtcclxuICAgICAgICAgICAgdmFsID0gdmFsICsgMTtcclxuICAgICAgICAgICAgaWYodmFsID4gMSl7XHJcbiAgICAgICAgICAgICAgICBzZXRQcmljZSgwLjc1KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5zYWxlU3RhdGUgPT0gMSAmJiBwcm9wcy5vd25lckJhbGFuY2UgK3ZhbCA+PSBwcm9wcy5vZ0JhbGFuY2UgKjUpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0J1dHRvblwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YW50aXR5JykudmFsdWUgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbnRncm91cH0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5ncm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuTWludCBtaW51c0J0biBcIiArIHN0eWxlcy5idG59Pi08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtcInF1YW50aXR5IFwiICsgc3R5bGVzLnF1YW50aXR5fSBtaW49ezF9IGRlZmF1bHRWYWx1ZT17MX0gcmVhZE9ubHk9XCJyZWFkb25seVwiIGlkPVwicXVhbnRpdHlcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwbHVzQnV0dG9uXCIgY2xhc3NOYW1lPXtcImJ0bk1pbnQgcGx1c0J0biBcIiArIHN0eWxlcy5idG59Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5kYXRhfSBjbGFzc05hbWU9XCJidG5cIj5NaW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbnRncm91cH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bmdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudG90YWx9IC8gNjY2NlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT4g8J+UujwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNaW50IiwicHJvcHMiLCJjbGlja0hhbmRsZXIiLCJldmVudCIsInZhbCIsIk51bWJlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwibWF0Y2giLCJzYWxlU3RhdGUiLCJvd25lckJhbGFuY2UiLCJvZ0JhbGFuY2UiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInNldFByaWNlIiwicHJpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsb3dhbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsIm1pbnRncm91cCIsImJ0bmdyb3VwIiwiYnV0dG9uIiwiYnRuIiwiaW5wdXQiLCJxdWFudGl0eSIsIm1pbiIsImRlZmF1bHRWYWx1ZSIsInJlYWRPbmx5IiwiaWQiLCJ0eXBlIiwib25DbGljayIsImRhdGEiLCJ0b3RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mint.js\n");

/***/ })

});