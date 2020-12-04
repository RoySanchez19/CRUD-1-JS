// Importando 2 Clases Producto e la Interfaz
import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Eventos de mi aplicación (Clic en boton, Tipiando, Carga la Página)
// Captura el Evento Submit del ById('Submit') y luego ejecutar una función
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Anular el comportamiento del formulario predeterminado (Cargar al Enviar 'Submit')
    // Capturamos el Evento 'e'
    e.preventDefault();

    // Obteniendo los valores del Formulario a partir con el Id (Nombre,Precio,Año)
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    // Creando un objeto a partir de la Clase Producto y enviando sus Propiedades
    const product = new Product(name, price, year);

    // Creando un objeto o Instanciando la Clase UI en el objeto ui
    const ui = new UI();

    // Crearemos un metodo de reset en el UI

    // Finalmente-Validando si los Elementos del Formularios estan vacios y utilizando el ShowMessage pasando sus valores
    if (name === "" || price === "" || year === "") {
       ui.showMessage("Introduzca datos en todos los campos", "danger");
       ui.resetForm()
    }

    // Caso contrario que los espacios no estan vacios, seguira con el 
    // Agregado del Producto, Mostrando mensaje y Reseteadno el Formulario
    else{
      // Utilizando los Metodos el Objeto creado ui y product
      ui.addProduct(product);
      ui.showMessage("Producto agregado exitosamente", "success");
      ui.resetForm();
    }
    
  });
  // Capturando el Evento a partir de su contenedor 'product-list' al hacer Click
document.getElementById("product-list").addEventListener("click", (e) => {
  // Instanciando el Objeto ui de la Clase UI
  const ui = new UI();
  //                .target -> Ver que esta capturando
  ui.deleteProduct(e.target);
  e.preventDefault();
});
