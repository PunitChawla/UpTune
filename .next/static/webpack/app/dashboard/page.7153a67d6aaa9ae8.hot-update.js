"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzlmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_StreamView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StreamView */ \"(app-pages-browser)/./app/components/StreamView.tsx\");\n/* harmony import */ var _hooks_useRedirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRedirect */ \"(app-pages-browser)/./app/hooks/useRedirect.ts\");\n// import { useSession } from \"next-auth/react\";\n// import StreamView from \"../components/StreamView\";\n// import { NextResponse } from \"next/server\";\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst creatorId = \"8d891f4e-6497-4166-843f-3800f40fa79d\";\n// let creatorId = \"\";\n// const getId = async () => {\n//   console.log(\"called\")\n//   const res = await fetch('/api/streams/getuser', {\n//        method: \"GET\",\n//    });\n//    if(res.ok)\n//    {\n//     return NextResponse.json({\n//       userid : res\n//     })\n//    }\n//    else{\n//     console.log(\"error \")\n//    }\n// }\n// console.log(creatorId);\n// export default function Component() {\n//   getId();\n// return <StreamView creatorId={creatorId} playVideo = {false}/>\n// }\n// // https://www.youtube.com/watch?v=0pWsCiBvLOk\nfunction Dashboard() {\n    var _session_user;\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const Redirect = (0,_hooks_useRedirect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    // Check if the session is still loading\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\ProjectBycohort\\\\MelodyMixer\\\\app\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, this);\n    }\n    // If there is no session or no user id, prompt the user to log in\n    if (!session || !((_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Please Log in....\"\n        }, void 0, false, {\n            fileName: \"D:\\\\ProjectBycohort\\\\MelodyMixer\\\\app\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, this);\n    }\n    // If session is available and user id exists, render the StreamView component\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StreamView__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        creatorId: session.user.id,\n        playVideo: true\n    }, void 0, false, {\n        fileName: \"D:\\\\ProjectBycohort\\\\MelodyMixer\\\\app\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 53,\n        columnNumber: 10\n    }, this);\n}\n_s(Dashboard, \"2Pa+XqQFSXFxHU/miGeM2epYH1A=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        _hooks_useRedirect__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZ0RBQWdEO0FBQ2hELHFEQUFxRDtBQUNyRCw4Q0FBOEM7OztBQUVEO0FBQ0s7QUFDSDtBQUUvQyxNQUFNRyxZQUFhO0FBRW5CLHNCQUFzQjtBQUV0Qiw4QkFBOEI7QUFDOUIsMEJBQTBCO0FBQzFCLHNEQUFzRDtBQUN0RCx3QkFBd0I7QUFDeEIsU0FBUztBQUVULGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1QsT0FBTztBQUNQLFdBQVc7QUFDWCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQLElBQUk7QUFDSiwwQkFBMEI7QUFDMUIsd0NBQXdDO0FBQ3hDLGFBQWE7QUFDWCxpRUFBaUU7QUFDbkUsSUFBSTtBQUVKLGlEQUFpRDtBQUlsQyxTQUFTQztRQVNMQzs7SUFSakIsTUFBTSxFQUFFQyxNQUFNRCxPQUFPLEVBQUVFLE1BQU0sRUFBRSxHQUFHUCwyREFBVUE7SUFDNUMsTUFBTVEsV0FBV04sOERBQVdBO0lBQzVCLHdDQUF3QztJQUN4QyxJQUFJSyxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNFO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLGtFQUFrRTtJQUNsRSxJQUFJLENBQUNKLFdBQVcsR0FBQ0EsZ0JBQUFBLFFBQVFLLElBQUksY0FBWkwsb0NBQUFBLGNBQWNNLEVBQUUsR0FBRTtRQUNqQyxxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNiO0lBRUEsOEVBQThFO0lBQzlFLHFCQUFPLDhEQUFDWCw4REFBVUE7UUFBQ0UsV0FBV0UsUUFBUUssSUFBSSxDQUFDQyxFQUFFO1FBQUVFLFdBQVc7Ozs7OztBQUM1RDtHQWZ3QlQ7O1FBQ1lKLHVEQUFVQTtRQUMzQkUsMERBQVdBOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9kMTI1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbi8vIGltcG9ydCBTdHJlYW1WaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1N0cmVhbVZpZXdcIjtcclxuLy8gaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBTdHJlYW1WaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1N0cmVhbVZpZXdcIjtcclxuaW1wb3J0IHVzZVJlZGlyZWN0IGZyb20gXCIuLi9ob29rcy91c2VSZWRpcmVjdFwiO1xyXG5cclxuY29uc3QgY3JlYXRvcklkID0gIFwiOGQ4OTFmNGUtNjQ5Ny00MTY2LTg0M2YtMzgwMGY0MGZhNzlkXCI7XHJcblxyXG4vLyBsZXQgY3JlYXRvcklkID0gXCJcIjtcclxuXHJcbi8vIGNvbnN0IGdldElkID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiY2FsbGVkXCIpXHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc3RyZWFtcy9nZXR1c2VyJywge1xyXG4vLyAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4vLyAgICB9KTtcclxuXHJcbi8vICAgIGlmKHJlcy5vaylcclxuLy8gICAge1xyXG4vLyAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuLy8gICAgICAgdXNlcmlkIDogcmVzXHJcbi8vICAgICB9KVxyXG4vLyAgICB9XHJcbi8vICAgIGVsc2V7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcImVycm9yIFwiKVxyXG4vLyAgICB9XHJcbi8vIH1cclxuLy8gY29uc29sZS5sb2coY3JlYXRvcklkKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xyXG4vLyAgIGdldElkKCk7XHJcbiAgLy8gcmV0dXJuIDxTdHJlYW1WaWV3IGNyZWF0b3JJZD17Y3JlYXRvcklkfSBwbGF5VmlkZW8gPSB7ZmFsc2V9Lz5cclxuLy8gfVxyXG5cclxuLy8gLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0wcFdzQ2lCdkxPa1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBSZWRpcmVjdCA9IHVzZVJlZGlyZWN0KCk7XHJcbiAgLy8gQ2hlY2sgaWYgdGhlIHNlc3Npb24gaXMgc3RpbGwgbG9hZGluZ1xyXG4gIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG5cclxuICAvLyBJZiB0aGVyZSBpcyBubyBzZXNzaW9uIG9yIG5vIHVzZXIgaWQsIHByb21wdCB0aGUgdXNlciB0byBsb2cgaW5cclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcj8uaWQpIHtcclxuICAgIHJldHVybiA8aDE+UGxlYXNlIExvZyBpbi4uLi48L2gxPjtcclxuICB9XHJcblxyXG4gIC8vIElmIHNlc3Npb24gaXMgYXZhaWxhYmxlIGFuZCB1c2VyIGlkIGV4aXN0cywgcmVuZGVyIHRoZSBTdHJlYW1WaWV3IGNvbXBvbmVudFxyXG4gIHJldHVybiA8U3RyZWFtVmlldyBjcmVhdG9ySWQ9e3Nlc3Npb24udXNlci5pZH0gcGxheVZpZGVvPXt0cnVlfSAvPjtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJTdHJlYW1WaWV3IiwidXNlUmVkaXJlY3QiLCJjcmVhdG9ySWQiLCJEYXNoYm9hcmQiLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsIlJlZGlyZWN0IiwicCIsInVzZXIiLCJpZCIsImgxIiwicGxheVZpZGVvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/hooks/useRedirect.ts":
/*!**********************************!*\
  !*** ./app/hooks/useRedirect.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useRedirect; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\n\n\nfunction useRedirect() {\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (session.status === \"authenticated\") {\n            router.push(\"/dashboard\");\n        } else {\n            router.push(\"/\");\n        }\n    }, [\n        session\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob29rcy91c2VSZWRpcmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0M7QUFDVztBQUNEO0FBRzdCLFNBQVNHO0lBQ3BCLE1BQU1DLFVBQVVILDJEQUFVQTtJQUMxQixNQUFNSSxTQUFTSCwwREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ04sSUFBSUksUUFBUUUsTUFBTSxLQUFLLGlCQUFpQjtZQUNwQ0QsT0FBT0UsSUFBSSxDQUFDO1FBQ2hCLE9BQU87WUFDSEYsT0FBT0UsSUFBSSxDQUFDO1FBQ2hCO0lBQ0osR0FBRztRQUFDSDtLQUFRO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob29rcy91c2VSZWRpcmVjdC50cz9jYjJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmVkaXJlY3QoKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXNzaW9uXSlcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwidXNlUmVkaXJlY3QiLCJzZXNzaW9uIiwicm91dGVyIiwic3RhdHVzIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/hooks/useRedirect.ts\n"));

/***/ })

});