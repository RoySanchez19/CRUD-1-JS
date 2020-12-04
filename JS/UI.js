// UI Constructor (Interfaz)
export class UI {
  // Agregamos un nuevo Producto (Metodo)
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
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
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }
  // Eliminamos un Producto (Metodo)
  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Producto eliminado correctamente", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
