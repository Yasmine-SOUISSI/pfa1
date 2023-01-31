const express = require ('express');
const app = express();
const connectDB = require ('./config/ConnectDB');
require ("dotenv").config();
connectDB();
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRoutes"));
app.use('/blog',require('./routes/blogRoutes'));
app.use('/event',require('./routes/eventRoutes'));
app.use("/sessions", require("./routes/sessionRoutes"));

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});