import './App.css';
import Accordion from './common/Accordion';

function App() {
  return (
    <div id="app">
      <h1>The Cheat Sheet</h1>
      <form>
        <input type="text" id="search" name="search"/>
        <input type="submit" value="submit"/>
        <ul id="topics-list">
          <li><a href="#what-is-js">What is JS?</a></li>
          <li><a href="#paradigms">Paradigms</a></li>
          <li><a href="#promises">Promises</a></li>
          <li><a href="#other">Other</a></li>
          <li>Other</li>
          <li>Other</li>
          <li>Other</li>
          <li>Other</li>
          <li>Other</li>
          <li>Other</li>
          <li>Other</li>
        </ul>
        <div id="topics-content">
          <section id="what-is-js">
            <h2>What is Javascript?</h2>
            <Accordion
              title="History"
              content={
                <>
                <p>The name Javascript is an artifact of marketing shenanigans. When Brendan Eich first conceived of the language., he
                  code-named it <b>Mocha</b>. Internally at Netscape, the brancd <b>Livescript</b> was used. But when it came time to publicly
                  name the language, "Javascript" won the vote.</p>
                <p>
                  Why? Because this language was originally designed to appeal to an audience of mostly Java programmers, and because the word
                  "script" was popular at the time to refer to lightweight programs. These lightweight "scripts" would be the first ones to embed inside
                  of pages on this new thing called the web!
                </p>
                <p>The official name of the language specified by TC39 (the technical commite that manages JS) and formalized by the ECMA standards 
                body is <b>ECMAScript</b>. They meet regularly to vote on any agreed changes, which they then submit to ECMA, the standards organization.</p>
                <p>For the most part, the JS defined in the specification and the JS that runs in browser-based JS engines is the same. But there
                are some exceptions that allowed only for web JS; other JS environments must stick to the letter of the law.</p>
                <p>Wherever possible, adhere tonthe JS specification and don't rely on behavior that's only applicable in certain JS engine environments.</p>
                <p><b>Not All (Web) is Javascript</b> Not all is included in the JS specification, but it is part of various JS environments (like browser
                JS engines, Node.js, etc.), they add APIs into the global scope of your JS programs that give you environment-specific capabilities, like
                being able to pop an alert-style box in the user's browser.<br/>
                In fact, a wide range of JS-looking APIs, like fetch(..), getCurrentLocation(..), getUserMedia(..), are all web APIs that look like JS</p>
                <p>Don't trust what behavior you see in a developer console as representing exact to-the-letter JS semantics; for that, read the specification.
                Instead, think of the console as a "JS-friendly" environment.</p>
                </>
              }
            />
            <Accordion
              title="Is backwards OR forwards compatible?"
              content={
                <>
                <p>Is <b>backwards compatible</b> which means that once something is accepted as valid JS , there will not be a future change to the language
                that causes that code to become invalid JS. Code written in 1995 - however primitive or limited it may have been! - should still work today. <br/>
                Compare backwards compatibility to its counterpart, forwards compatibility. Being forwards-compatible means that including  new addition in a programa
                would not cause that program to break if it were run in an older JS engine. <b>JS is not forwards-compatible</b></p>
                <p><b>Why?</b> Markup (HTML) or styling (CSS) are declarative in nature, so it's much easier to "skip over" unrecognized declarations
                with minimal impact to other recognized declarations. But chaos and non-determinism would ensue if a programming laguage engine selectively
                skipped statements (or even expressions!) that it didn't understand, as it's impossible to ensure that a subsequent part of the program wasn't 
                expecting the skipped-over part to have been processed.</p>
                <p><b>So what to do?</b> the solution is transpiling meaning using a tool to convert the source code of a program from one form to another
                ( but still as textual source code ). Typically , forwards-compatibility problems related to sintax are solved by using a transpiler like Babel.
                Also Babel typically detects which polyfills your code needs and provide them automatically for you. But occasionally you may need to include/define 
                them explicitly.</p>
                </>
              }
            />
            <Accordion
              title="Is it an interpreted script or a compiled program?"
              content={
                <>
                <p>The majority opinion seems to be that JS is an interpreted (scripting) language. But the thruth is more complicated than that. <br/>
                For much of the history of programming languages, "interpreted/scripting" languages have been looked down on as inferior compared to their 
                compiled counterparts. The reasons are numerous, including the perception that there is a lack of performance optimization, as well as dislike of
                certain language characteristics, such as scripting languages generally using dynamic typing instead of the "more mature" statically typed languages.</p>
                <p>Languages regarded as "compiled" usually produce a portable (binary) representation of the program that is distributed for execution later.
                Since we dont really observe that kind of model with JS (source code is distributed), many claim that disqualifies JS from the category. In reality,
                the distribution model for a programs's executable form has become drastically more varied and also less relevant over the last few decades.</p>
                <p>The real reason it matters to have a clear picture on whether JS is interpreted or compiled relates to the nature of how errors are handled.</p>
                <p>Historically, scripted/interpreted languages were executed in generally a top-down and line-by-line fashion.; there's typically not an initial 
                pass through the program to process it before execution begins. For example, an error on line 5 of a program won't be discovered until lines 1 
                through 4 have already executed.</p>
                <p>Compare that to languages which do go through a processing step (typically, called parsing) before any execution occurs. In this processing model, an
                invalid command on line 5 would be caught during the parsing phase, before any execution has begun, and none of the program would run.</p>
                <p>All compiled languages are parsed. So a parsed language is quite a ways down the road toward being compiled already. In classic compilation theory, once any source
                program has been fully parsed , its very common that its subsequent execution will include a translation from the parsed form  of the program - usually 
                called an Abstract Syntax Tree (AST) - to that executable form. In other words parsed languages are in spirit compiled languages.</p>
                <p>JS source code is parsed before it is executed. It calls for "early errors" -- statically determined errors in code, such as a duplicate parameter-- to be
                reported before the code starts executing.</p>
                <p><b>So JS is a parsed language, but is it compiled?</b> The answer is closer to yes than no. The parsed JS is converted to an optimized (binary) form, and that "code" is 
                subsequently executed; the engine does not commonly switch back into line-by-line execution mode after it has finished all the hard work of parsing.</p>
                <p>To be specific, this "compilation" produces a binary byte code (of sorts) which is then handled to the "JS Virtual Machine" to execute. Some like to say this VM is 
                "interpreting" the byte code. But then that means Java, and a dozen other JVM-driven languages are interpreted rather than compiled :O!!</p>
                <p>Another wrinkle is that JS engines can employ multiple passes of JIT (Just-In-Time) processing/optimization on the generated code (post parsing)
                which again could reasonably be labeled either "compilation" or "interpretation" depending on perspective.</p>
                <p>So this is the flow of a JS program:</p>
                <ol>
                  <li>After a program leaves a developer's editor, it gets transpiled by Babel, then packed by Webpack ( and perhaps half a dozen other build processes ), then it gets delivered
                  in that very different form to a JS engine</li>
                  <li>The JS engine parses the code to an AST</li>
                  <li>Then the engine converts that AST to a kind-of byte code, a binary intermediate representation (IR), which is then refined/converted even further by the optimizing JIT compiler.</li>
                  <li>Finally, the JS VM (Virtual Machine) executes the program.</li>
                </ol>
                <p>JS is handled more like a compiled language that is processed in one-to-several passes first, before execution. And again, the reason that matters is, since JS is compiled , we are
                informed of static errors (  such as malformed syntax ) before our code is executed. That is a substantively different interaction model than we get with traditional "scripting" programs.</p>
                </>
              }
            />
            <Accordion
              title="Strictly Speaking"
              content={
                <>
                <p>Back in 2009 with the release of ES5, JS added strict mode as an opt-in mechanism for encouraging better JS programs.</p>
                <p><b>Why strict mode?</b> is like a guide for doing the best way so that the JS engine has the best chance of optimizing and efficiently running the code. <br/>
                Most strict mode controls are in the form of early errors  but are still thrown at compile time (before the code is run). For example, strict mode disallows naming two function parameters the same, and
                results in an early error. Some other strict mode controls are only observable at runtime, such as how "this" defaults to undefined instead of the global object.</p>
                <p>Strict mode is switched on per file with a special pragma/directive (nothing allowed before it except comments/whitespace). Strict mode can alternatively be turned on per-function scope, with exactly
                the same rules about its surroundings. The one valid reason to use a per-function approach to strict mode is when you are converting an existing non-strict mode program file and need to make changes
                little by little over time.</p>
                <p><b>Would ever be a time when JS made strict mode the default? </b> The answer is, almost certainly not. However, there are few factors that reduce the future impact of this non-default "obscurity" of strict mode.</p>
                <p>For one, virtually all transpiled  code ends up in strict mode even if the original source code isn't written as such. </p>
                <p>Moreover, a wide shift is happening toward more/most new JS code being written using the ES6 module format. ES6 modules assume strict mode, so all code in such files is automatically defaulted to strict mode.</p>
                <p>Taken together, strict mode is largely the de facto default even though technically it's not actually the default.</p>
                </>
              } 
            />
            <Accordion
              title="Defined"
              content={
                <>
                <p>JS is an implementation of the ECMAScript standard, which is guided by the TC39 committee and hosted by ECMA. It runs in browsers and other JS environments such as Node.js</p>
                <p>JS is a multi-paradigm language, meaning the sintax and capabilities allow a developer to mix and match concepts from various major paradigms, such as procedural, object-oriented (OO/classes), and functional (FP).</p>
                <p>JS is a compiled language, meaning the tools ( including the JS engine ) process and verify a program ( reporting any errors! ) before it executes.</p>
                </>
              }
            />
            <h2>How it works?</h2>
            <Accordion
              title="Each File is a Program"
              content={
                <>
                  <p>In JS, each standalone file is its own separate program. The reason this matters is primarily around error handling. Since Js treats files as programs, one file may fail (during parse/compile) or execution and that will not
                  necessarily prevent the next file from being processed.</p>
                  <p>Many projects use build process tools that end up combining separate files from the project into a single file to be delivered to a web page. When this happens, JS treats this single combined file as the entire program.
                  The only way multiple standalone .js files act as a single program is by sharing their state (and access to their public functionality) via the "global scope". They mix together in this global scope namespace, so at runtime they act as a whole.</p>
                  <p>Since ES6, JS has also supported a module format in addition to the typical standalone JS program format. Modules are also file-based. If a file is loaded via module-loading mechanism such as an import statement or a script
                  tag, all its code is treated as a single module.</p>
                </>
              }
            />
          </section>
          <section id="values">
            <Accordion
              title="Values"
              content={
                <>
                <p>Values are data. Values come in two forms in JS: primitive and object. Values are embedded in programs using literals.</p>
                <p><b>Primitive Values:</b></p>
                <ul>
                  <li>string</li>
                  <li>number</li>
                  <li>boolean</li>
                  <li>BigInt (big integer) used for storing arbitrarily large numbers.</li>
                  <li>null</li>
                  <li>undefined</li>
                  <li>symbol: which is a special-purpose value that behaves as a hidden unguessable value. Symbols are almost exclusively used as special keys on objects</li>
                </ul>
                <p><b>Arrays and Objects</b></p>
                <p>Besides primitives, the other value type in JS is an object value. Arrays are a special type of object that's comprised of an ordered and numerically indexed list of data. They can hold any value type, either primitive or object, even functions (which are sub-type) of object.</p>
                <p>Objects are more general: an unordered, keyed collection of any various values.</p>
                <p><b>Value type determination: </b> the typeof operator tells you its built-in type, if primitive, or "object" otherwise. Typeof null unfortunately returns "object" instead of the expected "null". Also, typeof returns the specific "function" for functions, but not the expected "array" for arrays</p>
                <p><b>Declaring and using variables: </b> The let keyword has some differences to var, with the most obvious being that let allows a more limited access to the variable than var. This is called "block scoping" as opposed to regular or function scoping. A third declaration form is const. It's like let but has
                an additional limitation that it must be given a value at the moment it's declared, and cannot be re-assigned a different value later.</p>
                <p>It's ill-advised to use const with object values, because those values can still be changed even though that variable can't be re-assigned.The best use of a const is when you have a simple primitive value.</p>
                <p><b>Functions </b> </p>
                <p>We should consider "function" to take the broader meaning of another related term: "procedure". A procedure is a collection of statements that can be invoked one or more times, may be provided some inputs, and may gice back one or more outputs. <br/>
                <b>Function declaration: </b> when you declare a function using function "someFuncName(){}".<br/>
                <b>Function expression: </b> is an expression that is assigned to a variable like this "let awesomeFunction = someFuntion(){}" <br/>
                In function declaration, the association between the identifier and function value happens during the compile phase of the code, before the code is executed. In contrast, a function expression is not associated with its identifier until that statement during runtime.</p>
                <p>JS functions are a special type of the object value type. Not all languages treat functions as values, but it's essential for a language to support the functional programming pattern, as JS does.</p>
                <p>You can only return a single value, but if you have more values to return, you can wrap them up into a single object/array. Since functions are values, they can be assigned as properties on objects:</p>
                <img src="./assets/chap02-func.png" width={250} />
                </>
              }
            />
          </section>
          <section>
            <h2>How we organize in JS?</h2>
            <p>Two major patterns for orgazing code (data and behavior) are used broadly across the JS ecosystem: classes and modules. These patterns are not mutually exclusive; many programs can and do use both. Other programs will stick with just one pattern, or even neither!</p>
            <Accordion
              title="Classes"
              content={
                <>
                <p>A class in a program is a definition of a "type" of custom data structure that includes both data and behaviors that operate on that data. Classes define how such a data structure works, but classes are not themselves values. To get a concrete value that you can use in the program, a class must be instantiated 
                (with the new keyword) one or more times. <br/>
                The class mechanism allows packaging data to be organized with their behaviors, it makes it easier to read, catch bugs, and give maintenance.</p>
                <h4>Class Inheritance</h4>
                <p>Inheritance is a powerful tool for orgazing data/behavior in separate logical units (classes), but allowing the child class to cooperate with the parent by accessing/using its behavior and data (using the extends keyword).</p>
                <h4>Polymorphism</h4>
                <p>Is when inherited and overwritten methods in a class can have the same name and co-exist. The subclass overwrites the method and uses that one.</p>
                </>
              }
            />
            <Accordion
              title="Modules"
              content={
                <>
                <p>The module pattern has essentially the same goal as the class pattern, which is to group data and behavior together into logical units. Also like classes, modules can "include" or "access" the data and behaviors of other modules, for cooperation's sake. <br/>
                But modules have some important differences from classes. Most notably, the sintax is entirely different.</p>
                <h4>Classic Modules</h4>
                <p>ES6 added a modules sintax form to native JS syntax, which we'll look at in a moment. But from the early days of JS, modules was an important and common pattern that was leveraged in countless JS programs, even without a dedicated sintax. <br/>
                The key hallmarks of a classic module are an outer function (that runs at least once), which returns and "instance" of the module with one or more functions exposed that can operate on the module instances's internal (hidden) data. <br/>
                Because a module of this form is just a function, and calling it produces an "instance" of the module, another description for these functions is "modules factories".</p>
                <h4>Differences:</h4>
                <p>The class form store methods and data on an object instance, which must be accessed with the this. prefix. With modules, the methods and data are accessed as identifier variables in scope, without any this. prefix. <br/>
                With class, the "API" of an instance is implicit in the class definition -- also, all data and methods are public. With the module factory function, you explicitly create and return an object with any publicly exposed methods, and any data or other unreferenced methods
                remain private inside the factory function. <br/>
                Consider also the "instantiation", the only observable difference is the lack of using "new", calling the module factories as normal functions.<br/>
                There are other variations of the factory function form that are quite common across JS, even in 2020; you may run across these forms in different JS programs: AMD (Asynchronous Module Definition), UMD (Universal Module Definition), and CommonJS (classic Node.js-style modules). These
                variations are minor (not quite compatible). However, all of these forms rely on the same basic principles.</p>            
                </>
              }
            />
          </section>
          <section id="comparisons">
            <h2>Comparisons</h2>
            <p>Making decisions in programs requires comparing values to determine their identity and relationship to each other</p>
            <Accordion
              title="Equal...ish"
              content={
                <>
                <p>Sometimes an equality comparison intends exact matching, but other times the desired comparison is a bit broader, allowing closely similar or interchangeable matching. In other words, we must be aware of the nuanced differences between an equality comparison and an equivalence comparison</p>
                <p><b>Triple-equals(===) </b>, also described as the "strict equality" operator. Also described as "it checks both the value and the type". All value comparisons in JS consider the type of values being compared, not just the === operator. Specifically, === disallows any sort of type of conversion
                (aka. "coercion") in its comparison, where other JS comparisons do allow coercion. But the === operator does have some nuance to it, a fact many JS developers gloss over. The === operator is designed to lie in two cases of special values: NaN and -0.</p>
                <p>NaN === NaN // false <br/> 0 === -0 // true </p>
                <p>Since lying about such comparisons can be bothersome, it's best to use other methods. For NaN comparisons, use the Number.isNaN(..) utility. For the -0 comparison, use the Object.is(..) utility, it can also be used for NaN checks. Humorously, you coukd think of Object.is(..) as the "quadruple-equals", the really-really-strict comparison!</p>
                <p>The story gets even more complicated when we consider comparisons of object values (non-primitives). A content-aware comparison is generally referred to as "structural equality". JS does not define === as structural equality for object values. Instead, === uses reference (identity) equality for object values.</p>
                <p><b>Values vs References </b></p>
                <p>In many languages, the developer can choose between assigning/passing a value as the value itself, or as a reference to the value. In JS, however, this decision is entirely determined by the kind of value (primitive or object).
                Primitives are held by value, objects are held by reference. There's not way to override this in JS, in either direction. <br/>
                Value-copy isn't affected by re-assignment because each variable holds its own copy of the value. By contrast, references are the idea that two or more variables are pointing at the same value, such that modifying this shared value would be reflected by an access via any of those references.</p>
                <p>JS does not provide a mechanism for structural equality comparison of object values, only reference identity comparison. To do structural equality comparison, you'll need to implement the checks yourself.</p>
                </>
              }
            />
            <Accordion
              title="Coercive Comparison"
              content={
                <>
                <p>The == operator performs an equality comparison similarly to how the === performs it. In fact, both operators consider the type of the values being compared. And if the comparison is between the same value type, both do exactly the same thing. <br/>
                If the value types being compared are different, the == differs from === in that it allows coercion before the comparison. Instead of "loose equality", the == operator should be described as "coercive equality". Example: 42 == "42"; // true</p>
                <p>Just like ==, relational comparison operators will perform as if they are "strict" if the types being relationally compared already match, but they'll allow coercion first (generally, to numbers) if the types differ. These relational operators tipically use numeric comparisons, except in the case where both values being compared are already strings.
                in this case, they use alphabetical (dictionary-like) comparison of the strings. Example: 10 &lt; 9 // true </p>
                <p>There's no way to get these relational operators to avoid coercion, other than to just never use mismatched types in the comparisons. The wiser approach is not to avoid coercive comparisons, but to embrace and learn their ins and outs. <br/>
                Coercive comparisons crow up in other places in JS, such as conditionals (if, etc.).</p>
                </>
              }
            />
          </section>
          <section id="paradigms">
            <h2>Paradigms</h2>
            <p>The term "paradigm" in programming language context refers to a broad (almost universal) mindset and approach to structuring code. <br/>
            JS is most definetely a multi-paradigm language. You can write procedural, class-oriented, or FP-style code, and you can make those decisions
            on a line-by-line basis instead of being forced into an all-or-nothing choice.</p>
            <Accordion
              title="The Object-Oriented Paradigm (OOP)"
              content={
                <>
                <p>From the OOP perspective, an application is a collection of "objects" that communicate with each other. <br/>
                Objects contain data and perform some logic based on their data. As a result, OOP code is very easy to understand. What is not so easy
                is deciding how to break an application into these small objects in the first place.</p>
                <p>We use classes in OOP as templates for creating objects. An object is an "instance of a class" and "instantiation" is the creation of an
                object based on a class. The code is defined within the class but can't execute unless its in a live object. <br/>
                A class in -js looks like a function, but you it differently. The name of the class is capitalized, and we call it by adding the keyword "new".<br/>
                The code inside the class is the constructor. The code executes each time an object is instantiated. Furthermore, we can define functions
                that the object will provide. We define these function by prepending the "this" keyword which makes them accessible from the outside.</p>
                <h4>Encapsulation</h4>
                <p><b>Why?</b> Objects shuld have exclusive control over their data. In other words, the objects "encapsulate" their data and prevent other
                objects from accessing the data directly. The only way to access the data is indirect via the functions written in the objects<br/>
                Don't mind the assignnment of the properties to the variable "this" because you will give full access to the properties from the outside,
                anyone can access it and modify it :0!. Instead you can create getter functions inside your class.</p>
                <h4>Inheritance</h4>
                <p>Inheritance lets you create a new class by extending an existing class with additional properties and functions. <br/>
                Subclasses can inherit properties and functions from superclasses while adding properties and functions of their own.</p>
                <cite>https://www.freecodecamp.org/news/an-introduction-to-object-oriented-programming-in-javascript-8900124e316a/</cite>
                </>
              }
            />
            <Accordion
              title="The Functional Paradigm"
              content={
                <>
                <p>Es un sub-paradigma del paradigma de programación declarativa, con sus propias reglas a seguir al escribir código.</p>
                <p><b>¿Paradigma declarativo?</b> escribe código que especifique lo que quieres hacer, sin decir cómo</p>
                <p><b>¿Paradigma declarativo?</b> escribes código que le dice a la computadora exactamente lo que debe hacer</p>
                <p>Generalmente conduce a menos código, porque Js ya tiene muchas de las funciones integradas que normalmente necesitas. También te
                permite abstraer mucho (no tienes que entender en profundidad cómo se hace algo), simplemente llamas a una función que lo hace por ti. <br/>
                Programación Funcional puede ser explicada simplemente siguiendo estas 2 reglas en tu código:</p>
                <h4>1. Diseña tu software a partir de funciones puras y aisladas</h4>
                <p><b>¿Funciones puras?</b> La misma entrada siempre da la misma salida (idempotencia) y no tiene efectos secundarios. Los
                estados secundarios son cuando tu código interactúa con (lee o escribe) un estado mutable externo.</p>
                <p><b>¿Funciones aisladas?</b> No dependen del estado del programa, que incluye variables globales que están sujetas a cambios.<br/>
                Todo lo que necesites debe pasarse a la función como argumento. Esto hace que tus dependencias (cosas que la función necesita para trabajar)
                sean mucho más claras de ver y más detectables.</p>
                <p>Uno de sus beneficios: para replicar un error no es necesario saber exactamente cuál era el estado de cada booleano y objecto antes 
                de ejecutar sus funciones. Siempre que tengas una pila de llamadas (sabes qué función se está ejecutando / se ha ejecutado antes), se 
                pueden replicar los errores y resolverlos más fácilmente.</p>
                <h5>Reusabilidad mediante funciones de orden superior</h5>
                <p>Las funciones que se pueden asignar a una variable, pasar a otra función o devolver desde otra función como cualquier otro
                valor normal, se denominan <b>funciones de primera clase</b>. En JS, todas las funciones son de primera clase. Funciones de este tipo 
                nos permiten crear <b>funciones de orden superior</b></p>
                <p>Una <b>función de orden superior es una función que toma una función como argumento, devuelve una función o ambas cosas :0!, esto ayuda a
                dejar de repetir código</b></p>
                <h4>2. Evitar la mutabilidad y los efectos secundarios</h4>
                <ul>
                  <li>Declarar los argumentos de la función: cualquier cálculo dentro de una función depende solo de los argumentos y no de un objeto/variable global.</li>
                  <li>No modificar una variable/objeto: creamos nuevas variables y objetos y los devolvemos si es necesario, desde una función</li>
                </ul>
                <h5>Recursividad en programación Funcional</h5>
                <p>Es cuando una función se llama a sí misma, es importante agregar una condicional que indique cuando debe de parar.</p>
                <cite>https://www.freecodecamp.org/espanol/news/que-es-la-programacion-funcional-una-guia-de-javascript-para-principiantes/</cite>
                </>
              }
            />
            <Accordion
              title="Programación Estructurada"
              content={
                <>
                <p>Este paradigma esta basado en un famoso teorema, desarrollado por Edsger Dikjstra, que demuestra que todo programa
                puede escribirse utilizando únicamente las tres estructurasbásicas de control:</p>
                <ul>
                  <li><b>Secuencia:</b> el bloque secuencial de instrucciones ejecutadas sucesivamente, una detrás de otra <br/>
                  En JS: sentencias</li>
                  <li><b>Selección:</b> la instrucción condicional con doble alternativa, de la forma "if condición then instrucción 1 else instrucción 2" <br/>
                  En JS: if-else, switch</li>
                  <li><b>Iteración:</b> el bucle condicional "while condición do instrucción" que ejecuta la instrucción repetidamente mientras la condición se cumpla <br/>
                  En JS: for, while, do-while</li>
                </ul>
                <p>La programación estructurada nos permite aplicar la filosofía de "divde y vencerás", porque nos permite crear pruebas de 
                pequeñas unidades hasta tener todo el programa cubierto.</p>
                <cite>https://medium.com/laboratoria-how-to/programaci%C3%B3n-estructurada-7fe400bae43d</cite><br/>
                <cite>https://www.pensemosweb.com/paradigma-programacion-javascript/#:~:text=La%20programaci%C3%B3n%20estructurada%20nos%20ense%C3%B1a,de%20Wybe%20Dijkstra%20sobre%20GOTO.</cite>
                </>
              }
            />
          </section>
          <section id="polyfill">
            <h2>Polyfill (aka "shim")</h2>
            <Accordion
              title="What is?"
              content={
                <>
                <p>Its a solution for forwards-compatibility, when its not related to just sintax, its related to a missing API method. The solution
                is to provide a definition for that missing method and acts as if the older environment had it natively defined. For checking polyfills, use official
                polyfills such as the collection of polyfills/shims in ES-shim.
                </p>
                </>
              }
            />
          </section>
          <section id="promises">
            <h2>Promises</h2>
            <Accordion
              title="Async await"
              content={
                <>
                <p></p>
                </>
              }
            />
          </section>
          <section id="wasm">
            <h2>Web Assembly (WASM)</h2>
            <Accordion
              title="Whats is about?"
              content={
                <>
                <p>One dominating concern that has driven a significant amount of JS's evolution is performance, both how quickly JS can be parsed/compiled and how quickly
                that compiled code can be executed.</p>
                <p>In 2013, engineers from Mozilla Firefox demostrated a port of the Unreal 3 game engine from C to JS. The ability for this code to run in a browser JS engine at
                full 60fps performance was predicated on a set of optimizations that the JS engine could perform specifically beacuse the JS version of the Unreal engine's code used a style
                of code that favored a subset of the Js language, named "ASM.js".</p>
                <p>Several years after, another group of engineers released Web Assembly (WASM), is similar to aSM.js but chose to additionally get around some of the inherent delays
                in JS parsing/compilation before a program can execute, by representing the program in a form that is entirely unlike JS.</p>
                <p>An initial motivation for WASM was clearly the potential performance improvements. While that continues to be a focus, WASM is additionally motivated by the desire to bring
                more parity for non-JS languages to the web platform. For example, if a language like Go supports threaded programming , but JS does not, WASM offers the potential for such a Go 
                program to be converted to a form the JS engine can understand, without needing a threads feature in the JS language itself.</p>
                <p>Another perspective on WASM that's emerging is that WASM is evolving to become a cross-platform virtual machine of sorts, where programs can be compiled once and run
                in a variety of different system environments.</p>
                <p>Important: WASM will not replace JS. WASM significantly augments what the web (including JS) can accomplish. That's a great thing, entirely orthogonal to whether some people
                use it as an escape hatch from having to write JS.</p>
                </>
              }
            />
          </section>
        </div>
      </form>
    </div>
  );
}

export default App;
