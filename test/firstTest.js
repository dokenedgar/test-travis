"use strict";
//import sum from './secTest.js';
let add = require('../secTest.js');
const assert = require('assert');

describe('suite', function () {
  it('expectation', function () {
    assert.equal(add(1,2), 3);
  });
});