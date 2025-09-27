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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_ProjectBycohort_MelodyMixer_app_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\ProjectBycohort\\\\MelodyMixer\\\\app\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_ProjectBycohort_MelodyMixer_app_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvamVjdEJ5Y29ob3J0JTVDTWVsb2R5TWl4ZXIlNUNhcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNQcm9qZWN0Qnljb2hvcnQlNUNNZWxvZHlNaXhlciU1Q2FwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEI7QUFDM0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvPzI4NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUHJvamVjdEJ5Y29ob3J0XFxcXE1lbG9keU1peGVyXFxcXGFwcFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0Qnljb2hvcnRcXFxcTWVsb2R5TWl4ZXJcXFxcYXBwXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET ?? \"secret\",\n    pages: {\n        error: \"/api/auth/error\"\n    },\n    callbacks: {\n        async session ({ session, token, user }) {\n            const dbuser = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findUnique({\n                where: {\n                    email: session.user?.email\n                }\n            });\n            if (!dbuser) {\n                return session;\n            }\n            return {\n                ...session,\n                user: {\n                    id: dbuser.id,\n                    email: dbuser.email\n                }\n            };\n        },\n        async signIn (params) {\n            console.log(\"SignIn attempt:\", params.user.email);\n            if (!params.user.email) {\n                console.log(\"No email provided\");\n                return false;\n            }\n            try {\n                // First check if user already exists\n                const existingUser = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findUnique({\n                    where: {\n                        email: params.user.email\n                    }\n                });\n                if (existingUser) {\n                    console.log(\"User already exists:\", params.user.email);\n                    return true;\n                }\n                // Create new user with default streams\n                const newUser = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.create({\n                    data: {\n                        email: params.user.email,\n                        provider: \"Google\",\n                        streams: {\n                            create: [\n                                {\n                                    type: \"Youtube\",\n                                    url: \"https://www.youtube.com/watch?v=LK7-_dgAVQE&list=RDLK7-_dgAVQE&start_radio=1\",\n                                    extractedId: \"rqt9y9EqyeQ\",\n                                    title: \"Husan Tera Toba Toba (Official Video) Karan Aujla | Tauba Tauba |Vicky Kaushal,Tripti| New Song 2024\",\n                                    smallImg: \"https://i.ytimg.com/vi/rqt9y9EqyeQ/maxresdefault.jpg\",\n                                    bigImg: \"https://i.ytimg.com/vi/rqt9y9EqyeQ/maxresdefault.jpg\",\n                                    played: false,\n                                    playedTs: new Date(),\n                                    createAt: new Date(),\n                                    active: true\n                                },\n                                {\n                                    type: \"Youtube\",\n                                    url: \"https://www.youtube.com/watch?v=JGwWNGJdvx8\",\n                                    extractedId: \"JGwWNGJdvx8\",\n                                    title: \"Ed Sheeran - Shape of You (Official Music Video)\",\n                                    smallImg: \"https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAs8aX0ACEG9PZWCbmZtwXgSkEzng\",\n                                    bigImg: \"https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAs8aX0ACEG9PZWCbmZtwXgSkEzng\",\n                                    played: false,\n                                    playedTs: new Date(),\n                                    createAt: new Date(),\n                                    active: true\n                                },\n                                {\n                                    type: \"Youtube\",\n                                    url: \"https://www.youtube.com/watch?v=0pWsCiBvLOk\",\n                                    extractedId: \"0pWsCiBvLOk\",\n                                    title: \"Shubh - One Love (Official Audio)\",\n                                    smallImg: \"https://i.ytimg.com/vi/0pWsCiBvLOk/maxresdefault.jpg\",\n                                    bigImg: \"https://i.ytimg.com/vi/0pWsCiBvLOk/maxresdefault.jpg\",\n                                    played: false,\n                                    playedTs: new Date(),\n                                    createAt: new Date(),\n                                    active: true\n                                }\n                            ]\n                        }\n                    }\n                });\n                console.log(\"New user created:\", newUser.email);\n                return true;\n            } catch (error) {\n                console.error(\"SignIn error:\", error);\n                // Even if database operation fails, allow sign in\n                // This prevents the Access Denied error\n                return true;\n            }\n        }\n    }\n});\n // export const  GET = handler;\n // export const  POST = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUVOO0FBQ2tCO0FBR3hELE1BQU1HLFVBQVVGLDBEQUFRQSxDQUFDO0lBQ3JCRyxXQUFVO1FBQ05GLHNFQUFjQSxDQUFDO1lBQ1hHLFVBQVdDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLElBQUk7WUFDM0NDLGNBQWVILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CLElBQUk7UUFDdkQ7S0FDSDtJQUNEQyxRQUFTTCxRQUFRQyxHQUFHLENBQUNLLGVBQWUsSUFBSTtJQUN4Q0MsT0FBTztRQUNIQyxPQUFPO0lBQ1g7SUFDQUMsV0FBVTtRQUNOLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtZQUNsQyxNQUFNQyxTQUFTLE1BQU1uQixxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQ0UsVUFBVSxDQUFDO2dCQUM5Q0MsT0FBTTtvQkFDRkMsT0FBUU4sUUFBUUUsSUFBSSxFQUFFSTtnQkFDMUI7WUFDSjtZQUNBLElBQUcsQ0FBQ0gsUUFDSjtnQkFDSSxPQUFPSDtZQUNYO1lBQ0EsT0FBTTtnQkFDRixHQUFHQSxPQUFPO2dCQUNWRSxNQUFLO29CQUNESyxJQUFLSixPQUFPSSxFQUFFO29CQUNkRCxPQUFRSCxPQUFPRyxLQUFLO2dCQUN4QjtZQUNKO1FBQ0Y7UUFFRixNQUFNRSxRQUFPQyxNQUFNO1lBQ2ZDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGLE9BQU9QLElBQUksQ0FBQ0ksS0FBSztZQUVoRCxJQUFHLENBQUNHLE9BQU9QLElBQUksQ0FBQ0ksS0FBSyxFQUFFO2dCQUNuQkksUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU87WUFDWDtZQUVBLElBQUk7Z0JBQ0EscUNBQXFDO2dCQUNyQyxNQUFNQyxlQUFlLE1BQU01QixxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQ0UsVUFBVSxDQUFDO29CQUNwREMsT0FBTzt3QkFDSEMsT0FBT0csT0FBT1AsSUFBSSxDQUFDSSxLQUFLO29CQUM1QjtnQkFDSjtnQkFFQSxJQUFJTSxjQUFjO29CQUNkRixRQUFRQyxHQUFHLENBQUMsd0JBQXdCRixPQUFPUCxJQUFJLENBQUNJLEtBQUs7b0JBQ3JELE9BQU87Z0JBQ1g7Z0JBRUEsdUNBQXVDO2dCQUN2QyxNQUFNTyxVQUFVLE1BQU03QixxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQ1ksTUFBTSxDQUFDO29CQUMzQ0MsTUFBTTt3QkFDRlQsT0FBT0csT0FBT1AsSUFBSSxDQUFDSSxLQUFLO3dCQUN4QlUsVUFBVTt3QkFDVkMsU0FBUzs0QkFDTEgsUUFBUTtnQ0FDSjtvQ0FDSUksTUFBTTtvQ0FDTkMsS0FBSztvQ0FDTEMsYUFBYTtvQ0FDYkMsT0FBTztvQ0FDUEMsVUFBVTtvQ0FDVkMsUUFBUTtvQ0FDUkMsUUFBUTtvQ0FDUkMsVUFBVSxJQUFJQztvQ0FDZEMsVUFBVSxJQUFJRDtvQ0FDZEUsUUFBUTtnQ0FDWjtnQ0FDQTtvQ0FDSVYsTUFBTTtvQ0FDTkMsS0FBSztvQ0FDTEMsYUFBYTtvQ0FDYkMsT0FBTztvQ0FDUEMsVUFBVTtvQ0FDVkMsUUFBUTtvQ0FDUkMsUUFBUTtvQ0FDUkMsVUFBVSxJQUFJQztvQ0FDZEMsVUFBVSxJQUFJRDtvQ0FDZEUsUUFBUTtnQ0FDWjtnQ0FDQTtvQ0FDSVYsTUFBTTtvQ0FDTkMsS0FBSztvQ0FDTEMsYUFBYTtvQ0FDYkMsT0FBTztvQ0FDUEMsVUFBVTtvQ0FDVkMsUUFBUTtvQ0FDUkMsUUFBUTtvQ0FDUkMsVUFBVSxJQUFJQztvQ0FDZEMsVUFBVSxJQUFJRDtvQ0FDZEUsUUFBUTtnQ0FDWjs2QkFDSDt3QkFDTDtvQkFDSjtnQkFDSjtnQkFFQWxCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJFLFFBQVFQLEtBQUs7Z0JBQzlDLE9BQU87WUFFWCxFQUFFLE9BQU9SLE9BQU87Z0JBQ1pZLFFBQVFaLEtBQUssQ0FBQyxpQkFBaUJBO2dCQUMvQixrREFBa0Q7Z0JBQ2xELHdDQUF3QztnQkFDeEMsT0FBTztZQUNYO1FBQ0o7SUFDSjtBQUVKO0FBQzBDLENBQzFDLCtCQUErQjtDQUMvQixnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYUNsaWVudCB9IGZyb20gXCJAL2FwcC9saWIvZGJcIjtcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcImRvbWFpblwiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xyXG4gICAgcHJvdmlkZXJzOltcclxuICAgICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkIDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCBcIlwiLFxyXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQgOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCB8fCBcIlwiXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBzZWNyZXQgOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgPz8gXCJzZWNyZXRcIixcclxuICAgIHBhZ2VzOiB7XHJcbiAgICAgICAgZXJyb3I6ICcvYXBpL2F1dGgvZXJyb3InLCAvLyBDdXN0b20gZXJyb3IgcGFnZVxyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrczp7XHJcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgZGJ1c2VyID0gYXdhaXQgcHJpc21hQ2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwgOiBzZXNzaW9uLnVzZXI/LmVtYWlsIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZighZGJ1c2VyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBkYnVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwgOiBkYnVzZXIuZW1haWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgc2lnbkluKHBhcmFtcyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbkluIGF0dGVtcHQ6XCIsIHBhcmFtcy51c2VyLmVtYWlsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFwYXJhbXMudXNlci5lbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBlbWFpbCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHVzZXIgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYUNsaWVudC51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBwYXJhbXMudXNlci5lbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWxyZWFkeSBleGlzdHM6XCIsIHBhcmFtcy51c2VyLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHVzZXIgd2l0aCBkZWZhdWx0IHN0cmVhbXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHBhcmFtcy51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogXCJHb29nbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnWW91dHViZScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1MSzctX2RnQVZRRSZsaXN0PVJETEs3LV9kZ0FWUUUmc3RhcnRfcmFkaW89MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0ZWRJZDogXCJycXQ5eTlFcXllUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJIdXNhbiBUZXJhIFRvYmEgVG9iYSAoT2ZmaWNpYWwgVmlkZW8pIEthcmFuIEF1amxhIHwgVGF1YmEgVGF1YmEgfFZpY2t5IEthdXNoYWwsVHJpcHRpfCBOZXcgU29uZyAyMDI0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsSW1nOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvcnF0OXk5RXF5ZVEvbWF4cmVzZGVmYXVsdC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnSW1nOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvcnF0OXk5RXF5ZVEvbWF4cmVzZGVmYXVsdC5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVkVHM6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1lvdXR1YmUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Skd3V05HSmR2eDhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdGVkSWQ6IFwiSkd3V05HSmR2eDhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRWQgU2hlZXJhbiAtIFNoYXBlIG9mIFlvdSAoT2ZmaWNpYWwgTXVzaWMgVmlkZW8pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsSW1nOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvSkd3V05HSmR2eDgvaHFkZWZhdWx0LmpwZz9zcXA9LW9heW13RWpDTkFDRUx3QlNGcnlxNHFwQXhVSUFSVUFBQUFBR0FFbEFBRElRajBBZ0tKRGVBRT0mcnM9QU9uNENMQXM4YVgwQUNFRzlQWldDYm1adHdYZ1NrRXpuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdJbWc6IFwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9KR3dXTkdKZHZ4OC9ocWRlZmF1bHQuanBnP3NxcD0tb2F5bXdFakNOQUNFTHdCU0ZyeXE0cXBBeFVJQVJVQUFBQUFHQUVsQUFESVFqMEFnS0pEZUFFPSZycz1BT240Q0xBczhhWDBBQ0VHOVBaV0NibVp0d1hnU2tFem5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllZFRzOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdZb3V0dWJlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTBwV3NDaUJ2TE9rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhY3RlZElkOiBcIjBwV3NDaUJ2TE9rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNodWJoIC0gT25lIExvdmUgKE9mZmljaWFsIEF1ZGlvKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbEltZzogXCJodHRwczovL2kueXRpbWcuY29tL3ZpLzBwV3NDaUJ2TE9rL21heHJlc2RlZmF1bHQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0ltZzogXCJodHRwczovL2kueXRpbWcuY29tL3ZpLzBwV3NDaUJ2TE9rL21heHJlc2RlZmF1bHQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllZFRzOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHVzZXIgY3JlYXRlZDpcIiwgbmV3VXNlci5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbkluIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAvLyBFdmVuIGlmIGRhdGFiYXNlIG9wZXJhdGlvbiBmYWlscywgYWxsb3cgc2lnbiBpblxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyB0aGUgQWNjZXNzIERlbmllZCBlcnJvclxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfVxyXG4vLyBleHBvcnQgY29uc3QgIEdFVCA9IGhhbmRsZXI7XHJcbi8vIGV4cG9ydCBjb25zdCAgUE9TVCA9IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWFDbGllbnQiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiaGFuZGxlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsInBhZ2VzIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwiZGJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJpZCIsInNpZ25JbiIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJleGlzdGluZ1VzZXIiLCJuZXdVc2VyIiwiY3JlYXRlIiwiZGF0YSIsInByb3ZpZGVyIiwic3RyZWFtcyIsInR5cGUiLCJ1cmwiLCJleHRyYWN0ZWRJZCIsInRpdGxlIiwic21hbGxJbWciLCJiaWdJbWciLCJwbGF5ZWQiLCJwbGF5ZWRUcyIsIkRhdGUiLCJjcmVhdGVBdCIsImFjdGl2ZSIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/db.ts":
/*!***********************!*\
  !*** ./app/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prismaClient: () => (/* binding */ prismaClient)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClient = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxNQUFNQyxlQUFlLElBQUlELHdEQUFZQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXBwL2xpYi9kYi50cz81OGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYUNsaWVudCA9IG5ldyBQcmlzbWFDbGllbnQoKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();