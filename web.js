var express = require("express");
var app = express();
app.use(express.static(__dirname + "/src/app/home/home.component.html")); //aqui você define onde está o index.html da sua aplicação.
app.listen(process.env.PORT || 3000);