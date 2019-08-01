function factorial(){
    num = parseInt(document.getElementById("num").value)
    if(num){
    res = 1
    for(let i=2;i<=num;i++){
        res*=i
    }
    message="Factorial of "+num+" is "+res
}
   document.getElementById("res").innerHTML="<h2>"+message+"</br>"
}


function digitsSum(){

    num = parseInt(documnet.getElementById("num").value)
    message = "";
    s=0;
    num1=num
    if(num){
        while(num!=0){
            s+=num%10+parseInt(num/10)
            num = parseInt(num/10)
        }
        message = "Sum of digits of:"+num1+"is "+s
    }
    document.getElementById("s").innerHTML="<h2>"+message+"</br>"

}

function palindrome(){

}

function reverseOfNum(){

}