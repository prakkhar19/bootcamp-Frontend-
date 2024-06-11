//syntax of array

// let arr = [10, 20, 30, 40, 50]

// console.log(arr)

// console.log(arr[0])

//heterogeneous array syntax

let arr1 = [10, 20, 30, "prakhar", "shresth", true, undefined]

console.log(arr1)

console.log(arr1[4])

//2d array

let arr2 = [10, 20, 30, "prakhar",[19, 23, "ayush"],"shresth", true, undefined]

console.log(arr2[4][2])

//method

let arr = [10, 20, 30, 40, 50]

//push

arr.push(60)
console.log(arr)
let ans = arr.push()
console.log(ans)

//pop

arr.pop()
console.log(arr)
let ans1 = arr.pop()
console.log(ans1)

//unshift 

arr.unshift(5)
console.log(arr)

//shift

arr.shift()
console.log(arr)
