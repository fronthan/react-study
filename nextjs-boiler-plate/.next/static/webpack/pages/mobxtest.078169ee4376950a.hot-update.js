"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mobxtest",{

/***/ "./pages/mobxtest.js":
/*!***************************!*\
  !*** ./pages/mobxtest.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _mobx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mobx/store */ \"./mobx/store.js\");\n\n\n\n\n\nfunction mobxtest() {\n    var handleTitle = function(e) {\n        (0,mobx__WEBPACK_IMPORTED_MODULE_3__.runInAction)(function() {\n            _mobx_store__WEBPACK_IMPORTED_MODULE_2__.userStore.title = e.currentTarget.value;\n        });\n    };\n    var handleNameChange = function() {\n        (0,mobx__WEBPACK_IMPORTED_MODULE_3__.runInAction)(function() {\n            _mobx_store__WEBPACK_IMPORTED_MODULE_2__.userStore.nameChange();\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"mobx page\",\n            _mobx_store__WEBPACK_IMPORTED_MODULE_2__.userStore.name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                tye: \"text\",\n                name: \"title\",\n                onChange: handleTitle,\n                value: undefined,\n                defaultValue: _mobx_store__WEBPACK_IMPORTED_MODULE_2__.userStore.title\n            }, void 0, false, {\n                fileName: \"/Users/dev-han/Desktop/webDev/react-study/nextjs03/pages/mobxtest.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNameChange,\n                children: \"\\uC774\\uB984\\uBC14\\uAFB8\\uAE30\"\n            }, void 0, false, {\n                fileName: \"/Users/dev-han/Desktop/webDev/react-study/nextjs03/pages/mobxtest.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dev-han/Desktop/webDev/react-study/nextjs03/pages/mobxtest.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(mobxtest));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2J4dGVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBQ1M7QUFDRztBQUNHO0FBRXpDLFNBQVNJLFFBQVEsR0FBRztJQUNsQixJQUFNQyxXQUFXLEdBQUdDLFNBQUFBLENBQUMsRUFBSTtRQUN2QkwsaURBQVcsQ0FBQyxXQUFLO1lBQ2ZFLHdEQUFlLEdBQUdHLENBQUMsQ0FBQ0UsYUFBYSxDQUFDQyxLQUFLO1NBQ3hDLENBQUM7S0FDSDtJQUVILElBQU1DLGdCQUFnQixHQUFFLFdBQU07UUFDNUJULGlEQUFXLENBQUMsV0FBSztZQUNmRSw2REFBb0IsRUFBRSxDQUFDO1NBQ3hCLENBQUM7S0FDSDtJQUVDLHFCQUNFLDhEQUFDUyxLQUFHOztZQUFDLFdBRUg7WUFBQ1QsdURBQWM7MEJBQ2YsOERBQUNXLE9BQUs7Z0JBQUNDLEdBQUcsRUFBQyxNQUFNO2dCQUFDRixJQUFJLEVBQUMsT0FBTztnQkFDOUJHLFFBQVEsRUFBRVgsV0FBVztnQkFBRUksS0FBSyxFQUFFUSxTQUFTO2dCQUN2Q0MsWUFBWSxFQUFFZix3REFBZTs7Ozs7b0JBQUk7MEJBRWpDLDhEQUFDZ0IsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFVixnQkFBZ0I7MEJBQUUsZ0NBQUs7Ozs7O29CQUFTOzs7Ozs7WUFDN0MsQ0FDUDtDQUNGO0FBRUQsK0RBQWVSLG9EQUFRLENBQUNFLFFBQVEsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vYnh0ZXN0LmpzPzcxZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IHsgdXNlclN0b3JlIH0gZnJvbSAnLi4vbW9ieC9zdG9yZSdcblxuZnVuY3Rpb24gbW9ieHRlc3QoKSB7XG4gIGNvbnN0IGhhbmRsZVRpdGxlID0gZSA9PiB7XG4gICAgcnVuSW5BY3Rpb24oKCk9PiB7XG4gICAgICB1c2VyU3RvcmUudGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbmNvbnN0IGhhbmRsZU5hbWVDaGFuZ2U9ICgpID0+IHtcbiAgcnVuSW5BY3Rpb24oKCk9PiB7XG4gICAgdXNlclN0b3JlLm5hbWVDaGFuZ2UoKTtcbiAgfSlcbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBtb2J4IHBhZ2VcbiAgICAgIHt1c2VyU3RvcmUubmFtZX1cbiAgICAgIDxpbnB1dCB0eWU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCJcbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaXRsZX0gdmFsdWU9e3VuZGVmaW5lZH1cbiAgICAgIGRlZmF1bHRWYWx1ZT17dXNlclN0b3JlLnRpdGxlfSAvPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5hbWVDaGFuZ2V9PuydtOumhOuwlOq+uOq4sDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKG1vYnh0ZXN0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJydW5JbkFjdGlvbiIsIm9ic2VydmVyIiwidXNlclN0b3JlIiwibW9ieHRlc3QiLCJoYW5kbGVUaXRsZSIsImUiLCJ0aXRsZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJuYW1lQ2hhbmdlIiwiZGl2IiwibmFtZSIsImlucHV0IiwidHllIiwib25DaGFuZ2UiLCJ1bmRlZmluZWQiLCJkZWZhdWx0VmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mobxtest.js\n");

/***/ })

});