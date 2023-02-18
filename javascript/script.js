// ========================STRING CONCATENATE===========================
var str = prompt("enter a paragraph");
var remain = 280 - str.length;
alert("you have " + remain + " charactors remaning");

// =========================SLICE========================================
var str = "Twitter began as an SMS text-based service. This limited the original Tweet length to 140 characters (which was partly driven by the 160 character limit of SMS, with 20 characters reserved for commands and usernames). Over time as Twitter evolved, the maximum Tweet length grew to 280 characters - still short and brief,";
var str = prompt("enter paragraph :");
alert(str.lenght);
var remain = 280 - str.length;
alert("your string contain " + str.lenght + " charactors");
alert("now your string after slicing t0 280 words is:");
str.slice(0, 281);

// // ===============================LOWER TO UPPER, UPPER TO LOWER===================================
var name = prompt("enter your name :");
var first_letter = name.slice(0, 1);
first_letter = first_letter.toUpperCase();
var remaining_letter = name.slice(1, name.lenght);
remaining_letter = remaining_letter.toLowerCase();
alert("Hello, " + first_letter + remaining_letter);

// ==========================POST INC PRE INC========================================
var x = 3;
var y = ++x;
alert(y);
y += 1;
alert(y);

// === === === === == FUNCTION === === === === === ==
  function addition() {
    let a = 15;
    let b = 16;
    let c = a + b;
    //if we want no to ok on console everytime then we use console.log
    //console.log is not display to user. for this we can use alert();
    console.log(c);
    console.log(c);


  }
addition(); // function calling.

//
// // ================================HOW TO DEBUG==============================
debugger;
const sub = (num1, num2) => {
  let c = num1 - num2;
  return c;
}

alert(sub(20, 10));

function add(num1, num2) {
  var c = num1 + num2;
  return c;
}

add(10, 20);


// =========================RANDOM NUMBERS ==========================================

var random= Math.random(); //it gives us the random number from 0 to 0.9999999999999999999999999
random*=6; // gives number from 1 to 6
random=Math.ceil(random); // this is how we generate random numbers.
console.log(random);

// ==========================using if else===============================
var nam1=prompt("enter your name: ");
var num2=prompt("enter another name: ");
var num= Math.random();
num*=100;
num=Math.ceil(num);
if(num>80){
console.log("your love percentage is "+ num+"% ! you are good lovers");
}
else{
  console.log("your love percentage is "+ num+"% ! you are not good lover" );
}

// ========================RELATIONAL OPERATOR====================
==== is equal to
!== is not equal
> greator
< lesser

>= greator or greator equal to
<= less or less equal

// ================LOGICAL OPERATOR===================
var nam1=prompt("enter your name: ");
var num2=prompt("enter another name: ");
var num= Math.random();
num*=100;
num=Math.ceil(num);
if(num>30 && num <=70){
  console.log("your love percentage is "+ num+"% ! you are good lovers");
}
else if (num<=30) {
  console.log("your love percentage is "+ num+"% ! you are not good lovers");
}
else{
  console.log("your love percentage is "+ num+"% ! you are best lovers in the world");
}
=================BMI CALCULATOR=========================
function checkbmi(height,weight){

  var bmi=weight/(height*height);
  bmi=bmi.toFixed(1);
  if(bmi<18.5){
    console.log("Your BMI is " + bmi + "so you are underweight.");
  }
  else if(bmi>=18.5 && bmi<=24.9){
    console.log("Your BMI is " + bmi + ", so you have a normal weight.");
  }
  else{
    console.log("Your BMI is " +bmi + ", so you are overweight.");
  }
}

checkbmi(1.91,92);

// =================================ARRAY============================
var names=["manish","shivani","ajay","archit","harshit"]; // this is how we create an array in js
console.log(names);
var yourname=prompt("what is your name: ");
if(names.includes(yourname)){// this is how we can check weather the string present or not in the array.
  console.log("welcome");
}
  else{
    console.log("bhaag ja");
  }
var count=1;
var print=[];

function fizbuz (num){
  if (count%3===0&&count%5===0){
  print.push("fizzbuzz");
  count++;
  }
  else if (count %3===0){
    print.push("fizz");
    count++;
  }
  else if (num%5===0){
    print.push("buzz");
    count++;

  }
  else{
  print.push(count);
  count++;
}
  console.log(print);
}



fizbuz();


function whoIsPaying(names){
  var num=Math.random();
  num*=names.length
  num = Math.floor(num);
  console.log(num);
  console.log(names[num]+ " is going to buy lunch today!");
}

names=["manish","shivani","ajay","harshit","archit","gaurav"];

whoIsPaying(names);

// ================WHILE LOOP============================

var i=0;
while(i<5){
  console.log(i);
  i++;
}

// =========================FOOR LOOP================================
for(i=9;i<15;i++){
  console.log(i);
}

function fib(num){
  var arr=[];
  var t1=0;
  var t2=1;
  var NextTerm=t1+t2;
  for(i=1;i<=num;i++){
  if (i==1){
    arr.push(t1);
    continue;
  }
  if(i==2){
    arr.push(t2);
    continue;
  }

  NextTerm=t1+t2;
  arr.push(NextTerm);
  t1=t2;
  t2=NextTerm;
  }
  console.log(arr);
}

fib(3);


// =====================CREATING OBJECT==========================
var houseKeeper1={
name:"manish",
  age:"23",
  language: ["hindi","english"]
}
console.log("my name is " + houseKeeper1.name + " my age is " + houseKeeper1.age+ " i know " + houseKeeper1.language[0]+"," + houseKeeper1.language[1]+ " languages!");

// ==========================CREATING OBJECT DYNAMICALLY=========================
function BellBoy(name,age,languages){//first letter is capital;
  this.name=name;
  this.age=age;
  this.languages=languages;

}

var bellBoy1= new BellBoy("manish",23,["hindi","english"]);
var bellBoy2= new BellBoy("ajay",25,["hindi","english","punjabi"]);
console.log(bellBoy1.name);
console.log(bellBoy1.languages);
console.log(bellBoy2.name);

// ======================ADDING EVENT LISTENER=============================
var total=document.querySelectorAll(".drum");
for(var i=0;i<total.length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    console.log("yes! pressed");
  });
}


// ================FUNCTION INSIDE THE FUNCTION========================
function RoomCleaning(name,age,work){
  this.name=name;
  this.age=age;
  this.work=work;

  this.clean =function (){
    alert("cleaning in progress..........!");
  }
}

var roomClean= new RoomCleaning("manish","24","clean");
roomClean.clean();
