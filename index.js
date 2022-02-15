const express = require("express");
const app = express();
const secureRouter = require("./routes/secure");
const PORT = process.env.PORT || 3002;

app.use("/", secureRouter);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
