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