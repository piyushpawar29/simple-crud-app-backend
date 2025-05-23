const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));  

mongoose.connect('mongodb+srv://admin:i7CkFcONLJVGhhu6@cluster0.4ch6on1.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to database!')
    app.listen(3000, () =>{
        console.log('Server running on port 3000')
    });
})  
  .catch(() => console.log('Connection failed!'));


//routes
app.use("/api/products",productRoutes);

app.get('/', (req,res ) => {
    res.send('Hello from NODE API SERVER');
});


// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const{id}=req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// });

// //create a product
// app.post('/api/products',async (req, res) => {
//     // console.log(req.body);
//     // res.send(req.body);
//     try {
//         const product = await Product.create(req.body);
//         res.status(201).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// });

// //update a product
// app.put('/api/products/:id',async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             return res.status(404).json({message: `cannot find any product with id ${id}`})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// //delete a product
// app.delete('/api/products/:id',async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message: `cannot find any product with id ${id}`})
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })
//admin:i7CkFcONLJVGhhu6