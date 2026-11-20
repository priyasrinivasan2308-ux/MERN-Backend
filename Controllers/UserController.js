constuser =require("..Models/UserModel");

const SignupUser = async(req,res) =>{
    try{
        const{name,email,password,confirm}=req.body;
        const newUser = new UserActivation({
            name,
            email,
            password,
            confirm,
        });

        const savedUser = await newUser.save();
        res.status(201).json({
        message: "user created successfully",
        user: saveUser
    });

    }catch(error){
    res.status(402).json({
        message:"internal server error",
        error:error.message
   } )    
   
    }
}
module.exports={
    SignupUser,


};
    
