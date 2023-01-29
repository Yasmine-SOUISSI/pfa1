const express = require ('express');
const app = express();
const connectDB = require ('./config/ConnectDB');
require ("dotenv").config();
connectDB();
app.use(express.json());



const PORT = process.env.Port || 3000;
app.use("/auth", require("./routes/authRouter"));

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});