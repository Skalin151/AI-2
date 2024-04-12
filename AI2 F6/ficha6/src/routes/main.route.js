const express = require('express');
const router = express.Router();


//Rota Hello World
router.get('/',(req,res)=>{
    res.send("Hello World");
});

// Rota Info
router.get('/info', (req, res) => {
    res.send('Rota info executada com sucesso…');
    console.log('Início da execução da rota info…'); 
});


// Rota 'soma'
router.post('/soma', (req, res) => {
    const valor1 = parseInt(req.body.valor1);
    const valor2 = parseInt(req.body.valor2);

    if (isNaN(valor1) || isNaN(valor2)) {
      res.status(400).send('Erro: Os parâmetros "valor1" e "valor2" devem ser números.');
      return;
    }
  
    const soma = valor1 + valor2;

    res.json({
      valor1: valor1,
      valor2: valor2,
      resultado: soma,
    });
  });


// Rota bemvindo
router.get('/bemvindo', (req, res) => {
    const nome = req.query.nome;
  
    if (!nome) {
      res.status(400).send('Erro: O parâmetro "nome" é obrigatório.');
      return;
    }
  
    res.send(`Bem vindo, ${nome}!`);
  });
module.exports = router;