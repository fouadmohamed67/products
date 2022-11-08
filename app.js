const http=require('http')
const express = require('express')
  
const app=express();

app.set('view engine','ejs')
app.set('views','views')


const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop');

const errorController=require('./controllers/404Cntroller')

const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))


app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRouter)
app.use(shopRouter)


const db=require('./util/database');
const { error } = require('console');

app.use(errorController.getNotFound)
app.listen(3000,async()=>{
    
    const [rows] = await db.execute('select * from products')
    console.log(rows)
})