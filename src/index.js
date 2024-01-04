const express = require('express');
const groceryRoutes = require('./routes/groceries');
const marketRoutes = require('./routes/markets');

const app = express();
const PORT = 3003;

app.use(express.json());

app.use(groceryRoutes);
app.use("/markets" ,marketRoutes);

app.listen(PORT, () => console.log("Server is running on port 3003!"));

