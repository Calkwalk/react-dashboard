import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        category: String,
        rating: Number,
        supply: Number,
    },
    {timestamps: true}
);

const Product = mongoose.model("Proudct", productSchema);

export default Product;
