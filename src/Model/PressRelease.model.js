import mongoose from 'mongoose';

const pressSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pdfFile: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Press = mongoose.model('Press', pressSchema);

export default Press;