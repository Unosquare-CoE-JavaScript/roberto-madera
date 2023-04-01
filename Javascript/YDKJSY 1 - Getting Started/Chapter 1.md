## What *is* JavaScript?
This chapter concerns a bit of a superficial dive into defining what JavaScript is but also what isn't and also tackle some common misconceptions. 

### Name & Language specification
The name **JavaScript** is often misleading since it carries no relation with Java, and has bigger complexity beyond simple lightweight "script" programs. More formally, it is refered as ECMAScript by TC39, This comittee (TC39) is comprised of several members and volunteers with a strong web development background, and its responsible of mantaining the standards, syntax and behaviour of JS and does new proposals for each new yearly revision.

### JS Environments
JS can run on several different environments (such as browsers or servers) however the main environment historically has been and still is web, therefore many of the new definitions and standards defined for JS are done to reflect this main web environment in order to avoid any possible mismatch. This isn't a hard rule however, since there is a historical mismatch caused by the longevity of JS, and also TC39 can decide to not stick entirely to the web environment when making new proposals. 

Due to JS being able to run on multiple environments several functions that at first glance look like part of JS, but are instead functions specific to the enviroment JS is running and that can be run with JS but are not part of JS (Such as *alert* being web functions, or *fs* being nodeJS functions )

### Paradigm
A paradigm on a programing language refers to the structure and mindset of approaching the code. Most programming languages are strongly based on a single paradigm such as Object Oriented Programing (mainly based on organizing the code on object classes) or Functional Programing (mainly based on organizing most of the code as functions). JS Offers the sufficient flexibility that it can be called a multi-paradigm programming language since it can be structured to comform with a different paradigm or even mix it with different ones as the developer needs.

### Compatibility
JS is a backwards compatible languange, meaning that any valid code will still remain valid no matter how much time it passes, since the languange won't change in a way that any code will be unusable in a future revision, therefore any legacy code is guaranteed to still remain valid. 

However despite common misconceptions , JS is not forward compatible, which means that newer functions and features that are introduced by TC39 are not compatible with older versions running JS. As new changes are made into newer revisions one way to address the forward compatiblity problem and ensure compatibility with legacy systems is by transpiling (transforming the source code from one form to another) newer JS code into an older syntax that's compatible with older systems. 

Another way to also address compatibility with the newer native JS functions is by using polyfills to fill the gaps with incompatible code. Polyfills are definitions for newer JS functions that ensure the code is still valid if these functions are missing from the environment running JS.

### Interpreted vs Compiled
Typically JS is considered an interpreted language, but the truth is that it is more complex. Most compiled languages are compiled into a binary, JS does executes some compilation which also enables catching early errors in the code. This compilation is not handled to the user, but rather to the JS Virtual Machine to execute. Despite the behaviour, it could be said that JS could be considered a compiled language at least in spirit.

### Strict mode
Strict mode was introduced to JS in 2009 and it basically enforces a stricter sets of rules when coding on JS. While at first glance it might seem like a more restrictive set of rules to write JS code, it should be noted more as a guide to write better quality and less error prone code. Despite being introduced in 2009, it is still an optional feature and it can be enabled globally or per function. 

### Definition
With these points we can reach a definition about JS 
- JS is an implementation of ECMAScript which is supported and expanded by TC39
- JS can run in multiple environments (such as Web or with NodeJS)
- JS is a multi paradigm programing language
- JS can be considered a compiled language