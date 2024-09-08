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

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// import { prismaClient } from \"@/app/lib/db\";\n// import { getServerSession } from \"next-auth\";\n// import { NextResponse } from \"next/server\";\n// export async function GET()\n// {\n//     const session =  await getServerSession();\n//     const user = await prismaClient.user.findFirst({\n//         where :{\n//             email : session?.user?.email ?? \"\"\n//         }\n//     })\n//     if(!user)\n//     {\n//             return NextResponse.json({\n//                 msg : \"unathenticated\"\n//             },{\n//                 status : 403\n//             })\n//     }\n//     const mostUpvotedStream = await prismaClient.stream.findFirst({\n//         where:{\n//             userId : user.id,\n//             played : false\n//         },\n//         orderBy:{\n//             upvote:{\n//                 _count : \"desc\"\n//             }\n//         }\n//     })\n//     await Promise.all([prismaClient.currentStream.upsert({\n//         where:{\n//             userId : user.id\n//         },\n//         update:{\n//             userId : user.id,\n//             streamId : mostUpvotedStream?.id\n//         },\n//         create:{\n//             userId : user.id,\n//             streamId : mostUpvotedStream?.id\n//         }\n//     }), prismaClient.stream.update({\n//         where:{\n//             id : mostUpvotedStream?.id ?? \"\"\n//         },\n//         data:{\n//             played : true,\n//             playedTs : new Date()\n//         }\n//     })])\n//     const [streams , activeStream] = await  Promise.all([await prismaClient.stream.findMany({\n//         where:{\n//             userId: user.id\n//         },\n//         include:{\n//             _count  :{\n//                 select:{\n//                     upvote:true \n//                 }\n//             },\n//             upvote:{\n//                 where :{\n//                     userId : user.id\n//                 }\n//             }\n//         }\n//     }), prismaClient.currentStream.findFirst({\n//         where:{\n//             userId : user.id\n//         },\n//         include : {\n//             stream : true\n//         }\n//     })])\n//     return NextResponse.json({\n//         streams : streams.map(({ _count   , ...rest})=>({\n//             ...rest,\n//             upvote : _count.upvote,\n//             haveUpvoted : rest.upvote.length ? true :false\n//         })),\n//         activeStream\n//     })\n// }\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n    // Ensure session exists\n    if (!session || !session.user?.email) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            msg: \"unauthenticated\"\n        }, {\n            status: 403\n        });\n    }\n    const user = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.user.findFirst({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            msg: \"unauthenticated\"\n        }, {\n            status: 403\n        });\n    }\n    const mostUpvotedStream = await _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.findFirst({\n        where: {\n            userId: user.id,\n            played: false\n        },\n        orderBy: {\n            upvote: {\n                _count: \"desc\"\n            }\n        }\n    });\n    // If no upvoted streams are found\n    if (!mostUpvotedStream) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            msg: \"No streams available to upvote\"\n        }, {\n            status: 404\n        });\n    }\n    await Promise.all([\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.currentStream.upsert({\n            where: {\n                userId: user.id\n            },\n            update: {\n                userId: user.id,\n                streamId: mostUpvotedStream.id\n            },\n            create: {\n                userId: user.id,\n                streamId: mostUpvotedStream.id\n            }\n        }),\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.update({\n            where: {\n                id: mostUpvotedStream.id\n            },\n            data: {\n                played: true,\n                playedTs: new Date()\n            }\n        })\n    ]);\n    const [streams, activeStream] = await Promise.all([\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.stream.findMany({\n            where: {\n                userId: user.id\n            },\n            include: {\n                _count: {\n                    select: {\n                        upvote: true\n                    }\n                },\n                upvote: {\n                    where: {\n                        userId: user.id\n                    }\n                }\n            }\n        }),\n        _app_lib_db__WEBPACK_IMPORTED_MODULE_0__.prismaClient.currentStream.findFirst({\n            where: {\n                userId: user.id\n            },\n            include: {\n                stream: true\n            }\n        })\n    ]);\n    // Format streams data for response\n    const formattedStreams = streams.map(({ _count, ...rest })=>({\n            ...rest,\n            upvote: _count.upvote,\n            haveUpvoted: rest.upvote.length > 0\n        }));\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        streams: formattedStreams,\n        activeStream\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtZQUNyQm9CLGFBQWFELEtBQUtuQixNQUFNLENBQUNxQixNQUFNLEdBQUc7UUFDcEM7SUFFQSxPQUFPckMscURBQVlBLENBQUNLLElBQUksQ0FBQztRQUN2QnVCLFNBQVNLO1FBQ1RKO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2FwcC9hcGkvc3RyZWFtcy9uZXh0L3JvdXRlLnRzP2ZjYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcHJpc21hQ2xpZW50IH0gZnJvbSBcIkAvYXBwL2xpYi9kYlwiO1xyXG4vLyBpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG4vLyBpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKClcclxuLy8ge1xyXG4vLyAgICAgY29uc3Qgc2Vzc2lvbiA9ICBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKCk7XHJcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hQ2xpZW50LnVzZXIuZmluZEZpcnN0KHtcclxuLy8gICAgICAgICB3aGVyZSA6e1xyXG4vLyAgICAgICAgICAgICBlbWFpbCA6IHNlc3Npb24/LnVzZXI/LmVtYWlsID8/IFwiXCJcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyAgICAgaWYoIXVzZXIpXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbi8vICAgICAgICAgICAgICAgICBtc2cgOiBcInVuYXRoZW50aWNhdGVkXCJcclxuLy8gICAgICAgICAgICAgfSx7XHJcbi8vICAgICAgICAgICAgICAgICBzdGF0dXMgOiA0MDNcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjb25zdCBtb3N0VXB2b3RlZFN0cmVhbSA9IGF3YWl0IHByaXNtYUNsaWVudC5zdHJlYW0uZmluZEZpcnN0KHtcclxuLy8gICAgICAgICB3aGVyZTp7XHJcbi8vICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXIuaWQsXHJcbi8vICAgICAgICAgICAgIHBsYXllZCA6IGZhbHNlXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBvcmRlckJ5OntcclxuLy8gICAgICAgICAgICAgdXB2b3RlOntcclxuLy8gICAgICAgICAgICAgICAgIF9jb3VudCA6IFwiZGVzY1wiXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3ByaXNtYUNsaWVudC5jdXJyZW50U3RyZWFtLnVwc2VydCh7XHJcbi8vICAgICAgICAgd2hlcmU6e1xyXG4vLyAgICAgICAgICAgICB1c2VySWQgOiB1c2VyLmlkXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB1cGRhdGU6e1xyXG4vLyAgICAgICAgICAgICB1c2VySWQgOiB1c2VyLmlkLFxyXG4vLyAgICAgICAgICAgICBzdHJlYW1JZCA6IG1vc3RVcHZvdGVkU3RyZWFtPy5pZFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgY3JlYXRlOntcclxuLy8gICAgICAgICAgICAgdXNlcklkIDogdXNlci5pZCxcclxuLy8gICAgICAgICAgICAgc3RyZWFtSWQgOiBtb3N0VXB2b3RlZFN0cmVhbT8uaWRcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KSwgcHJpc21hQ2xpZW50LnN0cmVhbS51cGRhdGUoe1xyXG4vLyAgICAgICAgIHdoZXJlOntcclxuLy8gICAgICAgICAgICAgaWQgOiBtb3N0VXB2b3RlZFN0cmVhbT8uaWQgPz8gXCJcIlxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgZGF0YTp7XHJcbi8vICAgICAgICAgICAgIHBsYXllZCA6IHRydWUsXHJcbi8vICAgICAgICAgICAgIHBsYXllZFRzIDogbmV3IERhdGUoKVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICB9KV0pXHJcblxyXG5cclxuLy8gICAgIGNvbnN0IFtzdHJlYW1zICwgYWN0aXZlU3RyZWFtXSA9IGF3YWl0ICBQcm9taXNlLmFsbChbYXdhaXQgcHJpc21hQ2xpZW50LnN0cmVhbS5maW5kTWFueSh7XHJcbi8vICAgICAgICAgd2hlcmU6e1xyXG4vLyAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGluY2x1ZGU6e1xyXG4vLyAgICAgICAgICAgICBfY291bnQgIDp7XHJcbi8vICAgICAgICAgICAgICAgICBzZWxlY3Q6e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHVwdm90ZTp0cnVlIFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB1cHZvdGU6e1xyXG4vLyAgICAgICAgICAgICAgICAgd2hlcmUgOntcclxuLy8gICAgICAgICAgICAgICAgICAgICB1c2VySWQgOiB1c2VyLmlkXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KSwgcHJpc21hQ2xpZW50LmN1cnJlbnRTdHJlYW0uZmluZEZpcnN0KHtcclxuLy8gICAgICAgICB3aGVyZTp7XHJcbi8vICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXIuaWRcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGluY2x1ZGUgOiB7XHJcbi8vICAgICAgICAgICAgIHN0cmVhbSA6IHRydWVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KV0pXHJcbi8vICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4vLyAgICAgICAgIHN0cmVhbXMgOiBzdHJlYW1zLm1hcCgoeyBfY291bnQgICAsIC4uLnJlc3R9KT0+KHtcclxuLy8gICAgICAgICAgICAgLi4ucmVzdCxcclxuLy8gICAgICAgICAgICAgdXB2b3RlIDogX2NvdW50LnVwdm90ZSxcclxuLy8gICAgICAgICAgICAgaGF2ZVVwdm90ZWQgOiByZXN0LnVwdm90ZS5sZW5ndGggPyB0cnVlIDpmYWxzZVxyXG4vLyAgICAgICAgIH0pKSxcclxuLy8gICAgICAgICBhY3RpdmVTdHJlYW1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuXHJcblxyXG5pbXBvcnQgeyBwcmlzbWFDbGllbnQgfSBmcm9tIFwiQC9hcHAvbGliL2RiXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpO1xyXG5cclxuICAvLyBFbnN1cmUgc2Vzc2lvbiBleGlzdHNcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcj8uZW1haWwpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIG1zZzogXCJ1bmF1dGhlbnRpY2F0ZWRcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogNDAzLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYUNsaWVudC51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHtcclxuICAgICAgICBtc2c6IFwidW5hdXRoZW50aWNhdGVkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IDQwMyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vc3RVcHZvdGVkU3RyZWFtID0gYXdhaXQgcHJpc21hQ2xpZW50LnN0cmVhbS5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICBwbGF5ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHtcclxuICAgICAgdXB2b3RlOiB7XHJcbiAgICAgICAgX2NvdW50OiBcImRlc2NcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIElmIG5vIHVwdm90ZWQgc3RyZWFtcyBhcmUgZm91bmRcclxuICBpZiAoIW1vc3RVcHZvdGVkU3RyZWFtKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHtcclxuICAgICAgICBtc2c6IFwiTm8gc3RyZWFtcyBhdmFpbGFibGUgdG8gdXB2b3RlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IDQwNCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHByaXNtYUNsaWVudC5jdXJyZW50U3RyZWFtLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGU6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgc3RyZWFtSWQ6IG1vc3RVcHZvdGVkU3RyZWFtLmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGU6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgc3RyZWFtSWQ6IG1vc3RVcHZvdGVkU3RyZWFtLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBwcmlzbWFDbGllbnQuc3RyZWFtLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IG1vc3RVcHZvdGVkU3RyZWFtLmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGxheWVkOiB0cnVlLFxyXG4gICAgICAgIHBsYXllZFRzOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IFtzdHJlYW1zLCBhY3RpdmVTdHJlYW1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcHJpc21hQ2xpZW50LnN0cmVhbS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgX2NvdW50OiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgdXB2b3RlOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwdm90ZToge1xyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBwcmlzbWFDbGllbnQuY3VycmVudFN0cmVhbS5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0pO1xyXG5cclxuICAvLyBGb3JtYXQgc3RyZWFtcyBkYXRhIGZvciByZXNwb25zZVxyXG4gIGNvbnN0IGZvcm1hdHRlZFN0cmVhbXMgPSBzdHJlYW1zLm1hcCgoeyBfY291bnQsIC4uLnJlc3QgfSkgPT4gKHtcclxuICAgIC4uLnJlc3QsXHJcbiAgICB1cHZvdGU6IF9jb3VudC51cHZvdGUsXHJcbiAgICBoYXZlVXB2b3RlZDogcmVzdC51cHZvdGUubGVuZ3RoID4gMCxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICBzdHJlYW1zOiBmb3JtYXR0ZWRTdHJlYW1zLFxyXG4gICAgYWN0aXZlU3RyZWFtLFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWFDbGllbnQiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsImpzb24iLCJtc2ciLCJzdGF0dXMiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIm1vc3RVcHZvdGVkU3RyZWFtIiwic3RyZWFtIiwidXNlcklkIiwiaWQiLCJwbGF5ZWQiLCJvcmRlckJ5IiwidXB2b3RlIiwiX2NvdW50IiwiUHJvbWlzZSIsImFsbCIsImN1cnJlbnRTdHJlYW0iLCJ1cHNlcnQiLCJ1cGRhdGUiLCJzdHJlYW1JZCIsImNyZWF0ZSIsImRhdGEiLCJwbGF5ZWRUcyIsIkRhdGUiLCJzdHJlYW1zIiwiYWN0aXZlU3RyZWFtIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwic2VsZWN0IiwiZm9ybWF0dGVkU3RyZWFtcyIsIm1hcCIsInJlc3QiLCJoYXZlVXB2b3RlZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/streams/next/route.ts\n");

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