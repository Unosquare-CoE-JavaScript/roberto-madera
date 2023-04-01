## What is the scope?

### JS Compilation
As stated on the previous book, JS is typically not classified as a compiled language, but rather as an interpreted language. This is not entirely accurate and as stated before, JS is closer to being a compiled language.

We can define code compilation as a series of steps that take the source code and return it as an output that can be directly executed. On the other hand an interpreted language executes the code line by line, where each statement is executed before moving on to the next one in the source code. Modern JS implements mutiple variations of both compilation and interpreted languages. Since JS is closer to a compiled language, one of the most important features determined during code compilation is the **scope**.

The most important observation we can do about the processing of JS programs is that it takes place during two phases: **parsing/compilation**, then **execution**.

We can observe the parsing phase directly via syntax errors, early errors and hoisting. These types of errors do not occur during the execution, but rather are thrown during parsing before any execution occurs.

As for the compilation process, it determines the scope and variables. During compilation, variables and declarations can serve two roles **targets** (for statements that assign directly an operation or value) and **sources** (for value references that are used by targets). 

The compilation process must resolve the reference (source or target) for a scope. The way this is done is by checking if a reference is *lexically available* for the scope, which means if a reference is not declared on the current scope, the compiler will consult the next outer scope, and continue referencing it's outer scope up until the global scope is reached. This map of nested scopes is identified during the compilation process despite not being created via execution. This model is called **lexical scope**

Despite the fact that the scope is determined by the compilation process and it's not affected by the runtime process, there's two ways it can be affected directly during runtime: the **eval** function, and the **with** keyword. Both are discouraged from being used at all, and in fact are not permited to use with strict mode enabed.
