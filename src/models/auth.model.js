import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
},
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
                delete ret.__v;
            }
        }
    },
    {
        collection: 'User',
        timestamps: true
    })

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    })
})

userSchema.methods.comparePassword = async function (passw) {
    return await bcrypt.compare(passw, this.password);
}

const userModel = mongoose.model('User', userSchema)
export default userModel;