document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");

    let correctmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let correctmdp = /^[a-zA-Z0-9._-]{2,15}$/;

    
    let warning = document.querySelector(".warning")
    let email = document.getElementsByTagName("input")[0].value;
    let  password= document.getElementsByTagName("input")[1].value;
    let btn = document.getElementsByTagName("input")[2]
     

    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        Validation();
    });

 Validation =()=>{

         email = document.getElementsByTagName("input")[0].value;
         password= document.getElementsByTagName("input")[1].value;

        if(email.match(correctmail) && password.match(correctmdp) ){
            warning.classList.add("yess")
            warning.classList.remove("nonn")
            warning.innerText=("Bravo!")
            localStorage.setItem("use", email);
            document.location.assign("second.html");


        }else if(password.match(correctmdp)){
            warning.classList.add("nonn");
            warning.classList.remove("yess");
            warning.innerText = "mail invalide ou champs vide";
            
        }else if(email.match(correctmail)){
            warning.classList.add("nonn");
            warning.classList.remove("yess");
            warning.innerText = "password invalide ou champs vide";
            
        }else{
            warning.classList.add("nonn");
            warning.classList.remove("yess");
            warning.innerText = "veuillez revérifier vos champs";
        }
    }

 });

 

 