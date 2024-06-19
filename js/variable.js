// variable are storage units or storage container for information referencing
// we define variable using two key word: let and const.

// varibles defined usin 'let'can be changed(mutable)
// when coming up with the name of the varible let it be descriptive as possible.
// the equal sign is used to give a value tp a variable name
 let personName = "caroline wanjiru"
//   to ceheck on changes print on information to the console : a method to be used it console.log 
console.log(personName)
personName ="Roy"
console.log(personName)
personName = "Ron"
console.log(personName)
let secondnameperson ="alice"
console.log(secondnameperson)

// const is immutable; cannot be changed 
// with const varibel defination we cannot change the vraible name or the value of the position name.
const position= 1
// running the command below (position =2 )will give an error because the value of the varibel name has been changed.
// position =2 
console.log(position)
//   objects -list of properties in curly braces 
let person={
    firstname:"caroline"
    // her:"daisy"
    
}
// arrays ; coolection of values stores inside a single reference
let fruits  =["apples", "kiwi", "mangoes", "pineapple"]
// null data type : this means empty : it represents an intentionally absent object
let guy = null;
//  undefine : a value has not been assigned a value.
let woman;
console.log(woman)