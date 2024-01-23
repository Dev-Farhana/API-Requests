const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

require("./connection/conn");
const PORT =  process.env.PORT || 2000; 


app.use(express.json());
app.use(cors());

const bookRoutes = require("./routes/bookRoute");
app.use( "/api",bookRoutes);

app.listen(PORT, () => console.log(`app is listening on ${PORT}`))