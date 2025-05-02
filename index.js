
const morgan = require('morgan');
const express = require('express');
const server = express();
const productRouter = require("./routes/Product");
const userRouter = require("./routes/User")

// bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products' , productRouter.router);
server.use('/users' , userRouter.router);

// server.use((req,res,next) => {
//     console.log(req.get('User-Agent'),req.method,req.ip,new Date(),req.hostname);
//     next()
// })


// const auth = (req,res,next) => {
//     if(req.body.password=="123"){
//         next()
//     }
//     else{
//         res.sendStatus(401);
//     }
// }




// API - Endpoint - Route

/*
 Create POST /products  C R U D
server.post('/products',  productController.createProduct);

 READ GET /products
server.get('/products' , productController.getAllProducs);

 READ GET /products/:id
server.get('/products/:id' , productController.getProduct);

 UPDATE /products/:id
server.put('/products/:id' ,  productController.replaceProduct);

 UPDATE PATCH /products/:id
server.patch('/products/:id' ,  productController.updateProduct);

 DELETE /products/:id
server.delete('/products/:id' ,  productController.deleteProduct);

*/


server.listen(8080, ()=>{
    console.log('server started');
})