const { Router } = require('express');

const router = Router();

electricalsList = [
    {
        item: "Kettle",
        quantity: 40,
    },
    {
        item: "Microwave",
        quantity: 30,
    },
    {
        item: "Iron",
        quantity: 50,
    }
]

router.get('/', (req, res) => {
    res.send(electricalsList);
})
router.get('/:item', (req, res) => {
    const {item} = req.params;
    const electricalsItem = electricalsList.find((e) => e.item === item)
    res.send(electricalsItem);
})
router.post('/', (req, res) => {
    console.log(req.body);
    electricalsList.push(req.body);
    res.send(201);
})

module.exports = router;

