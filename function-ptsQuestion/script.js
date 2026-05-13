//  <!-- # Function Practice Questions -->

// <!-- ## 1. Add Two Numbers
// - **Input:** `add(3, 5)`
// - **Output:** `8`
// - **Formula:** \( a + b \)

function add(a, b) {
    return a + b;
}
console.log(add(3, 5));

// ## 2. Multiply Three Numbers
// - **Input:** `multiply(2, 3, 4)`
// - **Output:** `24`
// - **Formula:** \( a \times b \times c \)

function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(2, 3, 4))

// ## 3. Find Square of a Number
// - **Input:** `square(6)`
// - **Output:** `36`
// - **Formula:** \( a^2 \)

// method 1
function square(a) {
    return a * a
}

// method 2
console.log(square(6))

function square(a) {
    return Math.pow(6, 2)
}
console.log(square(6))

// ## 4. Check Even or Odd
// - **Input:** `isEven(7)`
// - **Output:** `"Odd"`
// - **Formula:** \( a \mod 2 \)

function isEven(a) {
    if (a % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(isEven(7))

// ## 5. Convert Celsius to Fahrenheit
// - **Input:** `toFahrenheit(0)`
// - **Output:** `32`
// - **Formula:** \( F = \frac{9}{5}C + 32 \)

function toFahrenheit(c) {
    return (9 / 5) * c + 32
}
console.log(toFahrenheit(0))

// ## 6. Find Maximum of Two Numbers
// - **Input:** `max(10, 25)`
// - **Output:** `25`
// - **Formula:** \( \max(a, b) \)

function max(a, b) {
    return (a > b) ? a : b;
}
console.log(max(10, 25))

// ## 7. Find Minimum of Three Numbers
// - **Input:** `min(5, 2, 9)`  
// - **Output:** `,,2`
// - **Formula:** \( \min(a, b, c) \)

function min(a, b, c) {
    return Math.min(a, b, c)
}
console.log(min(5, 2, 9))

// ## 8. Calculate Area of Rectangle
// - **Input:** `area(10, 5)`
// - **Output:** `50`
// - **Formula:** \( \text{Area} = \text{length} \times \text{width} \)

function area(length, width) {
    return length * width;
}
console.log(area(10, 5))

// ## 9. Calculate Simple Interest
// - **Input:** `simpleInterest(1000, 2, 5)`
// - **Output:** `100`
// - **Formula:** \( \text{SI} = \frac{P \times R \times T}{100} \)

function simpleInterest(P, T, R) {
    return (P * T * R) / 100;
}
console.log(simpleInterest(1000, 2, 5));

// ## 10. Reverse a String
// - **Input:** `reverse("hello")`
// - **Output:** `"olleh"`

function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("hello"));

// ## 11. Count Characters in String
// - **Input:** `countChars("JavaScript")`
// - **Output:** `10`

function countChars(string) {
    return string.length
}
console.log(countChars("Javascript"))

// ## 12. Convert Minutes to Seconds
// - **Input:** `toSeconds(3)`
// - **Output:** `180`
// - **Formula:** \( \text{Seconds} = \text{Minutes} \times 60 \)

function toSeconds(Minutes) {
    return Minutes * 60
}
console.log(toSeconds(3))

// ## 13. Check Positive, Negative or Zero
// - **Input:** `checkNumber(-5)`
// - **Output:** `"Negative"`
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return " Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(-5))

// ## 14. Calculate Power
// - **Input:** `power(2, 3)`
// - **Output:** `8`
// - **Formula:** \( a^b \)
function power(a, b) {
    return Math.pow(a, b)  // ek or tarika hai iss ko solve karne ka... 
    // return (a**b)
}
console.log(power(2, 3))

// ## 15. Sum of Array Elements
// - **Input:** `sumArray([1,2,3,4])`
// - **Output:** `10`
// - **Formula:** \( \sum_{i=1}^{n} a_i \)
function sumArray(arr){
    let sum = 0 
    arr.forEach (function(arr){
        sum += arr
    })
return sum
    }
    console.log(sumArray([1,2,3,4]))

// ## 16. Get First Element of Array
// - **Input:** `firstElement([9,8,7])`
// - **Output:** `9`
function firstElement(arr){
    return arr[0]
}
console.log(firstElement([9,8,7]))

// ## 17. Get Last Element of Array
// - **Input:** `lastElement([1,2,3])`
// - **Output:** `3`
function lastElement(arr){
    return arr[arr.length-1]
}
console.log(lastElement([1,2,3 ]))

// ## 18. Check String Length Greater Than N
// - **Input:** `isLong("hello", 3)`
// - **Output:** `true`
function isLong(string,n){
    if(string.length > n){
        return true
    }else{
        return false
    }
}
console.log(isLong("hello",3))
// ## 19. Concatenate Two Strings
// - **Input:** `concat("Hello", "World")`
// - **Output:** `"HelloWorld"`

function concat(string1,string2){
    return string1+string2
}
console.log(concat("Hello","World"))

// ## 20. Find Average of Numbers
// - **Input:** `average(10, 20, 30)`
// - **Output:** `20`
// - **Formula:** \( \text{Average} = \frac{\sum_{i=1}^{n} a_i}{n} \)

function  average(a,b,c){
    return (a+b+c)/3
}
console.log(average(10,20,30))

// ## 21. Check If Number Is DiveBy5(25)`
// - **Output:** `truisible by 5
// - **Input:** `isDivisible`

function isDivisibleBy5(a){
    if(a % 5 === 0){
        return true
    }else{
    return false
    }
}
console.log(isDivisibleBy5(25))

// ## 22. Convert Age to Days
// - **Input:** `ageInDays(2)`
// - **Output:** `730`
// - **Formula:** \( \text{Days} = \text{Age} \times 365 \)

function ageInDays(a){
    return (a)*365
}
console.log(ageInDays(2))

// ## 23. Return Full Name
// - **Input:** `fullName("John", "Doe")`
// - **Output:** `"John Doe"`

function fullName (a,b){
    return a +" " + b
}
console.log(fullName("John","Deo"))


// ## 24. Check Voting Eligibility
// - **Input:** `canVote(17)`
// - **Output:** `false`

function canVote(x){
   if(x > 17){
    return true
   }else{
    return false
   }
}
console.log(canVote(18))
console.log(canVote(17))

// ## 25. Find Remainder
// - **Input:** `remainder(10, 3)`
// - **Output:** `1`
// - **Formula:** \( a \mod b \)

function remainder(a,b){
    return (a%b)
}
console.log(remainder(10,3))

// ## 26. Return Absolute Value
// - **Input:** `absolute(-8)`
// - **Output:** `8`
// - **Formula:** \( |a| \)

function absolute (a){
   if(a >= 0){
    return a
   }else{
    return -a
   }
}
console.log(absolute(-8))

// ## 27. Check If String Is Empty
// - **Input:** `isEmpty("")`
// - **Output:** `true`

function isEmpty(string){
    if(string.length === 0){
        return true
    }else{
        return false
    }
}
console.log(isEmpty(""))

// ## 28. Convert String to Uppercase
// - **Input:** `toUpperCase("js")`
// - **Output:** `"JS"`

function toUpper(string){
    return string.toUpperCase()
}
console.log(toUpper("js"))

// ## 29. Calculate Discounted Price
// - **Input:** `discount(1000, 10)`
// - **Output:** `900`
// - **Formula:** \( \text{Discounted Price} = \text{Original Price} - \left(\frac{\text{Discount} \times \text{Original Price}}{100}\right) \)

function discount(OriginalPrice,DiscountPrice){
    return OriginalPrice -  (DiscountPrice*OriginalPrice)/100
}
console.log(discount(1000,10))

// ## 30. Count Arguments Passed
// - **Input:** `countArgs(1,2,3,4)`
// - **Output:** `4`

function countArgs(...args){
    return args.length
}
console.log(countArgs(1,2,3,4))

// ## 31. Return Largest of Array
// - **Input:** `largest([4,9,2])`
// - **Output:** `9`

function largest(arr){
    return Math.max(...arr)
}
console.log(largest([4,9,2]))
// ## 32. Return Smallest of Array
// - **Input:** `smallest([4,9,2])`
// - **Output:** `2`
function length(arr){
    return Math.min(...arr)
}
console.log(length([4,9,2]))

// ## 33. Check If Value Exists in Array
// - **Input:** `includes([1,2,3], 2)`
// - **Output:** `true`

function includes(arr,Value){
    if(arr.includes(Value)){ //includes() ek JavaScript method hai jo check karta hai ki koi value array ya string me present hai ya nahi.
        return true
    }else{
        return false
    }
}
console.log(includes([1,2,3,],2))

// ## 34. Calculate Total Price with Tax
// - **Input:** `totalPrice(100, 18)`
// - **Output:** `118`
// - **Formula:** \( \text{Total Price} = \text{Price} + \left(\frac{\text{Tax} \times \text{Price}}{100}\right) \)

function totalPrice(price,tax){
    return price +  (tax * price / 100)
}
console.log(totalPrice(100,18))

// ## 35. Check Palindrome String
// - **Input:** `isPalindrome("madam")`
// - **Output:** `true`

function isPalindrome(string){
    let reversed = string.split("").reverse().join("")

    if(string === reversed){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome("madam"))

// ## 36. Return Length of Longest Wordis
// - **Input:** `longestWordLength("I love JavaScript")`
// - **Output:** `10`

function longestWordLength(str){
    let words = str.split(" ");
    let max = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i].length > max){
            max = words[i].length;
        }
    }

    return max;
}
console.log(longestWordLength("I love JavaScript")); // 10

// ## 37. Return Boolean Based on Comparison
// - **Input:** `isGreater(10, 5)`
// - **Output:** `true`

function isGreater(a,b){
    return a>b
}
console.log(isGreater(10,5))

// ## 38. Convert Hours to Minutes
// - **Input:** `toMinutes(2)`
// - **Output:** `120`
// - **Formula:** \( \text{Minutes} = \text{Hours} \times 60 \)

function toMinutes(a){
    return a *60
}
console.log(toMinutes(2))

// ## 39. Merge Two Arrays
// - **Input:** `merge([1,2], [3,4])`
// - **Output:** `[1,2,3,4]`

function merge(a,b){
    return a.concat(b) //concat- Do arrays ko merge karta hai
}
console.log(merge([1,2],[3,4]))

// ## 40. Return Type of Argument
// - **Input:** `getType(123)`
// - **Output:** `"number"`

function getType(a){
     return typeof a
}
console.log(getType(123))

// ## 41. Calculate Factorial
// - **Input:** `factorial(5)`
// - **Output:** `120`
// - **Formula:** \( n! = n \times (n-1) \times (n-2) \times \ldots \times 1 \)

function factorial(n){
    let result = 1;

    for(let i = 1; i <= n; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(5));

// ## 42. Return Middle Value
// - **Input:** `middle(1, 2, 3)`
// - **Output:** `2`

function middle(a,b,c){
    return a+b+c - Math.max(a,b,c)- Math.min(a,b,c); // 6-3-1=2
}
console.log(middle(1,2,3))

        // ## 43. Check If Number Is Prime
        // - **Input:** `isPrime(7)`
        // - **Output:** `true`

    function isprime(num){
        if(num <=1){
            return false
        }

        for(let i=2; i<num; i++){
            if(num % i === 0){
                return false;
            }
        }

        return true
    }
    console.log(isprime(7))
    console.log(isprime(10))

// ## 44. Count Vowels in String
// - **Input:** `countVowels("hello")`
// - **Output:** `2`

function countVowels(str){
let count = 0;
let vowels = "aeiouAEIOU"
for(let i = 0; i<=str.length; i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
return count;
}
console.log(countVowels("hello"))
console.log(countVowels("JavaScript"))

// ## 45. Repeat String N Times
// - **Input:** `repeat("ha", 3)`
// - **Output:** `"hahaha"`

function repeat(str,n){
    return str.repeat(n)
}
console.log(repeat('ha',3))

// ## 46. Return Sum of Even Numbers
// - **Input:** `sumEven([1,2,3,4,6])`
// - **Output:** `12`

function sumEven(arr){
    let sum = 0
    for (let i=0; i<arr.length; i++){
    if(arr[i]%2 ===0){
        sum += arr[i]
    }
    }
    return sum
}
console.log(sumEven([1,2,3,4,6]))


// ## 47. Return Boolean if All Params Are Numbers
// - **Input:** `allNumbers(1,2,"3")`
// - **Output:** `false`
 
function allNumbers (){
  for(let i=0; i<arguments.length; i++){
     if(typeof arguments[i] !== "number")
        return false
  }
  return true
}
console.log(allNumbers(1,2,3))
console.log(allNumbers(1,2,'3'))

// ## 48. Convert Boolean to String
// - **Input:** `boolToString(true)`
// - **Output:** `"true"`

function boolToString(value) {
    return String(value);
}

console.log(boolToString(true));   

// ## 49. Return Difference Between Two Numbers
// - **Input:** `difference(10, 4)`
// - **Output:** `6`
// - **Formula:** \( a - b \)

function difference(a,b){
    return a-b
}
console.log(difference(10,4))

// ## 50. Return Greeting Message
// - **Input:** `greet("Alex")`
// - **Output:** `"Hello Alex"` --> -->

function greet(name){
    return 'Hello'+name
}
console.log(greet('Alex'))
