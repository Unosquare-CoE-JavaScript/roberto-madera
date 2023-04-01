## Surveying JS

### Files as a program
While at first glance it might seem that each js are part of a single application, it's actually the contrary. Every js file is a standalone program. When an error occurs on an application that depends on multiple .js files, this wont stop the execution of the other files and the application as a whole, and it will still be capable of partially running. 

The only exception to this rule are files that depend on each other with a global scope, by mixing their dependency by sharing their state via a global scope at runtime they would be acting as a whole.

ES6 Also introduced the module format, which allows to load files and treat them as a module. While they might not seem as a program, they are treated as separate programs, but they also can allow interoperation between files similarly to the global scope

### Values
One of the fundamentals of JS are values. Values are classified on 2 types: 
- Primitives
- Objects

Each value is assigned by a *literal*

### Primitive values
Among the values considered primitive in JS we can find **strings**, which are formed as a collection of characters usually forming words or phrases. They can be defined using single ('), double quotes (") and back-ticks (`). They all are used to asign a literal, with the only difference that using backticks support interpolating values using the **${...}** syntax. For example

```
const interpolationVariable = 'interpolation';

console.log("Im a string literal!");
    //Im a string literal!
console.log('Im also a string literal!');
    //Im also a string literal!
console.log(`Im a string literal using ${ interpolationVariable }`);
    //Im a string literal using interpolation
```

We can also find **boolean** and **number** values. Boolean values hold a value that can be either true or false, they're mostly used on conditionals and loops. Numbers are self explanatory and their use greatly varies such as counting steps or holding numeric positions on an array. 

Next we also have the **null** and **undefined** which are often treated as the same since despite some small differences both can represent an *empty* value. It is recommended to use "undefined" to represent single empty values.

Finally there's the **Symbol** primitive, which is a special-purpose value that behaves as a hidden unguessable value. It is a rarely used type and is mostly used for low level code such as libraries or frameworks.

### Object values
Besides primitives, the other main type of values are **objects**.

One of the main types of objects found on JS are **arrays**. Arrays are a special object type that holds an indexed list of values, which can be primitives or objects (and even functions).

**Objects** themselves are similar, but rather than holding values in an ordered indexed way, they're an unordered keyed collection which can also hold any type of value. Unlike arrays which are ordered numerically and sequencially, objects hold their values with a string *key* position 

```
    //Declaration of an array
    numericValues = [1,2,3,4,5];

    console.log(numericValues[0]) //Prints '1'

    //Declaration of an object
    personData = {
        'name' : 'Miguel'
        'lastName' : 'de Cervantes'
    }

    console.log(personData.name) //Prints 'Miguel'
```

### Type determination
We can determine the value type by using the **typeof** operator with any value which will return the type of the value.

```
    typeof 64;                  //'number'
    typeof 'string value';      //'string'
    typeof true;                //'boolean'
    typeof undefined;           //'undefined'
    typeof null;                //'object'
    typeof { value: 'x' };      //'object'
    typeof [1,2,3];             //'object'
```
<sub>In the case of a null value, typeof will return an object value.<sub>

### Variable declaration and scoping
Variables can be declared using **var**, **let** and **const**.

**var** and **let** declare values that can be asigned and changed as needed, but there main difference between them is the scope they're declared. **var** variables are declared on a global scope and **let** are block scoped. 

Global scope variables can be accessed without restrictions after being declared while block scope variables are only accessible on the block they're defined, for example:
```
if(true){
    var globalScopeValue = 100;
    let blockScopeValue = 200;
}

console.log(globalScopeValue); //Prints '100';
console.log(blockScopeValue); // Throws an error!
```

The block scoped variable throws an error because it was defined inside an *if* block, so it is only available inside that block but trying to access to it outside results in an error. The global variable is accessible globaly therefore despite being defined on the *if* block, it's still accessible outside of the block.

**const** declarations declare values that cannot be changed once asigned. It is recommened to use const with mostly primitive values.

### Functions
JS Functions are in a broader sense "procedures", which themselves are a collection of statements that can be executed multiple times, might take some input and return or not an input. They can be defined as declarations (which are a statement themselves) or as expressions (which can be asigned to an identifier)

Functions can be asigned to a variable expression, and also be asigned as properties of an object. 

### Comparisons
Them main comparison operators are **===** (strict comparison) and **==** (loose comparison). A loose comparison does a type coercion before doing a comparison which means that during a comparison the types are converted into the same and then compared, hence why in a sense it doesn't compare types, unlike a strict comparison which compares directly the type and value.

### Classes and modules
A **class** can be defined as a definition of a data structure that can include data and behaviours. Classes are defined but are not concrete values themselves. In order to be used, classes need to be instanciated (using the *new* keyword). 

Another important concept about classes is **inheritance** and **polymorphism**. JS classes can be inherited using the ***extends*** keyword. By using inheritance new classes will have access to the functions and properties of the base class (which they can access via the *super* function) and can extend the class itself with new definitions and also override the same definitions of the parent class. The fact that the parent and children definitions can have the same name and exists is considered a part of polymorphism.

**Modules** are similar to classes in that they both can be defined as a data and behaviour structures, but they're defined with an entirely different syntax. The traditional modules are defined with an outer function that returns a single instance of the module. This pattern of defining modules via a function that prouces an instance is called a *module factory*.

ES6 introduced a new way to define new modules. These are imported from a file and are not wrapped in a function that instanciates them, but rather they provide a single instance every time they are imported (which in effect makes them *singleton*). Another feature of these modules is that they directly control what variable or method they need to expose using the ***export*** keyword