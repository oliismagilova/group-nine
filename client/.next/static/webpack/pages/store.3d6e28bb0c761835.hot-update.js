"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/store",{

/***/ "./constants/store.js":
/*!****************************!*\
  !*** ./constants/store.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _uuid = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\nmodule.exports = [\n    {\n        id: (0, _uuid).v4(),\n        img: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',\n        name: 'Bottle',\n        price: '35',\n        path: '/'\n    },\n    {\n        id: (0, _uuid).v4(),\n        img: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',\n        name: 'Tumbler',\n        price: '30',\n        path: '/store'\n    },\n    {\n        id: (0, _uuid).v4(),\n        img: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',\n        name: 'Bottle',\n        price: '35',\n        path: '/store'\n    },\n    {\n        id: (0, _uuid).v4(),\n        img: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',\n        name: 'Tumbler',\n        price: '30',\n        path: '/store'\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDNkIsR0FBTSxDQUFOLEtBQU07QUFFbkNBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDaEIsQ0FBQztRQUNDQyxFQUFFLE1BSnVCLEtBQU07UUFLL0JDLEdBQUcsRUFBRSxDQUFnRjtRQUNyRkMsSUFBSSxFQUFFLENBQVE7UUFDZEMsS0FBSyxFQUFFLENBQUk7UUFDWEMsSUFBSSxFQUFFLENBQUc7SUFDWCxDQUFDO0lBQ0QsQ0FBQztRQUNDSixFQUFFLE1BWHVCLEtBQU07UUFZL0JDLEdBQUcsRUFBRSxDQUFnRjtRQUNyRkMsSUFBSSxFQUFFLENBQVM7UUFDZkMsS0FBSyxFQUFFLENBQUk7UUFDWEMsSUFBSSxFQUFFLENBQVE7SUFDaEIsQ0FBQztJQUNELENBQUM7UUFDQ0osRUFBRSxNQWxCdUIsS0FBTTtRQW1CL0JDLEdBQUcsRUFBRSxDQUFnRjtRQUNyRkMsSUFBSSxFQUFFLENBQVE7UUFDZEMsS0FBSyxFQUFFLENBQUk7UUFDWEMsSUFBSSxFQUFFLENBQVE7SUFDaEIsQ0FBQztJQUNELENBQUM7UUFDQ0osRUFBRSxNQXpCdUIsS0FBTTtRQTBCL0JDLEdBQUcsRUFBRSxDQUFnRjtRQUNyRkMsSUFBSSxFQUFFLENBQVM7UUFDZkMsS0FBSyxFQUFFLENBQUk7UUFDWEMsSUFBSSxFQUFFLENBQVE7SUFDaEIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0b3JlLmpzPzYzNmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBmaWxlIGlzIHRlbXBvcmFyeVxyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgaW1nOiAnaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9jYXRlZ29yeS1wYWdlLTA0LWltYWdlLWNhcmQtMDEuanBnJyxcclxuICAgIG5hbWU6ICdCb3R0bGUnLFxyXG4gICAgcHJpY2U6ICczNScsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogdXVpZHY0KCksXHJcbiAgICBpbWc6ICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL2NhdGVnb3J5LXBhZ2UtMDQtaW1hZ2UtY2FyZC0wMi5qcGcnLFxyXG4gICAgbmFtZTogJ1R1bWJsZXInLFxyXG4gICAgcHJpY2U6ICczMCcsXHJcbiAgICBwYXRoOiAnL3N0b3JlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiB1dWlkdjQoKSxcclxuICAgIGltZzogJ2h0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2Vjb21tZXJjZS1pbWFnZXMvY2F0ZWdvcnktcGFnZS0wNC1pbWFnZS1jYXJkLTAxLmpwZycsXHJcbiAgICBuYW1lOiAnQm90dGxlJyxcclxuICAgIHByaWNlOiAnMzUnLFxyXG4gICAgcGF0aDogJy9zdG9yZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogdXVpZHY0KCksXHJcbiAgICBpbWc6ICdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9lY29tbWVyY2UtaW1hZ2VzL2NhdGVnb3J5LXBhZ2UtMDQtaW1hZ2UtY2FyZC0wMi5qcGcnLFxyXG4gICAgbmFtZTogJ1R1bWJsZXInLFxyXG4gICAgcHJpY2U6ICczMCcsXHJcbiAgICBwYXRoOiAnL3N0b3JlJyxcclxuICB9LFxyXG5dXHJcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaWQiLCJpbWciLCJuYW1lIiwicHJpY2UiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/store.js\n");

/***/ })

});