"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nclass Error extends _react.default.Component {\n    render() {\n        const { statusCode  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                @media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nexports[\"default\"] = Error;\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"10px 23px 10px 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"inherit\",\n        margin: 0,\n        padding: 0\n    }\n}; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsS0FBSyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4Q0FBb0IsQ0FBQyxDQUFDO0FBQ2pFLFNBQVNELHNCQUFzQixDQUFDRyxHQUFHLEVBQUU7SUFDakMsT0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHO1FBQ2pDTCxPQUFPLEVBQUVLLEdBQUc7S0FDZixDQUFDO0NBQ0w7QUFDRCxNQUFNRSxXQUFXLEdBQUc7QUFDaEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsT0FBRyxFQUFFLDhCQUE4QjtBQUNuQyxPQUFHLEVBQUUsb0JBQW9CO0FBQ3pCLE9BQUcsRUFBRSx1QkFBdUI7Q0FDL0I7QUFDRCxTQUFTQyxnQkFBZ0IsQ0FBQyxFQUFFQyxHQUFHLEdBQUdDLEdBQUcsR0FBRyxFQUFFO0lBQ3RDLE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxJQUFJQSxHQUFHLENBQUNFLFVBQVUsR0FBR0YsR0FBRyxDQUFDRSxVQUFVLEdBQUdELEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxVQUFVLEdBQUcsR0FBRztJQUN0RixPQUFPO1FBQ0hBLFVBQVU7S0FDYixDQUFDO0NBQ0w7QUFDRCxNQUFNQyxLQUFLLFNBQVNYLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYSxTQUFTO0lBQ3hDQyxNQUFNLEdBQUc7UUFDTCxNQUFNLEVBQUVILFVBQVUsR0FBRyxHQUFHLElBQUksQ0FBQ0ksS0FBSztRQUNsQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUND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QUNEYixFQUFFLEVBQUU7UUFDQWlCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCQyxVQUFVLEVBQUUsUUFBUTtRQUNwQk4sVUFBVSxFQUFFLFNBQVM7UUFDckJFLE1BQU0sRUFBRSxDQUFDO1FBQ1RFLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSixFQUVELGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqczAzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/MThmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICAgIGJvZHkgeyBtYXJnaW46IDA7IGNvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgc3RhdHVzQ29kZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJuZXh0LWVycm9yLWgxXCIsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZGVzY1xuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjtcbkVycm9yLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuRXJyb3Iub3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZXJyb3I6IHtcbiAgICAgICAgZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG4gICAgZGVzYzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwic3R5bGVzIiwiZXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNsYXNzTmFtZSIsImgxIiwiZGVzYyIsImgyIiwiRnJhZ21lbnQiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();