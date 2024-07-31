"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "features", {
    enumerable: true,
    get: function() {
        return features;
    }
});
var _constants = require("./constants");
var _trie = require("./trie");
var cache;
var lastCall = {
    partitionIndex: -1,
    failedOnly: false,
    searchFilter: ''
};
var features = function(partitionIndex, failedOnly, searchFilter) {
    if (cache !== undefined && lastCall.partitionIndex === partitionIndex && lastCall.failedOnly === failedOnly && lastCall.searchFilter === searchFilter) {
        return Promise.resolve(cache);
    }
    return (failedOnly ? window.failed.providers : window.data.providers)[partitionIndex]();
    var results = (failedOnly ? _trie.failedTrie : _trie.allTrie).get(searchFilter);
    var ret = [];
    var page = [];
    var i = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var f = _step.value;
            if (i >= _constants.PAGE_SIZE) {
                ret.push(page);
                page = [];
                i = 0;
            }
            page.push(f.feature);
            i++;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    ret.push(page);
    return Promise.resolve(ret);
};
