require("./config/env")
const express = require("express");

const routes = require("./routes");
const cors = require("./middlewares/cors");

const app = express();
const port = 3003;

app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(routes);

app.listen(port, () => console.log(`OK.. on port:${port}`));
