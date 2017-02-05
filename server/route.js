'use strict';

import express from 'express';
import logController from './controllers/logController';

module.exports = function(app) {


  //Log Routes
  app.get('/log', logController.get);
  app.post('/log', logController.post)

  //CATCH ALL
  app.get("*", function(req, res) {
    // Angular will handle the page changes on front-end
    res.sendFile('index.html', {'root': './'});
  });


  // Use your model on the others routes
};
