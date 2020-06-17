
const timeOut = () => {
    console.log("Two seconds up")
}
setTimeout(timeOut, 2000)
setTimeout(() => {
    console.log("Two seconds up")
}, 2000)


const name = ["prasad", "divya", "Ramesh", "Ram"]

const filterFunction = (name) => {
    console.log(name)
    return name.length <= 5
}
const shortName = name.filter(filterFunction)
console.log(shortName)


const geocode = (address, callBack) => {
    setTimeout(() => {
        const data = {
            longitude: 0, 
            lattitude: 0
        }
        callBack(data)
        return data
    }, 2000)
}

const val = geocode("Mangalore", (data) => {
    console.log(data)
})

const add = (val1, val2, callBack) => {
    setTimeout(() =>{
        callBack(val1 + val2)
    }, 2000)
}

add(1,2, (sum) => {
    console.log(sum)
})