function Greeter(words){
    words = words || 'Hello';

    this.greeting = function greeting(){
	return words;
    };
}
Greeter.prototype.greet = function greet(subject) {
    return this.greeting() + ' ' + subject;
}

module.exports = Greeter
