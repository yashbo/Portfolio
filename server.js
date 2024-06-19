const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));
app.use(express.json());

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
