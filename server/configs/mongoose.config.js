const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/product_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Database connection established"))
    .catch(err=>console.log("There was a error", err))