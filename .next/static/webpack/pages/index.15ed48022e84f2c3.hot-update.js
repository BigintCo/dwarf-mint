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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mint.module.scss */ \"./styles/mint.module.scss\");\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Mint(props) {\n    var clickHandler = /** both plus and minus use the same function, but value is set by the class of the button */ function clickHandler(event) {\n        var val = Number(document.querySelector(\".quantity\").value);\n        if (event.target.className.match(/\\bminusBtn\\b/)) {\n            if (val <= 1) {\n                val = 1;\n            } else {\n                val--;\n                if (props.saleState == 1 && props.ownerBalance + val <= props.ogBalance * 5) {\n                    document.getElementById(\"plusButton\").style.display = \"block\";\n                }\n            }\n        } else if (event.target.className.match(/\\bplusBtn\\b/)) {\n            val = val + 1;\n            if (props.saleState == 1 && props.ownerBalance + val >= props.ogBalance * 5) {\n                document.getElementById(\"plusButton\").style.display = \"none\";\n            }\n            console.log(\"test\");\n            if (val > 1) {\n                setPrice(0.75);\n            }\n        }\n        document.querySelector(\".quantity\").value = val;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), price = ref[0], setPrice = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.querySelector(\".minusBtn\").addEventListener(\"click\", clickHandler);\n        document.querySelector(\".plusBtn\").addEventListener(\"click\", clickHandler);\n        if (props.ownerBalance + 1 >= props.allowance) {\n            document.getElementById(\"plusButton\").style.display = \"none\";\n        }\n        return function() {\n            document.querySelector(\".minusBtn\").removeEventListener(\"click\", clickHandler, true);\n            document.querySelector(\".plusBtn\").removeEventListener(\"click\", clickHandler, true);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btnMint minusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"quantity \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().quantity),\n                                min: 1,\n                                defaultValue: 1,\n                                readOnly: \"readonly\",\n                                id: \"quantity\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"plusButton\",\n                                className: \"btnMint plusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: props.data,\n                        className: \"btn\",\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            props.total,\n                            \" / 6666\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),\n                        children: [\n                            \" \",\n                            price,\n                            \"\\uD83D\\uDD3A\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Mint, \"vJ8yrrrKycTvuzfGJd8hlgMhQLA=\");\n_c = Mint;\nvar _c;\n$RefreshReg$(_c, \"Mint\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFDZixTQUFTLEVBQUVYLDBFQUFlOzswQ0FDM0IsOERBQUM2QixRQUFNO2dDQUFDbEIsU0FBUyxFQUFFLG1CQUFtQixHQUFHWCxxRUFBVTswQ0FBRSxHQUFDOzs7OztvQ0FBUzswQ0FDL0QsOERBQUMrQixPQUFLO2dDQUFDcEIsU0FBUyxFQUFFLFdBQVcsR0FBR1gsMEVBQWU7Z0NBQUVpQyxHQUFHLEVBQUUsQ0FBQztnQ0FBRUMsWUFBWSxFQUFFLENBQUM7Z0NBQUVDLFFBQVEsRUFBQyxVQUFVO2dDQUFDQyxFQUFFLEVBQUMsVUFBVTtnQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7Ozs7O29DQUFFOzBDQUMzSCw4REFBQ1IsUUFBTTtnQ0FBQ08sRUFBRSxFQUFDLFlBQVk7Z0NBQUN6QixTQUFTLEVBQUUsa0JBQWtCLEdBQUdYLHFFQUFVOzBDQUFFLEdBQUM7Ozs7O29DQUFTOzs7Ozs7NEJBQzVFO2tDQUNOLDhEQUFDNkIsUUFBTTt3QkFBQ1MsT0FBTyxFQUFFcEMsS0FBSyxDQUFDcUMsSUFBSTt3QkFBRTVCLFNBQVMsRUFBQyxLQUFLO2tDQUFDLE1BQUk7Ozs7OzRCQUFTOzs7Ozs7b0JBQ3hEOzBCQUNOLDhEQUFDZSxLQUFHO2dCQUFDZixTQUFTLEVBQUVYLDJFQUFnQjs7a0NBQzVCLDhEQUFDMEIsS0FBRzt3QkFBQ2YsU0FBUyxFQUFFWCwwRUFBZTs7NEJBQzFCRSxLQUFLLENBQUNzQyxLQUFLOzRCQUFDLFNBQ2pCOzs7Ozs7NEJBQU07a0NBQ04sOERBQUNkLEtBQUc7d0JBQUNmLFNBQVMsRUFBRVgsdUVBQVk7OzRCQUFFLEdBQUM7NEJBQUNzQixLQUFLOzRCQUFDLGNBQUM7Ozs7Ozs0QkFBTTs7Ozs7O29CQUMzQzs7b0JBQ1AsQ0FDTjtDQUNKO0dBM0R1QnJCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21pbnQuanM/NDAxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL21pbnQubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaW50KHByb3BzKSB7XHJcbiAgICBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWludXNCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHByb3BzLm93bmVyQmFsYW5jZSsxID49IHByb3BzLmFsbG93YW5jZSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0J1dHRvblwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW51c0J0blwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB0cnVlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzQnRuXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKiBib3RoIHBsdXMgYW5kIG1pbnVzIHVzZSB0aGUgc2FtZSBmdW5jdGlvbiwgYnV0IHZhbHVlIGlzIHNldCBieSB0aGUgY2xhc3Mgb2YgdGhlIGJ1dHRvbiAqL1xyXG4gICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbnRpdHknKS52YWx1ZSk7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUubWF0Y2goL1xcYm1pbnVzQnRuXFxiLykpIHtcclxuICAgICAgICAgICAgaWYgKHZhbCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsLS07XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuc2FsZVN0YXRlID09IDEgJiYgcHJvcHMub3duZXJCYWxhbmNlICt2YWwgPD0gcHJvcHMub2dCYWxhbmNlICo1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzQnV0dG9uXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUubWF0Y2goL1xcYnBsdXNCdG5cXGIvKSkge1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwgKyAxO1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuc2FsZVN0YXRlID09IDEgJiYgcHJvcHMub3duZXJCYWxhbmNlICt2YWwgPj0gcHJvcHMub2dCYWxhbmNlICo1KSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNCdXR0b25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKVxyXG4gICAgICAgICAgICBpZih2YWwgPiAxKXtcclxuICAgICAgICAgICAgICAgIHNldFByaWNlKDAuNzUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YW50aXR5JykudmFsdWUgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbnRncm91cH0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5ncm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuTWludCBtaW51c0J0biBcIiArIHN0eWxlcy5idG59Pi08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtcInF1YW50aXR5IFwiICsgc3R5bGVzLnF1YW50aXR5fSBtaW49ezF9IGRlZmF1bHRWYWx1ZT17MX0gcmVhZE9ubHk9XCJyZWFkb25seVwiIGlkPVwicXVhbnRpdHlcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwbHVzQnV0dG9uXCIgY2xhc3NOYW1lPXtcImJ0bk1pbnQgcGx1c0J0biBcIiArIHN0eWxlcy5idG59Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5kYXRhfSBjbGFzc05hbWU9XCJidG5cIj5NaW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbnRncm91cH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bmdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudG90YWx9IC8gNjY2NlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT4ge3ByaWNlffCflLo8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTWludCIsInByb3BzIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJ2YWwiLCJOdW1iZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInRhcmdldCIsImNsYXNzTmFtZSIsIm1hdGNoIiwic2FsZVN0YXRlIiwib3duZXJCYWxhbmNlIiwib2dCYWxhbmNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwic2V0UHJpY2UiLCJwcmljZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGxvd2FuY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwibWludGdyb3VwIiwiYnRuZ3JvdXAiLCJidXR0b24iLCJidG4iLCJpbnB1dCIsInF1YW50aXR5IiwibWluIiwiZGVmYXVsdFZhbHVlIiwicmVhZE9ubHkiLCJpZCIsInR5cGUiLCJvbkNsaWNrIiwiZGF0YSIsInRvdGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mint.js\n");

/***/ })

});