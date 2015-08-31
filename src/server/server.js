require('./db/connect'); // connects to the mongo database
import express from "express";
import bodyParser from "body-parser";
//import itemRoutes from "./routes/item";
import React from "react";
import Router from "react-router";
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

//app.use(bodyParser.json());
//app.use(express.static('public'));

import routes from "../shared/routes";

app.get('/*', function(req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

//app.use('/', itemRoutes);
//app.use('*', function(req, res) {
//  res.status(404).json({message: 'Not Found' });
//});

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

exports.app = app;
