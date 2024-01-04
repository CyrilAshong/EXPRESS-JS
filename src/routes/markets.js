const { Router } = require('express');

const router = Router();

const marketList = [
    {
        shop: "wallmart",
        number: 2,
    },
    {
        shop: "Mcberry",
        number: 4,
    },
    {
        shop: "bossBaker",
        number: 6,
    },
]

router.get("/", (req, res) => {
    res.send(marketList);
})

router.get("/:shop", (req, res) => {
    const {shop} = req.params;
    const market = marketList.find((m) => m.shop === shop);
    res.send(market);
})

router.post("/", (req, res) => {
    console.log(req.body);
    marketList.push(req.body);
    res.send(201)
})

module.exports = router;