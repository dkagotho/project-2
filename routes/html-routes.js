
var path = require("path");


module.exports = function(app) {

  // create account route loads createacct.html
  router.get("/", function(req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  router.get("/createacct", function(req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "../public/createacct.html"));
  });

  app.get("/createacct", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createacct.html"));
  });
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  app.get("/store", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });
  app.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/checkout.html"));
  });

};
