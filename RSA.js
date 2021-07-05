let p = 0;
let q = 0;
let n = 0;
let phi = 0;
let suggestion = [];
let k = 0;
let factors = [];
let e = 0;
let d = 0;
let message = 0;
let encryption = 0;
let decrption = 0;

document.getElementById("b1").onclick = function(){

   p = document.getElementById("pasEnter").value;
   q = document.getElementById("qasEnter").value;
   n = p*q;
   phi = (p-1)*(q-1);
  console.log(p,q,n,phi);
  document.getElementById("NasEnter").value = n;
  document.getElementById("phiasEnter").value = phi;

  //Possible number of e*d
  suggestion[0] = phi + 1;
    for(var i=2;i<=15;i++)
    {
        suggestion[i-1] = phi*i + 1;
    }
    document.getElementById("sugg1").value = suggestion;

}

document.getElementById("getK").onclick = function()
{
    k = document.getElementById("kenter").value;
    var temp = k;
    var check = false;
    //Check the whether a given number is prime or not
    for(var i=0;i<suggestion.length;i++)
    {
        if(k == suggestion[i])
        {
            check = true;
            break;
        }
    }

    if(check == true)
    {
        factors = primeFactors(k);
        console.log(factors);
        if(factors[0] != k && factors.length <= 2)
        {
            // console.log(factors);
            document.getElementById("Factors").value = [factors[0],factors[1]];
        }
        else
        {
            alert("Number is Prime");
        }
    }
    else{
        alert("Enter the number which is suggested or Number has more than two prime factors!");
        
    }


}

document.getElementById("checked").onclick = function()
{
    e = document.getElementById("eenter").value;
    d = document.getElementById("denter").value;
    if(e == factors[0] || e == factors[1]  && d == factors[0]|| d == factors[1])
    {
        document.getElementById("outputnumber").innerHTML =  "e is " + e + "      d is " + d + "        N is " + n + "     e*d mod phi = 1  e and phi are relatively prime        d and phi are relatively prime" ;
    }
    else
    {
        alert("Enter the specific values which are given");
    }
}


function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }


  document.getElementById("started").onclick = function(){
     
    message = parseInt(document.getElementById("message").value,10);
    console.log(message);
    console.log(typeof(message));
    //Encryption start
    var temp = 1;
    for(var i=0;i<e;i++)
    {
        temp = ((temp%n)*(message%n))%n;
        
    }
    encryption = temp;
    document.getElementById("encymessage").value = encryption;

    //Decrption start

    temp = 1;
    console.log(d);
    console.log(message);
    for(var i=0;i<d;i++)
    {
        temp = ((temp)*(encryption%n))%n;
    
    }
    decrption = temp;
    // console.log(decrption);
    document.getElementById("decrmessage").value = decrption;

}