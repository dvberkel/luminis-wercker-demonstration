var vows = require('vows');
var assert = require('assert');
var Greeter = require('../lib/greeter');

vows.describe('Greeter').addBatch({
    'when created without a greeting': {
	topic : new Greeter(),

	'should greet \'World\' with \'Hello World\'': function(topic) {
	    assert.equal(topic.greet('World'), 'Hello World');
	},
    },
    'when created with greeting \'Howdy\'': {
	topic : new Greeter('Howdy'),

	'should greet \'World\' with \'Howdy World\'': function(topic) {
	    assert.equal(topic.greet('World'), 'Howdy World');
	},
    },
}).export(module);
