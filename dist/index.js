"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabetize_by_property_1 = require("@writetome51/alphabetize-by-property");
var array_get_copy_1 = require("@writetome51/array-get-copy");
// Returns new array of `objects` ordered alphabetically by the value of `property`.
// The values of `property` in each object are coerced into strings before doing the comparison.
// `property` is a string that can contain dot-notation.
function getAlphabetizedByProperty(property, objects) {
    var copy = array_get_copy_1.getCopy(objects);
    alphabetize_by_property_1.alphabetizeByProperty(property, copy);
    return copy;
}
exports.getAlphabetizedByProperty = getAlphabetizedByProperty;
