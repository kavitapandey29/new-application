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

  let num =5;
  for(let row=1;row<=num;row++){
     for(let col=1;col<=num;col++){
         if (row==col || row+col==num+1){
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


/**
 * Q.print this    *     * * * *
    pattern>>>     *     *
                   *     *
                   * * * * * * *
                         *     *
                         *     *
                   * * * *     *
 */
/**
 * row_____________________________
 * column|
 * 2 loops one for row and one for column
 * process.stout > for same line
 * console. log > enter
 * if row 1 hai , else if row<=4 , else if row==4 , else if row<7 , else last row
 *  then handle the column > with(*) and space ( ) with the tab(\t)
 */

    let n=7;
    for( let row=1;row<=n;row++){
     for( let col=1;col<=n;col++){
          if(row==1){
            if (col<=1 || col>=4){
                  process.stdout.write("*\t")
            }else{
                  process.stdout.write("\t")  
            }

          }else if(row<4){
            if(col<=1||col==4){
                  process.stdout.write("*\t")

            }else{
                  process.stdout.write("\t")  
            }

          }else if (row==4){
            if (col<=7){
                  process.stdout.write("*\t")
            }

          }else if(row<7){
            if (col==4||col==7){
                  process.stdout.write("*\t")  
            }else{
                  process.stdout.write("\t")   
            }

          }else{
            if (col<=4||col==7){
                  process.stdout.write("*\t")
            }
            else{
                  process.stdout.write("\t")  
            }
          }
     }
     console.log();
    }

     console.log();
    //or
    /**
     * Math.floor7/2 3 so 3+1=4
     */

    let nu=7;
    for( let row=1;row<=nu;row++){
     for( let col=1;col<=nu;col++){
          if(row==1){
            if (col<=1 || col>=Math.floor(nu/2+1)){
                  process.stdout.write("*\t")
            }else{
                  process.stdout.write("\t")  
            }

          }else if(row<Math.floor(nu/2+1)){
            if(col<=1||col==Math.floor(nu/2+1)){
                  process.stdout.write("*\t")

            }else{
                  process.stdout.write("\t")  
            }

          }else if (row==Math.floor(nu/2+1)){
            if (col<=nu){
                  process.stdout.write("*\t")
            }

          }else if(row<n){
            if (col==Math.floor(nu/2+1)||col==nu){
                  process.stdout.write("*\t")  
            }else{
                  process.stdout.write("\t")   
            }

          }else{
            if (col<=Math.floor(nu/2+1)||col==nu){
                  process.stdout.write("*\t")
            }
            else{
                  process.stdout.write("\t")  
            }
          }
     }
     console.log();
    }
    console.log();
/**
 * Q.print this
 * A
 * AA
 * AAA
 * AAAA
 * AAAAA
 */
/**
 * ASCII CODE > amarican Standard code for information Interchange A to Z
 */

let numb=5;
for(let row=1; row<=numb; row++){
      for (let col=1;col<=row;col++){
            process.stdout.write
            ("A\t")
      }
   console.log();   
}