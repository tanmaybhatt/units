'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target, search, replacement) {
    return target.replace(new RegExp(search, 'g'), replacement);
};

;
//# sourceMappingURL=replaceAll.js.map