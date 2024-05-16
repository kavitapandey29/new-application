
for(let i=1;i<=10;i=i+1) {
    console.log("Kavita",i);
}


// //Q- 1 se 100 tak no. print
for(let i=0; i<=100; i=i+1){
    console.log(i);
 }

//while>> don't know kitni jagah loop lagana hai
//i=eltrater

//Q - name 50 times put here

// let i=1;
// while(i<=50){
//    console.log("kavita");
//    i=i+1;
//  };


//>>>>>>java code- top to bottom >>>>>left to right (RUN)

//do while loop only works in one time
//Q-name 50 times put here
//while- condition 
 let j=1;
 do{
     console.log("mine");
     j=j+1;
 }
 while(j<=50)


//Q-entry control loop and exit control loop difference

/**
 * break- pass wale loop se exit karega
 * continue- wo wali eltraterion ko skip kardeta hai
 */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>break

//Q-loop 1 to 10 number print 
//ram>>>i name variable value 1(i=1) ; check condition if it's true then under the loop(i<=10) ; 
// then print i=1
//break>> loop exit
// for(let i=1;i<=10;i=i+1){
//     console.log(i);
//     break;
// }
// console.log("exit from loop");



//in first loop 1 to 10 number print 
for(let i=1;i<=10;i=i+1){
    for (let j=1;j<=20;j=j+1){
        console.log(i,j);
         break;
   }
 }



//value of i,j,k, (1,2,1)

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

 for(let i=1;i<=10;i++){
     console.log("mate",i);
     if (i==5){
         continue;
    }
 console.log( "hye");
 }


/**
 *ans- hey 1 loop over
 * hey 2 loop over
 * because of continue 
 */
 for (let i=1;i<=10;i++){
    console.log("hey",i)
    continue;
    console.log("name",i);
 }


//Q. 1 to 10 odd and even number
//% modulus operator >>remainder 
for (let num=1;num<=10;num++){
    if(num%2==0){
        console.log("even",num);
    }else{
        console.log("odd",num);
    }
}


                                                                                                                                   
//Q. number is prime or not
let num=7;
let count=0;
for(let div=1;div<=num;div++){
    if (num%div==0){
        count=count+1
    }
}
if (count>2){
    console.log("not prime ",num);
}else {
    console.log("prime",num);
}

//other method
let number=10;
let counte=0;
for(let div=2;div<=number-1;div++){
    if (number%div==0){
        counte=counte+1
        break;
    }
}
if (counte==0){
    console.log("prime ",number);
}else {
    console.log("not prime",number);
}


//Q. 10 to 100 search for Prime and not prime no.
let ll=10;
let ul=100;
for(let num=ll;num<=ul;num=num+1){
    let coun=0;
    for (let div=2;div<=num-1;div=div+1){
        if (num%div==0){
            coun=coun+1;
            break;
        }
    }
    if (coun>0){
        console.log("not prime",num);
    }else{
        console.log("prime",num);
    }
}
