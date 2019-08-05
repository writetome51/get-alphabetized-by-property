"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_array_from_property_1 = require("@writetome51/get-array-from-property");
var arrays_match_1 = require("@writetome51/arrays-match");
var index_1 = require("./index");
// Test 0: make sure it can alphabetize by array index:
var arrays = [
    ['teacher', ['thomas', 'stoppard']],
    ['pastor', ['terry', 'blank']],
    ['priest', ['sam', 'martin']],
    ['mayor', ['amy', 'thomas']],
    ['teacher', ['cathy', 'nguyen']],
    ['minister', ['nguc', 'leung']]
];
var result = index_1.getAlphabetizedByProperty('1.1', arrays);
if (arrays_match_1.arraysMatch(result, [
    ['pastor', ['terry', 'blank']],
    ['minister', ['nguc', 'leung']],
    ['priest', ['sam', 'martin']],
    ['teacher', ['cathy', 'nguyen']],
    ['teacher', ['thomas', 'stoppard']],
    ['mayor', ['amy', 'thomas']]
]))
    console.log('test 0 passed');
else
    console.log('test 0 FAILED');
// Test 0A: make sure it doesn't modify original array:
var original = [
    ['teacher', ['thomas', 'stoppard']],
    ['pastor', ['terry', 'blank']],
    ['priest', ['sam', 'martin']],
    ['mayor', ['amy', 'thomas']],
    ['teacher', ['cathy', 'nguyen']],
    ['minister', ['nguc', 'leung']]
];
result = index_1.getAlphabetizedByProperty('1.1', original);
if (arrays_match_1.arraysMatch(result, original))
    console.log('test 0A FAILED');
else
    console.log('test 0A passed');
var roster = [
    { name: 'Rod Carmichael', group: 'D' },
    { name: 'Todd Garfunkel', group: 'B' },
    { name: 'Rachel Green', group: 'E' },
    { name: 'Mick Jagger', group: 'A' },
    { name: 'Charlie Brown', group: 'D' },
    { name: 'Flip Mavunkel', group: 'C' }
];
result = index_1.getAlphabetizedByProperty('group', roster);
result = get_array_from_property_1.getArrayFromProperty('group', result);
if (arrays_match_1.arraysMatch(result, ['A', 'B', 'C', 'D', 'D', 'E']))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
roster = [
    { name: 'Rod Carmichael', group: 'Ò' },
    { name: 'Todd Garfunkel', group: 'Í' },
    { name: 'Rachel Green', group: 'I' },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Charlie Brown', group: 'O' },
    { name: 'Flip Mavunkel', group: 'A' },
];
result = index_1.getAlphabetizedByProperty('group', roster);
result = get_array_from_property_1.getArrayFromProperty('group', result);
if (arrays_match_1.arraysMatch(result, ['A', 'Å', 'I', 'Í', 'O', 'Ò']))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
roster = [
    { name: 'Rod Carmichael', group: undefined },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Charlie Brown', group: 'ZZZ' },
    { name: 'Farley Brown', group: 'Z' },
    { name: 'Rachel Green' },
    { name: 'Charlie Brown', group: null },
    { name: 'Todd Garfunkel', group: undefined },
    { name: 'Flip Mavunkel', group: 'A' },
];
result = index_1.getAlphabetizedByProperty('group', roster);
result = get_array_from_property_1.getArrayFromProperty('group', result);
if (arrays_match_1.arraysMatch(result, ['A', 'Å', null, undefined, undefined, undefined, 'Z', 'ZZZ']))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
roster = [
    { player: { name: 'Rod' } },
    { player: { name: 'Charlie' } },
    { player: { name: 'Todd' } },
    { player: { name: 'Flip' } },
    { player: { name: 'Rachel' } },
    { player: { name: 'Monica' } },
    { player: { name: 'Mick' } }
];
result = index_1.getAlphabetizedByProperty('player.name', roster);
result = get_array_from_property_1.getArrayFromProperty('player.name', result);
if (arrays_match_1.arraysMatch(result, ['Charlie', 'Flip', 'Mick', 'Monica', 'Rachel', 'Rod', 'Todd']))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// test errors
var errorTriggered = false;
try {
    index_1.getAlphabetizedByProperty('', roster);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
errorTriggered = false;
try {
    index_1.getAlphabetizedByProperty([], roster);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
errorTriggered = false;
try {
    index_1.getAlphabetizedByProperty('prop', {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
