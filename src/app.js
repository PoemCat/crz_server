const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use(router);

app.listen(8759);
