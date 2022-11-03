let ventaMen = 0, ventaMed = 0, ventaSup = 0, canMen = 0, canMed = 0, canSup = 0, ventaTotal = 0;

function sumaVentas(precio) {
    precio <= 500 ?
        (ventaMen += precio, canMen++) :
        precio <= 1000 && precio > 500 ?
            (ventaMed += precio, canMed++) :
            (ventaSup += precio, canSup++);
    ventaTotal = ventaMen + ventaMed + ventaSup;
}

addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#cantidad").removeAttribute("disabled");
    document.querySelector(".submit").removeAttribute("disabled");
    document.querySelector("#cantidad").addEventListener("keyup", (e) => {
        let precio = document.querySelector("#precio");
        if (e.target.value > 0) {
            precio.removeAttribute("disabled");
        } else {
            precio.disabled = true;
        }
        let con = 1;
        let myform = document.querySelector("#form");
        myform.addEventListener("submit", async (e) => {
            e.preventDefault();
            let cantidad = document.querySelector("#cantidad").value;
            let precio = parseInt(document.querySelector("#precio").value);
            document.querySelector("#cantidad").disabled = true;
            if (con < cantidad) {
                document.querySelector("#precio").value = "";
                con += 1;
                sumaVentas(precio);

            } else {
                document.querySelector("#precio").disabled = true;
                document.querySelector(".submit").disabled = true;
                document.querySelector(".Limpiar").removeAttribute("disabled");
                document.querySelector("#res").innerHTML = "";
                sumaVentas(precio);
                let plantillas = `
                <tr>
                    <td>${"Superiores a 1000"}</td>
                    <td>${canSup}</td>
                    <td>${ventaSup}</td>
                </tr>
                <tr>
                    <td>${"superiores a 500 y menores a 1000"}</td>
                    <td>${canMed}</td>
                    <td>${ventaMed}</td>
                </tr>
                <tr>
                    <td>${"menores a 500"}</td>
                    <td>${canMen}</td>
                    <td>${ventaMen}</td>
                </tr>
                <tr>
                    <td colspan="2">${"venta total"}</td>
                    <td>${ventaTotal}</td>
                </tr>`;
                document.querySelector("#dataTable_carreras").insertAdjacentHTML("beforeend", plantillas);
                con = 1;
            }
        })
    })
    let limpiar = document.querySelector(".Limpiar");
    limpiar.addEventListener("click", (e) => {
        e.preventDefault();
        let myfor = document.querySelector("#form");
        myfor.reset();
        document.querySelector("#cantidad").removeAttribute("disabled");
        document.querySelector(".Limpiar").disabled = true;
        document.querySelector(".submit").removeAttribute("disabled");
        document.querySelector("#dataTable_carreras").innerHTML = "";
        ventaMen = 0, ventaMed = 0, ventaSup = 0, canMen = 0, canMed = 0, canSup = 0, ventaTotal = 0;
        con = 1;
    })
})