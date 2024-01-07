const express = require('express');
const groceryRoutes = require('./routes/groceries');
const marketRoutes = require('./routes/markets');
const shoeRoutes = require('./routes/shoes');
const clothesRouter = require('./routes/clothes');
const electricalsRouter = require('./routes/electricals');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3003;

app.use(express.json());

app.use(cookieParser());

app.use(groceryRoutes);
app.use("/markets" ,marketRoutes);
app.use("/shoe", shoeRoutes);
app.use("/clothes", clothesRouter);
app.use("/electricals", electricalsRouter);

app.listen(PORT, () => console.log("Server is running on port 3003!"));

