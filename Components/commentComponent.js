// creating the custom element 
import'./addCommentState'



// let main = document.getElementById("main")
// console.log(main)



let commentComponent = document.createElement("comment-component")
commentComponent.setAttribute("name", "")
commentComponent.setAttribute("email", "")
commentComponent.setAttribute("comment", "")
commentComponent.setAttribute("id", "com")
document.body.appendChild(commentComponent)

// creating the template 

const template = document.createElement('template'); 
template.setAttribute("id", "temp")

template.innerHTML = `
<style>




</style>

<p>  Name: <span id="names"></span> </p>
      <p> Email: <span id="emails"></span> </p>
      <p> Comment:  <span id="comments"></span> </p>
      
    
`;



// append the shadow dom 

class CommentComponent extends HTMLElement {

constructor(){
    super();

const shadow = this.attachShadow({mode: 'open'}); 

this.shadowRoot.appendChild(template.content.cloneNode(true)); 

shadow.append(template)


}

static get observedAttributes() {
    return ['name', 'email', 'comment' ];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return; 

    if(property === "name"){
      if(this.nameHolder){
        this.nameHolder.textContent = newValue
      }
    }
    if(property === "email"){
      if(this.emailHolder){
        this.emailHolder.textContent = newValue
      }
    }
    if(property === "comment"){
      if(this.commentHolder){
        this.commentHolder.textContent = newValue
      }
    }
    
  }

connectedCallback() {

this.nameHolder = this.shadowRoot.querySelector("#names")

this.emailHolder = this.shadowRoot.querySelector('#emails')

this.commentHolder = this.shadowRoot.querySelector('#comments')



this.nameHolder.innerText = this.getAttribute('name')
this.emailHolder.innerText = this.getAttribute('email')
this.commentHolder.innerText = this.getAttribute('comment')


 
const nameInput = this.getAttribute("name")
const emailInput = this.getAttribute("email")
const commentInput = this.getAttribute("comment")






if(nameInput !== 0){
    this.nameHolder.textContent = nameInput
  }
  if(emailInput!== 0){
    this.emailHolder.textContent= emailInput
  }
  if(commentInput !== 0){
    this.commentHolder.textContent = commentInput
  }


}




}

window.customElements.define('comment-component',CommentComponent);
















// export default CommentComponent
export default './commentComponent.js'