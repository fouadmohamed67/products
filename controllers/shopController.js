const path = require('path');
const dir=require('../util/path')
const Product=require('../models/products');
const product = require('../models/products');




const getallProducts=(req,res)=>{
   
     Product.getall((products)=>{
     res.render('shop/product-list',{prods:products,pageTitle:'all products',path:"/products"})

    }) 
    
}
const getIndex=(req,res)=>{
    Product.getall((products)=>{
        res.render('shop/index',{prods:products,pageTitle:'shop',path:"/"})
   
       }) 
}
const getCart=(req,res)=>{
    res.render('shop/cart',{pageTitle:'cart',path:'/cart'})
}
const cartPOST=(req,res)=>{
    const productID=req.body.productID
    console.log(productID)
    res.redirect('/')
}
const getCheckOut=(req,res)=>{
    res.render('shop/checkout',{pageTitle:'checkout',path:'/checkout'})
}
const getorders=(req,res)=>{
    res.render('shop/orders',{pageTitle:'orders',path:'/orders'})
}
const getProduct=(req,res)=>{
    const id=req.params.id
    Product.getById(id,product=>{
          res.render('shop/product-detail',{pageTitle:'edit product',product:product,path:'/products'})

    }) 
    
}


module.exports={getallProducts,getIndex,getCart,getCheckOut,getorders,getProduct,cartPOST} 