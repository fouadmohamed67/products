const Product=require('../models/products')


const getaddProducts=(req,res)=>{

    res.render('admin/edit-product',{pageTitle:'add product',path:'/admin/add-product',edit:false})
     
}
const geteditProducts=(req,res)=>{

    const  editMode=(req.query.edit ==='true')  
    if(!editMode)
    {
      return  res.redirect('/')
    }
    const productID=req.params.id;
    Product.getById(productID,product=>{
        if(!product)
        {
            return  res.redirect('/')
        } 
        res.render('admin/edit-product',{pageTitle:'edit product',path:'/admin/edit-product',edit:editMode,product:product})

    })
     
}
const getProductsPost=(req,res)=>{

    const title=req.body.title
    const price=req.body.price
    const description=req.body.description
    const imageUrl=req.body.imageUrl
    const product=new Product(null,title,imageUrl,description,price) 
    product.save() 
    res.redirect('/')

}
const getproducts=(req,res)=>{
    Product.getall((products)=>{
        res.render('admin/products',{prods:products,pageTitle:'admin products',path:"/admin/products"})
    })   
}
const updateProduct=(req,res)=>{
    const id=req.body.id
    const title=req.body.title
    const price=req.body.price
    const description=req.body.description
    const imageUrl=req.body.imageUrl
    const product= new Product(id,title,imageUrl,description,price)
    product.save()
    return res.redirect('/admin/products')
}
const deleteproduct=(req,res)=>{
    const id=req.body.id
    Product.deleteProduct(id)
    return res.redirect('/admin/products')

}

module.exports={getaddProducts,getProductsPost,getproducts,geteditProducts,updateProduct,deleteproduct} 