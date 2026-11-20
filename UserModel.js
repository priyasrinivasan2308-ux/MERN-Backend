const Mongoose=require("mongoose");

const UserSchema = new Mongoose.SchemaType({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirm:{type:String,required:true},
    role:{type:String,required:}
});

module.exports=Mongoose.model("User",UserSchema);