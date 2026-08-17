const test = require('node:test');
const assert = require('node:assert/strict');

const { add, formatMessage } = require('../src/math');

test('add adds two numbers correctly', () => {
  assert.equal(add(2, 3), 5);
});

test('formatMessage returns a friendly greeting', () => {
  assert.equal(formatMessage('GitHub Actions'), 'Hello, GitHub Actions!');
});
