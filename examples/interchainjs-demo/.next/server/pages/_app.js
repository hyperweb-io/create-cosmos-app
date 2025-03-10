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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/defaults.ts":
/*!****************************!*\
  !*** ./config/defaults.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultAssetList: () => (/* binding */ defaultAssetList),\n/* harmony export */   defaultChain: () => (/* binding */ defaultChain),\n/* harmony export */   defaultChainName: () => (/* binding */ defaultChainName),\n/* harmony export */   defaultRpcEndpoint: () => (/* binding */ defaultRpcEndpoint)\n/* harmony export */ });\n/* harmony import */ var _chain_registry_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chain-registry/v2 */ \"@chain-registry/v2\");\n/* harmony import */ var _chain_registry_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chain_registry_v2__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * mainnet: 'injective'\n * testnet: 'injectivetestnet'\n * mainnet rpc: 'https://sentry.tm.injective.network'\n * testnet rpc: 'https://testnet.sentry.tm.injective.network'\n */ const defaultChainName = \"osmosistestnet\" // 'cosmoshub'\n;\nconst defaultRpcEndpoint = \"https://rpc.testnet.osmosis.zone\" // 'https://cosmos-rpc.publicnode.com'\n;\nconst defaultChain = _chain_registry_v2__WEBPACK_IMPORTED_MODULE_0__.chains.find((chain)=>chain.chainName === defaultChainName);\nconst defaultAssetList = _chain_registry_v2__WEBPACK_IMPORTED_MODULE_0__.assetLists.find((assetList)=>assetList.chainName === defaultChainName);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZGVmYXVsdHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdEO0FBRXhEOzs7OztDQUtDLEdBQ00sTUFBTUUsbUJBQW1CLGlCQUFpQixjQUFjO0NBQWY7QUFDekMsTUFBTUMscUJBQXFCLG1DQUFtQyxzQ0FBc0M7Q0FBdkM7QUFFN0QsTUFBTUMsZUFBZUgsc0RBQU1BLENBQUNJLElBQUksQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxTQUFTLEtBQUtMLGtCQUFpQjtBQUVqRixNQUFNTSxtQkFBbUJSLDBEQUFVQSxDQUFDSyxJQUFJLENBQUMsQ0FBQ0ksWUFBY0EsVUFBVUYsU0FBUyxLQUFLTCxrQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY29zbW9sb2d5L2ludGVyY2hhaW5qcy1kZW1vLy4vY29uZmlnL2RlZmF1bHRzLnRzPzAzZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXRMaXN0cywgY2hhaW5zIH0gZnJvbSBcIkBjaGFpbi1yZWdpc3RyeS92MlwiO1xuXG4vKipcbiAqIG1haW5uZXQ6ICdpbmplY3RpdmUnXG4gKiB0ZXN0bmV0OiAnaW5qZWN0aXZldGVzdG5ldCdcbiAqIG1haW5uZXQgcnBjOiAnaHR0cHM6Ly9zZW50cnkudG0uaW5qZWN0aXZlLm5ldHdvcmsnXG4gKiB0ZXN0bmV0IHJwYzogJ2h0dHBzOi8vdGVzdG5ldC5zZW50cnkudG0uaW5qZWN0aXZlLm5ldHdvcmsnXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2hhaW5OYW1lID0gJ29zbW9zaXN0ZXN0bmV0JyAvLyAnY29zbW9zaHViJ1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRScGNFbmRwb2ludCA9ICdodHRwczovL3JwYy50ZXN0bmV0Lm9zbW9zaXMuem9uZScgLy8gJ2h0dHBzOi8vY29zbW9zLXJwYy5wdWJsaWNub2RlLmNvbSdcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDaGFpbiA9IGNoYWlucy5maW5kKChjaGFpbikgPT4gY2hhaW4uY2hhaW5OYW1lID09PSBkZWZhdWx0Q2hhaW5OYW1lKVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEFzc2V0TGlzdCA9IGFzc2V0TGlzdHMuZmluZCgoYXNzZXRMaXN0KSA9PiBhc3NldExpc3QuY2hhaW5OYW1lID09PSBkZWZhdWx0Q2hhaW5OYW1lKSJdLCJuYW1lcyI6WyJhc3NldExpc3RzIiwiY2hhaW5zIiwiZGVmYXVsdENoYWluTmFtZSIsImRlZmF1bHRScGNFbmRwb2ludCIsImRlZmF1bHRDaGFpbiIsImZpbmQiLCJjaGFpbiIsImNoYWluTmFtZSIsImRlZmF1bHRBc3NldExpc3QiLCJhc3NldExpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/defaults.ts\n");

/***/ }),

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ \"./config/defaults.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _defaults__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _defaults__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./config/projects.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _projects__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _projects__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY29zbW9sb2d5L2ludGVyY2hhaW5qcy1kZW1vLy4vY29uZmlnL2luZGV4LnRzPzZkMWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9kZWZhdWx0cyc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2plY3RzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/index.ts\n");

/***/ }),

/***/ "./config/projects.ts":
/*!****************************!*\
  !*** ./config/projects.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dependencies: () => (/* binding */ dependencies),\n/* harmony export */   products: () => (/* binding */ products)\n/* harmony export */ });\nconst products = [\n    {\n        name: \"Interchain Kit\",\n        desc: \"A wallet adapter for react with mobile WalletConnect support for the Cosmos ecosystem.\",\n        link: \"https://github.com/cosmology-tech/interchain-kit\"\n    },\n    {\n        name: \"Telescope\",\n        desc: \"A TypeScript Transpiler for Cosmos Protobufs to generate libraries for Cosmos blockchains.\",\n        link: \"https://github.com/cosmology-tech/telescope\"\n    },\n    {\n        name: \"TS Codegen\",\n        desc: \"The quickest and easiest way to convert CosmWasm Contracts into dev-friendly TypeScript classes.\",\n        link: \"https://github.com/CosmWasm/ts-codegen\"\n    },\n    {\n        name: \"CosmWasm Academy\",\n        desc: \"Master CosmWasm and build your secure, multi-chain dApp on any CosmWasm chain!\",\n        link: \"https://academy.cosmwasm.com/\"\n    },\n    {\n        name: \"Chain Registry\",\n        desc: \"Get chain and asset list information from the npm package for the Official Cosmos chain registry.\",\n        link: \"https://github.com/cosmology-tech/chain-registry\"\n    },\n    {\n        name: \"Videos\",\n        desc: \"How-to videos from the official Cosmology website, with learning resources for building in Cosmos.\",\n        link: \"https://hyperweb.io/learn\"\n    }\n];\nconst dependencies = [\n    {\n        name: \"Interchain JS\",\n        desc: \"A single, universal signing interface for any network. Birthed from the interchain ecosystem for builders. Create adapters for any web3 network.\",\n        link: \"https://github.com/cosmology-tech/interchainjs\"\n    },\n    {\n        name: \"Interchain UI\",\n        desc: \"A simple, modular and cross-framework Component Library for Cosmos\",\n        link: \"https://hyperweb.io/components\"\n    },\n    {\n        name: \"Next.js\",\n        desc: \"A React Framework supports hybrid static & server rendering.\",\n        link: \"https://nextjs.org/\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvcHJvamVjdHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNTyxNQUFNQSxXQUFzQjtJQUNqQztRQUNFQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBRUssTUFBTUMsZUFBMEI7SUFDckM7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0Bjb3Ntb2xvZ3kvaW50ZXJjaGFpbmpzLWRlbW8vLi9jb25maWcvcHJvamVjdHMudHM/MzRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBQcm9qZWN0ID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHM6IFByb2plY3RbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdJbnRlcmNoYWluIEtpdCcsXG4gICAgZGVzYzogJ0Egd2FsbGV0IGFkYXB0ZXIgZm9yIHJlYWN0IHdpdGggbW9iaWxlIFdhbGxldENvbm5lY3Qgc3VwcG9ydCBmb3IgdGhlIENvc21vcyBlY29zeXN0ZW0uJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vbG9neS10ZWNoL2ludGVyY2hhaW4ta2l0JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZWxlc2NvcGUnLFxuICAgIGRlc2M6ICdBIFR5cGVTY3JpcHQgVHJhbnNwaWxlciBmb3IgQ29zbW9zIFByb3RvYnVmcyB0byBnZW5lcmF0ZSBsaWJyYXJpZXMgZm9yIENvc21vcyBibG9ja2NoYWlucy4nLFxuICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vY29zbW9sb2d5LXRlY2gvdGVsZXNjb3BlJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUUyBDb2RlZ2VuJyxcbiAgICBkZXNjOiAnVGhlIHF1aWNrZXN0IGFuZCBlYXNpZXN0IHdheSB0byBjb252ZXJ0IENvc21XYXNtIENvbnRyYWN0cyBpbnRvIGRldi1mcmllbmRseSBUeXBlU2NyaXB0IGNsYXNzZXMuJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0Nvc21XYXNtL3RzLWNvZGVnZW4nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Nvc21XYXNtIEFjYWRlbXknLFxuICAgIGRlc2M6ICdNYXN0ZXIgQ29zbVdhc20gYW5kIGJ1aWxkIHlvdXIgc2VjdXJlLCBtdWx0aS1jaGFpbiBkQXBwIG9uIGFueSBDb3NtV2FzbSBjaGFpbiEnLFxuICAgIGxpbms6ICdodHRwczovL2FjYWRlbXkuY29zbXdhc20uY29tLycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ2hhaW4gUmVnaXN0cnknLFxuICAgIGRlc2M6ICdHZXQgY2hhaW4gYW5kIGFzc2V0IGxpc3QgaW5mb3JtYXRpb24gZnJvbSB0aGUgbnBtIHBhY2thZ2UgZm9yIHRoZSBPZmZpY2lhbCBDb3Ntb3MgY2hhaW4gcmVnaXN0cnkuJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vbG9neS10ZWNoL2NoYWluLXJlZ2lzdHJ5JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdWaWRlb3MnLFxuICAgIGRlc2M6ICdIb3ctdG8gdmlkZW9zIGZyb20gdGhlIG9mZmljaWFsIENvc21vbG9neSB3ZWJzaXRlLCB3aXRoIGxlYXJuaW5nIHJlc291cmNlcyBmb3IgYnVpbGRpbmcgaW4gQ29zbW9zLicsXG4gICAgbGluazogJ2h0dHBzOi8vY29zbW9sb2d5LnpvbmUvbGVhcm4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVuY2llczogUHJvamVjdFtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ludGVyY2hhaW4gSlMnLFxuICAgIGRlc2M6ICdBIHNpbmdsZSwgdW5pdmVyc2FsIHNpZ25pbmcgaW50ZXJmYWNlIGZvciBhbnkgbmV0d29yay4gQmlydGhlZCBmcm9tIHRoZSBpbnRlcmNoYWluIGVjb3N5c3RlbSBmb3IgYnVpbGRlcnMuIENyZWF0ZSBhZGFwdGVycyBmb3IgYW55IHdlYjMgbmV0d29yay4nLFxuICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vY29zbW9sb2d5LXRlY2gvaW50ZXJjaGFpbmpzJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbnRlcmNoYWluIFVJJyxcbiAgICBkZXNjOiAnQSBzaW1wbGUsIG1vZHVsYXIgYW5kIGNyb3NzLWZyYW1ld29yayBDb21wb25lbnQgTGlicmFyeSBmb3IgQ29zbW9zJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9jb3Ntb2xvZ3kuem9uZS9jb21wb25lbnRzJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOZXh0LmpzJyxcbiAgICBkZXNjOiAnQSBSZWFjdCBGcmFtZXdvcmsgc3VwcG9ydHMgaHlicmlkIHN0YXRpYyAmIHNlcnZlciByZW5kZXJpbmcuJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9uZXh0anMub3JnLycsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwibmFtZSIsImRlc2MiLCJsaW5rIiwiZGVwZW5kZW5jaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/projects.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _interchain_ui_react_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @interchain-ui/react/styles */ \"./node_modules/@interchain-ui/react/dist/interchain-ui-kit-react.cjs.css\");\n/* harmony import */ var _interchain_ui_react_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interchain_ui_react_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _interchain_kit_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @interchain-kit/react */ \"@interchain-kit/react\");\n/* harmony import */ var _interchain_kit_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_interchain_kit_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/defaults */ \"./config/defaults.ts\");\n/* harmony import */ var _interchain_kit_keplr_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @interchain-kit/keplr-extension */ \"@interchain-kit/keplr-extension\");\n/* harmony import */ var _interchain_kit_keplr_extension__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_interchain_kit_keplr_extension__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _interchain_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @interchain-ui/react */ \"@interchain-ui/react\");\n/* harmony import */ var _interchain_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_interchain_ui_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config */ \"./config/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({\n    defaultOptions: {\n        queries: {\n            retry: 2,\n            refetchOnWindowFocus: false\n        }\n    }\n});\nfunction CreateCosmosApp({ Component, pageProps }) {\n    const { themeClass } = (0,_interchain_ui_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_interchain_ui_react__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_interchain_kit_react__WEBPACK_IMPORTED_MODULE_4__.ChainProvider, {\n                chains: [\n                    _config_defaults__WEBPACK_IMPORTED_MODULE_5__.defaultChain\n                ],\n                assetLists: [\n                    _config_defaults__WEBPACK_IMPORTED_MODULE_5__.defaultAssetList\n                ],\n                // @ts-ignore\n                wallets: [\n                    _interchain_kit_keplr_extension__WEBPACK_IMPORTED_MODULE_6__.keplrWallet\n                ],\n                signerOptions: {\n                    signing: ()=>{\n                        return {\n                            broadcast: {\n                                checkTx: true,\n                                deliverTx: true\n                            }\n                        };\n                    }\n                },\n                endpointOptions: {\n                    endpoints: {\n                        [_config_defaults__WEBPACK_IMPORTED_MODULE_5__.defaultChainName]: {\n                            rpc: [\n                                _config__WEBPACK_IMPORTED_MODULE_8__.defaultRpcEndpoint\n                            ]\n                        }\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n                    client: queryClient,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_interchain_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        className: themeClass,\n                        minHeight: \"100dvh\",\n                        backgroundColor: (0,_interchain_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue)(\"$white\", \"$background\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/easonsmith/Desktop/cosmology/create-cosmos-app/examples/interchainjs-demo/pages/_app.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/easonsmith/Desktop/cosmology/create-cosmos-app/examples/interchainjs-demo/pages/_app.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/easonsmith/Desktop/cosmology/create-cosmos-app/examples/interchainjs-demo/pages/_app.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/easonsmith/Desktop/cosmology/create-cosmos-app/examples/interchainjs-demo/pages/_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_interchain_ui_react__WEBPACK_IMPORTED_MODULE_7__.Toaster, {\n                position: \"top-right\",\n                closeButton: true\n            }, void 0, false, {\n                fileName: \"/Users/easonsmith/Desktop/cosmology/create-cosmos-app/examples/interchainjs-demo/pages/_app.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/easonsmith/Desktop/cosmology/create-cosmos-app/examples/interchainjs-demo/pages/_app.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCosmosApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNNO0FBR29DO0FBQ25CO0FBSzFCO0FBQ2tDO0FBUWhDO0FBQ2dCO0FBQzlDLE1BQU1hLGNBQWMsSUFBSVosOERBQVdBLENBQUM7SUFDbENhLGdCQUFnQjtRQUNkQyxTQUFTO1lBQ1BDLE9BQU87WUFDUEMsc0JBQXNCO1FBQ3hCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNDLGdCQUFnQixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUN6RCxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHWCw4REFBUUE7SUFFL0IscUJBQ0UsOERBQUNGLCtEQUFhQTs7MEJBQ1osOERBQUNOLGdFQUFhQTtnQkFDWm9CLFFBQVE7b0JBQUNsQiwwREFBWUE7aUJBQUU7Z0JBQ3ZCbUIsWUFBWTtvQkFBQ3BCLDhEQUFnQkE7aUJBQUU7Z0JBQy9CLGFBQWE7Z0JBQ2JxQixTQUFTO29CQUFDbEIsd0VBQVdBO2lCQUFDO2dCQUN0Qm1CLGVBQWU7b0JBQ2JDLFNBQVM7d0JBQ1AsT0FBTzs0QkFDTEMsV0FBVztnQ0FDVEMsU0FBUztnQ0FDVEMsV0FBVzs0QkFDYjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFDQUMsaUJBQWlCO29CQUNmQyxXQUFXO3dCQUNULENBQUMxQiw4REFBZ0JBLENBQUMsRUFBRTs0QkFDbEIyQixLQUFLO2dDQUFDcEIsdURBQWtCQTs2QkFBQzt3QkFDM0I7b0JBQ0Y7Z0JBQ0Y7MEJBRUEsNEVBQUNaLHNFQUFtQkE7b0JBQUNpQyxRQUFRcEI7OEJBQzNCLDRFQUFDTixxREFBR0E7d0JBQ0YyQixXQUFXYjt3QkFDWGMsV0FBVTt3QkFDVkMsaUJBQWlCekIsdUVBQWlCQSxDQUFDLFVBQVU7a0NBSTdDLDRFQUFDUTs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzlCLDhEQUFDWCx5REFBT0E7Z0JBQUM0QixVQUFVO2dCQUFhQyxhQUFhOzs7Ozs7Ozs7Ozs7QUFHbkQ7QUFFQSxpRUFBZXBCLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY29zbW9sb2d5L2ludGVyY2hhaW5qcy1kZW1vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ0BpbnRlcmNoYWluLXVpL3JlYWN0L3N0eWxlcyc7XG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyLCBRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBDaGFpblByb3ZpZGVyIH0gZnJvbSAnQGludGVyY2hhaW4ta2l0L3JlYWN0JztcbmltcG9ydCB7XG4gIGRlZmF1bHRBc3NldExpc3QsXG4gIGRlZmF1bHRDaGFpbixcbiAgZGVmYXVsdENoYWluTmFtZSxcbn0gZnJvbSAnLi4vY29uZmlnL2RlZmF1bHRzJztcbmltcG9ydCB7IGtlcGxyV2FsbGV0IH0gZnJvbSAnQGludGVyY2hhaW4ta2l0L2tlcGxyLWV4dGVuc2lvbic7XG5pbXBvcnQgeyBsZWFwV2FsbGV0IH0gZnJvbSAnQGludGVyY2hhaW4ta2l0L2xlYXAtZXh0ZW5zaW9uJztcbmltcG9ydCB7XG4gIEJveCxcbiAgVGhlbWVQcm92aWRlcixcbiAgVG9hc3RlcixcbiAgdXNlVGhlbWUsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tICdAaW50ZXJjaGFpbi11aS9yZWFjdCc7XG5pbXBvcnQgeyBkZWZhdWx0UnBjRW5kcG9pbnQgfSBmcm9tICdAL2NvbmZpZyc7XG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgcmV0cnk6IDIsXG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBDcmVhdGVDb3Ntb3NBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCB7IHRoZW1lQ2xhc3MgfSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgIDxDaGFpblByb3ZpZGVyXG4gICAgICAgIGNoYWlucz17W2RlZmF1bHRDaGFpbiFdfVxuICAgICAgICBhc3NldExpc3RzPXtbZGVmYXVsdEFzc2V0TGlzdCFdfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHdhbGxldHM9e1trZXBscldhbGxldF19XG4gICAgICAgIHNpZ25lck9wdGlvbnM9e3tcbiAgICAgICAgICBzaWduaW5nOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBicm9hZGNhc3Q6IHtcbiAgICAgICAgICAgICAgICBjaGVja1R4OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRlbGl2ZXJUeDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgZW5kcG9pbnRPcHRpb25zPXt7XG4gICAgICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgICAgICBbZGVmYXVsdENoYWluTmFtZV06IHtcbiAgICAgICAgICAgICAgcnBjOiBbZGVmYXVsdFJwY0VuZHBvaW50XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZUNsYXNzfVxuICAgICAgICAgICAgbWluSGVpZ2h0PVwiMTAwZHZoXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJyR3aGl0ZScsICckYmFja2dyb3VuZCcpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBUT0RPIGZpeCB0eXBlIGVycm9yICovfVxuICAgICAgICAgICAgey8qIEB0cy1pZ25vcmUgKi99XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgIDwvQ2hhaW5Qcm92aWRlcj5cblxuICAgICAgPFRvYXN0ZXIgcG9zaXRpb249eyd0b3AtcmlnaHQnfSBjbG9zZUJ1dHRvbj17dHJ1ZX0gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNvc21vc0FwcDtcbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJDaGFpblByb3ZpZGVyIiwiZGVmYXVsdEFzc2V0TGlzdCIsImRlZmF1bHRDaGFpbiIsImRlZmF1bHRDaGFpbk5hbWUiLCJrZXBscldhbGxldCIsIkJveCIsIlRoZW1lUHJvdmlkZXIiLCJUb2FzdGVyIiwidXNlVGhlbWUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImRlZmF1bHRScGNFbmRwb2ludCIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmV0cnkiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsIkNyZWF0ZUNvc21vc0FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lQ2xhc3MiLCJjaGFpbnMiLCJhc3NldExpc3RzIiwid2FsbGV0cyIsInNpZ25lck9wdGlvbnMiLCJzaWduaW5nIiwiYnJvYWRjYXN0IiwiY2hlY2tUeCIsImRlbGl2ZXJUeCIsImVuZHBvaW50T3B0aW9ucyIsImVuZHBvaW50cyIsInJwYyIsImNsaWVudCIsImNsYXNzTmFtZSIsIm1pbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwiY2xvc2VCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chain-registry/v2":
/*!*************************************!*\
  !*** external "@chain-registry/v2" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chain-registry/v2");

/***/ }),

/***/ "@interchain-kit/keplr-extension":
/*!**************************************************!*\
  !*** external "@interchain-kit/keplr-extension" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@interchain-kit/keplr-extension");

/***/ }),

/***/ "@interchain-kit/react":
/*!****************************************!*\
  !*** external "@interchain-kit/react" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@interchain-kit/react");

/***/ }),

/***/ "@interchain-ui/react":
/*!***************************************!*\
  !*** external "@interchain-ui/react" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@interchain-ui/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@interchain-ui"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();