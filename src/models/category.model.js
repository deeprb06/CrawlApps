import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    collection: 'Category',
    timestamps: true
})

const categoryModel = mongoose.model('Category', categorySchema);

export default categoryModel;