const express = require('express');

const app = express();
const PORT = 3003;

app.use(express.json());

app.listen(PORT, () => console.log("Server is running on port 3003!"));

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

app.get('/groceries', (req, res) => {
    res.send(groceryList);
})

app.post('/groceries', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.send(201)
})