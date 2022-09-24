console.log('ES6');

//let,con and var difference
console.log(x);
var x=5;
console.log(y);
let y=10;
console.log(z);
const z=20;

//using Function
myfun()
function myfun(){
    console.log(a);
    let a = 'hey';
    var b = 'hii';
    const c = 'oops';
}
/*output
cannot access a
undefined
cannot access c
*/

//Laxical Scope

var scope = "I am global";
function someScope(){
    console.log('1',scope);
    var scope = "I am local";
    console.log('2',scope);
}
console.log('3',scope);
someScope()

/*output
3 I am global
1 undefined
2 I am local*/

//Multiline Literal

let greting = `Helloword
               Getting,
               Watting?`;
console.log('Message',greting);

/*output
Message Helloword
               Getting,
               Watting?
*/

//Template literals

let firstName = "javascript";
let lastName = "Script";
let courseName = `my name is ${firstName}${lastName}`;
console.log(courseName);

/*output 
my name is javascriptScript
*/

//Parameters handling
// Default Parameter

let cal = (height=100,width=50) => {
    console.log('height value',height);
    console.log('width value',width);
}
cal()
cal(200)
cal(200,250)

/*output
height value 100
width value 50
height value 200
width value 50
height value 200
width value 250
*/

//Rest Parameter

function sum(...theArgs){
    console.log('Args',theArgs);
}
console.log(sum(1,2,3));

/*output
Args (3) [1, 2, 3]
*/

function myFun(a,b,...manyAarry){
    console.log("a",a);
    console.log("b",b);
    console.log("manyAarry",manyAarry);
}
myFun("one","two","three","four","five","six");

/*output
a one
b two
manyAarry (4) ['three', 'four', 'five', 'six']
*/

//Named Parameters via destructuring

function doSomthing({a = 'info',b,c = false}){
    console.log(a,b,c);
}
doSomthing({a:'test',b:1,c:true})
doSomthing({b:2,c:true});

/*output
test 1 true
info 2 true
*/

// Spread operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

/*output
6
*/

//Destructing assignment

var Fruitslist = ["Apple","Banana"];
var p = Fruitslist[0];
var q = Fruitslist[1];

/*output

*/

//Array Destructuring

let Fruits = ["Apple","Cherry"];
let [a,b] =Fruits;

console.log('a value',a);
console.log('b value',b);

/*output
a value Apple
b value Cherry
*/

//Object Destructuring

let person = {name:"Almira",age:23};
let {name,age} = person;
console.log('Person name',name);
console.log('Person age',age);

/*output
Person name Almira
Person age 23
*/

//New String Properties
'hello'.startsWith('hell');
'hello'.endsWith('ello');
'hello'.includes('ell');
'doo '.repeat(5);

/*output
'hello'.startsWith('hell');
true
'hello'.endsWith('ello');
true
'hello'.includes('ell');
true
'doo '.repeat(5);
'doo doo doo doo doo '
*/


//Number Methods
console.log(Number.isInteger(1.05));
//false
console.log(Number.isInteger(1));
//true
console.log(Number.isInteger(-3.1));
//false
console.log(Number.isInteger(-3));
//true
console.log(Number.isSafeInteger(Number));
//false
console.log(Number.MIN_SAFE_INTEGER);
//-9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991

//Math methods
console.log(Math.sign(-8));
//-1
console.log(Math.sign(0));
//0
console.log(Math.sign(3));
//1
console.log(Math.trunc(3.1));
//3
console.log(Math.trunc(3.9));
//3
console.log(Math.trunc(-3.1));
//-3
console.log(Math.trunc(-3.9));
//-3