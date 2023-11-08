class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(productInfo) {
      const productInfo = {title, description, price, thumbnail, code, stock};
      if (this.products((product) => product.code === code)) {
        console.log("El código del producto ya existe.");
      }
      const id = this.generarId();
      const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.log("Producto no encontrado.");
      }
      return product;
    }
  
    
  }
  
  // Crear una instancia de ProductManager
  const productManager = new ProductManager();
  
  // Obtener productos 
  console.log(productManager.getProducts());
  
  // Testing
  // Agregar un producto
  const productData = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "a1",
    stock: 25,
  };
  
  const nuevoProducto = productManager.addProduct(productData);
  console.log("Producto agregado:", nuevoProducto);
  
  