import { alphabetizeByProperty } from '@writetome51/alphabetize-by-property';
import { getCopy } from '@writetome51/array-get-copy';

// Returns new array of `objects` ordered alphabetically by the value of `property`.
// The values of `property` in each object are coerced into strings before doing the comparison.
// `property` is a string that can contain dot-notation.

export function getAlphabetizedByProperty(property, objects): any[] {
	let copy = getCopy(objects);
	alphabetizeByProperty(property, copy);
	return copy;
}
