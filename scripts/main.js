(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    MAX_PAGINATION_BUTTONS: function() {
        return MAX_PAGINATION_BUTTONS;
    },
    PAGES_PER_PARTITION: function() {
        return PAGES_PER_PARTITION;
    },
    PAGE_SIZE: function() {
        return PAGE_SIZE;
    },
    PARTITION_SIZE: function() {
        return PARTITION_SIZE;
    },
    SEARCH_INPUT_ID: function() {
        return SEARCH_INPUT_ID;
    }
});
var PAGE_SIZE = 15;
var PARTITION_SIZE = 100;
var MAX_PAGINATION_BUTTONS = 30;
var PAGES_PER_PARTITION = 100;
var SEARCH_INPUT_ID = 'feature-search';

},{}],2:[function(require,module,exports){
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
            var _engineInternal_allScenarios, partition, offset, pages;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        partition = Math.floor(page / _constants.PAGES_PER_PARTITION);
                        offset = page % _constants.PAGES_PER_PARTITION;
                        return [
                            4,
                            (0, _features.features)(partition, engineInternal.failedFeaturesOnly, engineInternal.searchFilter)
                        ];
                    case 1:
                        pages = _state.sent();
                        contentElem.innerHTML = (0, _templating.genFeatureHtml)(pages[offset]);
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

},{"../constants":1,"./features":3,"./pagination":5,"./templating":6}],3:[function(require,module,exports){
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
var _constants = require("../constants");
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

},{"../constants":1,"./trie":7}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return addListeners;
    }
});
var _constants = require("../constants");
var _engine = /*#__PURE__*/ _interop_require_default(require("./engine"));
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function addListeners(showFailed) {
    /**
     * Add an event listener to filter features based on the search input.
     */ var searchElem = document.getElementById(_constants.SEARCH_INPUT_ID);
    if (searchElem !== null) {
        searchElem.addEventListener('change', function(e) {
            if (!_instanceof(e.target, HTMLInputElement)) {
                return;
            }
            _engine.default.setSearchFilter(e.target.value);
        });
    }
    var FAILED_FEATURES_ONLY_CHECKBOX_ID = 'fail-filter-feature';
    /**
     * Add an event listener to filter features based on if they have failed.
     */ var failedFeaturesCheckbox = document.getElementById(FAILED_FEATURES_ONLY_CHECKBOX_ID);
    if (failedFeaturesCheckbox !== null) {
        failedFeaturesCheckbox.addEventListener('change', function(e) {
            if (!_instanceof(e.target, HTMLInputElement)) {
                return;
            }
            _engine.default.setFailedFeaturesOnly(e.target.checked);
        });
    }
    var FAILED_SCENARIOS_ONLY_CHECKBOX_ID = 'fail-filter-scenario';
    if (failedFeaturesCheckbox === null || !_instanceof(failedFeaturesCheckbox, HTMLInputElement)) {
        throw new Error("Couldn't find failed features filter checkbox");
    }
    /**
     * Add an event listener to filter scenarios based on if they have failed.
     */ var failedScenariosCheckbox = document.getElementById(FAILED_SCENARIOS_ONLY_CHECKBOX_ID);
    if (failedScenariosCheckbox === null || !_instanceof(failedScenariosCheckbox, HTMLInputElement)) {
        throw new Error("Couldn't find failed scenarios filter checkbox");
    }
    if (failedScenariosCheckbox !== null) {
        failedScenariosCheckbox.addEventListener('change', function(e) {
            if (!_instanceof(e.target, HTMLInputElement)) {
                return;
            }
            _engine.default.setFailedScenariosOnly(e.target.checked);
        });
    }
    if (showFailed) {
        failedFeaturesCheckbox.checked = true;
        failedScenariosCheckbox.checked = true;
    }
}

},{"../constants":1,"./engine":2}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "genPaginationElements", {
    enumerable: true,
    get: function() {
        return genPaginationElements;
    }
});
var _constants = require("../constants");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var paginationButton = function(i, onPageChange) {
    var button = document.createElement('input');
    var str = i.toString();
    button.type = 'radio';
    button.name = 'options';
    button.checked = i === 0;
    button.className = 'pagination-button pagination-button-join-item btn btn-square';
    button.setAttribute('data-page', str);
    button.innerText = str;
    button.ariaLabel = str;
    button.addEventListener('click', function(e) {
        var page = button.getAttribute('data-page');
        if (page === null) {
            return;
        }
        onPageChange(parseInt(page));
    });
    return button;
};
var paginationInput = function(onPageChange) {
    var input = document.createElement('input');
    input.type = 'number';
    input.placeholder = '...';
    input.className = 'input w-20 mx-4 text-center bg-base-300';
    input.addEventListener('change', function(e) {
        if (!_instanceof(e.target, HTMLInputElement)) {
            return;
        }
        var page = parseInt(e.target.value);
        if (isNaN(page)) {
            return;
        }
        onPageChange(page);
    });
    return input;
};
var genPaginationElements = function(pages, container, onPageChange) {
    // Add new pagination buttons
    if (pages > _constants.MAX_PAGINATION_BUTTONS) {
        container.appendChild(paginationButton(0, onPageChange));
        container.appendChild(paginationInput(onPageChange));
        container.appendChild(paginationButton(pages - 1, onPageChange));
    } else {
        Array(pages).fill(0).forEach(function(_, i) {
            container.appendChild(paginationButton(i, onPageChange));
        });
    }
};

},{"../constants":1}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "genFeatureHtml", {
    enumerable: true,
    get: function() {
        return genFeatureHtml;
    }
});
var _mustache = /*#__PURE__*/ _interop_require_default(require("mustache"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var beforeAfterTemplate = '\n <li class="pt-2 max-w-full">\n        <div>\n            <div class="flex flex-row justify-between text-md">\n                <div class="flex flex-row">\n                    <span class="font-bold">{{keyword}}</span>\n                    {{#match.location}}\n                        <span class="indent-2">{{match.location}}</span>\n                    {{/match.location}}\n                </div>\n                <div class="flex flex-row items-center">\n                    <p class="px-2">\n                        {{result.duration}}\n                    </p>\n                    {{ > status}}\n                </div>\n            </div>\n        </div>\n        {{#embeddings}}\n            {{#isPng}}\n                <img src="data:image/png;base64,{{data}}" />\n            {{/isPng}}\n            {{#isJpeg}}\n                <img src="data:image/jpeg;base64,{{data}}" />\n            {{/isJpeg}}\n            {{#isText}}\n                <pre>{{{data}}}</pre>\n            {{/isText}}\n        {{/embeddings}}\n        {{#result.error_message}}\n            {{#match.location}}\n                <a className="text-primary underline">\n                    {{match.location}}\n                </a>\n            {{/match.location}}\n            <div className="max-h-96 overflow-y-auto p-4">\n                <code className="text-sm bg-base-100 text-base-content p-2">\n                    {{result.error_message}}\n                </code>\n            </div>\n        {{/result.error_message}}\n    </li>\n';
var statusTemplate = '\n    {{#result.passed}}\n    <div class="badge badge-success gap-2">Passed</div>\n    {{/result.passed}}\n    {{#result.failed}}\n    <div class="badge badge-error gap-2">Failed</div>\n    {{/result.failed}}\n    {{#result.skipped}}\n    <div class="badge badge-warning gap-2">Skipped</div>\n    {{/result.skipped}}\n    {{#result.undefined}}\n    <div class="badge badge-warning gap-2">Undefined</div>\n    {{/result.undefined}}\n    {{#result.ambiguous}}\n    <div class="badge badge-warning gap-2">Ambiguous</div>\n    {{/result.ambiguous}}\n    {{#result.pending}}\n    <div class="badge badge-info gap-2">Pending</div>\n    {{/result.pending}}\n';
var stepTemplate = '\n    <li class="pt-2 max-w-full">\n        <div>\n            <div class="flex flex-row justify-between text-md">\n                <div class="flex flex-row">\n                    <span class="font-bold">{{keyword}}</span>\n                    <span class="indent-2">{{name}}</span>\n                </div>\n                <div class="flex flex-row items-center">\n                    <p class="px-2">\n                        {{result.duration}}\n                    </p>\n                    {{ > status}}\n                </div>\n            </div>\n\n            <div class="max-w-[75%]">\n                {{#argumentz}}\n                    {{#argumentz}}\n                        <table class="table">\n                            {{#rows}}\n                                <tr>\n                                    {{#cells}}\n                                        <td>\n                                            {{.}}\n                                        </td>\n                                    {{/cells}}\n                                </tr>\n                            {{/rows}}\n                        </table>\n                    {{/argumentz}}\n                {{/argumentz}}\n            </div>\n        </div>\n        {{#embeddings}}\n            {{#isPng}}\n                <img src="data:image/png;base64,{{data}}" />\n            {{/isPng}}\n            {{#isJpeg}}\n                <img src="data:image/jpeg;base64,{{data}}" />\n            {{/isJpeg}}\n            {{#isText}}\n                <pre>{{{data}}}</pre>\n            {{/isText}}\n        {{/embeddings}}\n        {{#result.error_message}}\n            {{#match.location}}\n                <a className="text-primary underline">\n                    {{match.location}}\n                </a>\n            {{/match.location}}\n            <div className="max-h-96 overflow-y-auto p-4">\n                <code className="text-sm bg-base-100 text-base-content p-2">\n                    {{result.error_message}}\n                </code>\n            </div>\n        {{/result.error_message}}\n    </li>\n';
var scenarioTemplate = '\n<div\n    {{#failed}}data-status="failed"{{/failed}}\n    class="scenario collapse bg-base-300 m-2 shadow-lg shadow-base-content"\n>\n    <input class="min-h-1" type="checkbox" />\n    <h2\n        class="text-base-content collapse-title text-md font-medium px-2 py-0.5 min-h-0 bg-opacity-50 {{#failed}}bg-error text-error-content{{/failed}}{{^failed}}bg-neutral text-neutral-content{{/failed}}"\n    >\n        {{name}}\n    </h2>\n    <ul class="collapse-content">\n        {{#before}}\n            {{> beforeAfter}}\n        {{/before}}\n        {{#steps}}\n            {{> step}}\n        {{/steps}}\n        {{#after}}\n            {{> beforeAfter}}\n        {{/after}}\n    </ul>\n</div>\n<div';
var partial = {
    scenario: scenarioTemplate,
    step: stepTemplate,
    status: statusTemplate,
    beforeAfter: beforeAfterTemplate
};
var template = '{{#features}}\n<div\n    id={model.id}\n    class="page feature collapse bg-base-200 m-1 shadow-xl shadow-base-content"\n    data-name="{{model.name}}"\n    data-status="{{status}}"\n    {...props}\n>\n    <input class="min-h-1" type="checkbox" />\n    {{#failed}}\n        <div class="collapse-title rounded-md p-1 flex flex-row justify-between min-h-0 bg-opacity-50 bg-gradient-to-r from-error from-0% to-50% to-neutral">\n    {{/failed}}\n    {{^failed}}\n        <div class="collapse-title rounded-md p-1 flex flex-row justify-between min-h-0 bg-opacity-50 bg-gradient-to-r from-success from-0% to-50% to-neutral">\n    {{/failed}}\n        {{#failed}}\n            <h2 class="text-error-content text-md font-medium m-0 min-h-0">\n        {{/failed}}\n        {{^failed}}\n            <h2 class="text-success-content text-md font-medium m-0 min-h-0">\n        {{/failed}}\n            {{ name }}\n        </h2>\n        <div class="flex flex-row">\n            <div class="text-success h-full rounded-md w-24">\n                {{ stats.passed }} passed\n            </div>\n            <div class="text-error h-full rounded-md w-20">\n                {{ stats.failed }} failed\n            </div>\n            <div class="text-warning h-full rounded-md w-20">\n                {{ stats.skipped }} skipped\n            </div>\n        </div>\n    </div>\n\n    <div class="content collapse-content">\n        <ul>\n            {{ #elements }}\n                {{> scenario}}\n            {{/ elements}}\n        </ul>\n    </div>\n    </div>\n</div>\n{{/features}}';
var genFeatureHtml = function(features) {
    return _mustache.default.render(template, {
        features: features
    }, partial);
};

},{"mustache":12}],7:[function(require,module,exports){
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

},{"trie-search":13}],8:[function(require,module,exports){
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

},{"./engine":2,"./listeners":4,"./trie":7}],9:[function(require,module,exports){
module.exports = require('./src/HashArray.js');
},{"./src/HashArray.js":10}],10:[function(require,module,exports){
/*===========================================================================*\
 * Requires
\*===========================================================================*/
var JClass = require('jclass');

/*===========================================================================*\
 * HashArray
\*===========================================================================*/
var HashArray = JClass._extend({
  //-----------------------------------
  // Constructor
  //-----------------------------------
  init: function(keyFields, callback, options) {
    keyFields = keyFields instanceof Array ? keyFields : [keyFields];

    this._map = {};
    this._list = [];
    this.callback = callback;

    this.keyFields = keyFields;

    this.isHashArray = true;
    
    this.options = options || {
      ignoreDuplicates: false
    };

    if (callback) {
      callback('construct');
    }
  },
  //-----------------------------------
  // add()
  //-----------------------------------
  addOne: function (obj) {
    var needsDupCheck = false;
    for (var key in this.keyFields) {
      key = this.keyFields[key];
      var inst = this.objectAt(obj, key);
      if (inst) {
        if (this.has(inst)) {
          if (this.options.ignoreDuplicates)
            return;
          if (this._map[inst].indexOf(obj) != -1) {
            // Cannot add the same item twice
            needsDupCheck = true;
            continue;
          }
          this._map[inst].push(obj);
        }
        else this._map[inst] = [obj];
      }
    }

    if (!needsDupCheck || this._list.indexOf(obj) == -1)
      this._list.push(obj);
  },
  add: function() {
    for (var i = 0; i < arguments.length; i++) {
      this.addOne(arguments[i]);
    }

    if (this.callback) {
      this.callback('add', Array.prototype.slice.call(arguments, 0));
    }
    
    return this;
  },
  addAll: function (arr) {
    if (arr.length < 100)
      this.add.apply(this, arr);
    else {
      for (var i = 0; i < arr.length; i++)
        this.add(arr[i]);
    }
    
    return this;
  },
  addMap: function(key, obj) {
    this._map[key] = obj;
    if (this.callback) {
      this.callback('addMap', {
        key: key,
        obj: obj
      });
    }
    
    return this;
  },
  //-----------------------------------
  // Intersection, union, etc.
  //-----------------------------------
  /**
   * Returns a new HashArray that contains the intersection between this (A) and the hasharray passed in (B). Returns A ^ B.
   */
  intersection: function (other) {
    var self = this;

    if (!other || !other.isHashArray)
      throw Error('Cannot HashArray.intersection() on a non-hasharray object. You passed in: ', other);

    var ret = this.clone(null, true),
      allItems = this.clone(null, true).addAll(this.all.concat(other.all));

    allItems.all.forEach(function (item) {
      if (self.collides(item) && other.collides(item))
        ret.add(item);
    });

    return ret;
  },
  /**
   * Returns a new HashArray that contains the complement (difference) between this hash array (A) and the hasharray passed in (B). Returns A - B.
   */
  complement: function (other) {
    var self = this;

    if (!other || !other.isHashArray)
      throw Error('Cannot HashArray.complement() on a non-hasharray object. You passed in: ', other);

    var ret = this.clone(null, true);

    this.all.forEach(function (item) {
      if (!other.collides(item))
        ret.add(item);
    });

    return ret;
  },
  //-----------------------------------
  // Retrieval
  //-----------------------------------
  get: function(key) {
    if (!this.has(key))
      return;
    return (!(this._map[key] instanceof Array) || this._map[key].length != 1) ? this._map[key] : this._map[key][0];
  },
  getAll: function(keys) {
    keys = keys instanceof Array ? keys : [keys];

    if (keys[0] == '*')
      return this.all;

    var res = new HashArray(this.keyFields);
    for (var key in keys)
      res.add.apply(res, this.getAsArray(keys[key]));

    return res.all;
  },
  getAsArray: function(key) {
    return this._map[key] || [];
  },
  getUniqueRandomIntegers: function (count, min, max) {
    var res = [], map = {};

    count = Math.min(Math.max(max - min, 1), count);
    
    while (res.length < count)
    {
      var r = Math.floor(min + (Math.random() * (max + 1)));
      if (map[r]) continue;
      map[r] = true;
      res.push(r);
    }

    return res;
  },
  sample: function (count, keys) {
    // http://en.wikipedia.org/wiki/Image_(mathematics)
    var image = this.all,
      ixs = {},
      res = [];

    if (keys)
      image = this.getAll(keys);

    var rand = this.getUniqueRandomIntegers(count, 0, image.length - 1);

    for (var i = 0; i < rand.length; i++)
      res.push(image[rand[i]]);

    return res;
  },
  //-----------------------------------
  // Peeking
  //-----------------------------------
  has: function(key) {
    return this._map.hasOwnProperty(key);
  },
  collides: function (item) {
    for (var k in this.keyFields)
      if (this.has(this.objectAt(item, this.keyFields[k])))
        return true;
    
    return false;
  },
  hasMultiple: function(key) {
    return this._map[key] instanceof Array;
  },
  //-----------------------------------
  // Removal
  //-----------------------------------
  removeByKey: function() {
    var removed = [];
    for (var i = 0; i < arguments.length; i++) {
      var key = arguments[i];
      var items = this._map[key].concat();
      if (items) {
        removed = removed.concat(items);
        for (var j in items) {
          var item = items[j];
          for (var ix in this.keyFields) {
            var key2 = this.objectAt(item, this.keyFields[ix]);
            if (key2 && this.has(key2)) {
              var ix = this._map[key2].indexOf(item);
              if (ix != -1) {
                this._map[key2].splice(ix, 1);
              }

              if (this._map[key2].length == 0)
                delete this._map[key2];
            }
          }

          this._list.splice(this._list.indexOf(item), 1);
        }
      }
      delete this._map[key];
    }

    if (this.callback) {
      this.callback('removeByKey', removed);
    }
    
    return this;
  },
  remove: function() {
    for (var i = 0; i < arguments.length; i++) {
      var item = arguments[i];
      for (var ix in this.keyFields) {
        var key = this.objectAt(item, this.keyFields[ix]);
        if (key) {
          var ix = this._map[key].indexOf(item);
          if (ix != -1)
            this._map[key].splice(ix, 1);
          else
            throw new Error('HashArray: attempting to remove an object that was never added!' + key);

          if (this._map[key].length == 0)
            delete this._map[key];
        }
      }

      var ix = this._list.indexOf(item);

      if (ix != -1)
        this._list.splice(ix, 1);
      else
        throw new Error('HashArray: attempting to remove an object that was never added!' + key);
    }

    if (this.callback) {
      this.callback('remove', arguments);
    }
    
    return this;
  },
  removeAll: function() {
    var old = this._list.concat();
    this._map = {};
    this._list = [];

    if (this.callback) {
      this.callback('remove', old);
    }
    
    return this;
  },
  //-----------------------------------
  // Utility
  //-----------------------------------
  objectAt: function(obj, path) {
    if (typeof path === 'string') {
      return obj[path];
    }

    var dup = path.concat();
    // else assume array.
    while (dup.length && obj) {
      obj = obj[dup.shift()];
    }

    return obj;
  },
  //-----------------------------------
  // Iteration
  //-----------------------------------
  forEach: function(keys, callback) {
    keys = keys instanceof Array ? keys : [keys];

    var objs = this.getAll(keys);

    objs.forEach(callback);
    
    return this;
  },
  forEachDeep: function(keys, key, callback) {
    keys = keys instanceof Array ? keys : [keys];

    var self = this,
      objs = this.getAll(keys);

    objs.forEach(function (item) {
      callback(self.objectAt(item, key), item);
    });
    
    return this;
  },
  //-----------------------------------
  // Cloning
  //-----------------------------------
  clone: function(callback, ignoreItems) {
    var n = new HashArray(this.keyFields.concat(), callback ? callback : this.callback);
    if (!ignoreItems)
      n.add.apply(n, this.all.concat());
    return n;
  },
  //-----------------------------------
  // Mathematical
  //-----------------------------------
  sum: function(keys, key, weightKey) {
    var self = this,
      ret = 0;
    this.forEachDeep(keys, key, function (value, item) {
      if (weightKey !== undefined)
        value *= self.objectAt(item, weightKey);

      ret += value;
    });
    return ret;
  },
  average: function(keys, key, weightKey) {
    var ret = 0,
      tot = 0,
      weightsTotal = 0,
      self = this;

    if (weightKey !== undefined)
      this.forEachDeep(keys, weightKey, function (value) {
        weightsTotal += value;
      })

    this.forEachDeep(keys, key, function (value, item) {
      if (weightKey !== undefined)
        value *= (self.objectAt(item, weightKey) / weightsTotal);

      ret += value;
      tot++;
    });

    return weightKey !== undefined ? ret : ret / tot;
  },
  //-----------------------------------
  // Filtering
  //-----------------------------------
  filter: function (keys, callbackOrKey) {
    var self = this;
    
    var callback = (typeof(callbackOrKey) == 'function') ? callbackOrKey : defaultCallback;

    var ha = new HashArray(this.keyFields);
    ha.addAll(this.getAll(keys).filter(callback));
    return ha;
    
    function defaultCallback(item) {
      var val = self.objectAt(item, callbackOrKey);
      return val !== undefined && val !== false;
    }
  }
});

//-----------------------------------
// Operators
//-----------------------------------
Object.defineProperty(HashArray.prototype, 'all', {
  get: function () {
    return this._list;
  }
});

Object.defineProperty(HashArray.prototype, 'map', {
  get: function () {
    return this._map;
  }
});

module.exports = HashArray;

//-----------------------------------
// Browser
//-----------------------------------
if (typeof window !== 'undefined')
  window.HashArray = HashArray;
},{"jclass":11}],11:[function(require,module,exports){
/**
 * jclass v1.1.9
 * https://github.com/riga/jclass
 *
 * Marcel Rieger, 2015
 * MIT licensed, http://www.opensource.org/licenses/mit-license
 */

(function(factory) {

  /**
   * Make jclass available in any context.
   */

  if (typeof(define) == "function" && define.amd) {
    // AMD
    define([], factory);

  } else if (typeof(exports) == "object") {
    // CommonJS
    exports = factory();

    if (typeof(module) == "object") {
      // NodeJS
      module.exports = exports;
    }

  } else if (window) {
    // Browser
    window.JClass = factory();

  } else if (typeof(console) == "object" && console.error instanceof Function) {
    // error case
    console.error("cannot determine environment");
  }

})(function() {

  /**
   * Helper functions.
   */

  /**
   * Checks whether a passed object is a function.
   *
   * @param obj - The object to check.
   * @returns {boolean}
   */
  var isFn = function(obj) {
    return obj instanceof Function;
  };

  /**
   * Extends a target object by one or more source objects with shallow key comparisons. Note that
   * the extension is done in-place.
   *
   * @param {object} target - The target object to extend.
   * @param {...object} source - Source objects.
   * @returns {object} The extended object.
   */
  var extend = function(target) {
    var sources = Array.prototype.slice.call(arguments, 1);

    // loop through all sources
    for (var i in sources) {
      var source = sources[i];

      // object check
      if (typeof(source) != "object") {
        continue;
      }

      // loop through all source attributes
      for (var key in source) {
        target[key] = source[key];
      }
    }

    return target;
  };


  /**
   * Default options.
   */

  var defaultOptions = {
    // internal object for indicating that class objects don't have a class object themselves,
    // may not be used by users
    _isClassObject: false
  };


  /**
   * Flags.
   */

  // flag to distinguish between prototype and class instantiation 
  var initializing = false;


  /**
   * Base class definition.
   */

  // empty BaseClass implementation
  var BaseClass = function(){};

  // add the _subClasses entry
  BaseClass._subClasses = [];

  // empty init method
  BaseClass.prototype.init = function(){};


  /**
   * Extend mechanism. Returns a derived class.
   *
   * @param {object} instanceMembers - Members that will be owned by instances.
   * @param {object} classMembers - Members that will be owned by the class itself.
   * @returns {JClass}
   */
  BaseClass._extend = function(instanceMembers, classMembers, options) {

    // default arguments
    if (instanceMembers === undefined) {
      instanceMembers = {};
    }
    if (classMembers === undefined) {
      classMembers = {};
    }
    if (options === undefined) {
      options = {};
    }

    // mixin default options
    options = extend({}, defaultOptions, options);


    // sub class dummy constructor
    var JClass = function() {
      // nothing happens here when we are initializing
      if (initializing) {
        return;
      }

      // store a reference to the class itself
      this._class = JClass;

      // all construction is actually done in the init method
      if (this.init instanceof Function) {
        this.init.apply(this, arguments);
      }
    };


    // alias for readability
    var SuperClass = this;

    // create an instance of the super class via new
    // the flag sandwich prevents a call to the init method
    initializing = true;
    var prototype = new SuperClass();
    initializing = false;

    // get the prototype of the super class
    var superPrototype = SuperClass.prototype;

    // the instance of the super class is our new prototype
    JClass.prototype = prototype;

    // enforce the constructor to be what we expect
    // calls to the constructor will invoke the init method (see above)
    JClass.prototype.constructor = JClass;

    // store a reference to the super class
    JClass._superClass = SuperClass;

    // store references to all extending classes
    JClass._subClasses = [];
    SuperClass._subClasses.push(JClass);

    // make this class extendable as well
    JClass._extend = SuperClass._extend;


    // _extends returns true if the class itself extended "target"
    // in any hierarchy, e.g. every class extends "JClass" itself
    JClass._extends = function(target) {
      // this function operates recursive, so stop when the super class is our BaseClass
      if (this._superClass == BaseClass) {
        return false;
      }

      // success case
      if (target == this._superClass || target == BaseClass) {
        return true;
      }

      // continue with the next super class
      return this._superClass._extends(target);
    };


    // propagate instance members directly to the created protoype,
    // the member is either a normal member or a descriptor
    for (var key in instanceMembers) {
      var property = Object.getOwnPropertyDescriptor(instanceMembers, key);
      var member   = property.value;

      // descriptor flag set?
      if (member !== null && typeof(member) == "object" && member.descriptor) {
        Object.defineProperty(prototype, key, member);

      // getter/setter syntax
      } else if (!("value" in property) && ("set" in property || "get" in property)) {
        Object.defineProperty(prototype, key, property);

      // normal member, simple assignment
      } else {
        prototype[key] = member;

        // if both member and the super member are distinct functions
        // add the super member to the member as "_super"
        var superMember = superPrototype[key];
        if (isFn(member) && isFn(superMember) && member !== superMember) {
          member._super = superMember;
        }
      }
    }


    // propagate class members to the _members object
    if (!options._isClassObject) {
      // try to find the super class of the _members object 
      var ClassMembersSuperClass = SuperClass._members === undefined ?
        BaseClass : SuperClass._members._class;

      // create the actual class of the _members instance
      // with an updated version of our options
      var opts = extend({}, options, { _isClassObject: true });
      var ClassMembersClass = ClassMembersSuperClass._extend(classMembers, {}, opts);

      // store the actual JClass in ClassMembersClass
      ClassMembersClass._instanceClass = JClass;

      // create the _members instance
      JClass._members = new ClassMembersClass();
    }


    // return the new class
    return JClass;
  };


  /**
   * Converts arbitrary protoype-style classes to our JClass definition.
   *
   * @param {function} cls - The class to convert.
   * @returns {JClass}
   */
  BaseClass._convert = function(cls, options) {
    // the properties consist of the class' prototype
    var instanceMembers = cls.prototype;

    // add the constructor function
    instanceMembers.init = function() {
      // simply create an instance of our target class
      var origin = this._origin = BaseClass._construct(cls, arguments);

      // add properties for each own property in _origin
      Object.keys(origin).forEach(function(key) {
        if (!origin.hasOwnProperty(key)) {
          return;
        }

        Object.defineProperty(this, key, {
          get: function() {
            return origin[key];
          }
        });
      }, this);
    };

    // finally, create and return our new class
    return BaseClass._extend(instanceMembers, {}, options);
  };


  /**
   * Returns an instance of a class with a list of arguments. This provides an apply-like
   * constructor usage. Note that this approach does not work with native constructors (e.g. String
   * or Boolean).
   *
   * @param {Class|JClass} cls - The class to instantiate. This may be a JClass or a prototype-based
   *   class.
   * @param {array} [args=[]] - Arguments to pass to the constructor.
   * @returns {instance}
   */
  BaseClass._construct = function(cls, args) {
    // empty default args
    if (args === undefined) {
      args = [];
    }

    // create a class wrapper that calls cls like a function
    var Class = function() {
      return cls.apply(this, args);
    };

    // copy the prototype
    Class.prototype = cls.prototype;

    // return a new instance
    return new Class();
  };


  /**
   * Returns a property descriptor of the super class.
   *
   * @param {JClass|instance} cls - A JClass or an instance of a JClass to retrieve the property
   *   descriptor from.
   * @param {string} prop - The name of the property descriptor to get.
   * @returns {object}
   */
  BaseClass._superDescriptor = function(cls, prop) {
    // if cls is an instance, use its class
    if ("_class" in cls && cls instanceof cls._class) {
      cls = cls._class;
    }

    // a JClass?
    if ("_extends" in cls && cls._extends instanceof Function && cls._extends(this)) {
      return Object.getOwnPropertyDescriptor(cls._superClass.prototype, prop);
    } else {
      return undefined;
    }
  };


  /**
   * Return the BaseClass.
   */

  return BaseClass;
});

},{}],12:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Mustache = factory());
}(this, (function () { 'use strict';

  /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */
  function primitiveHasOwnProperty (primitive, propName) {
    return (
      primitive != null
      && typeof primitive !== 'object'
      && primitive.hasOwnProperty
      && primitive.hasOwnProperty(propName)
    );
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   *
   * Tokens for partials also contain two more elements: 1) a string value of
   * indendation prior to that tag and 2) the index of that tag on that line -
   * eg a value of 2 indicates the partial is the third tag on this line.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?
    var indentation = '';  // Tracks indentation for tags that use it
    var tagIndex = 0;      // Stores a count of number of tags encountered on a line

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += ' ';
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
            indentation = '';
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      if (type == '>') {
        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
      } else {
        token = [ type, value, start, scanner.pos ];
      }
      tagIndex++;
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    stripSpace();

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          intermediateValue = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = (
                hasProperty(intermediateValue, names[index])
                || primitiveHasOwnProperty(intermediateValue, names[index])
              );

            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];

          /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit) {
          value = intermediateValue;
          break;
        }

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.templateCache = {
      _cache: {},
      set: function set (key, value) {
        this._cache[key] = value;
      },
      get: function get (key) {
        return this._cache[key];
      },
      clear: function clear () {
        this._cache = {};
      }
    };
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    if (typeof this.templateCache !== 'undefined') {
      this.templateCache.clear();
    }
  };

  /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ':' + (tags || mustache.tags).join(':');
    var isCacheEnabled = typeof cache !== 'undefined';
    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

    if (tokens == undefined) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `config` argument is given here, then it should be an
   * object with a `tags` attribute or an `escape` attribute or both.
   * If an array is passed, then it will be interpreted the same way as
   * a `tags` attribute on a `config` object.
   *
   * The `tags` attribute of a `config` object must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   *
   * The `escape` attribute of a `config` object must be a function which
   * accepts a string as input and outputs a safely escaped string.
   * If an `escape` function is not provided, then an HTML-safe string
   * escaping function is used as the default.
   */
  Writer.prototype.render = function render (template, view, partials, config) {
    var tags = this.getConfigTags(config);
    var tokens = this.parse(template, tags);
    var context = (view instanceof Context) ? view : new Context(view, undefined);
    return this.renderTokens(tokens, context, partials, template, config);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context, config);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials, config);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate, config);
  };

  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, '');
    var partialByNl = partial.split('\n');
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join('\n');
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
    if (!partials) return;
    var tags = this.getConfigTags(config);

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      var tokens = this.parse(indentedValue, tags);
      return this.renderTokens(tokens, context, partials, indentedValue, config);
    }
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context, config) {
    var escape = this.getConfigEscape(config) || mustache.escape;
    var value = context.lookup(token[1]);
    if (value != null)
      return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  Writer.prototype.getConfigTags = function getConfigTags (config) {
    if (isArray(config)) {
      return config;
    }
    else if (config && typeof config === 'object') {
      return config.tags;
    }
    else {
      return undefined;
    }
  };

  Writer.prototype.getConfigEscape = function getConfigEscape (config) {
    if (config && typeof config === 'object' && !isArray(config)) {
      return config.escape;
    }
    else {
      return undefined;
    }
  };

  var mustache = {
    name: 'mustache.js',
    version: '4.2.0',
    tags: [ '{{', '}}' ],
    clearCache: undefined,
    escape: undefined,
    parse: undefined,
    render: undefined,
    Scanner: undefined,
    Context: undefined,
    Writer: undefined,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache (cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache () {
      return defaultWriter.templateCache;
    }
  };

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view`, `partials`, and `config`
   * using the default writer.
   */
  mustache.render = function render (template, view, partials, config) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials, config);
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;

})));

},{}],13:[function(require,module,exports){
module.exports = require('./src/TrieSearch');
},{"./src/TrieSearch":14}],14:[function(require,module,exports){
var HashArray = require('hasharray');

var MAX_CACHE_SIZE = 64;

var IS_WHITESPACE = /^[\s]*$/;

var DEFAULT_INTERNATIONALIZE_EXPAND_REGEXES = [
  {
    regex: /[åäàáâãæ]/ig,
    alternate: 'a'
  },
  {
    regex: /[èéêë]/ig,
    alternate: 'e'
  },
  {
    regex: /[ìíîï]/ig,
    alternate: 'i'
  },
  {
    regex: /[òóôõö]/ig,
    alternate: 'o'
  },
  {
    regex: /[ùúûü]/ig,
    alternate: 'u'
  },
  {
    regex: /[æ]/ig,
    alternate: 'ae'
  }
];

String.prototype.replaceCharAt=function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

var TrieSearch = function (keyFields, options) {
  this.options = options || {};

  // Default ignoreCase to true
  this.options.ignoreCase = (this.options.ignoreCase === undefined) ? true : this.options.ignoreCase;
  this.options.maxCacheSize = this.options.maxCacheSize || MAX_CACHE_SIZE;
  this.options.cache = this.options.hasOwnProperty('cache') ? this.options.cache : true;
  this.options.splitOnRegEx = this.options.hasOwnProperty('splitOnRegEx') ? this.options.splitOnRegEx : /\s/g;
  this.options.splitOnGetRegEx = this.options.hasOwnProperty('splitOnGetRegEx') ? this.options.splitOnGetRegEx : this.options.splitOnRegEx;
  this.options.min = this.options.min || 1;
  this.options.keepAll = this.options.hasOwnProperty('keepAll') ? this.options.keepAll : false;
  this.options.keepAllKey = this.options.hasOwnProperty('keepAllKey') ? this.options.keepAllKey : 'id';
  this.options.idFieldOrFunction = this.options.hasOwnProperty('idFieldOrFunction') ? this.options.idFieldOrFunction : undefined;
  this.options.expandRegexes = this.options.expandRegexes || DEFAULT_INTERNATIONALIZE_EXPAND_REGEXES;
  this.options.insertFullUnsplitKey = this.options.hasOwnProperty('insertFullUnsplitKey') ? this.options.insertFullUnsplitKey : false;

  this.keyFields = keyFields ? (keyFields instanceof Array ? keyFields : [keyFields]) : [];
  this.root = {};
  this.size = 0;

  if (this.options.cache) {
    this.getCache = new HashArray('key');
  }
};

function deepLookup(obj, keys) {
  return keys.length === 1 ? obj[keys[0]] : deepLookup(obj[keys[0]], keys.slice(1, keys.length));
}

TrieSearch.prototype = {
  add: function (obj, customKeys) {
    if (this.options.cache)
      this.clearCache();

    // Someone might have called add via an array forEach where the second param is a number
    if (typeof customKeys === 'number') {
      customKeys = undefined;
    }

    var keyFields = customKeys || this.keyFields;

    for (var k in keyFields)
    {
      var key = keyFields[k],
        isKeyArr = key instanceof Array,
        val = isKeyArr ? deepLookup(obj, key) : obj[key];

      if (!val) continue;

      val = val.toString();

      var expandedValues = this.expandString(val);

      for (var v = 0; v < expandedValues.length; v++) {
        var expandedValue = expandedValues[v];

        this.map(expandedValue, obj);
      }
    }
  },
  /**
   * By default using the options.expandRegexes, given a string like 'ö är bra', this will expand it to:
   *
   * ['ö är bra', 'o är bra', 'ö ar bra', 'o ar bra']
   *
   * By default this was built to allow for internationalization, but it could be also be expanded to
   * allow for word alternates, etc. like spelling alternates ('teh' and 'the').
   *
   * This is used for insertion! This should not be used for lookup since if a person explicitly types
   * 'ä' they probably do not want to see all results for 'a'.
   *
   * @param value The string to find alternates for.
   * @returns {Array} Always returns an array even if no matches.
   */
  expandString: function(value) {
    var values = [value];

    if (this.options.expandRegexes && this.options.expandRegexes.length) {
      for (var i = 0; i < this.options.expandRegexes.length; i++) {
        var er = this.options.expandRegexes[i];
        var match;

        while((match = er.regex.exec(value)) !== null) {
          var alternateValue = value.replaceCharAt(match.index, er.alternate);
          values.push(alternateValue);
        }
      }
    }

    return values;
  },
  addAll: function (arr, customKeys) {
    for (var i = 0; i < arr.length; i++)
      this.add(arr[i], customKeys);
  },
  reset: function () {
    this.root = {};
    this.size = 0;
  },
  clearCache: function () {
    // if (this.getCache && !this.getCache._list.length) {
    //   return;
    // }
    this.getCache = new HashArray('key');
  },
  cleanCache: function () {
    while (this.getCache.all.length > this.options.maxCacheSize)
      this.getCache.remove(this.getCache.all[0]);
  },
  addFromObject: function (obj, valueField) {
    if (this.options.cache)
      this.clearCache();

    valueField = valueField || 'value';

    if (this.keyFields.indexOf('_key_') == -1)
      this.keyFields.push('_key_');

    for (var key in obj)
    {
      var o = {_key_: key};
      o[valueField] = obj[key];
      this.add(o);
    }
  },
  map: function (key, value) {
    if (this.options.splitOnRegEx && this.options.splitOnRegEx.test(key))
    {
      var phrases = key.split(this.options.splitOnRegEx);
      var emptySplitMatch = phrases.filter(function(p) { return IS_WHITESPACE.test(p); });
      var selfMatch = phrases.filter(function(p) { return p === key; });
      var selfIsOnlyMatch = selfMatch.length + emptySplitMatch.length === phrases.length;

      // There is an edge case that a RegEx with a positive lookeahed like:
      //  /?=[A-Z]/ // Split on capital letters for a camelcase sentence
      // Will then match again when we call map, creating an infinite stack loop.
      if (!selfIsOnlyMatch) {
        for (var i = 0, l = phrases.length; i < l; i++) {
          if (!IS_WHITESPACE.test(phrases[i])) {
            this.map(phrases[i], value);
          }
        }

        if (!this.options.insertFullUnsplitKey) {
          return;
        }
      }
    }

    if (this.options.cache)
      this.clearCache();

    if (this.options.keepAll) {
      this.indexed = this.indexed || new HashArray([this.options.keepAllKey]);
      this.indexed.add(value);
    }

    if (this.options.ignoreCase) {
      key = key.toLowerCase();
    }

    var keyArr = this.keyToArr(key),
      self = this;

    insert(keyArr, value, this.root);

    function insert(keyArr, value, node) {
      if (keyArr.length == 0)
      {
        node['value'] = node['value'] || [];
        node['value'].push(value);
        return;
      }

      var k = keyArr.shift();

      if (!node[k])
        self.size++;

      node[k] = node[k] || {};

      insert(keyArr, value, node[k])
    }
  },
  keyToArr: function (key) {
    var keyArr;

    if (this.options.min && this.options.min > 1)
    {
      if (key.length < this.options.min)
        return [];

      keyArr = [key.substr(0, this.options.min)];
      keyArr = keyArr.concat(key.substr(this.options.min).split(''));
    }
    else keyArr = key.split('');

    return keyArr;
  },
  findNode: function (key) {
    return f(this.keyToArr(key), this.root);

    function f(keyArr, node) {
      if (!node) return undefined;
      if (keyArr.length == 0) return node;

      var k = keyArr.shift();
      return f(keyArr, node[k]);
    }
  },
  _getCacheKey: function(phrase, limit){
    var cacheKey = phrase
    if(limit) {
      cacheKey = phrase + "_" + limit
    }
    return cacheKey
  },
  _get: function (phrase, limit) {
    phrase = this.options.ignoreCase ? phrase.toLowerCase() : phrase;

    var c, node;
    if (this.options.cache && (c = this.getCache.get(this._getCacheKey(phrase, limit))))
      return c.value;

    var ret = undefined,
      haKeyFields = this.options.indexField ? [this.options.indexField] : this.keyFields,
      words = this.options.splitOnGetRegEx ? phrase.split(this.options.splitOnGetRegEx) : [phrase];

    for (var w = 0, l = words.length; w < l; w++)
    {
      if (this.options.min && words[w].length < this.options.min)
        continue;

      var temp = new HashArray(haKeyFields);

      if (node = this.findNode(words[w]))
        aggregate(node, temp);

      ret = ret ? ret.intersection(temp) : temp;
    }

    var v = ret ? ret.all : [];

    if (this.options.cache)
    {
      var cacheKey = this._getCacheKey(phrase, limit)
      this.getCache.add({key: cacheKey, value: v});
      this.cleanCache();
    }

    return v;

    function aggregate(node, ha) {
      if(limit && ha.all.length === limit) {
        return
      }

      if (node.value && node.value.length) {
        if(!limit || (ha.all.length + node.value.length) < limit) {
          ha.addAll(node.value);
        } else {
          // Limit is less than the number of entries in the node.value + ha combined
          ha.addAll(node.value.slice(0, limit - ha.all.length))
          return
        }
      }

      for (var k in node) {
        if (limit && ha.all.length === limit){
          return
        }
        if (k != 'value') {
          aggregate(node[k], ha);
        }
      }
    }
  },
  get: function (phrases, reducer, limit) {
    var haKeyFields = this.options.indexField ? [this.options.indexField] : this.keyFields,
      ret = undefined,
      accumulator = undefined;

    if (reducer && !this.options.idFieldOrFunction) {
      throw new Error('To use the accumulator, you must specify and idFieldOrFunction');
    }

    phrases = (phrases instanceof Array) ? phrases : [phrases];

    for (var i = 0, l = phrases.length; i < l; i++)
    {
      var matches = this._get(phrases[i], limit);

      if (reducer) {
        accumulator = reducer(accumulator, phrases[i], matches, this);
      } else {
        ret = ret ? ret.addAll(matches) : new HashArray(haKeyFields).addAll(matches);
      }
    }

    return !reducer ? ret.all : accumulator;
  },
  search: function(phrases, reducer, limit) {
    return this.get(phrases, reducer, limit);
  },
  getId: function (item) {
    return typeof this.options.idFieldOrFunction === 'function' ? this.options.idFieldOrFunction(item) : item[this.options.idFieldOrFunction];
  }
};

TrieSearch.UNION_REDUCER = function(accumulator, phrase, matches, trie) {
  if (accumulator === undefined) {
    return matches;
  }

  var map = {}, i, id;
  var maxLength = Math.max(accumulator.length, matches.length);
  var results = [];
  var l = 0;

  // One loop, O(N) for max length of accumulator or matches.
  for (i = 0; i < maxLength; i++) {
    if (i < accumulator.length) {
      id = trie.getId(accumulator[i]);
      map[id] = map[id] ? map[id] : 0;
      map[id]++;

      if (map[id] === 2) {
        results[l++] = accumulator[i];
      }
    }

    if (i < matches.length) {
      id = trie.getId(matches[i]);
      map[id] = map[id] ? map[id] : 0;
      map[id]++;

      if (map[id] === 2) {
        results[l++] = matches[i];
      }
    }
  }

  return results;
};

module.exports = TrieSearch;
module.exports.default = TrieSearch;

},{"hasharray":9}]},{},[8]);
