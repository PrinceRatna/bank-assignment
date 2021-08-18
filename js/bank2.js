var totalAmount=document.getElementById("total-amount");
document.getElementById("deposit-button").addEventListener("click",function(){
    //deposit
    var depositAmount=document.getElementById("deposit-amount");
    var totalDepositAmount=document.getElementById("total-deposit-amount"); 
   totalDepositAmount.innerText=parseFloat( depositAmount.value)+parseFloat(totalDepositAmount.innerText); 
   

   //total
   
   totalAmount.innerText=parseFloat(depositAmount.value)+parseFloat(totalAmount.innerText);

   depositAmount.value='';

    

})

document.getElementById("withdraw-button").addEventListener("click",function(){
    //deposit
    var withdrawAmount=document.getElementById("withdraw-amount");
    var totalWithdrawAmount=document.getElementById("total-withdraw-amount"); 

   totalWithdrawAmount.innerText=parseFloat( withdrawAmount.value)+parseFloat(totalWithdrawAmount.innerText); 
   

   //total

  totalAmount.innerText=parseFloat(totalAmount.innerText)-parseFloat(withdrawAmount.value);  
  withdrawAmount.value='';

})