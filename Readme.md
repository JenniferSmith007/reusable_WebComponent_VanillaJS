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
# ❗️Creating A Custom Element With Shadow DOM And Basic State 🚀

〰️ Let's get started on creating a custom element **no css** will be included in this guide. 〰️

#### 🗂 Folder Structure:

To begin creating the component, create a folder named components that holds: 

- commentComponent.js
- addCommentState.js
- FormDomSetUp.js

#### 📌 Imports: 

After creating the files in the **Component** folder, go to the main.js file and import all files. 


> import'./Components/commentComponent'

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
<br>
> let button = document.createElement("button");
<br>
> button.setAttribute("type", "submit");
<br>
> button.setAttribute("id", "button");
<br>
append the element to the form 
<br>
> form.appendChild(button)
<br>
append the form to the body
<br>
> document.body.appendChild(form)




#### ✔️ Creating the HTML element and Component: 

Using the dom create a commentcomponent element and set it's attributes, then append the element to the body.

> 






