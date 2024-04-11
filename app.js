const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet');

const rootDir = require("./util/path");

const app = express();

const loginRoutes = require("./routes/auth");

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));

app.use(loginRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
