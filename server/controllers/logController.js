import db from './../models';

const logController = {};

logController.get = (req, res) => {
  res.json({
    message: 'Welcome to the API!!!'
  });
};

logController.post = (req, res) => {
  const {message} = req.body;

  //Validation

  const log = new db.Log({
    message
  });

  log.save().then((newLog) => {
    res.status(200).json({
      success: true,
      date: newLog
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}

export default logController;
