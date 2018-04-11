(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Units", [], factory);
	else if(typeof exports === 'object')
		exports["Units"] = factory();
	else
		root["Units"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/constants-browserify/constants.json":
/*!**********************************************************!*\
  !*** ./node_modules/constants-browserify/constants.json ***!
  \**********************************************************/
/*! exports provided: O_RDONLY, O_WRONLY, O_RDWR, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOFOLLOW, O_SYNC, O_SYMLINK, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGSYS, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_STORE, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, NPN_ENABLED, RSA_PKCS1_PADDING, RSA_SSLV23_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, F_OK, R_OK, W_OK, X_OK, UV_UDP_REUSEADDR, default */
/***/ (function(module) {

eval("module.exports = {\"O_RDONLY\":0,\"O_WRONLY\":1,\"O_RDWR\":2,\"S_IFMT\":61440,\"S_IFREG\":32768,\"S_IFDIR\":16384,\"S_IFCHR\":8192,\"S_IFBLK\":24576,\"S_IFIFO\":4096,\"S_IFLNK\":40960,\"S_IFSOCK\":49152,\"O_CREAT\":512,\"O_EXCL\":2048,\"O_NOCTTY\":131072,\"O_TRUNC\":1024,\"O_APPEND\":8,\"O_DIRECTORY\":1048576,\"O_NOFOLLOW\":256,\"O_SYNC\":128,\"O_SYMLINK\":2097152,\"O_NONBLOCK\":4,\"S_IRWXU\":448,\"S_IRUSR\":256,\"S_IWUSR\":128,\"S_IXUSR\":64,\"S_IRWXG\":56,\"S_IRGRP\":32,\"S_IWGRP\":16,\"S_IXGRP\":8,\"S_IRWXO\":7,\"S_IROTH\":4,\"S_IWOTH\":2,\"S_IXOTH\":1,\"E2BIG\":7,\"EACCES\":13,\"EADDRINUSE\":48,\"EADDRNOTAVAIL\":49,\"EAFNOSUPPORT\":47,\"EAGAIN\":35,\"EALREADY\":37,\"EBADF\":9,\"EBADMSG\":94,\"EBUSY\":16,\"ECANCELED\":89,\"ECHILD\":10,\"ECONNABORTED\":53,\"ECONNREFUSED\":61,\"ECONNRESET\":54,\"EDEADLK\":11,\"EDESTADDRREQ\":39,\"EDOM\":33,\"EDQUOT\":69,\"EEXIST\":17,\"EFAULT\":14,\"EFBIG\":27,\"EHOSTUNREACH\":65,\"EIDRM\":90,\"EILSEQ\":92,\"EINPROGRESS\":36,\"EINTR\":4,\"EINVAL\":22,\"EIO\":5,\"EISCONN\":56,\"EISDIR\":21,\"ELOOP\":62,\"EMFILE\":24,\"EMLINK\":31,\"EMSGSIZE\":40,\"EMULTIHOP\":95,\"ENAMETOOLONG\":63,\"ENETDOWN\":50,\"ENETRESET\":52,\"ENETUNREACH\":51,\"ENFILE\":23,\"ENOBUFS\":55,\"ENODATA\":96,\"ENODEV\":19,\"ENOENT\":2,\"ENOEXEC\":8,\"ENOLCK\":77,\"ENOLINK\":97,\"ENOMEM\":12,\"ENOMSG\":91,\"ENOPROTOOPT\":42,\"ENOSPC\":28,\"ENOSR\":98,\"ENOSTR\":99,\"ENOSYS\":78,\"ENOTCONN\":57,\"ENOTDIR\":20,\"ENOTEMPTY\":66,\"ENOTSOCK\":38,\"ENOTSUP\":45,\"ENOTTY\":25,\"ENXIO\":6,\"EOPNOTSUPP\":102,\"EOVERFLOW\":84,\"EPERM\":1,\"EPIPE\":32,\"EPROTO\":100,\"EPROTONOSUPPORT\":43,\"EPROTOTYPE\":41,\"ERANGE\":34,\"EROFS\":30,\"ESPIPE\":29,\"ESRCH\":3,\"ESTALE\":70,\"ETIME\":101,\"ETIMEDOUT\":60,\"ETXTBSY\":26,\"EWOULDBLOCK\":35,\"EXDEV\":18,\"SIGHUP\":1,\"SIGINT\":2,\"SIGQUIT\":3,\"SIGILL\":4,\"SIGTRAP\":5,\"SIGABRT\":6,\"SIGIOT\":6,\"SIGBUS\":10,\"SIGFPE\":8,\"SIGKILL\":9,\"SIGUSR1\":30,\"SIGSEGV\":11,\"SIGUSR2\":31,\"SIGPIPE\":13,\"SIGALRM\":14,\"SIGTERM\":15,\"SIGCHLD\":20,\"SIGCONT\":19,\"SIGSTOP\":17,\"SIGTSTP\":18,\"SIGTTIN\":21,\"SIGTTOU\":22,\"SIGURG\":16,\"SIGXCPU\":24,\"SIGXFSZ\":25,\"SIGVTALRM\":26,\"SIGPROF\":27,\"SIGWINCH\":28,\"SIGIO\":23,\"SIGSYS\":12,\"SSL_OP_ALL\":2147486719,\"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION\":262144,\"SSL_OP_CIPHER_SERVER_PREFERENCE\":4194304,\"SSL_OP_CISCO_ANYCONNECT\":32768,\"SSL_OP_COOKIE_EXCHANGE\":8192,\"SSL_OP_CRYPTOPRO_TLSEXT_BUG\":2147483648,\"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS\":2048,\"SSL_OP_EPHEMERAL_RSA\":0,\"SSL_OP_LEGACY_SERVER_CONNECT\":4,\"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER\":32,\"SSL_OP_MICROSOFT_SESS_ID_BUG\":1,\"SSL_OP_MSIE_SSLV2_RSA_PADDING\":0,\"SSL_OP_NETSCAPE_CA_DN_BUG\":536870912,\"SSL_OP_NETSCAPE_CHALLENGE_BUG\":2,\"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG\":1073741824,\"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG\":8,\"SSL_OP_NO_COMPRESSION\":131072,\"SSL_OP_NO_QUERY_MTU\":4096,\"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION\":65536,\"SSL_OP_NO_SSLv2\":16777216,\"SSL_OP_NO_SSLv3\":33554432,\"SSL_OP_NO_TICKET\":16384,\"SSL_OP_NO_TLSv1\":67108864,\"SSL_OP_NO_TLSv1_1\":268435456,\"SSL_OP_NO_TLSv1_2\":134217728,\"SSL_OP_PKCS1_CHECK_1\":0,\"SSL_OP_PKCS1_CHECK_2\":0,\"SSL_OP_SINGLE_DH_USE\":1048576,\"SSL_OP_SINGLE_ECDH_USE\":524288,\"SSL_OP_SSLEAY_080_CLIENT_DH_BUG\":128,\"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG\":0,\"SSL_OP_TLS_BLOCK_PADDING_BUG\":512,\"SSL_OP_TLS_D5_BUG\":256,\"SSL_OP_TLS_ROLLBACK_BUG\":8388608,\"ENGINE_METHOD_DSA\":2,\"ENGINE_METHOD_DH\":4,\"ENGINE_METHOD_RAND\":8,\"ENGINE_METHOD_ECDH\":16,\"ENGINE_METHOD_ECDSA\":32,\"ENGINE_METHOD_CIPHERS\":64,\"ENGINE_METHOD_DIGESTS\":128,\"ENGINE_METHOD_STORE\":256,\"ENGINE_METHOD_PKEY_METHS\":512,\"ENGINE_METHOD_PKEY_ASN1_METHS\":1024,\"ENGINE_METHOD_ALL\":65535,\"ENGINE_METHOD_NONE\":0,\"DH_CHECK_P_NOT_SAFE_PRIME\":2,\"DH_CHECK_P_NOT_PRIME\":1,\"DH_UNABLE_TO_CHECK_GENERATOR\":4,\"DH_NOT_SUITABLE_GENERATOR\":8,\"NPN_ENABLED\":1,\"RSA_PKCS1_PADDING\":1,\"RSA_SSLV23_PADDING\":2,\"RSA_NO_PADDING\":3,\"RSA_PKCS1_OAEP_PADDING\":4,\"RSA_X931_PADDING\":5,\"RSA_PKCS1_PSS_PADDING\":6,\"POINT_CONVERSION_COMPRESSED\":2,\"POINT_CONVERSION_UNCOMPRESSED\":4,\"POINT_CONVERSION_HYBRID\":6,\"F_OK\":0,\"R_OK\":4,\"W_OK\":2,\"X_OK\":1,\"UV_UDP_REUSEADDR\":4};\n\n//# sourceURL=webpack://Units/./node_modules/constants-browserify/constants.json?");

/***/ }),

/***/ "./src/Conversions.js":
/*!****************************!*\
  !*** ./src/Conversions.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rupeeDollar = __webpack_require__(/*! ./conversions/rupeeDollar */ \"./src/conversions/rupeeDollar.js\");\n\nvar _rupeeKWD = __webpack_require__(/*! ./conversions/rupeeKWD */ \"./src/conversions/rupeeKWD.js\");\n\nvar _fahrenheitCelcius = __webpack_require__(/*! ./conversions/fahrenheitCelcius */ \"./src/conversions/fahrenheitCelcius.js\");\n\nvar _kmMile = __webpack_require__(/*! ./conversions/kmMile */ \"./src/conversions/kmMile.js\");\n\nvar _kmphMph = __webpack_require__(/*! ./conversions/kmphMph */ \"./src/conversions/kmphMph.js\");\n\nvar _literGallon = __webpack_require__(/*! ./conversions/literGallon */ \"./src/conversions/literGallon.js\");\n\nvar _kgPound = __webpack_require__(/*! ./conversions/kgPound */ \"./src/conversions/kgPound.js\");\n\nvar _kpaPsi = __webpack_require__(/*! ./conversions/kpaPsi */ \"./src/conversions/kpaPsi.js\");\n\nexports.default = {\n    rupeeToDollar: _rupeeDollar.rupeeToDollar,\n    dollarToRupee: _rupeeDollar.dollarToRupee,\n    rupeeToKWD: _rupeeKWD.rupeeToKWD,\n    KWDToRupee: _rupeeKWD.KWDToRupee,\n    fahrenheitToCelcius: _fahrenheitCelcius.fahrenheitToCelcius,\n    celciusToFahrenheit: _fahrenheitCelcius.celciusToFahrenheit,\n    mileToKm: _kmMile.mileToKm,\n    kmToMile: _kmMile.kmToMile,\n    literToGallon: _literGallon.literToGallon,\n    gallonToLiter: _literGallon.gallonToLiter,\n    mphToKmph: _kmphMph.mphToKmph,\n    kmphToMph: _kmphMph.kmphToMph,\n    kgToPound: _kgPound.kgToPound,\n    poundToKg: _kgPound.poundToKg,\n    kpaToPsi: _kpaPsi.kpaToPsi,\n    psiToKpa: _kpaPsi.psiToKpa\n};\n\n//# sourceURL=webpack://Units/./src/Conversions.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar defaultConfig = exports.defaultConfig = {\n    currency: {\n        unit: {\n            name: 'rupee',\n            symbol: '₹'\n        }\n    },\n    fuel: {\n        unit: {\n            name: 'liter',\n            symbol: 'L'\n        }\n    },\n    volume: {\n        unit: {\n            name: 'liter',\n            symbol: 'L'\n        }\n    },\n    speed: {\n        unit: {\n            name: 'kmph',\n            symbol: 'km/hr'\n        }\n    },\n    distance: {\n        unit: {\n            name: 'km',\n            symbol: 'km'\n        }\n    },\n    temperature: {\n        unit: {\n            name: 'celcius',\n            symbol: '°C'\n        }\n    },\n    pressure: {\n        unit: {\n            name: 'kpa',\n            symbol: 'kpa'\n        }\n    },\n    mass: {\n        unit: {\n            name: 'kg',\n            symbol: 'kg'\n        }\n    },\n    dollarPerRupee: 0.015,\n    rupeePerDollar: 65,\n    KWDPerRupee: 0.0046,\n    rupeePerKWD: 217,\n    milePerKm: 0.62,\n    kmPerMile: 1.61,\n    gallonPerLiter: 0.264,\n    literPerGallon: 3.785,\n    mphPerKmph: 0.62,\n    kmphPerMph: 1.61,\n    poundPerKg: 2.20,\n    kgPerPound: 0.453,\n    psiPerKpa: 0.145,\n    kpaPerPsi: 6.89\n};\n\n//# sourceURL=webpack://Units/./src/constants.js?");

/***/ }),

/***/ "./src/conversions/fahrenheitCelcius.js":
/*!**********************************************!*\
  !*** ./src/conversions/fahrenheitCelcius.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.fahrenheitToCelcius = fahrenheitToCelcius;\nexports.celciusToFahrenheit = celciusToFahrenheit;\n\nvar _constants = __webpack_require__(/*! constants */ \"./node_modules/constants-browserify/constants.json\");\n\nfunction fahrenheitToCelcius(value) {\n    return (value - 32) * 5 / 9;\n}\n\nfunction celciusToFahrenheit(value) {\n    return value * 9 / 5 + 32;\n}\n\n//# sourceURL=webpack://Units/./src/conversions/fahrenheitCelcius.js?");

/***/ }),

/***/ "./src/conversions/kgPound.js":
/*!************************************!*\
  !*** ./src/conversions/kgPound.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.poundToKg = poundToKg;\nexports.kgToPound = kgToPound;\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\nfunction poundToKg(value, kgPerPound) {\n    return value * (kgPerPound || _constants.defaultConfig.kgPerPound);\n}\n\nfunction kgToPound(value, poundPerKg) {\n    return value * (poundPerKg || _constants.defaultConfig.poundPerKg);\n}\n\n//# sourceURL=webpack://Units/./src/conversions/kgPound.js?");

/***/ }),

/***/ "./src/conversions/kmMile.js":
/*!***********************************!*\
  !*** ./src/conversions/kmMile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.mileToKm = mileToKm;\nexports.kmToMile = kmToMile;\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\nfunction mileToKm(value, kmPerMile) {\n    return value * (kmPerMile || _constants.defaultConfig.kmPerMile);\n}\n\nfunction kmToMile(value, milePerKm) {\n    return value * (milePerKm || _constants.defaultConfig.milePerKm);\n}\n\n//# sourceURL=webpack://Units/./src/conversions/kmMile.js?");

/***/ }),

/***/ "./src/conversions/kmphMph.js":
/*!************************************!*\
  !*** ./src/conversions/kmphMph.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.mphToKmph = mphToKmph;\nexports.kmphToMph = kmphToMph;\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\nfunction mphToKmph(value, kmphPerMph) {\n    return value * (kmphPerMph || _constants.defaultConfig.kmphPerMph);\n}\n\nfunction kmphToMph(value, mphPerKmph) {\n    return value * (mphPerKmph || _constants.defaultConfig.mphPerKmph);\n}\n\n//# sourceURL=webpack://Units/./src/conversions/kmphMph.js?");

/***/ }),

/***/ "./src/conversions/kpaPsi.js":
/*!***********************************!*\
  !*** ./src/conversions/kpaPsi.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.psiToKpa = psiToKpa;\nexports.kpaToPsi = kpaToPsi;\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\nfunction psiToKpa(value, kpaPerPsi) {\n    return value * (kpaPerPsi || _constants.defaultConfig.kpaPerPsi);\n}\n\nfunction kpaToPsi(value, psiPerKpa) {\n    return value * (psiPerKpa || _constants.defaultConfig.psiPerKpa);\n}\n\n//# sourceURL=webpack://Units/./src/conversions/kpaPsi.js?");

/***/ }),

/***/ "./src/conversions/literGallon.js":
/*!****************************************!*\
  !*** ./src/conversions/literGallon.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.gallonToLiter = gallonToLiter;\nexports.literToGallon = literToGallon;\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\nfunction gallonToLiter(value, literPerGallon) {\n    return value * (literPerGallon || _constants.defaultConfig.literPerGallon);\n}\n\nfunction literToGallon(value, gallonPerLiter) {\n    return value * (gallonPerLiter || _constants.defaultConfig.gallonPerLiter);\n}\n\n//# sourceURL=webpack://Units/./src/conversions/literGallon.js?");

/***/ }),

/***/ "./src/conversions/rupeeDollar.js":
/*!****************************************!*\
  !*** ./src/conversions/rupeeDollar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.rupeeToDollar = rupeeToDollar;\nexports.dollarToRupee = dollarToRupee;\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\nfunction rupeeToDollar(value, dollarPerRupee) {\n    return value * (dollarPerRupee || _constants.defaultConfig.dollarPerRupee);\n}\nfunction dollarToRupee(value, rupeePerDollar) {\n    return value * (rupeePerDollar || _constants.defaultConfig.rupeePerDollar);\n}\n\n//# sourceURL=webpack://Units/./src/conversions/rupeeDollar.js?");

/***/ }),

/***/ "./src/conversions/rupeeKWD.js":
/*!*************************************!*\
  !*** ./src/conversions/rupeeKWD.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.rupeeToKWD = rupeeToKWD;\nexports.KWDToRupee = KWDToRupee;\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\nfunction rupeeToKWD(value, KWDPerRupee) {\n    return value * (KWDPerRupee || _constants.defaultConfig.KWDPerRupee);\n}\nfunction KWDToRupee(value, rupeePerKWD) {\n    return value * (rupeePerKWD || _constants.defaultConfig.rupeePerKWD);\n}\n\n//# sourceURL=webpack://Units/./src/conversions/rupeeKWD.js?");

/***/ }),

/***/ "./src/helpers/converter.js":
/*!**********************************!*\
  !*** ./src/helpers/converter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (_ref) {\n    var value = _ref.value,\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        _ref$config = _ref.config,\n        config = _ref$config === undefined ? {} : _ref$config;\n\n    var convertedValue;\n    if (providedIn.name == requiredIn.name) convertedValue = value;else {\n        var functionName = providedIn.name + \"To\" + (0, _firstLetterCap2.default)(requiredIn.name);\n        var convert = _Conversions2.default[functionName];\n        var factorName = providedIn.name + \"Per\" + (0, _firstLetterCap2.default)(requiredIn.name);\n        convertedValue = convert(value, config[factorName]);\n    }\n    var returnValue = convertedValue;\n    if (decimalPlaces) {\n        returnValue = (0, _decimalValueGenerator2.default)(returnValue, decimalPlaces);\n    }\n    if (stringFormat) {\n        returnValue = (0, _stringGenerator2.default)(returnValue, requiredIn.symbol, stringFormat);\n    }\n    return returnValue;\n};\n\nvar _Conversions = __webpack_require__(/*! ../Conversions */ \"./src/Conversions.js\");\n\nvar _Conversions2 = _interopRequireDefault(_Conversions);\n\nvar _firstLetterCap = __webpack_require__(/*! ./firstLetterCap */ \"./src/helpers/firstLetterCap.js\");\n\nvar _firstLetterCap2 = _interopRequireDefault(_firstLetterCap);\n\nvar _decimalValueGenerator = __webpack_require__(/*! ./decimalValueGenerator */ \"./src/helpers/decimalValueGenerator.js\");\n\nvar _decimalValueGenerator2 = _interopRequireDefault(_decimalValueGenerator);\n\nvar _stringGenerator = __webpack_require__(/*! ./stringGenerator */ \"./src/helpers/stringGenerator.js\");\n\nvar _stringGenerator2 = _interopRequireDefault(_stringGenerator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/helpers/converter.js?");

/***/ }),

/***/ "./src/helpers/decimalValueGenerator.js":
/*!**********************************************!*\
  !*** ./src/helpers/decimalValueGenerator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (convertedValue, decimalPlaces) {\n    var factor = Math.pow(10, decimalPlaces);\n    return Math.round(convertedValue * factor) / factor;\n};\n\n//# sourceURL=webpack://Units/./src/helpers/decimalValueGenerator.js?");

/***/ }),

/***/ "./src/helpers/firstLetterCap.js":
/*!***************************************!*\
  !*** ./src/helpers/firstLetterCap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (string) {\n    if (!string) return string;\n    return string[0].toUpperCase() + string.substr(1);\n};\n\n//# sourceURL=webpack://Units/./src/helpers/firstLetterCap.js?");

/***/ }),

/***/ "./src/helpers/replaceAll.js":
/*!***********************************!*\
  !*** ./src/helpers/replaceAll.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (target, search, replacement) {\n    return target.replace(new RegExp(search, 'g'), replacement);\n};\n\n;\n\n//# sourceURL=webpack://Units/./src/helpers/replaceAll.js?");

/***/ }),

/***/ "./src/helpers/requiredProvided.js":
/*!*****************************************!*\
  !*** ./src/helpers/requiredProvided.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function (_ref) {\n    var providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        config = _ref.config,\n        defaultValue = _ref.defaultValue;\n\n    if (!providedIn) providedIn = _extends({}, defaultValue);else if (typeof providedIn == 'string') {\n        providedIn = {\n            name: providedIn,\n            symbol: (0, _firstLetterCap2.default)(providedIn)\n        };\n    }\n    if (!requiredIn) {\n        if (config && config.unit) {\n            requiredIn = {\n                name: config.unit.name || config.unit,\n                symbol: config.unit.symbol || (0, _firstLetterCap2.default)(config.unit.name) || (0, _firstLetterCap2.default)(config.unit)\n            };\n        } else {\n            requiredIn = _extends({}, defaultValue);\n        }\n    } else if (typeof requiredIn == 'string') {\n        requiredIn = {\n            name: requiredIn,\n            symbol: (0, _firstLetterCap2.default)(requiredIn)\n        };\n    }\n    return {\n        providedIn: providedIn,\n        requiredIn: requiredIn\n    };\n};\n\nvar _firstLetterCap = __webpack_require__(/*! ./firstLetterCap */ \"./src/helpers/firstLetterCap.js\");\n\nvar _firstLetterCap2 = _interopRequireDefault(_firstLetterCap);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/helpers/requiredProvided.js?");

/***/ }),

/***/ "./src/helpers/stringGenerator.js":
/*!****************************************!*\
  !*** ./src/helpers/stringGenerator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value, unit, stringFormat) {\n    var returnString = (0, _replaceAll2.default)(stringFormat, \"<value>\", value);\n    returnString = (0, _replaceAll2.default)(returnString, \"<unit>\", unit);\n    return returnString;\n};\n\nvar _replaceAll = __webpack_require__(/*! ./replaceAll */ \"./src/helpers/replaceAll.js\");\n\nvar _replaceAll2 = _interopRequireDefault(_replaceAll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/helpers/stringGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Currency = __webpack_require__(/*! ./properties/Currency */ \"./src/properties/Currency.js\");\n\nvar _Currency2 = _interopRequireDefault(_Currency);\n\nvar _Temperature = __webpack_require__(/*! ./properties/Temperature */ \"./src/properties/Temperature.js\");\n\nvar _Temperature2 = _interopRequireDefault(_Temperature);\n\nvar _Distance = __webpack_require__(/*! ./properties/Distance */ \"./src/properties/Distance.js\");\n\nvar _Distance2 = _interopRequireDefault(_Distance);\n\nvar _Volume = __webpack_require__(/*! ./properties/Volume */ \"./src/properties/Volume.js\");\n\nvar _Volume2 = _interopRequireDefault(_Volume);\n\nvar _Fuel = __webpack_require__(/*! ./properties/Fuel */ \"./src/properties/Fuel.js\");\n\nvar _Fuel2 = _interopRequireDefault(_Fuel);\n\nvar _Mass = __webpack_require__(/*! ./properties/Mass */ \"./src/properties/Mass.js\");\n\nvar _Mass2 = _interopRequireDefault(_Mass);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nvar _Speed = __webpack_require__(/*! ./properties/Speed */ \"./src/properties/Speed.js\");\n\nvar _Speed2 = _interopRequireDefault(_Speed);\n\nvar _Pressure = __webpack_require__(/*! ./properties/Pressure */ \"./src/properties/Pressure.js\");\n\nvar _Pressure2 = _interopRequireDefault(_Pressure);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nmodule.exports = function Units(config) {\n    _classCallCheck(this, Units);\n\n    this.config = config || _constants.defaultConfig || {};\n    this.Currency = _Currency2.default.bind(this);\n    this.Currency.units = [\"rupee\", \"dollar\", \"KWD\"];\n    this.Temperature = _Temperature2.default.bind(this);\n    this.Temperature.units = [\"celcius\", \"fahrenheit\"];\n    this.Distance = _Distance2.default.bind(this);\n    this.Distance.units = [\"km\", \"mile\"];\n    this.Volume = _Volume2.default.bind(this);\n    this.Volume.units = [\"liter\", \"gallon\"];\n    this.Fuel = _Fuel2.default.bind(this);\n    this.Fuel.units = [\"liter\", \"gallon\"];\n    this.Mass = _Mass2.default.bind(this);\n    this.Mass.units = [\"kg\", \"pound\"];\n    this.Speed = _Speed2.default.bind(this);\n    this.Speed.units = [\"kmph\", \"mph\"];\n    this.Pressure = _Pressure2.default.bind(this);\n    this.Pressure.units = [\"kpa\", \"psi\"];\n};\n\n//# sourceURL=webpack://Units/./src/index.js?");

/***/ }),

/***/ "./src/properties/Currency.js":
/*!************************************!*\
  !*** ./src/properties/Currency.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.currency || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({ providedIn: providedIn, requiredIn: requiredIn, config: config,\n        defaultValue: {\n            name: \"rupee\",\n            symbol: \"₹\"\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        config: config\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Currency.js?");

/***/ }),

/***/ "./src/properties/Distance.js":
/*!************************************!*\
  !*** ./src/properties/Distance.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.distance || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({ providedIn: providedIn, requiredIn: requiredIn, config: config,\n        defaultValue: {\n            name: \"km\",\n            symbol: \"km\"\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Distance.js?");

/***/ }),

/***/ "./src/properties/Fuel.js":
/*!********************************!*\
  !*** ./src/properties/Fuel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.fuel || this.config.volume || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({ providedIn: providedIn, requiredIn: requiredIn, config: config,\n        defaultValue: {\n            name: \"liter\",\n            symbol: \"L\"\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Fuel.js?");

/***/ }),

/***/ "./src/properties/Mass.js":
/*!********************************!*\
  !*** ./src/properties/Mass.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.mass || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({ providedIn: providedIn, requiredIn: requiredIn, config: config,\n        defaultValue: {\n            name: \"kg\",\n            symbol: \"kg\"\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Mass.js?");

/***/ }),

/***/ "./src/properties/Pressure.js":
/*!************************************!*\
  !*** ./src/properties/Pressure.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.pressure || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({ providedIn: providedIn, requiredIn: requiredIn, config: config,\n        defaultValue: {\n            name: \"kpa\",\n            symbol: \"kpa\"\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Pressure.js?");

/***/ }),

/***/ "./src/properties/Speed.js":
/*!*********************************!*\
  !*** ./src/properties/Speed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.speed || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({ providedIn: providedIn, requiredIn: requiredIn, config: config,\n        defaultValue: {\n            name: \"kmph\",\n            symbol: \"km/hr\"\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Speed.js?");

/***/ }),

/***/ "./src/properties/Temperature.js":
/*!***************************************!*\
  !*** ./src/properties/Temperature.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.temperature || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({ providedIn: providedIn, requiredIn: requiredIn, config: config,\n        defaultValue: {\n            name: \"celcius\",\n            symbol: \"°C\"\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Temperature.js?");

/***/ }),

/***/ "./src/properties/Volume.js":
/*!**********************************!*\
  !*** ./src/properties/Volume.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Fuel = __webpack_require__(/*! ./Fuel */ \"./src/properties/Fuel.js\");\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Fuel).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Volume.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://Units/multi_./src/index.js?");

/***/ })

/******/ });
});