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
        console.log(e.target);
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
        console.log(e.target);
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
    console.log('GEN PAGINATION ELEMENTS');
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
