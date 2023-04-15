## Around the Global Scope

### The Global Scope
While the vast majority of work in modern JS is done thru function and block scopes, and despite what it might seem, the global scope still has more utility than what it would seem at first.

With JS applications running on a browser environment, there are three main ways each different files interact with each other as a single runtime context. First is by using modern ES modules on which each module is referenced via an *import* when another file or module needs to, so in this case each module cooperates with each other via these imports without referencing an outer scope.

Second way is by using a bundler which processes all files into a single one that's delivered on the browser. In some of the build setups, the contents of the files are wrapped into a single scope with an outer function that makes the contents accessible to each other by declaring each module as variables on the outer scope. 

Finally, the third way is for bundlers in which the files are loaded into the browser individually (such as with a script tag). For these cases the **global scope** is the only way those modules can cooperate with each other.

Since JS can run on different environments, each different environment handles scopes and the global scope differently. The most common environment are browsers and it's considered that they have the most *pure* global scope (). For declarations that are made on a global context on these environments, they're accessible on the window object.

A side effect of this is that is that we can declare variables that can be shadowed using **let**, which was mentioned on the previous chapter. In order to avoid this and avoid any possible confusion, it's recommended to always use **var** on the global scope, and use **let** and **const** on block and function scopes.

Another side effect on browser environments, is the creation of **DOM Global variables**, for example, with this markup:
```
<div id="main-container">
    ...
</div>
```
A global variable would be created for this element (accessible as *window['main-container']*). This creation of global DOM variables is a legacy part of JS that remains for compatibility with older sites, and should never be used on modern JS.

Finally another strange behaviour on browser global environments, is the usage of the keyword name. **window.name** is reserved global variable and unlike normal global variables it cannot be shadowed.

As a side note, since there are many tricks to access the global scope, ES2020 introduced a standarized way to access the global scope by using the **globalThis** identifier.

### Web Workers
Web workers are browser JS extensions that allow a separate JS file to run on a separate thread. Web workers are limited on how they can communicate with the main application thread, they don't have direct access to the DOM, but some web API's are still available to them. 

Despite that, they still retain a global scope. Since they can't access the DOM directly, the global scope *window* doesn't exist on the thread, instead they must rely on the **self** keyword to access the global scope.

### ES Modules
The Global Scope behaviour changes when importing module files. While we can declare variables on what seems the global scope in our imported files, they actually don't reference the actual global scope, but rather what could be considered a *module-global scope*, similarly to wrapping them on a function with it's own block scope. It is recommended to reduce the usage of the global scope when working with ES Modules

### Node Global Scope
The way Node treats it's files and scope is similar to ES Module imports. Instead of having a global scope like a browser environment, Node uses a module format called "CommonsJS" which wraps the modules on a *Module* function, which efectively makes all *var* and *function* declarations part of the module scope and not the global scope.

Node still has access to global identifiers, but they're not part of any global scope, but instead these identifiers are injected into each imported module. That said we can still access a global scope using the **global** object which is similar to accessing the *window* object for browser environments. The *global* identifier is defined by Node and it's not a part of JS.




