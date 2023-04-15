## Limiting Scope Exposure

### Principle of least exposure

Relying solely on the global scope for declaration of our variables should be avoided. If we were to rely on it, we could run into the following issues:

- **Name collision**
- **Unexpected behaviour**
- **Unintended dependencies**

We can follow a design principle to avoid all this, the **Principle of Least Exposure** or **POLE**. We can follow the principle by limiting the exposure to our variables to be as minmal as possible, while making everything else private, and also by declaring variables into small nested scope blocks rather than using the global scope. By following the POLE to our variables we can reduce those variables exposure to the global scope and avoiding or minimizing the previous issues listed.

By design _let_ and _const_ declared variables operate on it's block scope, and their exposure can be limited, but that's not the case for _var_ and function declarations. In order to limite and "hide" such declarations we can wrap them on a middle scope by wrapping them on a function which would delimit the block scope instead of relying on the global scope. For example:

```
var factorial = (function hideTheCache() {
    var cache = {}; //Variable is enclosed to this function scope

    function factorial(x) {
        if (x < 2) return 1;
        if (!(x in cache)) {
            cache[x] = x * factorial(x - 1);
        }
        return cache[x];
    }
    return factorial;
})();
```

One thing to note in this example, is that the function is immediately invoked after being defined (The end expression contains _();_ ). This is called _Immediately Invoked Function Expression_, or **IIFE**, commonly used with anonymous functions. While IIFE functions are useful to wrap the scope on the function, they can alter the behaviour of certain statements, such as with _return_, _this_, _break_ or _continue_ which won't operate properly. For such cases it's best not use IIFE and instead rely on scope blocks.

### Block Scopes

Despite what it might seem at first glance, block scopes are not created by using curly braces _{ ... }_ blocks alone, which are blocks themselves, but don't have a scope themselves. Instead the block scope is defined directly when it contains a block scope declaration such as _let_ or _ const_. For example:

```
{
    //The scope is not defined for this block yet

    let flag = true; //The let declaration will create a scope for this block
    if(flag){
        console.log("Expression"); //This is a valid block too, but no scope was defined here
    }
}
```

It's recommended to use block scopes to avoid over exposing any declaration beyond where they're needed, and follow the _POLE_ principle.

### let and var declarations

As stated on the previous chapters, _let/const_ and _var_ main differences rely on the scope they're declared for, _let/const_ working on a block scope level, while _var_ would attach itself to a function scope level.

With modern JS it's common to see that the general recomendation is to avoid using _var_ and instead of use _let_. This might not entirely the best practice. While it's important to follow the POLE principle, we can still use both _let/const_ and _var_ keeping this by only using them in a way that's clearly defined for their proper scope (_var_ on a function scope and _let/const_ for block scopes). It's important to note that despite still following the POLE principles, using both var and let as such is controverial within modern JS developers.

### Function declarations in blocks (FiB)

Functions can be declared inside blocks (abbreviated as **FiB**), which can led to some unexpected behaviour, for example:

```
    if (false) {
        function ask() {
            console.log("Does this run?");
        }
    }

    ask();
```

We have a function declared inside an if block, but we're trying to access this function outside of the block it was declared. We can expect an error for this, but the type of error we get might vary depending on the environment we run JS or the version we're using. There are certain exceptions for FiB declarations on certain browsers, but these were introduced due to concerns with ES6 (which introduced block scopes) compatibility.

Using FiB can be quite problematic, and are hard to debug properly. The recommendation is to always avoid using function declarations over blocks at all, and instead restructure the code in a way to avoid those.
