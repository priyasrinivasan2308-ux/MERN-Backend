constuser =require("..Models/UserModel");

const SignupUser = async(req,res) =>{
    try{
        const{name,email,password,confirm}=req.body;
        const newUser = new UserActivation({
            name,
            email,
            password,
            confirm
        });

        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
        message: "User created successfully",
        user: saveUser
    });

    }catch(error)
    res.status(402).json({
        message:"Error creating user";
        error:error:error.message
    )    
    
    
}