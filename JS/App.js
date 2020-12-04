import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Eventos de mi aplicación (Clic en boton, Tipiando, Carga la Página)
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour 25:00
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    // Create a new Oject Product
    const product = new Product(name, price, year);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || price === "" || year === "") {
       ui.showMessage("Introduzca datos en todos los campos", "danger");
       ui.resetForm()
    }

    else{
      // Save Product
      ui.addProduct(product);
      ui.showMessage("Producto agregado exitosamente", "success");
      ui.resetForm();
    }
    
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
