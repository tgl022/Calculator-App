import mongoose from 'mongoose';

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const logSchema = new Schema({
  message: {
    type: String,
    required: true
  }
});

const Log = mongoose.model('Log', logSchema);
export default Log;
