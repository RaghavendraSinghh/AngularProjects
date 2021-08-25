function calculate()
{
    var n1=parseInt(document.getElementById("btn1").value);
    var n2=parseInt(document.getElementById("btn2").value);
    var n3=parseInt(document.getElementById("btn3").value);
  var n4=n1*n2;
  var result=n1+(n4*n3)/100;
  document,getElementById("btn4").value=result;

}




document.getElementById("btn1").addEventListener("click",function calculate(){
    document.getElementById("p1").style.price="1300000";

})