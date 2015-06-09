describe("karma-coverage-157", function () {
	var test1 = require('../src/js/test1.js');
	var assert = require('chai').assert;

	it("really doesn't'", function () {
		assert.equal(test1.aye(), 'a', 'A is equal to A');
	});
	it("really doesn't'", function () {
		assert.equal(test1.bee(), 'b', 'B is equal to B');
	});
});
