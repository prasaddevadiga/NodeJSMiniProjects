// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(4))

//here it is best to use standard function
const event = {
    name: "Birthday party", 
    guestlist:["prasad", "devadiga", "Divya"],
    printGuestList() {
        console.log("Guest list for", this.name);
        this.guestlist.forEach( (guest) => {
            console.log(guest.toLocaleUpperCase(), " is attending",  this.name)
        })
    }
}

event.printGuestList()