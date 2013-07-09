var vows = require('vows');
var assert = require('assert');

vows.describe('A vows project').addBatch({
    'when running test': {
	topic : true,

	'assert correct behaviour': function(topic) {
	    assert.ok(topic);
	}
    }
}).export(module);
