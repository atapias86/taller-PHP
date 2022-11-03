function masa(presion,volumen){
    return presion*volumen;
}

addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#cantidad").removeAttribute("disabled");
    document.querySelector("#cantidad").addEventListener("keyup", (e) => {
        let presion = document.querySelector("#presion");
        let volumen = document.querySelector("#volumen");
        if (e.target.value > 0) {
            presion.removeAttribute("disabled");
            volumen.removeAttribute("disabled");
        } else {
            presion.disabled = true;
            volumen.disabled = true;
        }
    })
    let con = 1,lista=[];
    let myform = document.querySelector("#form");
    myform.addEventListener("submit", async (e) => {
        e.preventDefault();
        let cantidad = document.querySelector("#cantidad").value;
        let presion = parseInt( document.querySelector("#presion").value);
        let volumen = parseInt( document.querySelector("#volumen").value);
        document.querySelector("#cantidad").disabled = true;
        if (con < cantidad) {
            document.querySelector("#presion").value = "";
            document.querySelector("#volumen").value = "";
            con += 1;
            lista.push(masa(presion,volumen));
        } else {
            let form = e.target;
            lista.push(masa(presion,volumen));
            document.querySelector("#presion").disabled=true;
            document.querySelector("#volumen").disabled=true;
            let config = {
                method: form.method,
                body: JSON.stringify(lista)
            };

            let peticion = await fetch(form.action, config);
            let respuesta = await peticion.text();
            document.querySelector("#res").insertAdjacentHTML("beforeend",respuesta)
        }
    })
})