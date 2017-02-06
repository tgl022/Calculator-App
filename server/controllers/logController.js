import db from './../models';

const logController = {};

// Res = [] of last 10 log enrties
// MongoDB _id is a timestamp
logController.get = (req, res) => {
  db.Log.find({}).sort({_id: -1}).limit(10).then((logs) => {
    res.status(200).json({
      success: true,
      data: logs
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}

logController.post = (req, res) => {
  const {message} = req.body;

  const log = new db.Log({
    message
  });

  log.save().then((newLog) => {
    res.status(200).json({
      success: true,
      data: newLog
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}

export default logController;
