/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const calcy=()=>{
    let mt=document.getElementById('mt').value;
    let webdev=document.getElementById("wd").value;
    let prgm=document.getElementById("pg").value;
    let netwk=document.getElementById("nk").value;
    let grade="";
    let result="";
   let total= parseFloat(mt) + parseFloat(webdev) + parseFloat(prgm)+parseFloat(netwk);
 
   let perc=(total/400)*100;
  
   if(perc<=100 && perc>=91){
       grade='A';
   }
       else if(perc <=80 && perc>69){
           grade='B';
       }
           else if(perc<=68 && perc>=50){
               grade='C';
           }
             else if(perc<=49 && perc>=36){
               grade='D';
           }
          else{
              grade='E';
          }
          if(grade=='E' ){
              result="FAIL ";
          }
          else{
              result="PASS";
          }
          document.getElementById('para').innerHTML=`Your total marks out of <b>400 </b> are ${total}. <br> Your  percentage is ${perc}%.<br>
       You get ${grade} grade<br>Your Final Result  : <b> ${result}</b>`;
       
     
       
//document.getElementById("res").value= grade;
};
var preloader=document.getElementById('loader');
function myload(){
    preloader.style.display='none';
}

