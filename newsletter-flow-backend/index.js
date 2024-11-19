const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db");
const flowRoutes = require("./routes/flowRoutes");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv");

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/flow", flowRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
