## Digging to the roots of JS

### Iterators
With ES6, there has been an standarization for the iterator protocols in JS. The main protocol defined is by defining a method called *next()* which returns an object that has a *value* and *done* property, the later is a boolean that will be a false value until the iteration of the data source is complete.

Despite this standarization, ES6 also includes several manual mechanism for iteration such as the **for ... of** iterator.

```
const values = [1,2,3,4,5,6,7,8,9,0];

for(let value of values) {
    console.log(value); //Print every value 
}
```

Another mechanism, is the **...** operator which has two symetrical forms: **spread** and **rest**. The spread operator functions in that it "spreads" values into something, such as spreading the values of an array into another one:
```
    const firstValues = [1,2,3,4,5,6,7,8,9];
    const completeValues = [ ...firstValues, 10,11,12,13,14]; //each element in first value will be spread into this new array
```

or into a function arguments:
```
    const arguments = { a: 10, b:5 };
    
    //Each value is iterated into a function argument depending of the position 
    function getArea(...arguments) {

    }
```

In order to iterate a value, it needs to be an iterable value, ES6 Defines the basic data types such as strings, arrays, maps ,sets and other types as iterables. The protocol for iterators and consumptions creates an iterator from an iterable, and proceds to consume that instance until completion. 

### Scope & Closures
We can define a **scope** as set of rules that control how its variables are resolved (similar to a 'context'). It's static and contains a fixed set of variables that are available at the moment a function is defined. Any function executed has an *execution context* which itself is dynamic and depends on how the function is called. It could be seen as an object whose properties are available to the function as it needs them. We can expose the current execution context of a function using the **this** keyword.

By default, any context aware function called without any context defaults to a global object (such as the browser *window* object). This behaviour is not present with strict mode.

A closure is when a function remembers the values and variables outside of its scope, even after executing the function under a different scope. They're part of function values and are done by executing a function into a different scope than the one originally defined. They're most common with asynchronous code and function, such as with *Callback* functions which often close and preserve their own scope when defined.

For example:
```
    function greetings(message) {
        return function who(name) {
            console.log(message + ', ' + name);
        }
    }

    const hello = greetings("Hello");
    const howdy = greetings("Howdy");

    hello('world'); //Hello, world
    hello('Miguel'); //Hello, Miguel
    howdy('partner); //Howdy, partner

```

### Prototype linkage
While *this* is part of the function execution, **prototype** is part of an object, specifically for it's properties access. Protypes could be seen as a linkage between different objects, and it occurs specifically when an object is created.

The main purpose of prototype linking is to delegate access to properties or methods to handle in the prototype object. (For example having an object B prototyped from A, delegates access to properties not included in B to A). By linking multiple prototypes we're creating a **prototype chain**. We can specifically define a prototype link in JS using the *Object.create()* utility, which receives an object to link with and returns a new object with the link in place. 

Since **this** uses a dynamic context based on how the function was called, calling methods that are delegated via the prototype chain still maintain the expected *this*.