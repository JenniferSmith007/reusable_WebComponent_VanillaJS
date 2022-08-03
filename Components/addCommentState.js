

import "./commentComponent";

import "./FormDomSetUp";


const display = document.querySelector("comment-component");




const btn = document.querySelector("#button");
console.log(display);
console.log(btn);


 let state = {};
Object.defineProperty(state, "com", {
  set: (val) => {
   display.innerHTML = val
  
 
    
  },
});







document.addEventListener("DOMContentLoaded", () => {
  
  // const nameInputVal = document.querySelector("#name")
  // const emailInputVal = document.querySelector("#email")
  // const commentInputVal = document.querySelector("#comment")
  // const postAccept = () => {
  //   let checkedBox = document.getElementById('post');
  //   let displayed = document.getElementById('com')
  //   console.log(displayed)
  //   if(checkedBox.checked == true){
  //     displayed.style.display = 'block'
  //   } else {
  //     displayed.style.display ='none'
  //   }
  // }

  const btn = document.querySelector("#button");
    // let result = document.querySelector('#com')
  console.log(btn);
  const buttonfunc = () => {
   
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        
      state.com = com.value
        console.log(state)
     
     
        
        const commentSec = document.querySelector("#com");

    
        let postComm = document.querySelector("input[type=checkbox]:checked")

            if(!postComm){
                alert("thank you for the comment it won't be posted.")
                document.getElementById("#com").style.display = "none"
                
            }




        let nameval = document.getElementById("name").value;
        console.log(nameval);
        document.getElementById("name").required = true;
        let nameAns = document.createElement("p");
        let text = document.createTextNode(nameval);
        nameAns.appendChild(text);

        if(nameval.length < 1 ){
            alert('please enter name')
            document.getElementById("#name").style.display = "none"
        }
        console.log(nameAns);

    
        let emailval = document.getElementById("email").value;
        document.getElementById("email").required = true;
        console.log(emailval);
        let emailAns = document.createElement("p");
        let emailtext = document.createTextNode(emailval);
        emailAns.appendChild(emailtext);
        console.log(emailAns);
    

        if(emailval.length < 1 ){
            alert('please enter email')
            document.getElementById("#email").style.display = "none"
        }
        // if(emailval!== '@' ){
        //     alert('please enter @ ')
        //     document.getElementById("#email").style.display = "none"
        // }
        console.log(emailAns);


        let commentval = document.getElementById("comment").value;
        document.getElementById("comment").required = true;
        console.log(commentval);
        let commentAns = document.createElement("p");
        let commenttext = document.createTextNode(commentval);
        commentAns.appendChild(commenttext);
        console.log(commentAns);
        if(commentval.length < 1 ){
            alert('please enter comment')
            document.getElementById("#comment").style.display = "none"
        }
        console.log(commentAns);

 
        commentSec.setAttribute("name", nameval);
        commentSec.setAttribute("email", emailval);
        commentSec.setAttribute("comment", commentval);

        
    // let newDates = document.getElementById("dates")
    // console.log(newDates)
    // commentSec.append(newDates)

        
//         const gettingDate = () => {
//             const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();


// let currentDate = `${month}-${day}-${year}`;
// console.log(currentDate); 
//         }
        

      
//         commentSec.setAttribute("dates",gettingDate );

  let main = document.getElementById("main")
    console.log(main)

        
        let commentDisplay = document.createElement('div')
        commentDisplay.setAttribute("id", "commentDisplay")

        main.appendChild(commentDisplay)
     
        const myElementClone = commentSec.cloneNode()
        console.log(myElementClone)
        commentDisplay.appendChild(myElementClone)
         if (myElementClone >= 2){
          document.getElementById("#com").style.display = "none"
         }
      
      });

        
  }  
  
   




      


 


      
  if (buttonfunc()=== true){
 
console.log('clicked')
    // let comment = new commentComponent();
    console.log('should be comme')
    // comment.appendChild(listCom)
    // document.body.appendChild(comment)
    // console.log(comment)
  }else if(!buttonfunc()) {
    console.log('ok')
  }


});




export default "./addCommentState.js";