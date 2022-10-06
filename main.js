const numberOfOrderDiv = document.getElementById('numberOfOrder')
const subToTalDiv = document.getElementById('subtotal')
const shipDiv = document.getElementById('ship')
const totalAmountDiv = document.getElementById('totalamount') 

const price1 = document.getElementById('price-1')
const price2 = document.getElementById('price-2')
const price3 = document.getElementById('price-3')

let numberOfOrder = Number(numberOfOrderDiv.innerText) 
let subtotal = Number(subToTalDiv.innerText)
let ship = Number(shipDiv.innerText)
let totalamount = Number(totalAmountDiv.innerText)
let price_1 = Number(price1.innerText)
let price_2 = Number(price2.innerText)
let price_3 = Number(price3.innerText)

const calculateTotal = () => {
    

    subtotal = numberOfOrder * price_1 + price_2 + price_3
    
    subToTalDiv.innerText = `${subtotal}`

    totalamount = subtotal + ship 

    totalAmountDiv.innerText = `${totalamount}`
}

const increaseOrder = () => {
    numberOfOrder += 1
    numberOfOrderDiv.innerText = numberOfOrder 
    calculateTotal() 
}

const decreaseOrder = () => {
    if(numberOfOrder <= 1){
        return
    }
    numberOfOrder -= 1
    numberOfOrderDiv.innerText = numberOfOrder 
    calculateTotal() 
}

const increaseOrder1 = () => {
    alert("Only 1 Pizza left")
}
const decreaseOrder1 = () => {
    alert("Only 1 Pizza left")
}

const increaseOrder2 = () => {
    alert("Only 1 Pizza left")
}
const decreaseOrder2 = () => {
    alert("Only 1 Pizza left")
}