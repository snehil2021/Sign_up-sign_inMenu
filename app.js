let express=require('express')
const { Mongoose } = require('mongoose')
let app=express()
let port=80
// setting up pug 
app.use(express.urlencoded())
app.set('views', './views')

app.set('view engine', 'pug')
// end of pug
// mongoose database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/databaseName');
}
const kittySchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
    
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

//   const silence = new Kitten({ name: 'Silence' });
//   silence.save();

// Mongoose end

app.get('/',(req,res)=>{
    res.render('index.pug')
    
    
})



app.post('/',(req,res)=>{
    let Ucontent=req.body
    global.silence = new Kitten(Ucontent);
    silence.save();
    
    
    
   
    res.render('sign.pug')
    
})

app.post('/signin',(req,res)=>{
    let Ucontent2=req.body
    if (Ucontent2.name==silence.name && Ucontent2.password==silence.password){
        res.render('sucess.pug')

    }
    else{
        res.render('fail.pug')
    }
})

app.listen(port,()=>{
    console.log('the server has started')
})