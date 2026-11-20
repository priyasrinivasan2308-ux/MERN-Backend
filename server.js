const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB running successfully");
})
.catch((err) => {
    console.log("MongoDB not connected", err);
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port $(process.env.PORT}`);
})
const userRouter = require("./Router/UserRouter");
app.use("api/user",userRouter);
