
function cal(){
    var input_=document.getElementById("inp").value;
    var ch=document.getElementById("typeOfTemp").value;
    console.log(input_);
    console.log(ch);

    const celToFah = (cel) => { 
        let fahrenheit = Math.round((cel * 9/5)+32);
        return fahrenheit;
    }
    const fahlToCel = (feh) => {
            let Celsius = Math.round((feh - 32) * 5/9);
            return Celsius;
    }

    let re;
    if(ch==="Celsius")
    {
        re=celToFah(input_);
        console.log(re);
        document.getElementById('resultP').innerHTML=re,'° fahrenheit';
    }else{
        re=fahlToCel(input_);
        console.log(re);
        document.getElementById("resultP").innerHTML=re,'° Celsius';
    }

    
}
