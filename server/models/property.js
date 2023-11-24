// models/property.js
import mongoose from 'mongoose';

const propertySchema = mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  isActive: Boolean,
});

const Property = mongoose.model('Properties', propertySchema);

export default Property;
