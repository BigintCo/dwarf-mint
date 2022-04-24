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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mint.module.scss */ \"./styles/mint.module.scss\");\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Mint(props) {\n    var clickHandler = /** both plus and minus use the same function, but value is set by the class of the button */ function clickHandler(event) {\n        var val = Number(document.querySelector(\".quantity\").value);\n        if (event.target.className.match(/\\bminusBtn\\b/)) {\n            if (val <= 1) {\n                val = 1;\n            } else {\n                val--;\n                if (props.saleState == 1 && props.ownerBalance + val <= props.ogBalance * 5) {\n                    document.getElementById(\"plusButton\").style.display = \"block\";\n                }\n            }\n        } else if (event.target.className.match(/\\bplusBtn\\b/)) {\n            val = val + 1;\n            if (props.saleState == 1 && props.ownerBalance + val >= props.ogBalance * 5) {\n                document.getElementById(\"plusButton\").style.display = \"none\";\n            }\n        }\n        document.querySelector(\".quantity\").value = val;\n    };\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.querySelector(\".minusBtn\").addEventListener(\"click\", clickHandler);\n        document.querySelector(\".plusBtn\").addEventListener(\"click\", clickHandler);\n        if (props.ownerBalance + 1 >= props.allowance) {\n            document.getElementById(\"plusButton\").style.display = \"none\";\n        }\n        return function() {\n            document.querySelector(\".minusBtn\").removeEventListener(\"click\", clickHandler, true);\n            document.querySelector(\".plusBtn\").removeEventListener(\"click\", clickHandler, true);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btnMint minusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"quantity \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().quantity),\n                                min: 1,\n                                defaultValue: 1,\n                                readOnly: \"readonly\",\n                                id: \"quantity\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"plusButton\",\n                                className: \"btnMint plusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: props.data,\n                        className: \"btn\",\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            props.total,\n                            \" / 6666\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),\n                        children: \"1 \\uD83D\\uDD3A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Mint, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Mint;\nvar _c;\n$RefreshReg$(_c, \"Mint\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRLEVBQUMsVUFBVTtnQ0FBQ0MsRUFBRSxFQUFDLFVBQVU7Z0NBQUNDLElBQUksRUFBQyxRQUFROzs7OztvQ0FBRTswQ0FDM0gsOERBQUNSLFFBQU07Z0NBQUNPLEVBQUUsRUFBQyxZQUFZO2dDQUFDckIsU0FBUyxFQUFFLGtCQUFrQixHQUFHWCxxRUFBVTswQ0FBRSxHQUFDOzs7OztvQ0FBUzs7Ozs7OzRCQUM1RTtrQ0FDTiw4REFBQ3lCLFFBQU07d0JBQUNTLE9BQU8sRUFBRWhDLEtBQUssQ0FBQ2lDLElBQUk7d0JBQUV4QixTQUFTLEVBQUMsS0FBSztrQ0FBQyxNQUFJOzs7Ozs0QkFBUzs7Ozs7O29CQUN4RDswQkFDTiw4REFBQ1csS0FBRztnQkFBQ1gsU0FBUyxFQUFFWCwyRUFBZ0I7O2tDQUM1Qiw4REFBQ3NCLEtBQUc7d0JBQUNYLFNBQVMsRUFBRVgsMEVBQWU7OzRCQUMxQkUsS0FBSyxDQUFDa0MsS0FBSzs0QkFBQyxTQUNqQjs7Ozs7OzRCQUFNO2tDQUNOLDhEQUFDZCxLQUFHO3dCQUFDWCxTQUFTLEVBQUVYLHVFQUFZO2tDQUFFLGdCQUFHOzs7Ozs0QkFBTTs7Ozs7O29CQUNyQzs7b0JBQ1AsQ0FDTjtDQUNKO0dBdkR1QkMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWludC5qcz80MDE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbWludC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbnQocHJvcHMpIHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWludXNCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHByb3BzLm93bmVyQmFsYW5jZSsxID49IHByb3BzLmFsbG93YW5jZSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0J1dHRvblwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW51c0J0blwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB0cnVlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzQnRuXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKiBib3RoIHBsdXMgYW5kIG1pbnVzIHVzZSB0aGUgc2FtZSBmdW5jdGlvbiwgYnV0IHZhbHVlIGlzIHNldCBieSB0aGUgY2xhc3Mgb2YgdGhlIGJ1dHRvbiAqL1xyXG4gICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbnRpdHknKS52YWx1ZSk7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUubWF0Y2goL1xcYm1pbnVzQnRuXFxiLykpIHtcclxuICAgICAgICAgICAgaWYgKHZhbCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsLS07XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuc2FsZVN0YXRlID09IDEgJiYgcHJvcHMub3duZXJCYWxhbmNlICt2YWwgPD0gcHJvcHMub2dCYWxhbmNlICo1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzQnV0dG9uXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUubWF0Y2goL1xcYnBsdXNCdG5cXGIvKSkge1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwgKyAxO1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuc2FsZVN0YXRlID09IDEgJiYgcHJvcHMub3duZXJCYWxhbmNlICt2YWwgPj0gcHJvcHMub2dCYWxhbmNlICo1KSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNCdXR0b25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eScpLnZhbHVlID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW50Z3JvdXB9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0bk1pbnQgbWludXNCdG4gXCIgKyBzdHlsZXMuYnRufT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJxdWFudGl0eSBcIiArIHN0eWxlcy5xdWFudGl0eX0gbWluPXsxfSBkZWZhdWx0VmFsdWU9ezF9IHJlYWRPbmx5PVwicmVhZG9ubHlcIiBpZD1cInF1YW50aXR5XCIgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicGx1c0J1dHRvblwiIGNsYXNzTmFtZT17XCJidG5NaW50IHBsdXNCdG4gXCIgKyBzdHlsZXMuYnRufT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZGF0YX0gY2xhc3NOYW1lPVwiYnRuXCI+TWludDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW50Z3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5ncm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRvdGFsfSAvIDY2NjZcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+MSDwn5S6PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJNaW50IiwicHJvcHMiLCJjbGlja0hhbmRsZXIiLCJldmVudCIsInZhbCIsIk51bWJlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwibWF0Y2giLCJzYWxlU3RhdGUiLCJvd25lckJhbGFuY2UiLCJvZ0JhbGFuY2UiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGxvd2FuY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwibWludGdyb3VwIiwiYnRuZ3JvdXAiLCJidXR0b24iLCJidG4iLCJpbnB1dCIsInF1YW50aXR5IiwibWluIiwiZGVmYXVsdFZhbHVlIiwicmVhZE9ubHkiLCJpZCIsInR5cGUiLCJvbkNsaWNrIiwiZGF0YSIsInRvdGFsIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mint.js\n");

/***/ })

});