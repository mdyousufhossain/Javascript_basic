let name = "Md Yousuf hossain";

let bal ;
// lenght
bal = name.length;
// concat
bal = name.concat(" ","and fun");
//uppercase
bal=name.toUpperCase();
// to use lowercase
bal=name.toLowerCase();
//to find any char
bal=name.indexOf('');
// to target any char
bal=name.substring(3,7);
// slice in front
bal=name.slice(0,5);
//slice from the back 
bal=name.slice(-5); 
// slit
bal= name.split('')
// repalce
bal=name.replace('Md','Mohammad');
//Includes
bal=name.includes('bal');
// repeat
bal=name.repeat(4);

const   num=20,
        num2= 30,
        num3= 12.5;

let anko ;

//pi 
anko=Math.PI;
//round
anko=Math.round(4.4);
//round up or down
anko=Math.ceil(2.2);
//round down 
ankp=Math.floor(2.9);
//Square Root
anko=Math.sqrt(123);
//Abs number
anko=Math.abs(num3);
//power
anko=Math.pow(8,3);
//Get the minium number from the list
anko=Math.min(10,8,3,5,);
// get the highest number from the list 
anko= Math.max(13,46,80,56);

//string to number or ingter

let val;

val=Number('5');
val=Number('20.564');
//converting boolien
val=Number(true);
val=Number(false);
val=Number(null);
//nan
val=Number('hello');
val=Number[1,5,5];
val=parseInt('100');
//parsenInt wont effect for float number or string
val=parseInt('100.266');
//its do work with parseFloat
val=parseFloat('100.30');

let wierdNumber = 56246.466,
    wierdNumber1= "86655.554";
// fix a float number
//---------------------

// console.log(wierdNumber.toFixed);

// convert string float into number and target any decimals number

//----------------

// console.log(Number(wierdNumber1).toFixed(1-20))

//conver number to string

let stri = 6661,

output;

output=String(stri);

//--------------
// console.log(typeof output);

//boolien to string

//arrays

const bal1 = ['january','February','March','April'];
//find items in arrays

//--------------

// console.log(bal.indexOf('januray'));

//add more items end off arrays

bal1.push('balamar');

 //add arrays in the beggeing 

bal1.unshift('tut')

 //add arrays in the middle

bal1.splice(3,null,'newbal');

 //remove element from the end

bal1.pop()
// //remove from the beginging
bal1.shift()
// //remove items from the middle or anything 
//---------------
//  bal1.splice(1,3)  //first one is to add items 2nd one to 
//                    //replace that position

//revers arry

bal1.reverse();

//concatenate 2 arrays
const animal    = [5,61,6],
        human   =[4,6,5];

let tutal = animal.concat(human);
// order an array(sort)

let fruit =['1','5','6','7']

// const tutal1 = fruit.sort();
const tutal1 = fruit.sort().reverse();

// console.log(tutal1);

//object
const person ={
    firstName: 'Yousuf',
    lastName : 'Hossain',
    job      :'kamla',
    email    :'yousafhossain3@gmail.com',
    age      :21 ,
    music    : "none",
    living   : {

        city: 'cant say that',
        country : ' cant say that',

    },

    bornYear: function(){
        return new Date().getFullYear() -this.age;
    },
    getJob : function() {
            return this.job;
    }

}

// console.log(person.bornYear());

// object arrays
// let car =[
//     {model:'musanq', engine:6.0},
//     {model:'lemborgini', engine: 6.1},
//     {model:'chalanger', engine:7.1} 

// ]

// for(let i = 0; i<Car.length; i++){

//     console.log(car[i].model);
// }

//--------------------

                          // f u n t i o n  //

function hello(name="yousuf",age=20){

    console.log(`hello ${name} ${age} & welcome to our website`);
}

hello("bala");


function addic(num1,num2){

    return num1+num2;
}

let result ;

result= addic(5,5);

// console.log(result);

// funtion expression
const sum = function(nam=0,nam2=0){

    return nam+nam2;
}

// console.log( sum(5,6));

//......................................................

//funtion invoked immeiedly 

// (function (bumba){
//     console.log('Learing' + bumba);

// })("balamar");    ------------------------!!(not working anymore)


//prorperty methood(funtion)

const musicPlayer ={
    play:function(id){
        console.log(`Playing song with the xpress: ${id}`);
    }

}

musicPlayer.play(30);

musicPlayer.remove = function(id) {
    console.log(`Reomved from the play list : ${id}`);

}

musicPlayer.remove(20);


///--------------- date in javascripts ------------
const today = new Date();

let outpot;

outpot = today.getMonth();
outpot = today.getDate();
outpot = today.getHours();

today.setFullYear(1999);

outpot=today.getFullYear();

outpot =today.setMonth(10);
// console.log(outpot);


//>>>>>>>>>>>>>>>>>>>>>.... if els operator..........<<<<<<<<<<<<<


const score = 100 ;
//const score = 10 ;

//if (score!==100)--------------note equal
// if (score >=100)------------greater or euqal 

if( score==100){
    console.log('Yeah is the same');
} else{

    console.log('No, is not the same');
}

// ------------------->>els if<<---------------

let card = 100;

if(card===100) {
    console.log('Made the purchase');

} 
    else if (card >=90){
        console.log('You bearly any left');

} 

//............Swich ...................


const payment = 'bal';

switch(payment){
    case 'cash':
        console.log(`your paymnet method is :${payment}`);
        break;
    case 'check':
        console.log(`Your payment method is : ${payment}`);
        break;
    case 'card':
        console.log(`Your payment method is : ${payment}
        
        presseing...`);
        break; 
    default:
        console.log(`Please select a valid payment method`);
        break;

}

// assing variable from the swich case.

const cars = ['toytota','ferrari', 'lamborgini'];

const selected = 0;

let car ;

switch(selected){
    case 0:
        car = cars[0];
        break;
    case 1:
        car = cars[1];
        break;
    case 2:
        car = cars[2];
        break;
}

console.log(`Your selected car is ${car}`);

// for loops 

for(let i = 0;i<=5; i++){
    console.log(`Number : ${i}`);

}

for(let j = 0;j<10;j++){
    if(j==5){
        console.log('Yeh we rech 5th level!!');
        continue; // remove the number 5th 
        //break; when condition is met its go stop the loop 
    }
    console.log(`Number:${j}`);

}

// read a value in loop or even and odd
// % or module that only work with "even" number so remmber it ! 
// % can be use in many ways its easiest way to find even number 

for(let y = 0; y <10; y++){
    if(y % 2 == 0){
        console.log(`${y} is even`);
    }   else {
        console.log(`${y} is odd`);
    }
};

//loop for shopping card

const shoppingCart= ['Product1','Product2','Product3','Product4','procduct5','Product6'];

for (let k = 0; k < shoppingCart.length;   k++) {

    console.log(`Product: ${shoppingCart[k]}`);
};

// while loop

let p = 0;

// while(p < 5){

//     console.log(`Number:${p}`);
//     p++;
// };

//while loop array

const shoppingCart1=['Product','Product2','Product3'];

while(p < shoppingCart1.length){
    console.log(`Product:${shoppingCart1}`);
p++;

}

//do while loop
// do while run even its doesnt meet the condition

// let q = 100;
// do {
//     console.log(`Number:${q}`);
//     q++;

// } while(q<5);


let todoList = ['Sleep','Code','VidoeGame','Rest'];

todoList.forEach(function(assignment,index){
    console.log(`${index}:${assignment}`);
});

//map 

const shoppingCart3 = [
    {id: 1,product: 'Balmar'},
    {id: 2,product: 'balamar2'},
    {id: 3,product: 'Balamar3'}
];

const productName = shoppingCart3.map(function(shoppingCart3){
    return shoppingCart3.product;
});

// console.log(shoppingCart3);


// Iterators in ES6
let myCar = {
    model:'camero',
    engine: 6.4,
    year :2020,
    Make:'Ferrari'

};

for(let key in myCar){
    console.log(`${key}: ${myCar[key]}`);

};

