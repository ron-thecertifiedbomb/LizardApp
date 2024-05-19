
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  quantity: Number,
  specifications: {
    processor: String,
    graphics: String,
    storage: String,
    resolution: String,
    maxFrameRate: String,
  },
  includedItems: [String],
  availableColors: [String],
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
