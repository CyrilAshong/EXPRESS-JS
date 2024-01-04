const { Router } = require('express');

const router = Router();

shoeList = [
    {
        item: "Jordan 4",
        quantity: 5,
    },
    {
        item: "Air Jordans",
        quantity: 10,
    }
]
 router.get('/', (req, res) => {
    res.send(shoeList);
 })
 router.get('/:item', (req, res) => {
    const {item} = req.params;
    const shoeItem = shoeList.find((s) => s.item === item);
    res.send(shoeItem);
 })
 router.post('/', (req, res) => {
    console.log(req.body);
    shoeList.push(req.body)
    res.send(201);
 })

 module.exports = router;