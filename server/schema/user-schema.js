import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
    id: Number,
    product: String,
    price: Number,
    quantity:Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'cruds');
const User=mongoose.model('cruds',userSchema);

export default User;
