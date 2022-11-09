import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    product_image: {
        type: String,
        required: true
    }
})

const productModel = mongoose.model('Product', ProductSchema);

export default productModel;