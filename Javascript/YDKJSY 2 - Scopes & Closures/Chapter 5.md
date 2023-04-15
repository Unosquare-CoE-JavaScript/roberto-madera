## The (Not so) Secret Lifecycle of Variables

### Hoisting
One peculiarity of JS is that variables and functions can be used before even being declared on a scope. As stated before, all identifiers are registered at the beginning of their respective scope during the compilation. The term used to refer to a variable that's available at the beginning of it's own scope even tho it's declared later is called **hoisting**. 

While variable identifiers are able to be used straight away, in the case of functions they can also be invoked and called before being declared. In such cases there's a special case of hoisting called **function hoisting** where once a function is registered, it is also auto initialized to keep the reference of it. One important thing to note about function hoisting it's that it only applies on functions that are declared formally and not for functions declared as variables.

To further explore hoisting with JS, we can write multiple variables with the same name declaring them with *var*, for example:
```
var myName = 'Miguel de Cervantes';

console.log(myName);//Miguel de Cervantes

var myName;

console.log(myName);//Miguel de Cervantes
```

While it might seem that we're redeclaring the same variable and we might expect an undefined value on the second redeclaration, as mentioned before all identifiers are moved to the beginning of their scope, in this example the second declaration of *myName* would be ignored since it was already declared the first time, so no operation to declaring it would be made again, with the previous example it would be like doing this:
```
var myName = 'Miguel de Cervantes';//Variable is declared
var myName; //Ignored
...

```

It's important to note that this would only be valid for **var** declarations, since **let** and **const** declarations would not allow such declarations and would throw an error. This behaviour was introduced on ES6 and in the case of *const* variables, since they cannot be reasigned any value, they dissallow that due to technical reasons.

On loops, it might seem at first glance that there are cases where variables are constantly redeclared over and over again under each iteration, for example:
```
let flag = true;
while(flag){
    let value = Math.random();
    if(value > 0.5){
        flag = false;
    }
}
```

At first glance it might seem that the variable is being redeclared over and over again, but it's important to emphasize that the rules stated above about hoisting are only applied on a scope level, so in this case each loop would count as separate scope and the *let* variable is still valid. If we were to replace the *let* declaration with *var*, the variable would be hoisted on the global scope, so there would be only a single global variable declaration. It's important to note that this *per scope* behaviour is present on most loops.