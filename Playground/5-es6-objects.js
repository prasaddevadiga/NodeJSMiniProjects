// Object shorthand 

const name = "Prasad"
const userAge = 32

const user = {
    name, 
    age: userAge, 
    localtion: "Mangalore"
}

console.log("user data", user)

const product = {
    label: "Note book",
    price: 3, 
    stock: 120, 
    salePrice: undefined 
}

const {label:productLabel, price, stock=10, salePrice, rating = 4} = product

console.log(productLabel)

const trasaction = (type, {label, price}) => {
    console.log(label)
    console.log(price)
}

trasaction("order", product)