const { ifError } = require('assert')
const { json } = require('express')
const fs=require('fs')
const path=require('path')
const dir=require('../util/path')

class product{
    
    constructor(id,title,imageUrl,description,price)
    {
        this.id=id
        this.title=title
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
    } 
     save() {
        const p=path.join(dir,'data','products.json');   
        fs.readFile(p,(err,fileData)=>{
            let products=[]
            if(!err)
            {
                products=JSON.parse(fileData)
            }
            if(this.id)
            {
                const indexOldProduct=products.findIndex(
                    p=> p.id==this.id
                ) 
                products[indexOldProduct]=this
                fs.writeFile(p,JSON.stringify(products),(err)=>
                console.log(err))  
            }
            else
            {
                this.id=Math.random().toString();
                products.push(this)
                fs.writeFile(p,JSON.stringify(products),(err)=>
                console.log(err))
            }  
        })
        
    } 
    static getall(cb) 
    {
        const p=path.join(dir,'data','products.json');  
        fs.readFile(p,(err,fileData)=>{
            if(err)
            {
                
                cb ([]);
            }
            
            cb (JSON.parse(fileData))
        })
    }
    static getById(id,cb)
    {
        this.getall(products=>{
            const product=products.find(p=>p.id===id)
            cb(product)
        })
    }
    static deleteProduct(id){
        const p=path.join(dir,'data','products.json');   
        fs.readFile(p,(err,fileData)=>{
            let products=[]
            if(!err)
            {
                products=JSON.parse(fileData)
            }
            const indexOldProduct=products.findIndex(
                prod=> prod.id == id
            )  
            products.splice(indexOldProduct,1);  
            fs.writeFile(p,JSON.stringify(products),err=>
            console.log(err))
        }
    )}
}
module.exports=product