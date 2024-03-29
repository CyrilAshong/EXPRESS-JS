const { Router } = require('express')

const router = Router();

const groceryList = [
    {
        item: "Milk",
        quantity: 2,
    },
    {
        item: "Milo",
        quantity: 4,
    },
    {
        item: "Sugar",
        quantity: 6,
    }
]

router.get('/groceries', (req, res) => {
    res.send(groceryList);
})

router.get('/groceries/:item', (req, res) => {
    const {item} = req.params;
    const groceryItem = groceryList.find((g) => g.item === item);
    res.send(groceryItem); 
})

router.post('/groceries', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.send(201)
})

module.exports = router;
