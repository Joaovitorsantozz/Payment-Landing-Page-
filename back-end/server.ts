import express from 'express';


const app=express();
app.use(express.json());
const PORT = 3000;

app.get("/rota",(req,res)=>{
  res.send("Voce esta acessando a rota /rota");
})

app.listen(PORT,()=>{
    console.log('Server rodando na porta 3000');
})