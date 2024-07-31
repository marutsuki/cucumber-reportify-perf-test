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
