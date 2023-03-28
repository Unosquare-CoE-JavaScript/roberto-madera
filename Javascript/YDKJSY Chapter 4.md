## The bigger picture

To sumarize everything, we can divide the organization of JS on 3 main pillars

### Scope & Closure
The organization of variables into units of scopes (such as function scope) is one of the most fundamental characteristics of JS. 

A **scope** could be defined as a container or context of variables and functions, they define the boundaries of its variables and can be nested. JS can be considered a lexically scoped language, but it contains two characteristics that are not commonly featured on lexically scoped languages. The first one is **hoisting** which means that any variable declared anywhere in the scope are treated as if they were declared at the beginning of the scope. The second one are **var-declared** variables which refers to variables that are declared as function scoped, even if they're inside a scope block.

A **closure** is a function that makes references to variables outside of its scope and can be passed around as a value and executed and still keep access to it's original scope.

### Prototypes
Prototyping is another fundamental characteristic of JS which allows to create objects directly without having to define their class structure first. Making use of the prototype design pattern also allows for a second side effect which is the ability to link two objects with each other, sharing the context with the **this** keyword.

### Types and Coercion
Finally the other fundamental pillar of JS refers to types and cohersion, which is often one of the most overlooked characteristics. There is a community interested into implementing *statict-typed* (such as TypeScript) which can make JS type aware. But it is important to understand the fundamentals of how JS manages types and does coercions.