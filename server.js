const express = require("express");
const pokemon = require("./models/pokemon");

const app = express();

const PORT = 8000;

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("Welcome to pokemon App!");
});

app.get('/pokemon/:id', (req, res) => {
 const { id } = req.params
 res.render('Show.jsx', {
pokemon: pokemon[req.params.id]
        })
    })

app.get("/pokemon", (req, res) => {
    res.render('Index',{pokemon: pokemon})
  });


  
  app.get('/pokemon/new', (req, res) => {
      res.render('New.jsx')
  })
  
  
  app.post('/pokemon/', (req, res) => {
      Pokemon.create(req.body, (error, createdPokemon) => {
          console.log(createdPokemon)
          res.redirect('/pokemon')
      })
  })





app.listen(PORT, () => {
  console.log(`server is runing on port: ${PORT}`);
});
