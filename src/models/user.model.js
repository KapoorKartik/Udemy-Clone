const mongoose = require("mongoose")


const userSignupSchema = new mongoose.Schema({
    full_name: {type:String,requied:true},
    email:{type:String,requied:true},
    password:{type:String,required:true},


})

const Usersign = mongoose.model("UserSigning",  userSignupSchema)


module.exports = Usersign


// userSignupSchema.pre(‘save’, async function(next) {
// if(!this.isModified(‘password’)) {
// next();
// }
// const salt = await bcrypt.genSalt(10);
// this.password = await bcrypt.hash(this.password, salt);
// )};