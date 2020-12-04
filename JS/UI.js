// Creando y Exportando la Clase IU(Interactuando-Interfaz-HTML)
export class UI {
  // Creando Metodos de la Clase UI o como Objeto
  // Agregamos un nuevo Producto (Metodo)
  addProduct(product) {
    // Accediendo a una parte del Documento HTML
    const productList = document.getElementById("product-list");
    // Crando un Elemento HTML para que contenga o pueda mostrar las propiedades del Producto
    const element = document.createElement("div");
    // Insertando un Elemento HTML a element (Diseñando)
            // Estructurando la Interfaz para que se muestre despues 
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong class="color">Producto</strong>: ${product.name} -
                    <strong class="color">Precio</strong>: ${product.price} -
                    <strong class="color">Año</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
        // ProductList vamos a insertarte un elemento hijo con 'appendChild' dando el elemento que diseñamos 'element'
        // Mostrarlo en el espacio de HTML el Elemento creado a partir del Producto y sus Propiedades
    productList.appendChild(element);
  }

  // Creando resetear todos los datos del Formulario

  // Creando metodo reserteo del Formulario
  resetForm() {
    document.getElementById("product-form").reset();
  }

  // Eliminamos un Producto (Metodo)
  // Creando metodo Borrar el 'div'
  deleteProduct(element) {
    // Comparando y a donde a echo tiene la Propiedad name='delete' significa - clic en el Boton
    if (element.name === "delete") {
      // Accediendo a la Tarjeta que contiene el Boton de nombre y propiedad name='delete'
      // element.parentElement = 'Que elemento Padre tiene', para luego removerlo
      element.parentElement.parentElement.remove();
      // Llamando a un evento dentro de otro pasando sus propiedades
      this.showMessage("Producto eliminado correctamente", "success");
    }
  }

  // Creandoo metodo Mostrar Mensaje
  showMessage(message, cssClass) {
    // Creando un elemento HTML 'div' en una variable "div"
    const div = document.createElement("div");
    // Agregando Clase al elemento creado 'div'
    div.className = `alert alert-${cssClass} mt-2`;
    // Agregando al 'div' un elemento hijo con appendChild
    //              Creando un Texto y eso es === al Mensaje
    div.appendChild(document.createTextNode(message));

    // Mostrando en el DOM - HTML
    // Seleccionando y Guardando el Container
    const container = document.querySelector(".container");
    // Seleccionando el espacio de la Aplicación
    const app = document.querySelector("#App");

    // Insertando un Elemento antes de otro Elemento
    container.insertBefore(div, app);

    // Removiendo el Mensaje luego de 3 Segundos (Metodo)
    // Que es lo queremos ejecutar al lado de cuanto tiempo (milisegundos)
    setTimeout(function () {
      // Seleccionar el elemento que empiza en 'alert para luego de los 3 segundos se elimina
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
