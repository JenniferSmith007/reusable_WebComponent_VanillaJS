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




export default './style.js'