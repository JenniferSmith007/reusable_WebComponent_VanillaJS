// creating the custom element 





// let main = document.getElementById("main")
// console.log(main)

// change names to match exactly for what they do 

let commentComponent = document.createElement("comment-component")
commentComponent.setAttribute("name", "")
commentComponent.setAttribute("email", "")
commentComponent.setAttribute("comment", "")
commentComponent.setAttribute("id", "com")
document.body.appendChild(commentComponent)

// creating the template 

const template = document.createElement('template'); 


template.innerHTML = `
<style>




</style>

<p> Name:  <span id="names"></span> </p>
      <p> Email: <span id="emails"></span> </p>
      <p> Comment:  <span id="comments"></span> </p>
      
    
`;



// append the shadow dom 
// proxy when anything calls state going to run the callback for every item in the state
// 
class Store {
  constructor(init = {}){
      const self = this;
      this.subscribers = [];

      this.state = new Proxy(init, {
          set(state,key,value){
              state[key] = value;
              // w.e parent node innerHTML is null
              self.subscribers.forEach((subscriber) => subscriber(state))
             
              console.log(state)
              return true;
          }
      })
  }
  subscribe(cb){
      if(typeof cb !== "function"){
          throw new Error("You must subscribe with a function");

      }
      this.subscribers.push(cb)
      cb(this.state)
      // this is where the function will be called
     this.increment();
  }
  set(key,value){
      this.state[key] = value;
  }
  get(key){
      return this.state[key]
  }
  increment(){
      this.set("com", (this.get("com") || 0) + 1)
  }


}





const store = new Store({"com": 0})
console.log(store)





class CommentComponent extends HTMLElement {

constructor(){
    super();

this.attachShadow({mode: 'open'}); 

this.shadowRoot.appendChild(template.content.cloneNode(true)); 




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

  



  document.addEventListener("DOMContentLoaded", () => { 
    const btn = document.querySelector("#button");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        // store.increment();



  // this.nameHolder = this.shadowRoot.querySelector("#names")
  // console.log(this.nameHolder)
  // this.emailHolder = this.shadowRoot.querySelector('#emails')
  
  // this.commentHolder = this.shadowRoot.querySelector('#comments')
  
  
  // dir . minp of custom component 
  // add sub to the store 
  // 
  // this.nameHolder.innerText = this.getAttribute('name')
  // console.log(this.nameHolder)
  // this.emailHolder.innerText = this.getAttribute('email')
  // console.log(this.emailHolder)
  // this.commentHolder.innerText = this.getAttribute('comment')



// create a dup custom component 
// get name email and comment from form 
// put name email comment in component 
// add new component into the dom 



this.nameHolder = this.shadowRoot.querySelector("#names")
    
this.emailHolder = this.shadowRoot.querySelector('#emails')

this.commentHolder = this.shadowRoot.querySelector('#comments')

this.nameHolder.textContent  = this.getAttribute("name")
console.log(this.nameHolder)
this.emailHolder.innerText = this.getAttribute('email')
console.log(this.emailHolder)
this.commentHolder.innerText = this.getAttribute('comment')
console.log(this.commentHolder)




  store.subscribe((state) => {
    console.log(state)

   


// this.setAttribute("name",state.name);

// this.setAttribute("email", state.email);
// this.setAttribute("comment", state.comment); 




    let name = document.getElementById("name").value
    let nameText = document.createTextNode(name)
    this.nameHolder.appendChild(nameText)
    console.log(this.nameHolder)
    
    
    // let email = document.getElementById("email").value
    // console.log(email)
    // let emailText = document.createTextNode(email)
    //  this.emailHolder.appendChild(emailText)
    // console.log(this.emailHolder)
    
    
    // let comment = document.getElementById("comment").value
    // console.log(comment)
    // let commentText = document.createTextNode(comment)
    // this.commentHolder.appendChild(commentText)
    // console.log(this.commentHolder)



  // this.nameHolder.innerText = this.setAttribute("name", name)
  // console.log(state.nameHolder)
  })
//   let name = document.getElementById("name").value
// let nameText = document.createTextNode(name)
// this.nameHolder.appendChild(nameText)
// console.log(this.nameHolder)


// let email = document.getElementById("email").value
// console.log(email)
// let emailText = document.createTextNode(email)
//  this.emailHolder.appendChild(emailText)
// console.log(this.emailHolder)


// let comment = document.getElementById("comment").value
// console.log(comment)
// let commentText = document.createTextNode(comment)
// this.commentHolder.appendChild(commentText)
// console.log(this.commentHolder)

// on button

  })



  })


      
      // const commentSec = document.querySelector("#com");
      // console.log(commentSec)
  
      // let postComm = document.querySelector("input[type=checkbox]:checked")

      //     if(!postComm){
      //         alert("thank you for the comment it won't be posted.")
      //         document.getElementById("#com").style.display = "none"
              
      //     }




      // // let nameval = document.getElementById("name").value;
      // // console.log(nameval);
      // // document.getElementById("name").required = true;
      // // let nameAns = document.createElement("p");
      // // let text = document.createTextNode(nameval);
      // // nameAns.appendChild(text);





      // // if(nameval.length < 1 ){
      // //     alert('please enter name')
      // //     document.getElementById("#name").style.display = "none"
      // // }
      // // console.log(nameAns);

  
      // let emailval = document.getElementById("email").value;
      // document.getElementById("email").required = true;
      // console.log(emailval);
      // let emailAns = document.createElement("p");
      // let emailtext = document.createTextNode(emailval);
      // emailAns.appendChild(emailtext);
      // console.log(emailAns);
  

      // if(emailval.length < 1 ){
      //     alert('please enter email')
      //     document.getElementById("#email").style.display = "none"
      // }
      // // if(emailval!== '@' ){
      // //     alert('please enter @ ')
      // //     document.getElementById("#email").style.display = "none"
      // // }
      // console.log(emailAns);


      // let commentval = document.getElementById("comment").value;
      // document.getElementById("comment").required = true;
      // console.log(commentval);
      // let commentAns = document.createElement("p");
      // let commenttext = document.createTextNode(commentval);
      // commentAns.appendChild(commenttext);
      // console.log(commentAns);
      // if(commentval.length < 1 ){
      //     alert('please enter comment')
      //     document.getElementById("#comment").style.display = "none"
      // }
      // console.log(commentAns);

//  store.subers((state) => {
//   commentSec.setAttribute("name", nameval);
//   commentSec.setAttribute("email", state.emailval);
//   commentSec.setAttribute("comment", state.commentval);

//  })
// this.setAttribute("name",state.name);
// this.setAttribute("email", state.email);
// this.setAttribute("comment", state.comment); 



// 


// store.subers((state) => {
//   commentSec.setAttribute("name", state.nameval);
//   commentSec.setAttribute("email", state.emailval);
//   commentSec.setAttribute("comment", state.commentval);

//  })









 
// const nameInput = this.getAttribute("name")
// const emailInput = this.getAttribute("email")
// const commentInput = this.getAttribute("comment")






// if(nameInput !== 0){
//     this.nameHolder.textContent = nameInput
//   }
//   if(emailInput!== 0){
//     this.emailHolder.textContent= emailInput
//   }
//   if(commentInput !== 0){
//     this.commentHolder.textContent = commentInput
//   }


// }





}

}

window.customElements.define('comment-component',CommentComponent);
















// export default CommentComponent
export default './commentComponent.js'