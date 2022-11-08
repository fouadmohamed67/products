const express=require('express')
const Router=express.Router();
const path=require('path')
const dir=require('../util/path')

const shopController=require('../controllers/shopController')
Router.get('/',shopController.getIndex)
Router.get('/products',shopController.getallProducts)
Router.get('/cart',shopController.getCart)
Router.post('/cart',shopController.cartPOST)
Router.get('/checkout',shopController.getCheckOut)
Router.get('/orders',shopController.getorders)
Router.get('/products/:id',shopController.getProduct)
module.exports=Router