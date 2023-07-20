// Función para cargar todos los productos
function cargarProductos() {
  return fetch(urlProdContoller, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

function agregarProducto(sku, detalle, descripcion, existencias) {
  return fetch(urlProdContoller, {
    method: 'POST',
    body: new URLSearchParams({
      sku: sku,
      detalle: detalle,
      descripcion: descripcion,
      existencias: existencias
    })
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    })
}

function obtenerProducto(sku) {
  return fetch(urlProdIndvContoller + '?sku=' + sku, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

function editarProducto(sku, detalle, descripcion, existencias) {
  return fetch(urlProdContoller, {
    method: 'PUT',
    body: new URLSearchParams({
      sku: sku,
      detalle: detalle,
      descripcion: descripcion,
      existencias: existencias
    })
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    })
}

function borrarProducto(sku) {
  return fetch(urlProdContoller + '?sku=' + sku, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    })
}

/*cargarProductos();

// EJEMPLO DE USO (gracias chat gpt)
let enviarForm = document.getElementById('enviarForm');
enviarForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  // Crear un objeto para almacenar los valores de los inputs
  const values = {};
  // Recorrer los pares clave-valor de FormData y asignarlos al objeto:
  for (let pair of formData.entries()) {
    values[pair[0]] = pair[1];
  }

  editarProducto(
    values['sku'],
    values['detalle'],
    values['descripcion'],
    values['existencias']
  );
})*/