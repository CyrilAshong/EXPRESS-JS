const { Router } = require('express');

const router = Router();

clothesList = [
    {
        item: "Shirt",
        quantity: 10,
    },
    {
        item: "shorts",
        quantity: 20,
    },
    {
        item: "Trousers",
        quantity: 30,
    },
]

router.get("/", (req, res) => {
    res.send(clothesList);
})

router.get("/:item", (req,res) => {
    const {item} = req.params;
    const clothesItem = clothesList.find((c) => c.item === item);
    res.send(clothesItem);
})

router.post("/", (req, res) => {
    console.log(req.body);
    clothesList.push(req.body);
    res.send(201);
})

module.exports = router;