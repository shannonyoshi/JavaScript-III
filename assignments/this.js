/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window--this refers to the entire wondow/console as the object, depending on where it is called. If called in a browser, this refers to the browser.
* 2. Implicit--this refers to whatever object is to the left of the dot. 
* 3. New --this refers to the object made and returned by using a constructor function
* 4. Explicit--when there is no object left of a period for this to refer to, you can explicitly state what this refers to by using apply, call, etc.
*
* write out a code example of each explanation above
*/

// Principle 1

function globalThis(name){
    console.log(this);
    return name;
}
globalThis('me');

// Principle 2

const yourObj = {
    greeting: 'Hello',
    sayHello:function(name){
        console.log(`${this.greeting} your name is ${name}.`)
    }
}
yourObj.sayHello('Maks')

// Principle 3
function Person(name){
    this.name = name;
    this.greeting = '::approving nod::';
    this.speak = function(){
        console.log(this.greeting + this.name);
    }
}

const shannon = new Person('Shannon');
const cat = new Person('Chalky')
shannon.speak();
cat.speak();

// Principle 4
shannon.speak.apply(cat);
cat.speak.call(shannon);
