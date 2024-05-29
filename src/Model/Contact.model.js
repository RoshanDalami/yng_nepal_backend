import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
  },
  message: {
    type: String,
  },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;