// //for-of(used for array)

// let arr = [10, 20, 30, "prakhar", true];

// for(let item of arr){
//     console.log(item);
// }

//for-in(usued for object)

let obj = {
    a : 10,
    b : 20,
    c : 30,
    d : "prakhar",
    e : true
}

for(let item in obj)
    // console.log(item);  gives key value
    console.log(obj[item])  //gives values