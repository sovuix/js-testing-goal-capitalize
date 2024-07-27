import { strict as assert } from 'node:assert';
import capitalize from '../capitalize.js';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// console.log('Все тесты пройдены!');

// assert(capitalize('') === '');
// assert(capitalize('hello') === 'hello');

// assert.equal(capitalize(''), '');
// assert.equal(capitalize('hello'), 'Hello');

assert.deepEqual({}, {}); // всё ок
assert.deepEqual({ key: 'value' }, { key: 'value' }); // всё ок
// assert.deepEqual({ key: 'value' }, { key: 'another value' }); // Бум!