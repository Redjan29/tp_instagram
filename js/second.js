document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");

    let log = localStorage.getItem("use");
    
    let element = document.getElementsByTagName("h2")[0];
    let element2 = document.getElementsByTagName("h3")[0];
    /*Redjan*/
    element.innerText += ` ${log}`;
    element2.innerText += ` ${log}`;
     localStorage.clear();
    sessionStorage.clear();
});