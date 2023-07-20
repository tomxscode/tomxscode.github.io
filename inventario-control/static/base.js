// CONSTANTES
const urlMadre = "https://tomxscode.github.io";
// URLS
const urlProdContoller = urlMadre + "/inventario-control/controllers/productoController.php";
const urlProdIndvContoller = urlMadre + "/inventario-control/controllers/prod_IndvController.php";

// FUNCIONES
const alertas = document.getElementById('alertas');
function agregarAlerta(contenido, tipo, clases) {
  alertas.innerHTML += `
  <div class="alert alert-${tipo} ${clases ?? ""}">${contenido}</div>`;
}