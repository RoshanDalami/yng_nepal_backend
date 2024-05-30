import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description:{
    type:String
  }
}, {
  timestamps: true,
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;