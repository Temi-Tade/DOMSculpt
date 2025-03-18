# DOMSculpt
I created DOMSculpt for the sole purpose of simplifying markup generation for building fast, functionality-driven and simple web pages and applications.

## Why DOMSculpt?
You may be wondering, why in the name of unnecessity have I created this? Well, I had in mind, developers who had just started trying their hands out on Vanilla JavaScript and are yet to move to frameworks, the overlords of frontend web devlopment.

This tool will allow quick and efficient creation of Markup, allowing developers to focus on implementing features and adding styles to their projects. This, I believe would go some way in allowing them focus on learning how to use JavaScript, reducing or even eliminating the need to write HTML directly.

HTML elements are created in the form of `Sculpts` (think of it as pieces of HTML elements created with JavaScript). `Sculpts` are rendered and they return HTML Elements in the DOM as seen in the browser developer tools.

## Prerequisites
You should have an understanding of HTML and basic JavaScript before using this tool.

## How to use
Oof, you might be thinking `npm install` again, right? Nah, we don't do that here.

Like i mentioned earlier, the goal of this tool is to eliminate the need for writing HTML directly, Markup is generated with JavaScript instead, then rendered in the DOM, the use cases for this tool are for simple projects, nothing too complex and the developers who should be using this are the ones who **just started trying their hands out on Vanilla JavaScript and are yet to move to frameworks and libraries**. So if you are looking for an alternative to React or Angular, I am sorry but you are in the wrong place :).

### Installation 
In any folder on your file system, open the terminal and clone the repository:

<pre>
git clone https://github.com/Temi-Tade/DOMSculpt.git
</pre>

Next, navigate to the `DOMSculpt` folder and simply copy the `main.js` file in the root directory to your project folder.

Optionally, you can structure your project folder like this:

<pre>
assets/ => for css files
public/ => for static files e.g. images
src/ => contains entry point and Sculpts source files
index.html
main.js => contains DOMSculpt logic
</pre>

This step is optional but is necessary for a clean working directory. If you are skipping this step, take notes of the different file paths when importing files.

### Using DOMSculpt
In DOMSculpt, a `Sculpt` basically refers to an HTML element that is returned by JavaScript. This is what you will be creating during your development process. It has the following structure:

<pre>
// in /src/Sculpts folder
import Sculpt from "../../main.js";

function SculptName(){
    var ElementVariable = Sculpt.create(
        tagName,
        attributes,
        ...children
    );

    Sculpt.mount(ElementVariable, target);
}

export default SculptName;
</pre>

- `import Sculpt from "../../main.js";` - this imports the Sculpt module for creating your HTML Elements
- `function SculptName()` - `SculptName` is a function that returns the HTML Element (Sculpt) you want to create. You can give the function any name but it is always a good idea to give it a descriptive name. For example: `function Header(){...}`, `function Form(){...}`.
- `var ElementVariable` - This identifies the `Sculpt` you are creating.
- `export default SculptName;` - exports the Sculpt for use in `app.js`.

`Sculpt` (HTML Elmemnt that DOMSculpt returns) is an object that has two methods: `create()` and `mount()`. 

`Sculpt.create(tagName, attributes, ...children)` is a function that creates the HTML element. It takes 3 parameters:

- `tagName` - A string. The HTML element you are creating. e.g. `'h1'`.
- `attributes` - An object. Sets the attributes of the HTML elements. e.g `{cls: "heading1", text: "Hello World."}`. `cls` in DOMSculpt resolves to `class` in HTML. `text` refers to the text within the opening and closing tags of the element. The `attributes` parameter can be left as `{}` if the element has no attributes.
- `...children` - any other parameter after the `attributes` object refers to the children of the Sculpt which are basically nested HTML Elements. Interestingly, they are also created using `Sculpt.create()` and using its associated parameters.

The `Sculpt.mount(ElementVariable, target)` appends the Sculpt to the DOM tree which renders it. It takes two parameters. `ElementVariable` (created earlier) and `target` (a string) - the `id` of the element you are appending the Sculpt to in the DOM tree, by default, it is `"root"`.

## Example Cases
Let us create a simple Hello World application using DOMSculpt.

<pre>
// /src/H1.js
import Sculpt from "../../main.js"

function H1(){
    var h1 = Sculpt.create(
        'h1',
        {text: "Hello World from DOMSculpt."},
    );

    Sculpt.mount(h1);
}

export default H1;
</pre>

<pre>
// /src/app.js
import H1 from "./H1.js";

H1();
</pre>

Open the HTML file in the browser, what do you see? You can open DevTools in the browser and view the DOM tree under the "Elements" tab. See how it looks like a HTML file you would normally write.

### Nesting Sculpts.
To nest a Sculpt, simply create a new `Sculpt` within a parent `Sculpt`'s `children` arguement.

<pre>
import Sculpt from "../../main.js";

function Header(){
    var header = Sculpt.create(
        'header',
        {},
        Sculpt.create('h1', {text: "Test App"})
    )
    
    Sculpt.mount(header);
}

export default Header;
</pre>

This way, you can import the `Header` sculpt and render it in `app.js`.

### Adding events
Since Sculpts are regular JavaScript objects, functions can be written directly into them.

<pre>
import Sculpt from "../../main.js";

function AlertButton(){
    var btn = Sculpt.create(
        'button',
        {
            text: "Click",
            onclick: function(){
                alert();
            }
        }
    );

    Sculpt.mount(btn);
}

export default AlertButton;
</pre>

## Switching things up.
So far, we have seen how to create Sculpts, nested Sculpts and adding events to Sculpts. 

Let us now look at what makes DOMSculpt quite useful.
Consider the example below.

<pre>
function AlertButton(message){
    var btn = Sculpt.create(
        'button',
        {
            text: "Click",
            onclick: function(){
                alert(message);
            }
        }
    );

    Sculpt.mount(btn);
}

export default AlertButton;
</pre>

<pre>
// /src/app.js

import AlertButton from "./Controls.js";

AlertButton("Welcome");
AlertButton("Goodbye");
</pre>

Sculpts are reuseable pieces of UI (HTML elements). Rather than writing another `button` element. You can simply render another `AlertButton` Sculpt. 

Also, Sculpts can take different parameters which confers various properties on the rendered HTML elements. Clicking the rendered buttons display different messages in the alert box. Guess what? We did not need to directly create two different `button` elements. DOMSculpt has done that. All we need do is to focus on their functionality.

This idea can be applied in rendering different elements with varying attributes without having to write them directly with HTML.