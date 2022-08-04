# 🔨 Building A Basic Reusable Dynamic Comment Component With State 🛠

### Project Description: 
using forms and adding elements to the page with JavaScript to create a comment form. coordinating this using a state manager: a tool that controls how an application is displayed based on a given context. Changing the context, in this case adding a comment in the form, should change the application, in this case display a new comment on the page.

### Task: 
Update the page to display an image and add a comment form. The comment form should include:

- A name, email address, and large body input
- A checkbox to agree to have the comment posted
- A submit button
- All three comment fields should be required and be valid before being submitted
- Comments should be managed by a ***state manager***; Whenever a new comment is added, it should trigger the state manager that then updates the displayed comments on the site


### What was done to complete task: 
- Created functionality to take user input with a form 
- Used state to control the comments being posted 
- Created User interface design using **Figma** 
- Implemented design using DOM and CSS 
________________________________________________
# ❗️Creating A Web Component With Shadow DOM And Basic State 🚀

〰️ Let's get started on creating a custom element **no css** will be included in this guide. 〰️

#### 🗂 Folder Structure:

To begin creating the component, create a folder named components that holds: 

- commentComponent.js
- addCommentState.js
- FormDomSetUp.js

#### 📌 Imports: 

After creating the files in the **Component** folder, go to the main.js file and import all files. 


`` import'./Components/commentComponent'``

Inside of commentComponent add a import statement for addCommentState.js

*The purpose of importing is so that certain functions and variables can be used file to file.*


#### Creating the Form ✔️: 
Using the DOM or the body in the index.html to create a form element that will have 

- Name Input 
    - attributes: type, id, required
- Email Input 
    - attributes: type, id, required
- Comment Input 
    - attributes: type, id, required
- checkbox Input 
    - attributes: type, id, required
- Button 
    - attributes: type, id

Append all the elements to the form then append the form to the body 

creating the button 

`` let button = document.createElement("button");``


`` button.setAttribute("id", "button");``
 

`` form.appendChild(button)``

`` document.body.appendChild(form)``




#### ✔️ Creating the HTML element and Component: 

Using the DOM create a commentcomponent element and set it's attributes name / email / comment / id, then append the element to the body.

`` let commentComponent = document.createElement("comment-component")``


`` commentComponent.setAttribute("comment", "")``

**Create the template element**

`` const template = document.createElement('template'); ``

***Must have a template element for the ShadowDOM***

Use the template.innerHTML to set a style to the comment component and give the text a span and set the id to match the text. 

``   Comment: span id="comments">/span``


#### 🪄 Building the class that extends HTMLElement 🪄: 

Create a component class that will extend HTMLElement 
it will take in a 
- Constructor 
    - within the constructor call super(),Inside the constructor still copy this code and paste it 
    <br>

`` const shadow = this.attachShadow({mode: 'open'}); ``

``this.shadowRoot.appendChild(template.content.cloneNode(true)); ``


This piece of code will attach the shadowDOM and keep it open to modify (modifiy the template element)
<br>
Then append the template to the shadowRoot 
<br> 

Outside of the constructor, create a built in static mehtod ***observeAttributes()*** , this method will observe the change of value for our attributes created earlier. 

``static get observedAttributes() {return ['name', 'email', 'comment' ];}``

Outside of the attribute method, create a attributeChangedCallback method. 
this will take in the parameters of property, oldValue, and newValue. within the code block we will check to see if property equals the attribute. If it does then we change our template to hold the value of what was entered. 

`` if(property === "comment"){if(this.commentHolder){this.commentHolder.textContent = newValue}}``

Do this for name and email as well. Creating the commentHolder will come soon. 

Outside of the changedCallback method, create a method called ***connectedCallback*** , this sets up the ShadowDOM template. 

first create variables for name, email and comment 

`` this.commentHolder = this.shadowRoot.querySelector('#comments')``
``this.commentHolder.innerText = this.getAttribute('comment')``
``const commentInput = this.getAttribute("comment")``

still inside the connectedCallback, time to input the logic for entered values. 

``  if(commentInput !== 0){this.commentHolder.textContent = commentInput}``

then to finish this file up call on customElemts.define

 ``window.customElements.define('comment-component',CommentComponent); ``

^ this let's the component render on the window(screen)

final step will be to export 

`` export default './commentComponent.js ``


#### ⚡️ Creating Functionality and State ⚡️:

Switch to the addCommentState.js file, and let's create some state ⚙️!

create a variable called state and set it as an open object, the open object will hold the state of the comment. After the open object, use Object.defineProperty, we will pass in state and the comment object attribute, from there we will set val and have the comment component innerHTML equal to val.  

``let state = {};``
``Object.defineProperty(state, "com", {set: (val)=> {display.innerHTML = val},});``

Ok, now that we have state time to set up functionality. 

first, create a display variable that will equal to the value of querySelector("whatever the id attribute is of the custom component") after the display create a button variable and have it equal to the button attribute id value. 

``const display = document.querySelector("comment-component");``
``const btn = document.querySelector("#button");``

before creating the button function, create a function to wait on loading the DOM 

`` document.addEventListener("DOMContentLoaded", () => {}``

Inside of this function, create the button function that takes in the value give to form.
<br>
 **The purpose of this guide is to show custom element creation and state so, I won't get into creating the button function. **

 example on creating the functionality:

 ``    let nameval = document.getElementById("name").value;``
        
``document.getElementById("name").required = true;``
``let nameAns = document.createElement("p");``
``let text = document.createTextNode(nameval);``
    ``nameAns.appendChild(text);``

*** the last part is adding the state object to the button comment functionality***

within the button functionality, we will take our state object and have it equal to the value of comment. 
`` state.theCustomElement = theCustomElement.value``

#### That is the end of creating Web component with state! 🥳


















