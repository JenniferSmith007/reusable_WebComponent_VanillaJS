let headDiv = document.querySelector("header")

let headerTextCompHolder = document.createElement('p')
headerTextCompHolder.textContent = 'Patagonia'
headerTextCompHolder.setAttribute("id", "complogo")

let headerTextleftnav1Holder = document.createElement('p')
headerTextleftnav1Holder.textContent = 'Worn Wear'
headerTextleftnav1Holder.setAttribute("id", "compww")

let headerTextleftnav2Holder = document.createElement('p')
headerTextleftnav2Holder.textContent = 'Provisions'
headerTextleftnav2Holder.setAttribute("id", "comppro")
console.log(headDiv)

headDiv.appendChild(headerTextCompHolder)
headDiv.appendChild(headerTextleftnav1Holder)
headDiv.appendChild(headerTextleftnav2Holder)

let headerTextCompCenterHolder = document.createElement('p')
headerTextCompCenterHolder.textContent = 'Free Shipping on orders over $90.00'
headerTextCompCenterHolder.setAttribute("id", "compcenter")
headDiv.appendChild(headerTextCompCenterHolder)


// let locationDiv = document.createElement('div')
// locationDiv.setAttribute("id", "complocaldiv")
// headDiv.appendChild(locationDiv)
// let locationIcon = document.createElement("IMG")
// locationIcon.setAttribute("src", "images/locationLogo.svg")
// locationIcon.setAttribute("id", "complocal")
// locationDiv.appendChild(locationIcon)



let headerTextCompright1Holder = document.createElement('p')
headerTextCompright1Holder.textContent = 'Patagonia, Meatpacking NYC'
headerTextCompright1Holder.setAttribute("id", "complocaladd")

headDiv.appendChild(headerTextCompright1Holder)

let headerTextCompright2Holder = document.createElement('p')
headerTextCompright2Holder.textContent = 'Login'
headerTextCompright2Holder.setAttribute("id", "complogin")
headDiv.appendChild(headerTextCompright2Holder)




let navTwo = document.getElementById("navtwo")
console.log(navTwo)

 let companyLogo = document.createElement("IMG")
 companyLogo.setAttribute("src", "images/PatagoniaLogo.svg")
 companyLogo.setAttribute("id", "complogo")
 navTwo.appendChild(companyLogo)


 let navtwoTextShop = document.createElement('p')
 navtwoTextShop.textContent = 'Shop'
 navtwoTextShop.setAttribute("id", "navp")
navTwo.appendChild(navtwoTextShop)


let navtwoTextActivism = document.createElement('p')
navtwoTextActivism.textContent = 'Activism'
navtwoTextActivism.setAttribute("id", "navp")
navTwo.appendChild(navtwoTextActivism)


let navtwoTextSports = document.createElement('p')
navtwoTextSports.textContent = 'Sports'
navtwoTextSports.setAttribute("id", "navp")
navTwo.appendChild(navtwoTextSports)

let navtwoTextStories = document.createElement('p')
navtwoTextStories.textContent = 'Stories'
navtwoTextStories.setAttribute("id", "navp")
navTwo.appendChild( navtwoTextStories)

let companyIcons = document.createElement("IMG")
companyIcons.setAttribute("src", "images/PatagoniaICons.svg")
companyIcons.setAttribute("id", "compicons")
navTwo.appendChild(companyIcons)

let navthreeDiv = document.getElementById("navthree")
console.log(navthreeDiv)
let nav3 = document.createElement("IMG")
nav3.setAttribute("src", "images/nav3.svg")
nav3.setAttribute("id", "compnavthree")
navthreeDiv.appendChild(nav3)

let main = document.getElementById("main")
console.log(main)





let mainImg = document.createElement("IMG")
mainImg.setAttribute("src", "images/PatagoniaMerch.svg")
mainImg.setAttribute("id", "compmerch")
console.log(mainImg)
main.appendChild(mainImg)




export default './style.js'