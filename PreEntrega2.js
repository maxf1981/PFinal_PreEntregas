class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generarId() {
      return Math.random().toString(20).substr(2, 9); // Esta función genera un id único. La saqué de internet
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      const id = this.generarId();
      const newProduct = { id, ...product };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        return ("Producto no encontrado");
      }
      return product;
    }
  
    updateProduct(id, updatedFields) {
      const indice = this.products.findIndex((p) => p.id === id);
      if (indice === -1) {
        return ("Producto no encontrado");
      }
      this.products[indice] = { ...this.products[indice], ...updatedFields };
      return this.products[indice];
    }
  
    deleteProduct(id) {
      const indice = this.products.findIndex((p) => p.id === id);
      if (indice === -1) {
        return ("Producto no encontrado");
      }
      const deletedProduct = this.products.splice(indice, 1);
      return deletedProduct[0];
    }
  }
  
  
  const productManager = new ProductManager();
  
 
  console.log(productManager.getProducts()); 
  
  
  const newProduct = {                           // addProduct
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "imagen",
    code: "A123",
    stock: 25,
  };
  const addedProduct = productManager.addProduct(newProduct);
  console.log(addedProduct);
  
  
  console.log(productManager.getProducts()); //getProducts después de agregar un producto//
  
  
  const productId = addedProduct.id;                // getProductById//
  console.log(productManager.getProductById(productId));
  
  
  const updatedFields = { price: 1981, stock: 12 };  // updateProduct//
  const updatedProduct = productManager.updateProduct(productId, updatedFields);
  console.log(updatedProduct);
  
 
  const deletedProduct = productManager.deleteProduct(productId);    // deleteProduct//
  console.log(deletedProduct);
  
  
  console.log(productManager.getProducts()); // getProducts después de eliminar un producto//
  