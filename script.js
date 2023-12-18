eval_exp = "";
let answer;
function v(a) {
  
  if (a == '÷') {
    document.getElementById("input").value += a;
    eval_exp += "/";
  }
  else if (a == "×") {
    document.getElementById("input").value += a;
    eval_exp += "*";
  }
  else if (a == "^") {
    document.getElementById("input").value += a;
    eval_exp += "**";
  }
  else if (a == "pi") 
    {
   document.getElementById("input").value += "\u03C0";
   eval_exp+=Math.PI;
      
      
     } 
  else if (a == "e") 

    {
document.getElementById("input").value += a;
eval_exp+=Math.E;
      

     } 
  else if (a == "mod") 

    {

document.getElementById("input").value += a;

eval_exp+="%";

     } 
  else{ document.getElementById("input").value += a;

  eval_exp += a;} 
}

function ans() {
  if(eval(eval_exp) >Number.Max_safe_integer){
    answer="overflow error";
  } 
  answer=eval(eval_exp);
  output();
}
function output() {
document.getElementById("input").value=answer;
} 
function cleared() {
  document.getElementById("input").value="";
  
  eval_exp="";
}