const mongoose = require("mongoose");

mongoose.connect(process.env.mongodb)
.then(console.log(`Mongo  DataBase Connected`))
.catch((e) => console.log("error oops!", e));
