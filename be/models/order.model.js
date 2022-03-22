const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const OrderSchema = new Schema({
  batchNumber: String,
  count:Number,
  material: { type: Schema.Types.ObjectId, ref: 'Material' }
});
 
module.exports = model('Order', OrderSchema);