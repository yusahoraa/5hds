const express = require('express')
const app = express()
const users = require('./users.json')
const produits = require('./produits.json')
const date = require('date-and-time')
const now  =  new Date();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', (req,res) => {
    res.status(200).json(users)
})

app.get('/users/:token', (req,res) => {
    const token = parseInt(req.params.token)
    const user = users.find(user => user.token === token)
    res.status(200).json(user)
})

app.post('/users', (req,res) => {
    const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
    req.body.created_at = value
    users.push(req.body)
    res.status(200).json(users)
    console.log(users);
})

app.put('/users/:token', (req,res) => {
    const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
    const token = parseInt(req.params.token)
    let user = users.find(user => user.token === token)
    user.nom = req.body.nom,
    user.prenom = req.body.prenom,
    user.role = req.body.role,
    user.updated_at = value,
    res.status(200).json(user)
})

app.delete('/users/:token', (req,res) => {
    const token = parseInt(req.params.token)
    let user = users.find(user => user.token === token)
    users.splice(users.indexOf(user),1)
    res.status(200).json(users)
})

app.get('/produits', (req,res) => {
    res.status(200).json(produits)
})

app.get('/produits/:token', (req,res) => {
    const token = parseInt(req.params.token)
    const produit = produits.find(produit => produit.token === token)
    res.status(200).json(produit)
})

app.post('/produits', (req,res) => {
    const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
    req.body.created_at = value
    produits.push(req.body)
    res.status(200).json(produits)
    console.log(produits);
})

app.put('/produits/:token', (req,res) => {
    const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
    const token = parseInt(req.params.token)
    let produit = produits.find(produit => produit.token === token)
    produit.nom = req.body.nom,
    produit.desription = req.body.desription,
    produit.prix = req.body.prix,
    produit.stock = req.body.stock,
    produit.reference = req.body.reference,
    produit.updated_at = value,
    res.status(200).json(produit)
})

app.delete('/produits/:token', (req,res) => {
    const token = parseInt(req.params.token)
    let produit = produits.find(produit => produit.token === token)
    produits.splice(produits.indexOf(produit),1)
    res.status(200).json(produits)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
  })