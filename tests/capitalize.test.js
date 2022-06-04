import { capitalize } from "../src/capitalize.js";
import { strict as assert } from 'assert';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');
assert.notEqual(capitalize('hello'), 'hello');

console.log('Все тесты пройдены!');