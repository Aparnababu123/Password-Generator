let inputslider = document.getElementById("inputslider");
let slidervalue=document.getElementById("slidervalue");
let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genbtn=document.getElementById("genBtn");
let copyicon=document.getElementById("copyicon")

slidervalue.textContent=inputslider.value;

inputslider.addEventListener('input', () =>{
    slidervalue.textContent=inputslider.value;
});


genbtn.addEventListener('click',()=>{
    passbox.value=generatePassword();
})
let upperchars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerchars='abcdefghijklmnopqrstuvwxyz';
let num='0123456789';
let sym='!@#$%^&*~'
function generatePassword(){
    let genPassword="";
    let allchars='';

    allchars +=lowercase.checked ? lowerchars :"";
    allchars +=uppercase.checked ? upperchars :"";
    allchars +=numbers.checked ? num :"";
    allchars +=symbols.checked ? sym :"";

    if(allchars==""||allchars.length==0){
        return genPassword;
    }

    let i=1;
    while(i<=inputslider.value){
    genPassword+=allchars.charAt(Math.floor(Math.random()*allchars.length));
    console.log(allchars);
    i++;
    }
    return genPassword;
}

copyicon.addEventListener('click',()=>{
    if(passbox.value!="" ||passbox.value.length>=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";
        copyicon.title="Password Copied";
        setTimeout(()=>{
            copyicon.innerHTML="content_copy";
            copyicon.title=""
        },3000)
    }
  
})