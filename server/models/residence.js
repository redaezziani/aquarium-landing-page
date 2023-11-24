
import mongoose from 'mongoose';

const residenceSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: String,
  desc: String,
  rate: Number,
});

const Residence = mongoose.model('Residence', residenceSchema);// 

export default Residence;
