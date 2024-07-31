"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _trie = require("./trie");
var _engine = /*#__PURE__*/ _interop_require_default(require("./engine"));
var _listeners = /*#__PURE__*/ _interop_require_default(require("./listeners"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
if (window.config.showFailedOnStart) {
    console.info('Showing failed features only on load');
}
(0, _trie.loadTries)();
_engine.default.setFailedOnly(window.config.showFailedOnStart);
(0, _listeners.default)(window.config.showFailedOnStart);
