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
exports.id = "app/api/streams/next/route";
exports.ids = ["app/api/streams/next/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Fnext%2Froute&page=%2Fapi%2Fstreams%2Fnext%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Fnext%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Fnext%2Froute&page=%2Fapi%2Fstreams%2Fnext%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Fnext%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_ProjectBycohort_MelodyMixer_app_app_api_streams_next_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/streams/next/route.ts */ \"(rsc)/./app/api/streams/next/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/streams/next/route\",\n        pathname: \"/api/streams/next\",\n        filename: \"route\",\n        bundlePath: \"app/api/streams/next/route\"\n    },\n    resolvedPagePath: \"D:\\\\ProjectBycohort\\\\MelodyMixer\\\\app\\\\app\\\\api\\\\streams\\\\next\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_ProjectBycohort_MelodyMixer_app_app_api_streams_next_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/streams/next/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdHJlYW1zJTJGbmV4dCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3RyZWFtcyUyRm5leHQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzdHJlYW1zJTJGbmV4dCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvamVjdEJ5Y29ob3J0JTVDTWVsb2R5TWl4ZXIlNUNhcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNQcm9qZWN0Qnljb2hvcnQlNUNNZWxvZHlNaXhlciU1Q2FwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvPzc4ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUHJvamVjdEJ5Y29ob3J0XFxcXE1lbG9keU1peGVyXFxcXGFwcFxcXFxhcHBcXFxcYXBpXFxcXHN0cmVhbXNcXFxcbmV4dFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3RyZWFtcy9uZXh0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3RyZWFtcy9uZXh0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHJlYW1zL25leHQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0Qnljb2hvcnRcXFxcTWVsb2R5TWl4ZXJcXFxcYXBwXFxcXGFwcFxcXFxhcGlcXFxcc3RyZWFtc1xcXFxuZXh0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zdHJlYW1zL25leHQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Fnext%2Froute&page=%2Fapi%2Fstreams%2Fnext%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Fnext%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/streams/next/route.ts":
/*!***************************************!*\
  !*** ./app/api/streams/next/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n    const user = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findFirst({\n        where: {\n            email: session?.user?.email ?? \"\"\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            msg: \"unathenticated\"\n        }, {\n            status: 403\n        });\n    }\n    const mostUpvotedStream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.findFirst({\n        where: {\n            userId: user.id,\n            played: false\n        },\n        orderBy: {\n            upvote: {\n                _count: \"desc\"\n            }\n        }\n    });\n    await Promise.all([\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.currentStream.upsert({\n            where: {\n                userId: user.id\n            },\n            update: {\n                userId: user.id,\n                streamId: mostUpvotedStream?.id\n            },\n            create: {\n                userId: user.id,\n                streamId: mostUpvotedStream?.id\n            }\n        }),\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.update({\n            where: {\n                id: mostUpvotedStream?.id ?? \"\"\n            },\n            data: {\n                played: true,\n                playedTs: new Date()\n            }\n        })\n    ]);\n    const [streams, activeStream] = await Promise.all([\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.findMany({\n            where: {\n                userId: user.id\n            },\n            include: {\n                _count: {\n                    select: {\n                        upvote: true\n                    }\n                },\n                upvote: {\n                    where: {\n                        userId: user.id\n                    }\n                }\n            }\n        }),\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.currentStream.findFirst({\n            where: {\n                userId: user.id\n            },\n            include: {\n                stream: true\n            }\n        })\n    ]);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        streams: streams.map(({ _count, ...rest })=>({\n                ...rest,\n                upvote: _count.upvote,\n                haveUpvoted: rest.upvote.length ? true : false\n            })),\n        activeStream\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0cmVhbXMvbmV4dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNDO0FBQ0Y7QUFHcEMsZUFBZUc7SUFFbEIsTUFBTUMsVUFBVyxNQUFNSCwyREFBZ0JBO0lBQ3ZDLE1BQU1JLE9BQU8sTUFBTUwscURBQVlBLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1FBQzNDQyxPQUFPO1lBQ0hDLE9BQVFKLFNBQVNDLE1BQU1HLFNBQVM7UUFDcEM7SUFDSjtJQUNBLElBQUcsQ0FBQ0gsTUFDSjtRQUNRLE9BQU9ILHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFDckJDLEtBQU07UUFDVixHQUFFO1lBQ0VDLFFBQVM7UUFDYjtJQUNSO0lBRUEsTUFBTUMsb0JBQW9CLE1BQU1aLHFEQUFZQSxDQUFDYSxNQUFNLENBQUNQLFNBQVMsQ0FBQztRQUMxREMsT0FBTTtZQUNGTyxRQUFTVCxLQUFLVSxFQUFFO1lBQ2hCQyxRQUFTO1FBQ2I7UUFDQUMsU0FBUTtZQUNKQyxRQUFPO2dCQUNIQyxRQUFTO1lBQ2I7UUFDSjtJQUNKO0lBQ0EsTUFBTUMsUUFBUUMsR0FBRyxDQUFDO1FBQUNyQixxREFBWUEsQ0FBQ3NCLGFBQWEsQ0FBQ0MsTUFBTSxDQUFDO1lBQ2pEaEIsT0FBTTtnQkFDRk8sUUFBU1QsS0FBS1UsRUFBRTtZQUNwQjtZQUNBUyxRQUFPO2dCQUNIVixRQUFTVCxLQUFLVSxFQUFFO2dCQUNoQlUsVUFBV2IsbUJBQW1CRztZQUNsQztZQUNBVyxRQUFPO2dCQUNIWixRQUFTVCxLQUFLVSxFQUFFO2dCQUNoQlUsVUFBV2IsbUJBQW1CRztZQUNsQztRQUNKO1FBQUlmLHFEQUFZQSxDQUFDYSxNQUFNLENBQUNXLE1BQU0sQ0FBQztZQUMzQmpCLE9BQU07Z0JBQ0ZRLElBQUtILG1CQUFtQkcsTUFBTTtZQUNsQztZQUNBWSxNQUFLO2dCQUNEWCxRQUFTO2dCQUNUWSxVQUFXLElBQUlDO1lBQ25CO1FBRUo7S0FBRztJQUdILE1BQU0sQ0FBQ0MsU0FBVUMsYUFBYSxHQUFHLE1BQU9YLFFBQVFDLEdBQUcsQ0FBQztRQUFDLE1BQU1yQixxREFBWUEsQ0FBQ2EsTUFBTSxDQUFDbUIsUUFBUSxDQUFDO1lBQ3BGekIsT0FBTTtnQkFDRk8sUUFBUVQsS0FBS1UsRUFBRTtZQUNuQjtZQUNBa0IsU0FBUTtnQkFDSmQsUUFBUztvQkFDTGUsUUFBTzt3QkFDSGhCLFFBQU87b0JBQ1g7Z0JBQ0o7Z0JBQ0FBLFFBQU87b0JBQ0hYLE9BQU87d0JBQ0hPLFFBQVNULEtBQUtVLEVBQUU7b0JBQ3BCO2dCQUNKO1lBQ0o7UUFDSjtRQUFJZixxREFBWUEsQ0FBQ3NCLGFBQWEsQ0FBQ2hCLFNBQVMsQ0FBQztZQUNyQ0MsT0FBTTtnQkFDRk8sUUFBU1QsS0FBS1UsRUFBRTtZQUNwQjtZQUNBa0IsU0FBVTtnQkFDTnBCLFFBQVM7WUFDYjtRQUNKO0tBQUc7SUFDSCxPQUFPWCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1FBQ3JCcUIsU0FBVUEsUUFBUUssR0FBRyxDQUFDLENBQUMsRUFBRWhCLE1BQU0sRUFBSyxHQUFHaUIsTUFBSyxHQUFJO2dCQUM1QyxHQUFHQSxJQUFJO2dCQUNQbEIsUUFBU0MsT0FBT0QsTUFBTTtnQkFDdEJtQixhQUFjRCxLQUFLbEIsTUFBTSxDQUFDb0IsTUFBTSxHQUFHLE9BQU07WUFDN0M7UUFDQVA7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXBwL2FwaS9zdHJlYW1zL25leHQvcm91dGUudHM/ZmNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWFDbGllbnQgfSBmcm9tIFwiQC9hcHAvbGliL2RiXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKVxyXG57XHJcbiAgICBjb25zdCBzZXNzaW9uID0gIGF3YWl0IGdldFNlcnZlclNlc3Npb24oKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlIDp7XHJcbiAgICAgICAgICAgIGVtYWlsIDogc2Vzc2lvbj8udXNlcj8uZW1haWwgPz8gXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZighdXNlcilcclxuICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1zZyA6IFwidW5hdGhlbnRpY2F0ZWRcIlxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA6IDQwM1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vc3RVcHZvdGVkU3RyZWFtID0gYXdhaXQgcHJpc21hQ2xpZW50LnN0cmVhbS5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgdXNlcklkIDogdXNlci5pZCxcclxuICAgICAgICAgICAgcGxheWVkIDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9yZGVyQnk6e1xyXG4gICAgICAgICAgICB1cHZvdGU6e1xyXG4gICAgICAgICAgICAgICAgX2NvdW50IDogXCJkZXNjXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcHJpc21hQ2xpZW50LmN1cnJlbnRTdHJlYW0udXBzZXJ0KHtcclxuICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIHVzZXJJZCA6IHVzZXIuaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZTp7XHJcbiAgICAgICAgICAgIHVzZXJJZCA6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIHN0cmVhbUlkIDogbW9zdFVwdm90ZWRTdHJlYW0/LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGU6e1xyXG4gICAgICAgICAgICB1c2VySWQgOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICBzdHJlYW1JZCA6IG1vc3RVcHZvdGVkU3RyZWFtPy5pZFxyXG4gICAgICAgIH1cclxuICAgIH0pLCBwcmlzbWFDbGllbnQuc3RyZWFtLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICBpZCA6IG1vc3RVcHZvdGVkU3RyZWFtPy5pZCA/PyBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgcGxheWVkIDogdHJ1ZSxcclxuICAgICAgICAgICAgcGxheWVkVHMgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXSlcclxuXHJcblxyXG4gICAgY29uc3QgW3N0cmVhbXMgLCBhY3RpdmVTdHJlYW1dID0gYXdhaXQgIFByb21pc2UuYWxsKFthd2FpdCBwcmlzbWFDbGllbnQuc3RyZWFtLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci5pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZTp7XHJcbiAgICAgICAgICAgIF9jb3VudCAgOntcclxuICAgICAgICAgICAgICAgIHNlbGVjdDp7XHJcbiAgICAgICAgICAgICAgICAgICAgdXB2b3RlOnRydWUgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwdm90ZTp7XHJcbiAgICAgICAgICAgICAgICB3aGVyZSA6e1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLCBwcmlzbWFDbGllbnQuY3VycmVudFN0cmVhbS5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgdXNlcklkIDogdXNlci5pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZSA6IHtcclxuICAgICAgICAgICAgc3RyZWFtIDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXSlcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgc3RyZWFtcyA6IHN0cmVhbXMubWFwKCh7IF9jb3VudCAgICwgLi4ucmVzdH0pPT4oe1xyXG4gICAgICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgICAgICB1cHZvdGUgOiBfY291bnQudXB2b3RlLFxyXG4gICAgICAgICAgICBoYXZlVXB2b3RlZCA6IHJlc3QudXB2b3RlLmxlbmd0aCA/IHRydWUgOmZhbHNlXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGFjdGl2ZVN0cmVhbVxyXG4gICAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hQ2xpZW50IiwiZ2V0U2VydmVyU2Vzc2lvbiIsIk5leHRSZXNwb25zZSIsIkdFVCIsInNlc3Npb24iLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJlbWFpbCIsImpzb24iLCJtc2ciLCJzdGF0dXMiLCJtb3N0VXB2b3RlZFN0cmVhbSIsInN0cmVhbSIsInVzZXJJZCIsImlkIiwicGxheWVkIiwib3JkZXJCeSIsInVwdm90ZSIsIl9jb3VudCIsIlByb21pc2UiLCJhbGwiLCJjdXJyZW50U3RyZWFtIiwidXBzZXJ0IiwidXBkYXRlIiwic3RyZWFtSWQiLCJjcmVhdGUiLCJkYXRhIiwicGxheWVkVHMiLCJEYXRlIiwic3RyZWFtcyIsImFjdGl2ZVN0cmVhbSIsImZpbmRNYW55IiwiaW5jbHVkZSIsInNlbGVjdCIsIm1hcCIsInJlc3QiLCJoYXZlVXB2b3RlZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/streams/next/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstreams%2Fnext%2Froute&page=%2Fapi%2Fstreams%2Fnext%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstreams%2Fnext%2Froute.ts&appDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjectBycohort%5CMelodyMixer%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();