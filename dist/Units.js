window["Units"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./node_modules/convert-units/lib/definitions/angle.js":
/*!*************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/angle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar angle;\n\nangle = {\n  rad: {\n    name: {\n      singular: 'radian',\n      plural: 'radians'\n    },\n    to_anchor: 180 / Math.PI\n  },\n  deg: {\n    name: {\n      singular: 'degree',\n      plural: 'degrees'\n    },\n    to_anchor: 1\n  },\n  grad: {\n    name: {\n      singular: 'gradian',\n      plural: 'gradians'\n    },\n    to_anchor: 9 / 10\n  },\n  arcmin: {\n    name: {\n      singular: 'arcminute',\n      plural: 'arcminutes'\n    },\n    to_anchor: 1 / 60\n  },\n  arcsec: {\n    name: {\n      singular: 'arcsecond',\n      plural: 'arcseconds'\n    },\n    to_anchor: 1 / 3600\n  }\n};\n\nmodule.exports = {\n  metric: angle,\n  _anchors: {\n    metric: {\n      unit: 'deg',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/angle.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/apparentPower.js":
/*!*********************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/apparentPower.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar apparentPower;\n\napparentPower = {\n  VA: {\n    name: {\n      singular: 'Volt-Ampere',\n      plural: 'Volt-Amperes'\n    },\n    to_anchor: 1\n  },\n  mVA: {\n    name: {\n      singular: 'Millivolt-Ampere',\n      plural: 'Millivolt-Amperes'\n    },\n    to_anchor: .001\n  },\n  kVA: {\n    name: {\n      singular: 'Kilovolt-Ampere',\n      plural: 'Kilovolt-Amperes'\n    },\n    to_anchor: 1000\n  },\n  MVA: {\n    name: {\n      singular: 'Megavolt-Ampere',\n      plural: 'Megavolt-Amperes'\n    },\n    to_anchor: 1000000\n  },\n  GVA: {\n    name: {\n      singular: 'Gigavolt-Ampere',\n      plural: 'Gigavolt-Amperes'\n    },\n    to_anchor: 1000000000\n  }\n};\n\nmodule.exports = {\n  metric: apparentPower,\n  _anchors: {\n    metric: {\n      unit: 'VA',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/apparentPower.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/area.js":
/*!************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/area.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  mm2: {\n    name: {\n      singular: 'Square Millimeter',\n      plural: 'Square Millimeters'\n    },\n    to_anchor: 1 / 1000000\n  },\n  cm2: {\n    name: {\n      singular: 'Centimeter',\n      plural: 'Centimeters'\n    },\n    to_anchor: 1 / 10000\n  },\n  m2: {\n    name: {\n      singular: 'Square Meter',\n      plural: 'Square Meters'\n    },\n    to_anchor: 1\n  },\n  ha: {\n    name: {\n      singular: 'Hectare',\n      plural: 'Hectares'\n    },\n    to_anchor: 10000\n  },\n  km2: {\n    name: {\n      singular: 'Square Kilometer',\n      plural: 'Square Kilometers'\n    },\n    to_anchor: 1000000\n  }\n};\n\nimperial = {\n  'in2': {\n    name: {\n      singular: 'Square Inch',\n      plural: 'Square Inches'\n    },\n    to_anchor: 1 / 144\n  },\n  yd2: {\n    name: {\n      singular: 'Square Yard',\n      plural: 'Square Yards'\n    },\n    to_anchor: 9\n  },\n  ft2: {\n    name: {\n      singular: 'Square Foot',\n      plural: 'Square Feet'\n    },\n    to_anchor: 1\n  },\n  ac: {\n    name: {\n      singular: 'Acre',\n      plural: 'Acres'\n    },\n    to_anchor: 43560\n  },\n  mi2: {\n    name: {\n      singular: 'Square Mile',\n      plural: 'Square Miles'\n    },\n    to_anchor: 27878400\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'm2',\n      ratio: 10.7639\n    },\n    imperial: {\n      unit: 'ft2',\n      ratio: 1 / 10.7639\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/area.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/current.js":
/*!***************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/current.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar current;\n\ncurrent = {\n  A: {\n    name: {\n      singular: 'Ampere',\n      plural: 'Amperes'\n    },\n    to_anchor: 1\n  },\n  mA: {\n    name: {\n      singular: 'Milliampere',\n      plural: 'Milliamperes'\n    },\n    to_anchor: .001\n  },\n  kA: {\n    name: {\n      singular: 'Kiloampere',\n      plural: 'Kiloamperes'\n    },\n    to_anchor: 1000\n  }\n};\n\nmodule.exports = {\n  metric: current,\n  _anchors: {\n    metric: {\n      unit: 'A',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/current.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/digital.js":
/*!***************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/digital.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bits, bytes;\n\nbits = {\n  b: {\n    name: {\n      singular: 'Bit',\n      plural: 'Bits'\n    },\n    to_anchor: 1\n  },\n  Kb: {\n    name: {\n      singular: 'Kilobit',\n      plural: 'Kilobits'\n    },\n    to_anchor: 1024\n  },\n  Mb: {\n    name: {\n      singular: 'Megabit',\n      plural: 'Megabits'\n    },\n    to_anchor: 1048576\n  },\n  Gb: {\n    name: {\n      singular: 'Gigabit',\n      plural: 'Gigabits'\n    },\n    to_anchor: 1073741824\n  },\n  Tb: {\n    name: {\n      singular: 'Terabit',\n      plural: 'Terabits'\n    },\n    to_anchor: 1099511627776\n  }\n};\n\nbytes = {\n  B: {\n    name: {\n      singular: 'Byte',\n      plural: 'Bytes'\n    },\n    to_anchor: 1\n  },\n  KB: {\n    name: {\n      singular: 'Kilobyte',\n      plural: 'Kilobytes'\n    },\n    to_anchor: 1024\n  },\n  MB: {\n    name: {\n      singular: 'Megabyte',\n      plural: 'Megabytes'\n    },\n    to_anchor: 1048576\n  },\n  GB: {\n    name: {\n      singular: 'Gigabyte',\n      plural: 'Gigabytes'\n    },\n    to_anchor: 1073741824\n  },\n  TB: {\n    name: {\n      singular: 'Terabyte',\n      plural: 'Terabytes'\n    },\n    to_anchor: 1099511627776\n  }\n};\n\nmodule.exports = {\n  bits: bits,\n  bytes: bytes,\n  _anchors: {\n    bits: {\n      unit: 'b',\n      ratio: 1 / 8\n    },\n    bytes: {\n      unit: 'B',\n      ratio: 8\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/digital.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/each.js":
/*!************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  ea: {\n    name: {\n      singular: 'Each',\n      plural: 'Each'\n    },\n    to_anchor: 1\n  },\n  dz: {\n    name: {\n      singular: 'Dozen',\n      plural: 'Dozens'\n    },\n    to_anchor: 12\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: {},\n  _anchors: {\n    metric: {\n      unit: 'ea',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/each.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/energy.js":
/*!**************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/energy.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar energy;\n\nenergy = {\n  Wh: {\n    name: {\n      singular: 'Watt-hour',\n      plural: 'Watt-hours'\n    },\n    to_anchor: 3600\n  },\n  mWh: {\n    name: {\n      singular: 'Milliwatt-hour',\n      plural: 'Milliwatt-hours'\n    },\n    to_anchor: 3.6\n  },\n  kWh: {\n    name: {\n      singular: 'Kilowatt-hour',\n      plural: 'Kilowatt-hours'\n    },\n    to_anchor: 3600000\n  },\n  MWh: {\n    name: {\n      singular: 'Megawatt-hour',\n      plural: 'Megawatt-hours'\n    },\n    to_anchor: 3600000000\n  },\n  GWh: {\n    name: {\n      singular: 'Gigawatt-hour',\n      plural: 'Gigawatt-hours'\n    },\n    to_anchor: 3600000000000\n  },\n  J: {\n    name: {\n      singular: 'Joule',\n      plural: 'Joules'\n    },\n    to_anchor: 1\n  },\n  kJ: {\n    name: {\n      singular: 'Kilojoule',\n      plural: 'Kilojoules'\n    },\n    to_anchor: 1000\n  }\n};\n\nmodule.exports = {\n  metric: energy,\n  _anchors: {\n    metric: {\n      unit: 'J',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/energy.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/frequency.js":
/*!*****************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/frequency.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar frequency;\n\nfrequency = {\n  mHz: {\n    name: {\n      singular: 'millihertz',\n      plural: 'millihertz'\n    },\n    to_anchor: 1 / 1000\n  },\n  Hz: {\n    name: {\n      singular: 'hertz',\n      plural: 'hertz'\n    },\n    to_anchor: 1\n  },\n  kHz: {\n    name: {\n      singular: 'kilohertz',\n      plural: 'kilohertz'\n    },\n    to_anchor: 1000\n  },\n  MHz: {\n    name: {\n      singular: 'megahertz',\n      plural: 'megahertz'\n    },\n    to_anchor: 1000 * 1000\n  },\n  GHz: {\n    name: {\n      singular: 'gigahertz',\n      plural: 'gigahertz'\n    },\n    to_anchor: 1000 * 1000 * 1000\n  },\n  THz: {\n    name: {\n      singular: 'terahertz',\n      plural: 'terahertz'\n    },\n    to_anchor: 1000 * 1000 * 1000 * 1000\n  },\n  rpm: {\n    name: {\n      singular: 'rotation per minute',\n      plural: 'rotations per minute'\n    },\n    to_anchor: 1 / 60\n  },\n  \"deg/s\": {\n    name: {\n      singular: 'degree per second',\n      plural: 'degrees per second'\n    },\n    to_anchor: 1 / 360\n  },\n  \"rad/s\": {\n    name: {\n      singular: 'radian per second',\n      plural: 'radians per second'\n    },\n    to_anchor: 1 / (Math.PI * 2)\n  }\n};\n\nmodule.exports = {\n  metric: frequency,\n  _anchors: {\n    frequency: {\n      unit: 'hz',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/frequency.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/illuminance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/illuminance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  'lx': {\n    name: {\n      singular: 'Lux',\n      plural: 'Lux'\n    },\n    to_anchor: 1\n  }\n};\n\nimperial = {\n  'ft-cd': {\n    name: {\n      singular: 'Foot-candle',\n      plural: 'Foot-candles'\n    },\n    to_anchor: 1\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'lx',\n      ratio: 1 / 10.76391\n    },\n    imperial: {\n      unit: 'ft-cd',\n      ratio: 10.76391\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/illuminance.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/length.js":
/*!**************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/length.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  mm: {\n    name: {\n      singular: 'Millimeter',\n      plural: 'Millimeters'\n    },\n    to_anchor: 1 / 1000\n  },\n  cm: {\n    name: {\n      singular: 'Centimeter',\n      plural: 'Centimeters'\n    },\n    to_anchor: 1 / 100\n  },\n  m: {\n    name: {\n      singular: 'Meter',\n      plural: 'Meters'\n    },\n    to_anchor: 1\n  },\n  km: {\n    name: {\n      singular: 'Kilometer',\n      plural: 'Kilometers'\n    },\n    to_anchor: 1000\n  }\n};\n\nimperial = {\n  'in': {\n    name: {\n      singular: 'Inch',\n      plural: 'Inches'\n    },\n    to_anchor: 1 / 12\n  },\n  yd: {\n    name: {\n      singular: 'Yard',\n      plural: 'Yards'\n    },\n    to_anchor: 3\n  },\n  'ft-us': {\n    name: {\n      singular: 'US Survey Foot',\n      plural: 'US Survey Feet'\n    },\n    to_anchor: 1.000002\n  },\n  ft: {\n    name: {\n      singular: 'Foot',\n      plural: 'Feet'\n    },\n    to_anchor: 1\n  },\n  mi: {\n    name: {\n      singular: 'Mile',\n      plural: 'Miles'\n    },\n    to_anchor: 5280\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'm',\n      ratio: 3.28084\n    },\n    imperial: {\n      unit: 'ft',\n      ratio: 1 / 3.28084\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/length.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/mass.js":
/*!************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/mass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  mcg: {\n    name: {\n      singular: 'Microgram',\n      plural: 'Micrograms'\n    },\n    to_anchor: 1 / 1000000\n  },\n  mg: {\n    name: {\n      singular: 'Milligram',\n      plural: 'Milligrams'\n    },\n    to_anchor: 1 / 1000\n  },\n  g: {\n    name: {\n      singular: 'Gram',\n      plural: 'Grams'\n    },\n    to_anchor: 1\n  },\n  kg: {\n    name: {\n      singular: 'Kilogram',\n      plural: 'Kilograms'\n    },\n    to_anchor: 1000\n  },\n  mt: {\n    name: {\n      singular: 'Metric Tonne',\n      plural: 'Metric Tonnes'\n    },\n    to_anchor: 1000000\n  }\n};\n\nimperial = {\n  oz: {\n    name: {\n      singular: 'Ounce',\n      plural: 'Ounces'\n    },\n    to_anchor: 1 / 16\n  },\n  lb: {\n    name: {\n      singular: 'Pound',\n      plural: 'Pounds'\n    },\n    to_anchor: 1\n  }, t: {\n    name: {\n      singular: 'Ton',\n      plural: 'Tons'\n    },\n    to_anchor: 2000\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'g',\n      ratio: 1 / 453.592\n    },\n    imperial: {\n      unit: 'lb',\n      ratio: 453.592\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/mass.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/pace.js":
/*!************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/pace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  'min/km': {\n    name: {\n      singular: 'Minute per kilometre',\n      plural: 'Minutes per kilometre'\n    },\n    to_anchor: 0.06\n  },\n  's/m': {\n    name: {\n      singular: 'Second per metre',\n      plural: 'Seconds per metre'\n    },\n    to_anchor: 1\n  }\n};\n\nimperial = {\n  'min/mi': {\n    name: {\n      singular: 'Minute per mile',\n      plural: 'Minutes per mile'\n    },\n    to_anchor: 0.0113636\n  },\n  's/ft': {\n    name: {\n      singular: 'Second per foot',\n      plural: 'Seconds per foot'\n    },\n    to_anchor: 1\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 's/m',\n      ratio: 0.3048\n    },\n    imperial: {\n      unit: 's/ft',\n      ratio: 1 / 0.3048\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/pace.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/partsPer.js":
/*!****************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/partsPer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  ppm: {\n    name: {\n      singular: 'Part-per Million',\n      plural: 'Parts-per Million'\n    },\n    to_anchor: 1\n  },\n  ppb: {\n    name: {\n      singular: 'Part-per Billion',\n      plural: 'Parts-per Billion'\n    },\n    to_anchor: .001\n  },\n  ppt: {\n    name: {\n      singular: 'Part-per Trillion',\n      plural: 'Parts-per Trillion'\n    },\n    to_anchor: .000001\n  },\n  ppq: {\n    name: {\n      singular: 'Part-per Quadrillion',\n      plural: 'Parts-per Quadrillion'\n    },\n    to_anchor: .000000001\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: {},\n  _anchors: {\n    metric: {\n      unit: 'ppm',\n      ratio: .000001\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/partsPer.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/power.js":
/*!*************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/power.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar power;\n\npower = {\n  W: {\n    name: {\n      singular: 'Watt',\n      plural: 'Watts'\n    },\n    to_anchor: 1\n  },\n  mW: {\n    name: {\n      singular: 'Milliwatt',\n      plural: 'Milliwatts'\n    },\n    to_anchor: .001\n  },\n  kW: {\n    name: {\n      singular: 'Kilowatt',\n      plural: 'Kilowatts'\n    },\n    to_anchor: 1000\n  },\n  MW: {\n    name: {\n      singular: 'Megawatt',\n      plural: 'Megawatts'\n    },\n    to_anchor: 1000000\n  },\n  GW: {\n    name: {\n      singular: 'Gigawatt',\n      plural: 'Gigawatts'\n    },\n    to_anchor: 1000000000\n  }\n};\n\nmodule.exports = {\n  metric: power,\n  _anchors: {\n    metric: {\n      unit: 'W',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/power.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/pressure.js":
/*!****************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/pressure.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  Pa: {\n    name: {\n      singular: 'pascal',\n      plural: 'pascals'\n    },\n    to_anchor: 1 / 1000\n  },\n  kPa: {\n    name: {\n      singular: 'kilopascal',\n      plural: 'kilopascals'\n    },\n    to_anchor: 1\n  },\n  MPa: {\n    name: {\n      singular: 'megapascal',\n      plural: 'megapascals'\n    },\n    to_anchor: 1000\n  },\n  hPa: {\n    name: {\n      singular: 'hectopascal',\n      plural: 'hectopascals'\n    },\n    to_anchor: 1 / 10\n  },\n  bar: {\n    name: {\n      singular: 'bar',\n      plural: 'bar'\n    },\n    to_anchor: 100\n  },\n  torr: {\n    name: {\n      singular: 'torr',\n      plural: 'torr'\n    },\n    to_anchor: 101325 / 760000\n  }\n};\n\nimperial = {\n  psi: {\n    name: {\n      singular: 'pound per square inch',\n      plural: 'pounds per square inch'\n    },\n    to_anchor: 1 / 1000\n  },\n  ksi: {\n    name: {\n      singular: 'kilopound per square inch',\n      plural: 'kilopound per square inch'\n    },\n    to_anchor: 1\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'kPa',\n      ratio: 0.00014503768078\n    },\n    imperial: {\n      unit: 'psi',\n      ratio: 1 / 0.00014503768078\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/pressure.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/reactiveEnergy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/reactiveEnergy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar reactiveEnergy;\n\nreactiveEnergy = {\n  VARh: {\n    name: {\n      singular: 'Volt-Ampere Reactive Hour',\n      plural: 'Volt-Amperes Reactive Hour'\n    },\n    to_anchor: 1\n  },\n  mVARh: {\n    name: {\n      singular: 'Millivolt-Ampere Reactive Hour',\n      plural: 'Millivolt-Amperes Reactive Hour'\n    },\n    to_anchor: .001\n  },\n  kVARh: {\n    name: {\n      singular: 'Kilovolt-Ampere Reactive Hour',\n      plural: 'Kilovolt-Amperes Reactive Hour'\n    },\n    to_anchor: 1000\n  },\n  MVARh: {\n    name: {\n      singular: 'Megavolt-Ampere Reactive Hour',\n      plural: 'Megavolt-Amperes Reactive Hour'\n    },\n    to_anchor: 1000000\n  },\n  GVARh: {\n    name: {\n      singular: 'Gigavolt-Ampere Reactive Hour',\n      plural: 'Gigavolt-Amperes Reactive Hour'\n    },\n    to_anchor: 1000000000\n  }\n};\n\nmodule.exports = {\n  metric: reactiveEnergy,\n  _anchors: {\n    metric: {\n      unit: 'VARh',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/reactiveEnergy.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/reactivePower.js":
/*!*********************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/reactivePower.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar reactivePower;\n\nreactivePower = {\n  VAR: {\n    name: {\n      singular: 'Volt-Ampere Reactive',\n      plural: 'Volt-Amperes Reactive'\n    },\n    to_anchor: 1\n  },\n  mVAR: {\n    name: {\n      singular: 'Millivolt-Ampere Reactive',\n      plural: 'Millivolt-Amperes Reactive'\n    },\n    to_anchor: .001\n  },\n  kVAR: {\n    name: {\n      singular: 'Kilovolt-Ampere Reactive',\n      plural: 'Kilovolt-Amperes Reactive'\n    },\n    to_anchor: 1000\n  },\n  MVAR: {\n    name: {\n      singular: 'Megavolt-Ampere Reactive',\n      plural: 'Megavolt-Amperes Reactive'\n    },\n    to_anchor: 1000000\n  },\n  GVAR: {\n    name: {\n      singular: 'Gigavolt-Ampere Reactive',\n      plural: 'Gigavolt-Amperes Reactive'\n    },\n    to_anchor: 1000000000\n  }\n};\n\nmodule.exports = {\n  metric: reactivePower,\n  _anchors: {\n    metric: {\n      unit: 'VAR',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/reactivePower.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/speed.js":
/*!*************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/speed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  'm/s': {\n    name: {\n      singular: 'Metre per second',\n      plural: 'Metres per second'\n    },\n    to_anchor: 3.6\n  },\n  'km/h': {\n    name: {\n      singular: 'Kilometre per hour',\n      plural: 'Kilometres per hour'\n    },\n    to_anchor: 1\n  }\n};\n\nimperial = {\n  'm/h': {\n    name: {\n      singular: 'Mile per hour',\n      plural: 'Miles per hour'\n    },\n    to_anchor: 1\n  },\n  knot: {\n    name: {\n      singular: 'Knot',\n      plural: 'Knots'\n    },\n    to_anchor: 1.150779\n  },\n  'ft/s': {\n    name: {\n      singular: 'Foot per second',\n      plural: 'Feet per second'\n    },\n    to_anchor: 0.681818\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'km/h',\n      ratio: 1 / 1.609344\n    },\n    imperial: {\n      unit: 'm/h',\n      ratio: 1.609344\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/speed.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/temperature.js":
/*!*******************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/temperature.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  C: {\n    name: {\n      singular: 'degree Celsius',\n      plural: 'degrees Celsius'\n    },\n    to_anchor: 1,\n    anchor_shift: 0\n  },\n  K: {\n    name: {\n      singular: 'degree Kelvin',\n      plural: 'degrees Kelvin'\n    },\n    to_anchor: 1,\n    anchor_shift: 273.15\n  }\n};\n\nimperial = {\n  F: {\n    name: {\n      singular: 'degree Fahrenheit',\n      plural: 'degrees Fahrenheit'\n    },\n    to_anchor: 1\n  },\n  R: {\n    name: {\n      singular: 'degree Rankine',\n      plural: 'degrees Rankine'\n    },\n    to_anchor: 1,\n    anchor_shift: 459.67\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'C',\n      transform: function transform(C) {\n        return C / (5 / 9) + 32;\n      }\n    },\n    imperial: {\n      unit: 'F',\n      transform: function transform(F) {\n        return (F - 32) * (5 / 9);\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/temperature.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/time.js":
/*!************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/time.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar time;\nvar daysInYear = 365.25;\n\ntime = {\n  ns: {\n    name: {\n      singular: 'Nanosecond',\n      plural: 'Nanoseconds'\n    },\n    to_anchor: 1 / 1000000000\n  },\n  mu: {\n    name: {\n      singular: 'Microsecond',\n      plural: 'Microseconds'\n    },\n    to_anchor: 1 / 1000000\n  },\n  ms: {\n    name: {\n      singular: 'Millisecond',\n      plural: 'Milliseconds'\n    },\n    to_anchor: 1 / 1000\n  },\n  s: {\n    name: {\n      singular: 'Second',\n      plural: 'Seconds'\n    },\n    to_anchor: 1\n  },\n  min: {\n    name: {\n      singular: 'Minute',\n      plural: 'Minutes'\n    },\n    to_anchor: 60\n  },\n  h: {\n    name: {\n      singular: 'Hour',\n      plural: 'Hours'\n    },\n    to_anchor: 60 * 60\n  },\n  d: {\n    name: {\n      singular: 'Day',\n      plural: 'Days'\n    },\n    to_anchor: 60 * 60 * 24\n  },\n  week: {\n    name: {\n      singular: 'Week',\n      plural: 'Weeks'\n    },\n    to_anchor: 60 * 60 * 24 * 7\n  },\n  month: {\n    name: {\n      singular: 'Month',\n      plural: 'Months'\n    },\n    to_anchor: 60 * 60 * 24 * daysInYear / 12\n  },\n  year: {\n    name: {\n      singular: 'Year',\n      plural: 'Years'\n    },\n    to_anchor: 60 * 60 * 24 * daysInYear\n  }\n};\n\nmodule.exports = {\n  metric: time,\n  _anchors: {\n    metric: {\n      unit: 's',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/time.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/voltage.js":
/*!***************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/voltage.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar voltage;\n\nvoltage = {\n  V: {\n    name: {\n      singular: 'Volt',\n      plural: 'Volts'\n    },\n    to_anchor: 1\n  },\n  mV: {\n    name: {\n      singular: 'Millivolt',\n      plural: 'Millivolts'\n    },\n    to_anchor: .001\n  },\n  kV: {\n    name: {\n      singular: 'Kilovolt',\n      plural: 'Kilovolts'\n    },\n    to_anchor: 1000\n  }\n};\n\nmodule.exports = {\n  metric: voltage,\n  _anchors: {\n    metric: {\n      unit: 'V',\n      ratio: 1\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/voltage.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/volume.js":
/*!**************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/volume.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  mm3: {\n    name: {\n      singular: 'Cubic Millimeter',\n      plural: 'Cubic Millimeters'\n    },\n    to_anchor: 1 / 1000000\n  },\n  cm3: {\n    name: {\n      singular: 'Cubic Centimeter',\n      plural: 'Cubic Centimeters'\n    },\n    to_anchor: 1 / 1000\n  },\n  ml: {\n    name: {\n      singular: 'Millilitre',\n      plural: 'Millilitres'\n    },\n    to_anchor: 1 / 1000\n  },\n  cl: {\n    name: {\n      singular: 'Centilitre',\n      plural: 'Centilitres'\n    },\n    to_anchor: 1 / 100\n  },\n  dl: {\n    name: {\n      singular: 'Decilitre',\n      plural: 'Decilitres'\n    },\n    to_anchor: 1 / 10\n  },\n  l: {\n    name: {\n      singular: 'Litre',\n      plural: 'Litres'\n    },\n    to_anchor: 1\n  },\n  kl: {\n    name: {\n      singular: 'Kilolitre',\n      plural: 'Kilolitres'\n    },\n    to_anchor: 1000\n  },\n  m3: {\n    name: {\n      singular: 'Cubic meter',\n      plural: 'Cubic meters'\n    },\n    to_anchor: 1000\n  },\n  km3: {\n    name: {\n      singular: 'Cubic kilometer',\n      plural: 'Cubic kilometers'\n    },\n    to_anchor: 1000000000000\n\n    // Swedish units\n  }, krm: {\n    name: {\n      singular: 'Matsked',\n      plural: 'Matskedar'\n    },\n    to_anchor: 1 / 1000\n  },\n  tsk: {\n    name: {\n      singular: 'Tesked',\n      plural: 'Teskedar'\n    },\n    to_anchor: 5 / 1000\n  },\n  msk: {\n    name: {\n      singular: 'Matsked',\n      plural: 'Matskedar'\n    },\n    to_anchor: 15 / 1000\n  },\n  kkp: {\n    name: {\n      singular: 'Kaffekopp',\n      plural: 'Kaffekoppar'\n    },\n    to_anchor: 150 / 1000\n  },\n  glas: {\n    name: {\n      singular: 'Glas',\n      plural: 'Glas'\n    },\n    to_anchor: 200 / 1000\n  },\n  kanna: {\n    name: {\n      singular: 'Kanna',\n      plural: 'Kannor'\n    },\n    to_anchor: 2.617\n  }\n};\n\nimperial = {\n  tsp: {\n    name: {\n      singular: 'Teaspoon',\n      plural: 'Teaspoons'\n    },\n    to_anchor: 1 / 6\n  },\n  Tbs: {\n    name: {\n      singular: 'Tablespoon',\n      plural: 'Tablespoons'\n    },\n    to_anchor: 1 / 2\n  },\n  in3: {\n    name: {\n      singular: 'Cubic inch',\n      plural: 'Cubic inches'\n    },\n    to_anchor: 0.55411\n  },\n  'fl-oz': {\n    name: {\n      singular: 'Fluid Ounce',\n      plural: 'Fluid Ounces'\n    },\n    to_anchor: 1\n  },\n  cup: {\n    name: {\n      singular: 'Cup',\n      plural: 'Cups'\n    },\n    to_anchor: 8\n  },\n  pnt: {\n    name: {\n      singular: 'Pint',\n      plural: 'Pints'\n    },\n    to_anchor: 16\n  },\n  qt: {\n    name: {\n      singular: 'Quart',\n      plural: 'Quarts'\n    },\n    to_anchor: 32\n  },\n  gal: {\n    name: {\n      singular: 'Gallon',\n      plural: 'Gallons'\n    },\n    to_anchor: 128\n  },\n  ft3: {\n    name: {\n      singular: 'Cubic foot',\n      plural: 'Cubic feet'\n    },\n    to_anchor: 957.506\n  },\n  yd3: {\n    name: {\n      singular: 'Cubic yard',\n      plural: 'Cubic yards'\n    },\n    to_anchor: 25852.7\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'l',\n      ratio: 33.8140226\n    },\n    imperial: {\n      unit: 'fl-oz',\n      ratio: 1 / 33.8140226\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/volume.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/definitions/volumeFlowRate.js":
/*!**********************************************************************!*\
  !*** ./node_modules/convert-units/lib/definitions/volumeFlowRate.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metric, imperial;\n\nmetric = {\n  'mm3/s': {\n    name: {\n      singular: 'Cubic Millimeter per second',\n      plural: 'Cubic Millimeters per second'\n    },\n    to_anchor: 1 / 1000000\n  },\n  'cm3/s': {\n    name: {\n      singular: 'Cubic Centimeter per second',\n      plural: 'Cubic Centimeters per second'\n    },\n    to_anchor: 1 / 1000\n  },\n  'ml/s': {\n    name: {\n      singular: 'Millilitre per second',\n      plural: 'Millilitres per second'\n    },\n    to_anchor: 1 / 1000\n  },\n  'cl/s': {\n    name: {\n      singular: 'Centilitre per second',\n      plural: 'Centilitres per second'\n    },\n    to_anchor: 1 / 100\n  },\n  'dl/s': {\n    name: {\n      singular: 'Decilitre per second',\n      plural: 'Decilitres per second'\n    },\n    to_anchor: 1 / 10\n  },\n  'l/s': {\n    name: {\n      singular: 'Litre per second',\n      plural: 'Litres per second'\n    },\n    to_anchor: 1\n  },\n  'l/min': {\n    name: {\n      singular: 'Litre per minute',\n      plural: 'Litres per minute'\n    },\n    to_anchor: 1 / 60\n  },\n  'l/h': {\n    name: {\n      singular: 'Litre per hour',\n      plural: 'Litres per hour'\n    },\n    to_anchor: 1 / 3600\n  },\n  'kl/s': {\n    name: {\n      singular: 'Kilolitre per second',\n      plural: 'Kilolitres per second'\n    },\n    to_anchor: 1000\n  },\n  'kl/min': {\n    name: {\n      singular: 'Kilolitre per minute',\n      plural: 'Kilolitres per minute'\n    },\n    to_anchor: 50 / 3\n  },\n  'kl/h': {\n    name: {\n      singular: 'Kilolitre per hour',\n      plural: 'Kilolitres per hour'\n    },\n    to_anchor: 5 / 18\n  },\n  'm3/s': {\n    name: {\n      singular: 'Cubic meter per second',\n      plural: 'Cubic meters per second'\n    },\n    to_anchor: 1000\n  },\n  'm3/min': {\n    name: {\n      singular: 'Cubic meter per minute',\n      plural: 'Cubic meters per minute'\n    },\n    to_anchor: 50 / 3\n  },\n  'm3/h': {\n    name: {\n      singular: 'Cubic meter per hour',\n      plural: 'Cubic meters per hour'\n    },\n    to_anchor: 5 / 18\n  },\n  'km3/s': {\n    name: {\n      singular: 'Cubic kilometer per second',\n      plural: 'Cubic kilometers per second'\n    },\n    to_anchor: 1000000000000\n  }\n};\n\nimperial = {\n  'tsp/s': {\n    name: {\n      singular: 'Teaspoon per second',\n      plural: 'Teaspoons per second'\n    },\n    to_anchor: 1 / 6\n  },\n  'Tbs/s': {\n    name: {\n      singular: 'Tablespoon per second',\n      plural: 'Tablespoons per second'\n    },\n    to_anchor: 1 / 2\n  },\n  'in3/s': {\n    name: {\n      singular: 'Cubic inch per second',\n      plural: 'Cubic inches per second'\n    },\n    to_anchor: 0.55411\n  },\n  'in3/min': {\n    name: {\n      singular: 'Cubic inch per minute',\n      plural: 'Cubic inches per minute'\n    },\n    to_anchor: 0.55411 / 60\n  },\n  'in3/h': {\n    name: {\n      singular: 'Cubic inch per hour',\n      plural: 'Cubic inches per hour'\n    },\n    to_anchor: 0.55411 / 3600\n  },\n  'fl-oz/s': {\n    name: {\n      singular: 'Fluid Ounce per second',\n      plural: 'Fluid Ounces per second'\n    },\n    to_anchor: 1\n  },\n  'fl-oz/min': {\n    name: {\n      singular: 'Fluid Ounce per minute',\n      plural: 'Fluid Ounces per minute'\n    },\n    to_anchor: 1 / 60\n  },\n  'fl-oz/h': {\n    name: {\n      singular: 'Fluid Ounce per hour',\n      plural: 'Fluid Ounces per hour'\n    },\n    to_anchor: 1 / 3600\n  },\n  'cup/s': {\n    name: {\n      singular: 'Cup per second',\n      plural: 'Cups per second'\n    },\n    to_anchor: 8\n  },\n  'pnt/s': {\n    name: {\n      singular: 'Pint per second',\n      plural: 'Pints per second'\n    },\n    to_anchor: 16\n  },\n  'pnt/min': {\n    name: {\n      singular: 'Pint per minute',\n      plural: 'Pints per minute'\n    },\n    to_anchor: 4 / 15\n  },\n  'pnt/h': {\n    name: {\n      singular: 'Pint per hour',\n      plural: 'Pints per hour'\n    },\n    to_anchor: 1 / 225\n  },\n  'qt/s': {\n    name: {\n      singular: 'Quart per second',\n      plural: 'Quarts per second'\n    },\n    to_anchor: 32\n  },\n  'gal/s': {\n    name: {\n      singular: 'Gallon per second',\n      plural: 'Gallons per second'\n    },\n    to_anchor: 128\n  },\n  'gal/min': {\n    name: {\n      singular: 'Gallon per minute',\n      plural: 'Gallons per minute'\n    },\n    to_anchor: 32 / 15\n  },\n  'gal/h': {\n    name: {\n      singular: 'Gallon per hour',\n      plural: 'Gallons per hour'\n    },\n    to_anchor: 8 / 225\n  },\n  'ft3/s': {\n    name: {\n      singular: 'Cubic foot per second',\n      plural: 'Cubic feet per second'\n    },\n    to_anchor: 957.506\n  },\n  'ft3/min': {\n    name: {\n      singular: 'Cubic foot per minute',\n      plural: 'Cubic feet per minute'\n    },\n    to_anchor: 957.506 / 60\n  },\n  'ft3/h': {\n    name: {\n      singular: 'Cubic foot per hour',\n      plural: 'Cubic feet per hour'\n    },\n    to_anchor: 957.506 / 3600\n  },\n  'yd3/s': {\n    name: {\n      singular: 'Cubic yard per second',\n      plural: 'Cubic yards per second'\n    },\n    to_anchor: 25852.7\n  },\n  'yd3/min': {\n    name: {\n      singular: 'Cubic yard per minute',\n      plural: 'Cubic yards per minute'\n    },\n    to_anchor: 25852.7 / 60\n  },\n  'yd3/h': {\n    name: {\n      singular: 'Cubic yard per hour',\n      plural: 'Cubic yards per hour'\n    },\n    to_anchor: 25852.7 / 3600\n  }\n};\n\nmodule.exports = {\n  metric: metric,\n  imperial: imperial,\n  _anchors: {\n    metric: {\n      unit: 'l/s',\n      ratio: 33.8140227\n    },\n    imperial: {\n      unit: 'fl-oz/s',\n      ratio: 1 / 33.8140227\n    }\n  }\n};\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/definitions/volumeFlowRate.js?");

/***/ }),

/***/ "./node_modules/convert-units/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/convert-units/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar convert,\n    keys = __webpack_require__(/*! lodash.keys */ \"./node_modules/lodash.keys/index.js\"),\n    each = __webpack_require__(/*! lodash.foreach */ \"./node_modules/lodash.foreach/index.js\"),\n    measures = {\n  length: __webpack_require__(/*! ./definitions/length */ \"./node_modules/convert-units/lib/definitions/length.js\"),\n  area: __webpack_require__(/*! ./definitions/area */ \"./node_modules/convert-units/lib/definitions/area.js\"),\n  mass: __webpack_require__(/*! ./definitions/mass */ \"./node_modules/convert-units/lib/definitions/mass.js\"),\n  volume: __webpack_require__(/*! ./definitions/volume */ \"./node_modules/convert-units/lib/definitions/volume.js\"),\n  each: __webpack_require__(/*! ./definitions/each */ \"./node_modules/convert-units/lib/definitions/each.js\"),\n  temperature: __webpack_require__(/*! ./definitions/temperature */ \"./node_modules/convert-units/lib/definitions/temperature.js\"),\n  time: __webpack_require__(/*! ./definitions/time */ \"./node_modules/convert-units/lib/definitions/time.js\"),\n  digital: __webpack_require__(/*! ./definitions/digital */ \"./node_modules/convert-units/lib/definitions/digital.js\"),\n  partsPer: __webpack_require__(/*! ./definitions/partsPer */ \"./node_modules/convert-units/lib/definitions/partsPer.js\"),\n  speed: __webpack_require__(/*! ./definitions/speed */ \"./node_modules/convert-units/lib/definitions/speed.js\"),\n  pace: __webpack_require__(/*! ./definitions/pace */ \"./node_modules/convert-units/lib/definitions/pace.js\"),\n  pressure: __webpack_require__(/*! ./definitions/pressure */ \"./node_modules/convert-units/lib/definitions/pressure.js\"),\n  current: __webpack_require__(/*! ./definitions/current */ \"./node_modules/convert-units/lib/definitions/current.js\"),\n  voltage: __webpack_require__(/*! ./definitions/voltage */ \"./node_modules/convert-units/lib/definitions/voltage.js\"),\n  power: __webpack_require__(/*! ./definitions/power */ \"./node_modules/convert-units/lib/definitions/power.js\"),\n  reactivePower: __webpack_require__(/*! ./definitions/reactivePower */ \"./node_modules/convert-units/lib/definitions/reactivePower.js\"),\n  apparentPower: __webpack_require__(/*! ./definitions/apparentPower */ \"./node_modules/convert-units/lib/definitions/apparentPower.js\"),\n  energy: __webpack_require__(/*! ./definitions/energy */ \"./node_modules/convert-units/lib/definitions/energy.js\"),\n  reactiveEnergy: __webpack_require__(/*! ./definitions/reactiveEnergy */ \"./node_modules/convert-units/lib/definitions/reactiveEnergy.js\"),\n  volumeFlowRate: __webpack_require__(/*! ./definitions/volumeFlowRate */ \"./node_modules/convert-units/lib/definitions/volumeFlowRate.js\"),\n  illuminance: __webpack_require__(/*! ./definitions/illuminance */ \"./node_modules/convert-units/lib/definitions/illuminance.js\"),\n  frequency: __webpack_require__(/*! ./definitions/frequency */ \"./node_modules/convert-units/lib/definitions/frequency.js\"),\n  angle: __webpack_require__(/*! ./definitions/angle */ \"./node_modules/convert-units/lib/definitions/angle.js\")\n},\n    Converter;\n\nConverter = function Converter(numerator, denominator) {\n  if (denominator) this.val = numerator / denominator;else this.val = numerator;\n};\n\n/**\n* Lets the converter know the source unit abbreviation\n*/\nConverter.prototype.from = function (from) {\n  if (this.destination) throw new Error('.from must be called before .to');\n\n  this.origin = this.getUnit(from);\n\n  if (!this.origin) {\n    this.throwUnsupportedUnitError(from);\n  }\n\n  return this;\n};\n\n/**\n* Converts the unit and returns the value\n*/\nConverter.prototype.to = function (to) {\n  if (!this.origin) throw new Error('.to must be called after .from');\n\n  this.destination = this.getUnit(to);\n\n  var result, transform;\n\n  if (!this.destination) {\n    this.throwUnsupportedUnitError(to);\n  }\n\n  // Don't change the value if origin and destination are the same\n  if (this.origin.abbr === this.destination.abbr) {\n    return this.val;\n  }\n\n  // You can't go from liquid to mass, for example\n  if (this.destination.measure != this.origin.measure) {\n    throw new Error('Cannot convert incompatible measures of ' + this.destination.measure + ' and ' + this.origin.measure);\n  }\n\n  /**\n  * Convert from the source value to its anchor inside the system\n  */\n  result = this.val * this.origin.unit.to_anchor;\n\n  /**\n  * For some changes it's a simple shift (C to K)\n  * So we'll add it when convering into the unit (later)\n  * and subtract it when converting from the unit\n  */\n  if (this.origin.unit.anchor_shift) {\n    result -= this.origin.unit.anchor_shift;\n  }\n\n  /**\n  * Convert from one system to another through the anchor ratio. Some conversions\n  * aren't ratio based or require more than a simple shift. We can provide a custom\n  * transform here to provide the direct result\n  */\n  if (this.origin.system != this.destination.system) {\n    transform = measures[this.origin.measure]._anchors[this.origin.system].transform;\n    if (typeof transform === 'function') {\n      result = transform(result);\n    } else {\n      result *= measures[this.origin.measure]._anchors[this.origin.system].ratio;\n    }\n  }\n\n  /**\n  * This shift has to be done after the system conversion business\n  */\n  if (this.destination.unit.anchor_shift) {\n    result += this.destination.unit.anchor_shift;\n  }\n\n  /**\n  * Convert to another unit inside the destination system\n  */\n  return result / this.destination.unit.to_anchor;\n};\n\n/**\n* Converts the unit to the best available unit.\n*/\nConverter.prototype.toBest = function (options) {\n  if (!this.origin) throw new Error('.toBest must be called after .from');\n\n  var options = Object.assign({\n    exclude: [],\n    cutOffNumber: 1\n  }, options);\n\n  var best;\n  /**\n    Looks through every possibility for the 'best' available unit.\n    i.e. Where the value has the fewest numbers before the decimal point,\n    but is still higher than 1.\n  */\n  each(this.possibilities(), function (possibility) {\n    var unit = this.describe(possibility);\n    var isIncluded = options.exclude.indexOf(possibility) === -1;\n\n    if (isIncluded && unit.system === this.origin.system) {\n      var result = this.to(possibility);\n      if (!best || result >= options.cutOffNumber && result < best.val) {\n        best = {\n          val: result,\n          unit: possibility,\n          singular: unit.singular,\n          plural: unit.plural\n        };\n      }\n    }\n  }.bind(this));\n\n  return best;\n};\n\n/**\n* Finds the unit\n*/\nConverter.prototype.getUnit = function (abbr) {\n  var found;\n\n  each(measures, function (systems, measure) {\n    each(systems, function (units, system) {\n      if (system == '_anchors') return false;\n\n      each(units, function (unit, testAbbr) {\n        if (testAbbr == abbr) {\n          found = {\n            abbr: abbr,\n            measure: measure,\n            system: system,\n            unit: unit\n          };\n          return false;\n        }\n      });\n\n      if (found) return false;\n    });\n\n    if (found) return false;\n  });\n\n  return found;\n};\n\nvar describe = function describe(resp) {\n  return {\n    abbr: resp.abbr,\n    measure: resp.measure,\n    system: resp.system,\n    singular: resp.unit.name.singular,\n    plural: resp.unit.name.plural\n  };\n};\n\n/**\n* An alias for getUnit\n*/\nConverter.prototype.describe = function (abbr) {\n  var resp = Converter.prototype.getUnit(abbr);\n  var desc = null;\n\n  try {\n    desc = describe(resp);\n  } catch (err) {\n    this.throwUnsupportedUnitError(abbr);\n  }\n\n  return desc;\n};\n\n/**\n* Detailed list of all supported units\n*/\nConverter.prototype.list = function (measure) {\n  var list = [];\n\n  each(measures, function (systems, testMeasure) {\n    if (measure && measure !== testMeasure) return;\n\n    each(systems, function (units, system) {\n      if (system == '_anchors') return false;\n\n      each(units, function (unit, abbr) {\n        list = list.concat(describe({\n          abbr: abbr,\n          measure: testMeasure,\n          system: system,\n          unit: unit\n        }));\n      });\n    });\n  });\n\n  return list;\n};\n\nConverter.prototype.throwUnsupportedUnitError = function (what) {\n  var validUnits = [];\n\n  each(measures, function (systems, measure) {\n    each(systems, function (units, system) {\n      if (system == '_anchors') return false;\n\n      validUnits = validUnits.concat(keys(units));\n    });\n  });\n\n  throw new Error('Unsupported unit ' + what + ', use one of: ' + validUnits.join(', '));\n};\n\n/**\n* Returns the abbreviated measures that the value can be\n* converted to.\n*/\nConverter.prototype.possibilities = function (measure) {\n  var possibilities = [];\n  if (!this.origin && !measure) {\n    each(keys(measures), function (measure) {\n      each(measures[measure], function (units, system) {\n        if (system == '_anchors') return false;\n\n        possibilities = possibilities.concat(keys(units));\n      });\n    });\n  } else {\n    measure = measure || this.origin.measure;\n    each(measures[measure], function (units, system) {\n      if (system == '_anchors') return false;\n\n      possibilities = possibilities.concat(keys(units));\n    });\n  }\n\n  return possibilities;\n};\n\n/**\n* Returns the abbreviated measures that the value can be\n* converted to.\n*/\nConverter.prototype.measures = function () {\n  return keys(measures);\n};\n\nconvert = function convert(value) {\n  return new Converter(value);\n};\n\nmodule.exports = convert;\n\n//# sourceURL=webpack://Units/./node_modules/convert-units/lib/index.js?");

/***/ }),

/***/ "./node_modules/lodash._basebind/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash._basebind/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar baseCreate = __webpack_require__(/*! lodash._basecreate */ \"./node_modules/lodash._basecreate/index.js\"),\n    isObject = __webpack_require__(/*! lodash.isobject */ \"./node_modules/lodash.isobject/index.js\"),\n    setBindData = __webpack_require__(/*! lodash._setbinddata */ \"./node_modules/lodash._setbinddata/index.js\");\n\n/**\n * Used for `Array` method references.\n *\n * Normally `Array.prototype` would suffice, however, using an array literal\n * avoids issues in Narwhal.\n */\nvar arrayRef = [];\n\n/** Native method shortcuts */\nvar push = arrayRef.push;\n\n/**\n * The base implementation of `_.bind` that creates the bound function and\n * sets its meta data.\n *\n * @private\n * @param {Array} bindData The bind data array.\n * @returns {Function} Returns the new bound function.\n */\nfunction baseBind(bindData) {\n  var func = bindData[0],\n      partialArgs = bindData[2],\n      thisArg = bindData[4];\n\n  function bound() {\n    // `Function#bind` spec\n    // http://es5.github.io/#x15.3.4.5\n    if (partialArgs) {\n      var args = partialArgs.slice();\n      push.apply(args, arguments);\n    }\n    // mimic the constructor's `return` behavior\n    // http://es5.github.io/#x13.2.2\n    if (this instanceof bound) {\n      // ensure `new bound` is an instance of `func`\n      var thisBinding = baseCreate(func.prototype),\n          result = func.apply(thisBinding, args || arguments);\n      return isObject(result) ? result : thisBinding;\n    }\n    return func.apply(thisArg, args || arguments);\n  }\n  setBindData(bound, bindData);\n  return bound;\n}\n\nmodule.exports = baseBind;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._basebind/index.js?");

/***/ }),

/***/ "./node_modules/lodash._basecreate/index.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash._basecreate/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar isObject = __webpack_require__(/*! lodash.isobject */ \"./node_modules/lodash.isobject/index.js\"),\n    noop = __webpack_require__(/*! lodash.noop */ \"./node_modules/lodash.noop/index.js\"),\n    reNative = __webpack_require__(/*! lodash._renative */ \"./node_modules/lodash._renative/index.js\");\n\n/* Native method shortcuts for methods with the same name as other `lodash` methods */\nvar nativeCreate = reNative.test(nativeCreate = Object.create) && nativeCreate;\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} prototype The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nfunction baseCreate(prototype, properties) {\n  return isObject(prototype) ? nativeCreate(prototype) : {};\n}\n// fallback for browsers without `Object.create`\nif (!nativeCreate) {\n  baseCreate = function () {\n    function Object() {}\n    return function (prototype) {\n      if (isObject(prototype)) {\n        Object.prototype = prototype;\n        var result = new Object();\n        Object.prototype = null;\n      }\n      return result || global.Object();\n    };\n  }();\n}\n\nmodule.exports = baseCreate;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Units/./node_modules/lodash._basecreate/index.js?");

/***/ }),

/***/ "./node_modules/lodash._basecreatecallback/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/lodash._basecreatecallback/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar bind = __webpack_require__(/*! lodash.bind */ \"./node_modules/lodash.bind/index.js\"),\n    identity = __webpack_require__(/*! lodash.identity */ \"./node_modules/lodash.identity/index.js\"),\n    setBindData = __webpack_require__(/*! lodash._setbinddata */ \"./node_modules/lodash._setbinddata/index.js\"),\n    support = __webpack_require__(/*! lodash.support */ \"./node_modules/lodash.support/index.js\");\n\n/** Used to detected named functions */\nvar reFuncName = /^\\s*function[ \\n\\r\\t]+\\w/;\n\n/** Used to detect functions containing a `this` reference */\nvar reThis = /\\bthis\\b/;\n\n/** Native method shortcuts */\nvar fnToString = Function.prototype.toString;\n\n/**\n * The base implementation of `_.createCallback` without support for creating\n * \"_.pluck\" or \"_.where\" style callbacks.\n *\n * @private\n * @param {*} [func=identity] The value to convert to a callback.\n * @param {*} [thisArg] The `this` binding of the created callback.\n * @param {number} [argCount] The number of arguments the callback accepts.\n * @returns {Function} Returns a callback function.\n */\nfunction baseCreateCallback(func, thisArg, argCount) {\n  if (typeof func != 'function') {\n    return identity;\n  }\n  // exit early for no `thisArg` or already bound by `Function#bind`\n  if (typeof thisArg == 'undefined' || !('prototype' in func)) {\n    return func;\n  }\n  var bindData = func.__bindData__;\n  if (typeof bindData == 'undefined') {\n    if (support.funcNames) {\n      bindData = !func.name;\n    }\n    bindData = bindData || !support.funcDecomp;\n    if (!bindData) {\n      var source = fnToString.call(func);\n      if (!support.funcNames) {\n        bindData = !reFuncName.test(source);\n      }\n      if (!bindData) {\n        // checks if `func` references the `this` keyword and stores the result\n        bindData = reThis.test(source);\n        setBindData(func, bindData);\n      }\n    }\n  }\n  // exit early if there are no `this` references or `func` is bound\n  if (bindData === false || bindData !== true && bindData[1] & 1) {\n    return func;\n  }\n  switch (argCount) {\n    case 1:\n      return function (value) {\n        return func.call(thisArg, value);\n      };\n    case 2:\n      return function (a, b) {\n        return func.call(thisArg, a, b);\n      };\n    case 3:\n      return function (value, index, collection) {\n        return func.call(thisArg, value, index, collection);\n      };\n    case 4:\n      return function (accumulator, value, index, collection) {\n        return func.call(thisArg, accumulator, value, index, collection);\n      };\n  }\n  return bind(func, thisArg);\n}\n\nmodule.exports = baseCreateCallback;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._basecreatecallback/index.js?");

/***/ }),

/***/ "./node_modules/lodash._basecreatewrapper/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash._basecreatewrapper/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar baseCreate = __webpack_require__(/*! lodash._basecreate */ \"./node_modules/lodash._basecreate/index.js\"),\n    isObject = __webpack_require__(/*! lodash.isobject */ \"./node_modules/lodash.isobject/index.js\"),\n    setBindData = __webpack_require__(/*! lodash._setbinddata */ \"./node_modules/lodash._setbinddata/index.js\"),\n    slice = __webpack_require__(/*! lodash._slice */ \"./node_modules/lodash._slice/index.js\");\n\n/**\n * Used for `Array` method references.\n *\n * Normally `Array.prototype` would suffice, however, using an array literal\n * avoids issues in Narwhal.\n */\nvar arrayRef = [];\n\n/** Native method shortcuts */\nvar push = arrayRef.push;\n\n/**\n * The base implementation of `createWrapper` that creates the wrapper and\n * sets its meta data.\n *\n * @private\n * @param {Array} bindData The bind data array.\n * @returns {Function} Returns the new function.\n */\nfunction baseCreateWrapper(bindData) {\n  var func = bindData[0],\n      bitmask = bindData[1],\n      partialArgs = bindData[2],\n      partialRightArgs = bindData[3],\n      thisArg = bindData[4],\n      arity = bindData[5];\n\n  var isBind = bitmask & 1,\n      isBindKey = bitmask & 2,\n      isCurry = bitmask & 4,\n      isCurryBound = bitmask & 8,\n      key = func;\n\n  function bound() {\n    var thisBinding = isBind ? thisArg : this;\n    if (partialArgs) {\n      var args = partialArgs.slice();\n      push.apply(args, arguments);\n    }\n    if (partialRightArgs || isCurry) {\n      args || (args = slice(arguments));\n      if (partialRightArgs) {\n        push.apply(args, partialRightArgs);\n      }\n      if (isCurry && args.length < arity) {\n        bitmask |= 16 & ~32;\n        return baseCreateWrapper([func, isCurryBound ? bitmask : bitmask & ~3, args, null, thisArg, arity]);\n      }\n    }\n    args || (args = arguments);\n    if (isBindKey) {\n      func = thisBinding[key];\n    }\n    if (this instanceof bound) {\n      thisBinding = baseCreate(func.prototype);\n      var result = func.apply(thisBinding, args);\n      return isObject(result) ? result : thisBinding;\n    }\n    return func.apply(thisBinding, args);\n  }\n  setBindData(bound, bindData);\n  return bound;\n}\n\nmodule.exports = baseCreateWrapper;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._basecreatewrapper/index.js?");

/***/ }),

/***/ "./node_modules/lodash._createwrapper/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash._createwrapper/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar baseBind = __webpack_require__(/*! lodash._basebind */ \"./node_modules/lodash._basebind/index.js\"),\n    baseCreateWrapper = __webpack_require__(/*! lodash._basecreatewrapper */ \"./node_modules/lodash._basecreatewrapper/index.js\"),\n    isFunction = __webpack_require__(/*! lodash.isfunction */ \"./node_modules/lodash.isfunction/index.js\");\n\n/**\n * Used for `Array` method references.\n *\n * Normally `Array.prototype` would suffice, however, using an array literal\n * avoids issues in Narwhal.\n */\nvar arrayRef = [];\n\n/** Native method shortcuts */\nvar push = arrayRef.push;\n\n/**\n * Creates a function that, when called, either curries or invokes `func`\n * with an optional `this` binding and partially applied arguments.\n *\n * @private\n * @param {Function|string} func The function or method name to reference.\n * @param {number} bitmask The bitmask of method flags to compose.\n *  The bitmask may be composed of the following flags:\n *  1 - `_.bind`\n *  2 - `_.bindKey`\n *  4 - `_.curry`\n *  8 - `_.curry` (bound)\n *  16 - `_.partial`\n *  32 - `_.partialRight`\n * @param {Array} [partialArgs] An array of arguments to prepend to those\n *  provided to the new function.\n * @param {Array} [partialRightArgs] An array of arguments to append to those\n *  provided to the new function.\n * @param {*} [thisArg] The `this` binding of `func`.\n * @param {number} [arity] The arity of `func`.\n * @returns {Function} Returns the new function.\n */\nfunction createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {\n  var isBind = bitmask & 1,\n      isBindKey = bitmask & 2,\n      isCurry = bitmask & 4,\n      isCurryBound = bitmask & 8,\n      isPartial = bitmask & 16,\n      isPartialRight = bitmask & 32;\n\n  if (!isBindKey && !isFunction(func)) {\n    throw new TypeError();\n  }\n  if (isPartial && !partialArgs.length) {\n    bitmask &= ~16;\n    isPartial = partialArgs = false;\n  }\n  if (isPartialRight && !partialRightArgs.length) {\n    bitmask &= ~32;\n    isPartialRight = partialRightArgs = false;\n  }\n  var bindData = func && func.__bindData__;\n  if (bindData && bindData !== true) {\n    bindData = bindData.slice();\n\n    // set `thisBinding` is not previously bound\n    if (isBind && !(bindData[1] & 1)) {\n      bindData[4] = thisArg;\n    }\n    // set if previously bound but not currently (subsequent curried functions)\n    if (!isBind && bindData[1] & 1) {\n      bitmask |= 8;\n    }\n    // set curried arity if not yet set\n    if (isCurry && !(bindData[1] & 4)) {\n      bindData[5] = arity;\n    }\n    // append partial left arguments\n    if (isPartial) {\n      push.apply(bindData[2] || (bindData[2] = []), partialArgs);\n    }\n    // append partial right arguments\n    if (isPartialRight) {\n      push.apply(bindData[3] || (bindData[3] = []), partialRightArgs);\n    }\n    // merge flags\n    bindData[1] |= bitmask;\n    return createWrapper.apply(null, bindData);\n  }\n  // fast path for `_.bind`\n  var creater = bitmask == 1 || bitmask === 17 ? baseBind : baseCreateWrapper;\n  return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);\n}\n\nmodule.exports = createWrapper;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._createwrapper/index.js?");

/***/ }),

/***/ "./node_modules/lodash._objecttypes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash._objecttypes/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\n\n/** Used to determine if values are of the language type Object */\nvar objectTypes = {\n  'boolean': false,\n  'function': true,\n  'object': true,\n  'number': false,\n  'string': false,\n  'undefined': false\n};\n\nmodule.exports = objectTypes;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._objecttypes/index.js?");

/***/ }),

/***/ "./node_modules/lodash._renative/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash._renative/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\n\n/** Used for native method references */\nvar objectProto = Object.prototype;\n\n/** Used to resolve the internal [[Class]] of values */\nvar toString = objectProto.toString;\n\n/** Used to detect if a method is native */\nvar reNative = RegExp('^' + String(toString).replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&').replace(/toString| for [^\\]]+/g, '.*?') + '$');\n\nmodule.exports = reNative;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._renative/index.js?");

/***/ }),

/***/ "./node_modules/lodash._setbinddata/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash._setbinddata/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar noop = __webpack_require__(/*! lodash.noop */ \"./node_modules/lodash.noop/index.js\"),\n    reNative = __webpack_require__(/*! lodash._renative */ \"./node_modules/lodash._renative/index.js\");\n\n/** Used as the property descriptor for `__bindData__` */\nvar descriptor = {\n  'configurable': false,\n  'enumerable': false,\n  'value': null,\n  'writable': false\n};\n\n/** Used to set meta data on functions */\nvar defineProperty = function () {\n  // IE 8 only accepts DOM elements\n  try {\n    var o = {},\n        func = reNative.test(func = Object.defineProperty) && func,\n        result = func(o, o, o) && func;\n  } catch (e) {}\n  return result;\n}();\n\n/**\n * Sets `this` binding data on a given function.\n *\n * @private\n * @param {Function} func The function to set data on.\n * @param {Array} value The data array to set.\n */\nvar setBindData = !defineProperty ? noop : function (func, value) {\n  descriptor.value = value;\n  defineProperty(func, '__bindData__', descriptor);\n};\n\nmodule.exports = setBindData;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._setbinddata/index.js?");

/***/ }),

/***/ "./node_modules/lodash._shimkeys/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash._shimkeys/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar objectTypes = __webpack_require__(/*! lodash._objecttypes */ \"./node_modules/lodash._objecttypes/index.js\");\n\n/** Used for native method references */\nvar objectProto = Object.prototype;\n\n/** Native method shortcuts */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A fallback implementation of `Object.keys` which produces an array of the\n * given object's own enumerable property names.\n *\n * @private\n * @type Function\n * @param {Object} object The object to inspect.\n * @returns {Array} Returns an array of property names.\n */\nvar shimKeys = function shimKeys(object) {\n  var index,\n      iterable = object,\n      result = [];\n  if (!iterable) return result;\n  if (!objectTypes[typeof object === 'undefined' ? 'undefined' : _typeof(object)]) return result;\n  for (index in iterable) {\n    if (hasOwnProperty.call(iterable, index)) {\n      result.push(index);\n    }\n  }\n  return result;\n};\n\nmodule.exports = shimKeys;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._shimkeys/index.js?");

/***/ }),

/***/ "./node_modules/lodash._slice/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash._slice/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\n\n/**\n * Slices the `collection` from the `start` index up to, but not including,\n * the `end` index.\n *\n * Note: This function is used instead of `Array#slice` to support node lists\n * in IE < 9 and to ensure dense arrays are returned.\n *\n * @private\n * @param {Array|Object|string} collection The collection to slice.\n * @param {number} start The start index.\n * @param {number} end The end index.\n * @returns {Array} Returns the new array.\n */\nfunction slice(array, start, end) {\n  start || (start = 0);\n  if (typeof end == 'undefined') {\n    end = array ? array.length : 0;\n  }\n  var index = -1,\n      length = end - start || 0,\n      result = Array(length < 0 ? 0 : length);\n\n  while (++index < length) {\n    result[index] = array[start + index];\n  }\n  return result;\n}\n\nmodule.exports = slice;\n\n//# sourceURL=webpack://Units/./node_modules/lodash._slice/index.js?");

/***/ }),

/***/ "./node_modules/lodash.bind/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.bind/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar createWrapper = __webpack_require__(/*! lodash._createwrapper */ \"./node_modules/lodash._createwrapper/index.js\"),\n    reNative = __webpack_require__(/*! lodash._renative */ \"./node_modules/lodash._renative/index.js\"),\n    slice = __webpack_require__(/*! lodash._slice */ \"./node_modules/lodash._slice/index.js\");\n\n/**\n * Creates a function that, when called, invokes `func` with the `this`\n * binding of `thisArg` and prepends any additional `bind` arguments to those\n * provided to the bound function.\n *\n * @static\n * @memberOf _\n * @category Functions\n * @param {Function} func The function to bind.\n * @param {*} [thisArg] The `this` binding of `func`.\n * @param {...*} [arg] Arguments to be partially applied.\n * @returns {Function} Returns the new bound function.\n * @example\n *\n * var func = function(greeting) {\n *   return greeting + ' ' + this.name;\n * };\n *\n * func = _.bind(func, { 'name': 'fred' }, 'hi');\n * func();\n * // => 'hi fred'\n */\nfunction bind(func, thisArg) {\n  return arguments.length > 2 ? createWrapper(func, 17, slice(arguments, 2), null, thisArg) : createWrapper(func, 1, null, null, thisArg);\n}\n\nmodule.exports = bind;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.bind/index.js?");

/***/ }),

/***/ "./node_modules/lodash.foreach/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.foreach/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar baseCreateCallback = __webpack_require__(/*! lodash._basecreatecallback */ \"./node_modules/lodash._basecreatecallback/index.js\"),\n    forOwn = __webpack_require__(/*! lodash.forown */ \"./node_modules/lodash.forown/index.js\");\n\n/**\n * Iterates over elements of a collection, executing the callback for each\n * element. The callback is bound to `thisArg` and invoked with three arguments;\n * (value, index|key, collection). Callbacks may exit iteration early by\n * explicitly returning `false`.\n *\n * Note: As with other \"Collections\" methods, objects with a `length` property\n * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`\n * may be used for object iteration.\n *\n * @static\n * @memberOf _\n * @alias each\n * @category Collections\n * @param {Array|Object|string} collection The collection to iterate over.\n * @param {Function} [callback=identity] The function called per iteration.\n * @param {*} [thisArg] The `this` binding of `callback`.\n * @returns {Array|Object|string} Returns `collection`.\n * @example\n *\n * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');\n * // => logs each number and returns '1,2,3'\n *\n * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });\n * // => logs each number and returns the object (property order is not guaranteed across environments)\n */\nfunction forEach(collection, callback, thisArg) {\n  var index = -1,\n      length = collection ? collection.length : 0;\n\n  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);\n  if (typeof length == 'number') {\n    while (++index < length) {\n      if (callback(collection[index], index, collection) === false) {\n        break;\n      }\n    }\n  } else {\n    forOwn(collection, callback);\n  }\n  return collection;\n}\n\nmodule.exports = forEach;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.foreach/index.js?");

/***/ }),

/***/ "./node_modules/lodash.forown/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.forown/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar baseCreateCallback = __webpack_require__(/*! lodash._basecreatecallback */ \"./node_modules/lodash._basecreatecallback/index.js\"),\n    keys = __webpack_require__(/*! lodash.keys */ \"./node_modules/lodash.keys/index.js\"),\n    objectTypes = __webpack_require__(/*! lodash._objecttypes */ \"./node_modules/lodash._objecttypes/index.js\");\n\n/**\n * Iterates over own enumerable properties of an object, executing the callback\n * for each property. The callback is bound to `thisArg` and invoked with three\n * arguments; (value, key, object). Callbacks may exit iteration early by\n * explicitly returning `false`.\n *\n * @static\n * @memberOf _\n * @type Function\n * @category Objects\n * @param {Object} object The object to iterate over.\n * @param {Function} [callback=identity] The function called per iteration.\n * @param {*} [thisArg] The `this` binding of `callback`.\n * @returns {Object} Returns `object`.\n * @example\n *\n * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {\n *   console.log(key);\n * });\n * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)\n */\nvar forOwn = function forOwn(collection, callback, thisArg) {\n  var index,\n      iterable = collection,\n      result = iterable;\n  if (!iterable) return result;\n  if (!objectTypes[typeof iterable === 'undefined' ? 'undefined' : _typeof(iterable)]) return result;\n  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable === 'undefined' ? 'undefined' : _typeof(iterable)] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    if (callback(iterable[index], index, collection) === false) return result;\n  }\n  return result;\n};\n\nmodule.exports = forOwn;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.forown/index.js?");

/***/ }),

/***/ "./node_modules/lodash.identity/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.identity/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\n\n/**\n * This method returns the first argument provided to it.\n *\n * @static\n * @memberOf _\n * @category Utilities\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'name': 'fred' };\n * _.identity(object) === object;\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.identity/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isfunction/index.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash.isfunction/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\n\n/**\n * Checks if `value` is a function.\n *\n * @static\n * @memberOf _\n * @category Objects\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if the `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n */\nfunction isFunction(value) {\n  return typeof value == 'function';\n}\n\nmodule.exports = isFunction;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.isfunction/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isobject/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isobject/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar objectTypes = __webpack_require__(/*! lodash._objecttypes */ \"./node_modules/lodash._objecttypes/index.js\");\n\n/**\n * Checks if `value` is the language type of Object.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Objects\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if the `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // check if the value is the ECMAScript language type of Object\n  // http://es5.github.io/#x8\n  // and avoid a V8 bug\n  // http://code.google.com/p/v8/issues/detail?id=2291\n  return !!(value && objectTypes[typeof value === 'undefined' ? 'undefined' : _typeof(value)]);\n}\n\nmodule.exports = isObject;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.isobject/index.js?");

/***/ }),

/***/ "./node_modules/lodash.keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar isObject = __webpack_require__(/*! lodash.isobject */ \"./node_modules/lodash.isobject/index.js\"),\n    reNative = __webpack_require__(/*! lodash._renative */ \"./node_modules/lodash._renative/index.js\"),\n    shimKeys = __webpack_require__(/*! lodash._shimkeys */ \"./node_modules/lodash._shimkeys/index.js\");\n\n/* Native method shortcuts for methods with the same name as other `lodash` methods */\nvar nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys;\n\n/**\n * Creates an array composed of the own enumerable property names of an object.\n *\n * @static\n * @memberOf _\n * @category Objects\n * @param {Object} object The object to inspect.\n * @returns {Array} Returns an array of property names.\n * @example\n *\n * _.keys({ 'one': 1, 'two': 2, 'three': 3 });\n * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)\n */\nvar keys = !nativeKeys ? shimKeys : function (object) {\n  if (!isObject(object)) {\n    return [];\n  }\n  return nativeKeys(object);\n};\n\nmodule.exports = keys;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.keys/index.js?");

/***/ }),

/***/ "./node_modules/lodash.noop/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.noop/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\n\n/**\n * A no-operation function.\n *\n * @static\n * @memberOf _\n * @category Utilities\n * @example\n *\n * var object = { 'name': 'fred' };\n * _.noop(object) === undefined;\n * // => true\n */\nfunction noop() {\n  // no operation performed\n}\n\nmodule.exports = noop;\n\n//# sourceURL=webpack://Units/./node_modules/lodash.noop/index.js?");

/***/ }),

/***/ "./node_modules/lodash.support/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.support/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n/**\n * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>\n * Build: `lodash modularize modern exports=\"npm\" -o ./npm/`\n * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <http://lodash.com/license>\n */\nvar reNative = __webpack_require__(/*! lodash._renative */ \"./node_modules/lodash._renative/index.js\");\n\n/** Used to detect functions containing a `this` reference */\nvar reThis = /\\bthis\\b/;\n\n/**\n * An object used to flag environments features.\n *\n * @static\n * @memberOf _\n * @type Object\n */\nvar support = {};\n\n/**\n * Detect if functions can be decompiled by `Function#toString`\n * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).\n *\n * @memberOf _.support\n * @type boolean\n */\nsupport.funcDecomp = !reNative.test(global.WinRTError) && reThis.test(function () {\n  return this;\n});\n\n/**\n * Detect if `Function#name` is supported (all but IE).\n *\n * @memberOf _.support\n * @type boolean\n */\nsupport.funcNames = typeof Function.name == 'string';\n\nmodule.exports = support;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Units/./node_modules/lodash.support/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack://Units/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Conversions.js":
/*!****************************!*\
  !*** ./src/Conversions.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rupeeDollar = __webpack_require__(/*! ./conversions/rupeeDollar */ \"./src/conversions/rupeeDollar.js\");\n\nvar _rupeeKWD = __webpack_require__(/*! ./conversions/rupeeKWD */ \"./src/conversions/rupeeKWD.js\");\n\nvar _fahrenheitCelcius = __webpack_require__(/*! ./conversions/fahrenheitCelcius */ \"./src/conversions/fahrenheitCelcius.js\");\n\nvar _kmMile = __webpack_require__(/*! ./conversions/kmMile */ \"./src/conversions/kmMile.js\");\n\nvar _kmphMph = __webpack_require__(/*! ./conversions/kmphMph */ \"./src/conversions/kmphMph.js\");\n\nvar _literGallon = __webpack_require__(/*! ./conversions/literGallon */ \"./src/conversions/literGallon.js\");\n\nvar _kgPound = __webpack_require__(/*! ./conversions/kgPound */ \"./src/conversions/kgPound.js\");\n\nvar _kpaPsi = __webpack_require__(/*! ./conversions/kpaPsi */ \"./src/conversions/kpaPsi.js\");\n\nexports.default = {\n    rupeeToDollar: _rupeeDollar.rupeeToDollar,\n    dollarToRupee: _rupeeDollar.dollarToRupee,\n    rupeeToKWD: _rupeeKWD.rupeeToKWD,\n    KWDToRupee: _rupeeKWD.KWDToRupee\n};\n\n//# sourceURL=webpack://Units/./src/Conversions.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar defaultConfig = exports.defaultConfig = {\n    currency: {\n        unit: {\n            name: 'rupee',\n            symbol: '₹'\n        }\n    },\n    fuel: {\n        unit: {\n            name: 'l',\n            symbol: 'L'\n        }\n    },\n    volume: {\n        unit: {\n            name: 'l',\n            symbol: 'L'\n        }\n    },\n    speed: {\n        unit: {\n            name: 'km/h',\n            symbol: 'km/h'\n        }\n    },\n    distance: {\n        unit: {\n            name: 'km',\n            symbol: 'km'\n        }\n    },\n    temperature: {\n        unit: {\n            name: 'C',\n            symbol: '°C'\n        }\n    },\n    pressure: {\n        unit: {\n            name: 'kPa',\n            symbol: 'kPa'\n        }\n    },\n    mass: {\n        unit: {\n            name: 'kg',\n            symbol: 'kg'\n        }\n    },\n    dollarPerRupee: 0.015,\n    rupeePerDollar: 65,\n    KWDPerRupee: 0.0046,\n    rupeePerKWD: 217\n};\n\n//# sourceURL=webpack://Units/./src/constants.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (_ref) {\n    var value = _ref.value,\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        _ref$config = _ref.config,\n        config = _ref$config === undefined ? {} : _ref$config,\n        noThirdParty = _ref.noThirdParty,\n        toBest = _ref.toBest;\n\n    var convertedValue;\n    if (providedIn.name == requiredIn.name) convertedValue = value;else {\n        var functionName = providedIn.name + 'To' + (0, _firstLetterCap2.default)(requiredIn.name);\n        var converter = _Conversions2.default[functionName];\n        var factorName = providedIn.name + 'Per' + (0, _firstLetterCap2.default)(requiredIn.name);\n        if (noThirdParty) convertedValue = converter(value, config[factorName]);else if (toBest) {\n            convertedValue = convert(value).from(providedIn.name).toBest();\n            requiredIn.symbol = convertedValue.unit;\n            convertedValue = convertedValue.val;\n        } else convertedValue = convert(value).from(providedIn.name).to(requiredIn.name);\n    }\n    var returnValue = convertedValue;\n    if (typeof decimalPlaces !== 'undefined' && decimalPlaces !== null) {\n        returnValue = (0, _decimalValueGenerator2.default)(returnValue, decimalPlaces);\n    }\n    if (stringFormat) {\n        returnValue = (0, _stringGenerator2.default)(returnValue, requiredIn.symbol, stringFormat);\n    }\n    return returnValue;\n};\n\nvar _Conversions = __webpack_require__(/*! ../Conversions */ \"./src/Conversions.js\");\n\nvar _Conversions2 = _interopRequireDefault(_Conversions);\n\nvar _firstLetterCap = __webpack_require__(/*! ./firstLetterCap */ \"./src/helpers/firstLetterCap.js\");\n\nvar _firstLetterCap2 = _interopRequireDefault(_firstLetterCap);\n\nvar _decimalValueGenerator = __webpack_require__(/*! ./decimalValueGenerator */ \"./src/helpers/decimalValueGenerator.js\");\n\nvar _decimalValueGenerator2 = _interopRequireDefault(_decimalValueGenerator);\n\nvar _stringGenerator = __webpack_require__(/*! ./stringGenerator */ \"./src/helpers/stringGenerator.js\");\n\nvar _stringGenerator2 = _interopRequireDefault(_stringGenerator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar convert = __webpack_require__(/*! convert-units */ \"./node_modules/convert-units/lib/index.js\");\n\n//# sourceURL=webpack://Units/./src/helpers/converter.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function (_ref) {\n    var providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        config = _ref.config,\n        defaultValue = _ref.defaultValue,\n        from = _ref.from,\n        to = _ref.to;\n\n    if (!providedIn && from) providedIn = from;\n    if (!requiredIn && to) requiredIn = to;\n    if (!providedIn) providedIn = _extends({}, defaultValue);else if (typeof providedIn == 'string') {\n        providedIn = {\n            name: providedIn,\n            symbol: (0, _firstLetterCap2.default)(providedIn)\n        };\n    }\n    if (!requiredIn) {\n        if (config && config.unit) {\n            requiredIn = {\n                name: config.unit.name || config.unit,\n                symbol: config.unit.symbol || (0, _firstLetterCap2.default)(config.unit.name) || (0, _firstLetterCap2.default)(config.unit)\n            };\n        } else {\n            requiredIn = _extends({}, defaultValue);\n        }\n    } else if (typeof requiredIn == 'string') {\n        requiredIn = {\n            name: requiredIn,\n            symbol: (0, _firstLetterCap2.default)(requiredIn)\n        };\n    }\n    return {\n        providedIn: providedIn,\n        requiredIn: requiredIn\n    };\n};\n\nvar _firstLetterCap = __webpack_require__(/*! ./firstLetterCap */ \"./src/helpers/firstLetterCap.js\");\n\nvar _firstLetterCap2 = _interopRequireDefault(_firstLetterCap);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/helpers/requiredProvided.js?");

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
eval("\n\nvar _class, _temp, _initialiseProps;\n\nvar _Currency = __webpack_require__(/*! ./properties/Currency */ \"./src/properties/Currency.js\");\n\nvar _Currency2 = _interopRequireDefault(_Currency);\n\nvar _Temperature = __webpack_require__(/*! ./properties/Temperature */ \"./src/properties/Temperature.js\");\n\nvar _Temperature2 = _interopRequireDefault(_Temperature);\n\nvar _Distance = __webpack_require__(/*! ./properties/Distance */ \"./src/properties/Distance.js\");\n\nvar _Distance2 = _interopRequireDefault(_Distance);\n\nvar _Volume = __webpack_require__(/*! ./properties/Volume */ \"./src/properties/Volume.js\");\n\nvar _Volume2 = _interopRequireDefault(_Volume);\n\nvar _Fuel = __webpack_require__(/*! ./properties/Fuel */ \"./src/properties/Fuel.js\");\n\nvar _Fuel2 = _interopRequireDefault(_Fuel);\n\nvar _Mass = __webpack_require__(/*! ./properties/Mass */ \"./src/properties/Mass.js\");\n\nvar _Mass2 = _interopRequireDefault(_Mass);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nvar _Speed = __webpack_require__(/*! ./properties/Speed */ \"./src/properties/Speed.js\");\n\nvar _Speed2 = _interopRequireDefault(_Speed);\n\nvar _Pressure = __webpack_require__(/*! ./properties/Pressure */ \"./src/properties/Pressure.js\");\n\nvar _Pressure2 = _interopRequireDefault(_Pressure);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nmodule.exports = (_temp = _class = function Units(config) {\n    _classCallCheck(this, Units);\n\n    _initialiseProps.call(this);\n\n    this.config = config || _constants.defaultConfig || {};\n    this.bindThis();\n}, _initialiseProps = function _initialiseProps() {\n    var _this = this;\n\n    this.setConfig = function (config) {\n        _this.config = config;\n        _this.bindThis();\n    };\n\n    this.bindThis = function () {\n        _this.Currency = _Currency2.default.bind(_this);\n        _this.Currency.units = [\"rupee\", \"dollar\", \"KWD\"];\n        _this.Temperature = _Temperature2.default.bind(_this);\n        _this.Temperature.units = [\"C\", \"F\"];\n        _this.Distance = _Distance2.default.bind(_this);\n        _this.Distance.units = [\"km\", \"mi\"];\n        _this.Volume = _Volume2.default.bind(_this);\n        _this.Volume.units = [\"l\", \"gal\"];\n        _this.Fuel = _Fuel2.default.bind(_this);\n        _this.Fuel.units = [\"l\", \"gal\"];\n        _this.Mass = _Mass2.default.bind(_this);\n        _this.Mass.units = [\"kg\", \"lb\"];\n        _this.Speed = _Speed2.default.bind(_this);\n        _this.Speed.units = [\"km/h\", \"m/h\"];\n        _this.Pressure = _Pressure2.default.bind(_this);\n        _this.Pressure.units = [\"kPa\", \"psi\"];\n    };\n}, _temp);\n\n//# sourceURL=webpack://Units/./src/index.js?");

/***/ }),

/***/ "./src/properties/Currency.js":
/*!************************************!*\
  !*** ./src/properties/Currency.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides,\n        from = _ref.from,\n        to = _ref.to,\n        toBest = _ref.toBest;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.currency || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({\n        from: from,\n        to: to,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        config: config,\n        defaultValue: {\n            name: 'rupee',\n            symbol: '₹'\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        noThirdParty: true,\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        config: config,\n        toBest: toBest\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Currency.js?");

/***/ }),

/***/ "./src/properties/Distance.js":
/*!************************************!*\
  !*** ./src/properties/Distance.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides,\n        toBest = _ref.toBest,\n        from = _ref.from,\n        to = _ref.to;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.distance || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        config: config,\n        from: from,\n        to: to,\n        defaultValue: {\n            name: 'km',\n            symbol: 'km'\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        toBest: toBest\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Distance.js?");

/***/ }),

/***/ "./src/properties/Fuel.js":
/*!********************************!*\
  !*** ./src/properties/Fuel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides,\n        toBest = _ref.toBest,\n        from = _ref.from,\n        to = _ref.to;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.fuel || this.config.volume || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        from: from,\n        to: to,\n        config: config,\n        defaultValue: {\n            name: 'l',\n            symbol: 'L'\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        toBest: toBest\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Fuel.js?");

/***/ }),

/***/ "./src/properties/Mass.js":
/*!********************************!*\
  !*** ./src/properties/Mass.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides,\n        toBest = _ref.toBest,\n        from = _ref.from,\n        to = _ref.to;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.mass || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        from: from,\n        to: to,\n        config: config,\n        defaultValue: {\n            name: 'kg',\n            symbol: 'kg'\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        toBest: toBest\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Mass.js?");

/***/ }),

/***/ "./src/properties/Pressure.js":
/*!************************************!*\
  !*** ./src/properties/Pressure.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides,\n        from = _ref.from,\n        to = _ref.to,\n        toBest = _ref.toBest;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.pressure || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        from: from,\n        to: to,\n        config: config,\n        defaultValue: {\n            name: 'kPa',\n            symbol: 'kPa'\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        toBest: toBest\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Pressure.js?");

/***/ }),

/***/ "./src/properties/Speed.js":
/*!*********************************!*\
  !*** ./src/properties/Speed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides,\n        from = _ref.from,\n        to = _ref.to,\n        toBest = _ref.toBest;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.speed || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        config: config,\n        from: from,\n        to: to,\n        defaultValue: {\n            name: 'km/h',\n            symbol: 'km/h'\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        toBest: toBest\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Speed.js?");

/***/ }),

/***/ "./src/properties/Temperature.js":
/*!***************************************!*\
  !*** ./src/properties/Temperature.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        providedIn = _ref.providedIn,\n        requiredIn = _ref.requiredIn,\n        decimalPlaces = _ref.decimalPlaces,\n        stringFormat = _ref.stringFormat,\n        configOverrides = _ref.configOverrides,\n        toBest = _ref.toBest,\n        from = _ref.from,\n        to = _ref.to;\n\n    var config;\n    if (configOverrides) config = configOverrides;else config = this && this.config ? this.config.temperature || {} : {};\n\n    var _requiredProvided = (0, _requiredProvided3.default)({\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        from: from,\n        to: to,\n        config: config,\n        defaultValue: {\n            name: 'C',\n            symbol: '°C'\n        }\n    }),\n        providedIn = _requiredProvided.providedIn,\n        requiredIn = _requiredProvided.requiredIn;\n\n    var returnValue = (0, _converter2.default)({\n        value: value,\n        providedIn: providedIn,\n        requiredIn: requiredIn,\n        decimalPlaces: decimalPlaces,\n        stringFormat: stringFormat,\n        toBest: toBest\n    });\n    return returnValue;\n};\n\nvar _requiredProvided2 = __webpack_require__(/*! ../helpers/requiredProvided */ \"./src/helpers/requiredProvided.js\");\n\nvar _requiredProvided3 = _interopRequireDefault(_requiredProvided2);\n\nvar _converter = __webpack_require__(/*! ../helpers/converter */ \"./src/helpers/converter.js\");\n\nvar _converter2 = _interopRequireDefault(_converter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Units/./src/properties/Temperature.js?");

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