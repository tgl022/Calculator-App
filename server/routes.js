import express from 'express';

//Controlleres
import logController from './controllers/logController';

const routes = express.Router();

//Log Routes
routes.get('/log', logController.get);
routes.post('/log', logController.post)

//Front-end Rote
routes.get("*", (req, res) => {
  // Angular will handle the page changes on front-end
    res.sendFile('index.html', {'root': './'});
  // res.sendFile(path.join(__dirname, './../index.html'));
});

export default routes;
