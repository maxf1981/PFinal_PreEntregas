class ProductManager {
    constructor () {
        this.products = [];
    }

    getProducts () {
        return this.products;
    }

    addProduct (product) {
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }

        this.products.push(product);
        
    }

    

    
}

class Product {
    constructor(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}