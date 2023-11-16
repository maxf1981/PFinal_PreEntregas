const fs = require("fs");

class ProductManager {

    constructor(path) {
        this.path = path;
    }

    async addProduct(product) {
        const products = await this.getProducts();
        const newProduct = {
            id: products.length + 1,
            ...product,
        };
        products.push(newProduct);
        await this.writeToFile(products);
        return newProduct;
    }

    async getProducts() {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find((product) => product.id === id);
    }

    async updateProduct(id, updatedFields) {
        const products = await this.getProducts();
        const indice = products.findIndex((product) => product.id === id);

        if (indice !== -1) {
            const updatedProduct = { ...products(indice), ...updatedFields };
            products(indice) = updatedProduct;
            await this.writeToFile(products);
            return updatedProduct;
        } else {
            return("Producto con id ${id} no encontrado.");
        }
    }

    async deleteProduct(id) {
        const products = await this.getProducts();
        const updatedProducts = products.filter((product) => product.id !== id);
        await this.writeToFile(updatedProducts);
        return true;
    }

    async writeToFile(products) {
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), "utf-8");
    }
}


const productManager = new ProductManager("productos.json");

// Agregar un producto
productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto de prueba",
    price: 200,
    thumbnail: "imagen",
    code: "A123",
    stock: 25,
});

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

// Oobtener un producto por ID
const productById = productManager.getProductById(1);
console.log("Producto con ID 1:", productById);

// Actualizar un producto
productManager.updateProduct(1, { price: 1981, stock: 12 });

// Eliminar un producto 
productManager.deleteProduct(1);
