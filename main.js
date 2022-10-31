addEventListener("DOMContentLoaded", (e)=>{
    let myForm = document.querySelector("#Formulario");
    myForm.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let config = {
            method: myForm.method,
            body: JSON.stringify(data)
        };
        let peticion = await fetch(myForm.action,config);
        let res = await peticion.json();
        document.querySelector("#res").innerHTML = res.mensaje;
        
    })
})