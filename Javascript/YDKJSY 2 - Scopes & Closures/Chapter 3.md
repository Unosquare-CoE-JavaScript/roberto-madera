## The Scope Chain

### Understanding the scope chain
On the previous chapter one of the metaphors laid to understand how the scope works was a 'conversation between friends' in which one of those the *Engine* would ask the *Scope manager* for a reference and it would look it up on it's scopes by going thru each nested scope until it found it. While useful to understand the scope in theory, in practice this is not entirely accurate, because the engine wouldn't need to ask for the scope of a reference in the first place, because the scope of these references usually is already determined during the compilation process and doesn't need to do any lookup process to determine the scope.

There are exceptions, and in cases that there are references that couldn't be determined during compilation (such as a variable referencing a value declared on a separate js file) and instead must be determined during runtime. It is in this cases that the lookup process occurs (which usually is determined to be the global scope).

### Shadowing
Since we can declare and nest multiple scopes, it's also possible to have multiple variables within each scope using the same name (Having multiple variables with the same name on the same scope is not valid, however). As determined, the lookup process digs thru each nested scope to determine which scope a declaration belongs to and once found it stops, so even if the same variable name is repeated thru multiple scopes, once it's found on a inner scope, the outer scope declarations are not even considered. This is called **Shadowing**.

```
var numericValue = 10;
function doubleValue( numericValue ) {
    numericValue = numericValue * 2;
    return numericValue;
}

console.log(numericValue); //10

console.log(doubleValue(20)); //40

```
For example, in this case we have declared a variable called *numericValue* on a global scope, and a function scope. When the reference of numericValue needs to be determined inside the function, it finds it first on the function scope and stops there, so the global scope declaration is ignored (In this case, the parameter numericValue *shadows* over the global numericValue inside the function scope). 

It is also important to note that there are boundaries to how shadowing is declared. As determined before **var** declared variables reference the global scope, and **let** variable reference it's inner block scope. It is possible to shadow a *var* declared variable with a *let* variable on a different block scope, but not the other way around since this would be illegal shadowing. 

In theory it should be impossible to reference a shadowed variable on a nested scope, but despite that, there are ways around this. For global variables we can access them by accessing the global object directly, for example:

```
var numericValue = 10;
function doubleValue( numericValue ) {
    numericValue = numericValue * 2;
    console.log(window.numericValue); //10
    return numericValue;
}
console.log(doubleValue(20));
```
In a browser, the object *window* is usually recognized as the global object, so we can have direct access to it and also access the shadowed numericValue. In this example we can access to the *numericValue* declared in the global scope inside of the function scope. Despite looking useful at first glance, it's not recommended to use this trick and it's considered a bad practice.

### Function named scope
We can declare functions inside named variables as a function expression, the expected behaviour is the same one as if we were declaring a named function outside variable. 
```
var myFunction = function () {
    ...
}
```
The major difference between function declarations and function expressions is what happens to the named identifier of the function. We can declare a function like this: 
```
var myFunction = function namedFunction () {
    ...
}
```
 
In such cases, the name of the function (*namedFunction* in this case) is declared inside the function itself, so it's only accessible on the inner function, and also it is declared as a read-only declaration.

Named functions are referred to as *named function expressions*, while a function declared without any name is an *anonymous function expression*. These functions lack a name identifier for their scope. ES6 added an additional function declaration called arrow functions:
```
    var myFunction = () => { ... } //Arrow function declaration
```

Arrow function are anonymous, but they still have the same scope rules as a normal function (such as creating it's own inner scope).