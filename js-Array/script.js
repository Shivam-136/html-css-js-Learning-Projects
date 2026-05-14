
// // 1. Create an array of 5 numbers.
// //    Print the ** first ** and ** last ** element using index.

let numbers = [10,20,30,40,50]
console.log(numbers[0])
console.log(numbers[4])
console.log(numbers[numbers.length-1])

// // 2. Given an array`["html", "css"]`,
// //     add`"js"` at the ** end ** and`"git"` at the ** start **.

let arr = ['html','css']
arr.push('js')
arr.unshift('git')
console.log(arr)

// // 3. Create an array of 4 cities.
// //    Remove the ** first city ** and print the updated array.

var cities = ["Bhopal", "Mumbai", "pune", "indore"]
cities.shift();
console.log(cities);

// // 4. Create an array`[10, 20, 30, 40]`.
// //    Remove the ** last element ** and store it in a variable.
// //    Print both the removed value and the array.

let array = [10,20,30,40]
let removeValue = array.pop()
console.log(removeValue)
console.log(array)

// // 5. Given an array`["red", "green", "blue"]`,
// //     change`"green"` to `"yellow"` using index.

let colors = ['red','green','blue']
colors[1] = 'yello'
console.log(colors)

// // 6. Create an empty array.
// //     Add 3 numbers one by one using`push`.
// //    Print the final array.

let empty = []
empty.push(5)
empty.push(6)
empty.push(7)
console.log(empty)

// // 7. Given an array`[1, 2, 3, 4]`,
// //     remove the first element and add `100` at the beginning.

let change = [1,2,3,4]
change.shift()
change.unshift(100)
console.log(change)

// // 8. Create an array of your favorite 3 movies.
// //    Print the movie at ** index 1 **.

 let movies = ["Inception", "Interstellar", "Avengers"]
 console.log(movies[1])


// // 9. Given an array`["a", "b", "c", "d"]`,
// //     remove the last element, then add `"z"` at the end.

let alpha = ['a','b','c','d']
alpha.pop()
alpha.push('z')
console.log(alpha)

// // 10. Create an array`[5, 10, 15]`.
// //     Add `20` at the end and `1` at the start.
// //     Print the final array.
let elem = [5, 10, 15]
elem.unshift(1)
elem.push(20)
console.log(elem)

/////////////////////////
