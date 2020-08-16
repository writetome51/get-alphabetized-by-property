# getAlphabetizedByProperty(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects: object[]<br>): object[]

Returns new array of `objects` ordered alphabetically by `property`.  
It coerces the value of each `object[property]` in `objects` into a string to  
do the sorting (the values of the properties are not modifed).  
The sorting algorithm simply compares the unicode value of `property` in every 2  
adjacent objects to decide which should come first, like so:  
`return (String(aProp) < String(bProp) ? -1 : 1);`

Note:  in the results, all uppercase letters in the English alphabet come before  
all lowercase letters.  
Note:  `property` is a string that can include dot-notation  
( 'property.subproperty.subsubproperty') . If `property` is an array index, here  
you need to use dot-notation and not square braces.  Example:  
`'1.0' // instead of [1][0]`

## Examples
```js
let roster = [
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Todd Garfunkel', group: 'B'},
	{name: 'Rachel Green', group: 'E'},
	{name: 'Mick Jagger', group: 'A'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Flip Mavunkel', group: 'C'},
];

getAlphabetizedByProperty('group', roster);
/************
Returns:
[
    {name: 'Mick Jagger', group: 'A'},
    {name: 'Todd Garfunkel', group: 'B'},
    {name: 'Flip Mavunkel', group: 'C'},
    {name: 'Rod Carmichael', group: 'D'},
    {name: 'Charlie Brown', group: 'D'},
    {name: 'Rachel Green', group: 'E'}
]
************/


roster = [
	{player: {name: 'Rod'}},
	{player: {name: 'Mick'}},
	{player: {name: 'Charlie'}},
	{player: {name: 'Todd'}},
	{player: {name: 'Flip'}},
	{player: {name: 'Rachel'}},
	{player: {name: 'Monica'}},
];

getAlphabetizedByProperty('player.name', roster);
/************
Returns:
[ 
    { player: { name: 'Charlie' } },
    { player: { name: 'Flip' } },
    { player: { name: 'Mick' } },
    { player: { name: 'Monica' } },
    { player: { name: 'Rachel' } },
    { player: { name: 'Rod' } },
    { player: { name: 'Todd' } }
]
************/


// What about alphabetizing characters with diacriticals?

roster =  [
	{name: 'Rod Carmichael', group: 'Ò'},
	{name: 'Todd Garfunkel', group: 'Í'},
	{name: 'Rachel Green', group: 'I'},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'O'},
	{name: 'Flip Mavunkel', group: 'A'},
];

getAlphabetizedByProperty('group', roster);
/************
Returns:
[
    { name: 'Flip Mavunkel', group: 'A' },
    { name: 'Rachel Green', group: 'I' },
    { name: 'Charlie Brown', group: 'O' },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Todd Garfunkel', group: 'Í' },
    { name: 'Rod Carmichael', group: 'Ò' } 
]
************/

// What if some of the objects don't have a value for that property,
// or the property is missing?

roster =  [
	{name: 'Rod Carmichael', group: undefined},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'ZZZ'},
	{name: 'Farley Brown', group: 'Z'},
	{name: 'Rachel Green'},
	{name: 'Charlie Brown', group: null},
	{name: 'Todd Garfunkel', group: undefined},
	{name: 'Flip Mavunkel', group: 'A'},
];

getAlphabetizedByProperty('group', roster);
/************
Returns:
[
    { name: 'Flip Mavunkel', group: 'A' },
    { name: 'Farley Brown', group: 'Z' },
    { name: 'Charlie Brown', group: 'ZZZ' },
    { name: 'Charlie Brown', group: null }, // null is treated as a string
    { name: 'Rod Carmichael', group: undefined }, // undefined is treated as a string
    { name: 'Rachel Green' }, // missing property is treated as 'undefined'
    { name: 'Todd Garfunkel', group: undefined },
    { name: 'Mick Jagger', group: 'Å' },
]
************/


// Now alphabetize by array index.
// Here we alphabetize by each person's last name,
// which is index 1 of index 1:

let people = [
	['teacher', ['thomas', 'stoppard']],
	['pastor', ['terry', 'blank']],
	['priest', ['sam', 'martin']],
	['mayor', ['amy', 'thomas']],
	['teacher', ['cathy', 'nguyen']],
	['minister', ['ng', 'leung']]
];

getAlphabetizedByProperty('1.1', people);
/************
Returns:
[
	['pastor', ['terry', 'blank']],
	['minister', ['ng', 'leung']],
	['priest', ['sam', 'martin']],
	['teacher', ['cathy', 'nguyen']],
	['teacher', ['thomas', 'stoppard']],
	['mayor', ['amy', 'thomas']]
]
************/
```

## Installation
```bash
npm i  @writetome51/get-alphabetized-by-property
```
## Loading
```js
import {getAlphabetizedByProperty} 
    from '@writetome51/get-alphabetized-by-property';
```
