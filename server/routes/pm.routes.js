const PmController = require("../controllers/pm.controllers")

module.exports = function(app){
    app.post("/api/products", PmController.createProduct)
    app.get("/api/products", PmController.getAllProducts)
    app.get("/api/products/:id", PmController.getProduct)
    app.put("/api/products/:id", PmController.updateProduct)
    app.delete("/api/products/:id", PmController.deleteProduct)
}

