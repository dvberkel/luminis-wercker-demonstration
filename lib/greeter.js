function Greeter(words){
    words = words || 'Hello';

    this.greeting = function greeting(){
	return words;
    };
}
Greeter.prototype.greet = function greet(subject) {
    subject = subject || 'Stranger';
    return this.greeting() + ' ' + subject + '\n';
}

module.exports = Greeter
