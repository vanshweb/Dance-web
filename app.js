const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS

// app.post('/', (req , res)=>{
//      name = req.body.name
//      age = req.body.age
//      gender = req.body.gender
//      adress = req.body.adress

//     let ouput= `clint name ${name}, his/her ${age}, his/her gender ${gender}, adress = ${adress}`
//     fs.writeFileSync('output,txt', ouput)
// res.status(200).render('index.pug');
   

// })

app.get('/' , (req,res)=>{
    res.status(200).render('home.pug', );
})
app.get('/contact' , (req,res)=>{
    res.status(200).render('contact.pug', );
})
app.get('/about' , (req,res)=>{
    res.status(200).render('about.pug', );
})
app.get('/sponsors' , (req,res)=>{
    res.status(200).render('sponsors.pug', );
})
app.get('/services' , (req,res)=>{
    res.status(200).render('services.pug', );
})
app.get('/Class' , (req,res)=>{
    res.status(200).render('class.pug', );
})






// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});