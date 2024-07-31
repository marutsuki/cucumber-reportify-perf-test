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
    default: function() {
        return _default;
    },
    initEngine: function() {
        return initEngine;
    }
});
var _constants = require("../constants");
var _features = require("./features");
var _templating = require("./templating");
var _pagination = require("./pagination");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var contentElem = document.getElementById('content');
if (contentElem === null) {
    throw new Error('Content container not found');
}
var paginationElem = document.getElementById('pagination');
if (paginationElem === null) {
    throw new Error('Pagination container not found');
}
var engineInternal = {
    allScenarios: [],
    initialized: false,
    searchFilter: '',
    failedFeaturesOnly: false,
    failedScenariosOnly: function(enabled) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = engineInternal.allScenarios[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var scenario = _step.value;
                if (!_instanceof(scenario, HTMLElement)) {
                    continue;
                }
                if (!enabled || scenario.getAttribute('data-status') === 'failed') {
                    scenario.style.display = 'grid';
                } else {
                    scenario.style.display = 'none';
                }
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
    },
    togglePage: function() {
        var _ref = _async_to_generator(function(page) {
            var _engineInternal_allScenarios, partition, pages;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        partition = Math.floor(page / _constants.PAGES_PER_PARTITION);
                        return [
                            4,
                            (0, _features.features)(partition, engineInternal.failedFeaturesOnly, engineInternal.searchFilter)
                        ];
                    case 1:
                        pages = _state.sent();
                        console.log(pages);
                        contentElem.innerHTML = (0, _templating.genFeatureHtml)(pages[page]);
                        engineInternal.allScenarios.splice(0, engineInternal.allScenarios.length);
                        (_engineInternal_allScenarios = engineInternal.allScenarios).push.apply(_engineInternal_allScenarios, _to_consumable_array(document.getElementsByClassName('scenario')));
                        return [
                            2
                        ];
                }
            });
        });
        return function(page) {
            return _ref.apply(this, arguments);
        };
    }(),
    /**
     * Updates the pagination based on the current filters.
     */ updatePagination: function() {
        var pages = engineInternal.failedFeaturesOnly ? window.failed.pages : window.data.pages;
        // Remove existing pagination buttons
        paginationElem.innerHTML = '';
        (0, _pagination.genPaginationElements)(pages, paginationElem, function(page) {
            return engine.togglePage(page);
        });
    }
};
var initEngine = function(failedOnly) {
    if (engineInternal.initialized) {
        return;
    }
    engineInternal.failedFeaturesOnly = failedOnly;
    engineInternal.initialized = true;
};
var engine = {
    setSearchFilter: function(filter) {
        engineInternal.searchFilter = filter;
        engineInternal.updatePagination();
        engineInternal.togglePage(0);
    },
    setFailedScenariosOnly: function(enabled) {
        engineInternal.failedScenariosOnly(enabled);
    },
    setFailedFeaturesOnly: function(enabled) {
        engineInternal.failedFeaturesOnly = enabled;
        engineInternal.updatePagination();
        engineInternal.togglePage(0);
    },
    setFailedOnly: function(enabled) {
        engine.setFailedFeaturesOnly(enabled);
        engine.setFailedScenariosOnly(enabled);
    },
    togglePage: function() {
        var _ref = _async_to_generator(function(page) {
            return _ts_generator(this, function(_state) {
                console.log('toggle page');
                engineInternal.togglePage(page);
                return [
                    2
                ];
            });
        });
        return function(page) {
            return _ref.apply(this, arguments);
        };
    }()
};
var _default = engine;
