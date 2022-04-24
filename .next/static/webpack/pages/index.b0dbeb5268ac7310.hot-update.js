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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Mint; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mint.module.scss */ \"./styles/mint.module.scss\");\n/* harmony import */ var _styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Mint(props) {\n    var clickHandler = /** both plus and minus use the same function, but value is set by the class of the button */ function clickHandler(event) {\n        var val = Number(document.querySelector(\".quantity\").value);\n        if (event.target.className.match(/\\bminusBtn\\b/)) {\n            if (val <= 1) {\n                val = 1;\n            } else {\n                val--;\n                if (props.saleState == 1 && props.ownerBalance + val <= props.ogBalance * 5) {\n                    document.getElementById(\"plusButton\").style.display = \"block\";\n                } else if (props.saleState == 2 && props.ownerBalance + val <= props.silverBalance * 5) {\n                    document.getElementById(\"plusButton\").style.display = \"block\";\n                }\n            }\n        } else if (event.target.className.match(/\\bplusBtn\\b/)) {\n            val = val + 1;\n            if (props.saleState == 1 && props.ownerBalance + val >= props.ogBalance * 5) {\n                document.getElementById(\"plusButton\").style.display = \"none\";\n            } else if (props.saleState == 2 && props.ownerBalance + val >= props.silverBalance * 5) {\n                document.getElementById(\"plusButton\").style.display = \"none\";\n            }\n        }\n        document.querySelector(\".quantity\").value = val;\n    };\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.querySelector(\".minusBtn\").addEventListener(\"click\", clickHandler);\n        document.querySelector(\".plusBtn\").addEventListener(\"click\", clickHandler);\n        if (props.ownerBalance + 1 >= props.allowance) {\n            document.getElementById(\"plusButton\").style.display = \"none\";\n        }\n        return function() {\n            document.querySelector(\".minusBtn\").removeEventListener(\"click\", clickHandler, true);\n            document.querySelector(\".plusBtn\").removeEventListener(\"click\", clickHandler, true);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btnMint minusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"quantity \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().quantity),\n                                min: 1,\n                                defaultValue: 1,\n                                readOnly: \"readonly\",\n                                name: \"quantity\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"plusButton\",\n                                className: \"btnMint plusBtn \" + (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: props.data,\n                        className: \"btn\",\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mintgroup),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btngroup),\n                        children: [\n                            props.total,\n                            \" / 6666\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_mint_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),\n                        children: \"1 \\uD83D\\uDD3A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\dwarfknights-mint\\\\components\\\\mint.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Mint, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Mint;\nvar _c;\n$RefreshReg$(_c, \"Mint\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21pbnQuanM/NDAxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL21pbnQubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaW50KHByb3BzKSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbnVzQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c0J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihwcm9wcy5vd25lckJhbGFuY2UrMSA+PSBwcm9wcy5hbGxvd2FuY2Upe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNCdXR0b25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWludXNCdG5cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c0J0blwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiogYm90aCBwbHVzIGFuZCBtaW51cyB1c2UgdGhlIHNhbWUgZnVuY3Rpb24sIGJ1dCB2YWx1ZSBpcyBzZXQgYnkgdGhlIGNsYXNzIG9mIHRoZSBidXR0b24gKi9cclxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGxldCB2YWwgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YW50aXR5JykudmFsdWUpO1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9cXGJtaW51c0J0blxcYi8pKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhbC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNhbGVTdGF0ZSA9PSAxICYmIHByb3BzLm93bmVyQmFsYW5jZSArdmFsIDw9IHByb3BzLm9nQmFsYW5jZSAqNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0J1dHRvblwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocHJvcHMuc2FsZVN0YXRlID09IDIgJiYgcHJvcHMub3duZXJCYWxhbmNlICsgdmFsIDw9IHByb3BzLnNpbHZlckJhbGFuY2UgKjUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0J1dHRvblwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9cXGJwbHVzQnRuXFxiLykpIHtcclxuICAgICAgICAgICAgdmFsID0gdmFsICsgMTtcclxuICAgICAgICAgICAgaWYgKHByb3BzLnNhbGVTdGF0ZSA9PSAxICYmIHByb3BzLm93bmVyQmFsYW5jZSArdmFsID49IHByb3BzLm9nQmFsYW5jZSAqNSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzQnV0dG9uXCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgICAgICAgICAgfWVsc2UgaWYocHJvcHMuc2FsZVN0YXRlID09IDIgJiYgcHJvcHMub3duZXJCYWxhbmNlICsgdmFsID49IHByb3BzLnNpbHZlckJhbGFuY2UgKjUpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzQnV0dG9uXCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbnRpdHknKS52YWx1ZSA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWludGdyb3VwfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bmdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG5NaW50IG1pbnVzQnRuIFwiICsgc3R5bGVzLmJ0bn0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wicXVhbnRpdHkgXCIgKyBzdHlsZXMucXVhbnRpdHl9IG1pbj17MX0gZGVmYXVsdFZhbHVlPXsxfSByZWFkT25seT1cInJlYWRvbmx5XCIgbmFtZT1cInF1YW50aXR5XCIgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicGx1c0J1dHRvblwiIGNsYXNzTmFtZT17XCJidG5NaW50IHBsdXNCdG4gXCIgKyBzdHlsZXMuYnRufT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZGF0YX0gY2xhc3NOYW1lPVwiYnRuXCI+TWludDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW50Z3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5ncm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRvdGFsfSAvIDY2NjZcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+MSDwn5S6PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJNaW50IiwicHJvcHMiLCJjbGlja0hhbmRsZXIiLCJldmVudCIsInZhbCIsIk51bWJlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwibWF0Y2giLCJzYWxlU3RhdGUiLCJvd25lckJhbGFuY2UiLCJvZ0JhbGFuY2UiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInNpbHZlckJhbGFuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsb3dhbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsIm1pbnRncm91cCIsImJ0bmdyb3VwIiwiYnV0dG9uIiwiYnRuIiwiaW5wdXQiLCJxdWFudGl0eSIsIm1pbiIsImRlZmF1bHRWYWx1ZSIsInJlYWRPbmx5IiwibmFtZSIsInR5cGUiLCJpZCIsIm9uQ2xpY2siLCJkYXRhIiwidG90YWwiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mint.js\n");

/***/ })

});