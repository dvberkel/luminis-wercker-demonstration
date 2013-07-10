var vows = require('vows');
var assert = require('assert');
var Greeter = require('../lib/greeter');

vows.describe('Greeter').addBatch({
    'when created without a greeting': {
	topic : new Greeter(),

	'should greet \'World\' with \'Hello World\n\'': function(topic) {
	    assert.equal(topic.greet('World'), 'Hello World\n');
	},
	'should greet undefined with \'Hello Stranger\n\'': function(topic) {
	    assert.equal(topic.greet(), 'Hello Stranger\n');
	},
    },
    'when created with greeting \'Howdy\'': {
	topic : new Greeter('Howdy'),

	'should greet \'World\' with \'Howdy World\n\'': function(topic) {
	    assert.equal(topic.greet('World'), 'Howdy World\n');
	},
	'should greet undefined with \'Howdy Stranger\n\'': function(topic) {
	    assert.equal(topic.greet(), 'Howdy Stranger\n');
	},
    },
}).export(module);
