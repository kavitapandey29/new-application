/**Q
 * 1
 * 12
 * 1234
 * 12345
 */

// let n =5;
// for(let row=1; row<=n; row++){
//     let str="";
//     for(let col=1;col<=row;col++){
//      str=str+col;
//     }
//     str=str+"\n"
//     console.log(str);
// }

/**Q
 * 1
 * 12
 * 1234
 * 12345
 */

//  let m= 5;
//  for (let row=1;row<=m; row++){
//     let str="";
//     let one =1;
//     for(let col=1;col<=row; col++){
//         str=str+one;
//         one=one+1
//     }
//     str=str+"\n"
//     console.log(str);
//  }

 /**
  * Q print this pattern
  *             *   *
  *              * *
  *               *
  *              * *
  *             *   *
  */

  let n =5;
  for(let row=1;row<=n;row++){
     for(let col=1;col<=n;col++){
         if (row==col || row+col==n+1){
         process.stdout.write("*")
     } else {
         process.stdout.write(" ")
     }
 
     }
     console.log()
  }
 
  //Q print first 20 fibonacci number
 
  let o=20;
  let fn=0;
  let sn=1;
  for (let i=1;i<=o;i++){
     console.log(i);
  }