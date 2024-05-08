//     js - variable - dynmically type
//strings= sequence of character
// var name="kavita";
// var age=24
// var height=5
// var weight=50
// var grade='A'

// console.log("my name is ",name);
// console.log("my age is",age);

// tamplate string $
// console.log('my name is ${name} and my age is ${age}');

//multiline

//Ram 2 Part 1-stack memory  2-heap memory (variable)


// conditionals
/**
 * if 
 * else
 * else if
 * switch
 * ternary
 */
//condition would be true false

//if -single work  // else not single(if with pair)

//if condition is false in (if) then else would work and outside console
// var age=24
// if (age<18){
//     console.log("you can vote");
// }
// else {
//     console.log("hello world");

// }
// console.log("outside if else");

//else if

//var age=25;
//if(age<18){
//console.log("go to school");
//}else{
//  if(age>18 && age<20 ){
//    console.log("go to college");
//}
//else{
//  if(age>20 && age<30 ){
//    console.log("go to job");
//}
//}
//}


//right way

// var age=70;
// if(age<18){
//     console.log("go to school");
// }else if(age>18 && age<20){
//     console.log("go to college");
// }else if (age>20 && age<30){
//     console.log("go to office");
// }else if (age>30 && age<40){
//     console.log("party");
// }else if (age>40 && age<50){
//     console.log("prey");
// }
// else {
//     console.log("stay at home");
// }

//23
/**
 * fundamentals
 * 1> intro to js, variabless,conditionals,loops ,object , array, function, scope , closure , oops, new , this
 * 
 * 2> js DOM , DOM BOM API , local storage , feach , axios, 
 */

/**
 * Advance js-
 * High order function
 * callbacks 
 * callback hell
 * inversion of control
 * Promises
 * Promise Hell
 * Promise vhaning
 * Asyn Await
 * Asyn behavior of JS
 * scope
 * closure
 * JS engine internal
 * Constructor
 * class and object
 * inheritence
 * prptotypes
 * prptotypal inheritence
 * scopes 
 * closure
 * coerction - type casting
 */

//loop- initiate , conditional , update 

//for

// for(let i=1;i<=10;i=i+1) {
//     console.log("Kavita",i);
// }


// // //Q- 1 se 100 tak no. print
// for(let i=0; i<=100; i=i+1){
//     console.log(i);
//  }



//Q - name 50 times put here
// let i=1;
// while(i<=50){
//    console.log("kavita");
//    i=i+1;
//  };


//>>>>>>java code- top to bottom >>>>>left to right (RUN)

//do while loop only works in one time
//Q-name 50 times put here
//while-mai condition 
//  let j=1;
//  do{
//      console.log("mine");
//      j=j+1;
//  }
//  while(j<=50)


//Q-entry control loop and exit control loop difference

/**
 * break- pass wale loop se exit karega
 * continue- wo wali eltraterion ko skip kardeta hai
 */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>break

//Q-loop 1 to 10 number print 
// for(let i=1;i<=10;i=i+1){
//     console.log(i);
//     break;
// }
// console.log("exit from loop");


//double loop
//in first loop 1 to 10 number print 
// for(let i=1;i<=10;i=i+1){
//     for (let j=1;j<=20;j=j+1){
//         console.log(i,j);
//          break;
//    }
//  }


/**
 * A. 121
 *    131
 */
// let i=1;
// while(i<=10){
//     for(let j=1;j<=5;j++){
//         for(let k=1;k<=15;k++){
//             console.log(i,j,k);
//             break;
//         }
//     }
//     i=i+1;
// }
// console.log("loop se bahar");


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>continue
//== comparision
//A.continue will erase hye in 5 only one time
//  for(let i=1;i<=10;i++){
//      console.log("mate",i);
//      if (i==5){
//          continue;
//     }
//  console.log( "hye");
//  }


/**
 *ans- hey 1 loop over
 */
//  for (let i=1;i<=10;i++){
//     console.log("hey",i)
//     continue;
//     console.log("name",i);
//  }


//Q. 1 to 10 odd and even number
// for (let num=1;num<=10;num++){
//     if(num%2==0){
//         console.log("even",num);
//     }else{
//         console.log("odd",num);
//     }
// }

                                                                                                                                  
//Q. number is prime or not
// let num=7;
// let count=0;
// for(let div=1;div<=num;div++){
//     if (num%div==0){
//         count=count+1
//     }
// }
// if (count>2){
//     console.log("not prime ",num);
// }else {
//     console.log("prime",num);
// }

//other method
// let number=10;
// let counte=0;
// for(let div=2;div<=number-1;div++){
//     if (number%div==0){
//         counte=counte+1
//         break;
//     }
// }
// if (counte==0){
//     console.log("prime ",number);
// }else {
//     console.log("not prime",number);
// }

//Q. 10 to 100 search for Prime and not prime no.
// let ll=10;
// let ul=100;
// for(let num=ll;num<=ul;num=num+1){
//     let coun=0;
//     for (let div=2;div<=num-1;div=div+1){
//         if (num%div==0){
//             coun=coun+1;
//             break;
//         }
//     }
//     if (coun>0){
//         console.log("not prime",num);
//     }else{
//         console.log("prime",num);
//     }
// }