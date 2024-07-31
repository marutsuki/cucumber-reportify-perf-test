"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    allTrie: function() {
        return allTrie;
    },
    failedTrie: function() {
        return failedTrie;
    },
    loadTries: function() {
        return loadTries;
    }
});
var _triesearch = /*#__PURE__*/ _interop_require_default(require("trie-search"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var allTrie = new _triesearch.default('name');
var failedTrie = new _triesearch.default('name');
var loadTries = function() {
// const pages = window.data.pages;
// const partitions = Math.ceil(pages / PAGES_PER_PARTITION);
// Array(partitions)
//     .fill(0)
//     .forEach(async (_, i) => {
//         window.data.providers[i]().then((pages) => {
//             pages.forEach((page) =>
//                 page.forEach((feature) => {
//                     if (feature.failed) {
//                         failedTrie.add({
//                             name: feature.name,
//                             feature,
//                         });
//                     }
//                     allTrie.add({
//                         name: feature.name,
//                         feature,
//                     });
//                 })
//             );
//         });
//     });
};
