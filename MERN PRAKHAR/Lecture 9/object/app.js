let obj = {
    //empty object
}

let person = {
    firstName : "prakhar",
    age : 19,
    favColor : "blue" 
}

console.log(person)
console.log(person.firstName)
// console.log(person[0])
// console.log(person['firstName'])

//update 
person.favColor = "black"
console.log(person)

//add
person.gender = "male"
console.log(person)

//delete
delete person.age
console.log(person)