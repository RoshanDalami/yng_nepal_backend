import mongoose from 'mongoose';

const ylcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Ylc = mongoose.model('Ylc', ylcSchema);

export default Ylc;