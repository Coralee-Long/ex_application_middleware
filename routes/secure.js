const secureRouter = require("express").Router();

const secure = (req, res, next) => {
  if (req.query.token) {
    console.log("Hello World!");
    next();
  } else {
    res.sendStatus(403);
  }
};

secureRouter.use(secure);

secureRouter.get("/", (req, res) => {
  res.send("Secure Route");
});

module.exports = secureRouter;
