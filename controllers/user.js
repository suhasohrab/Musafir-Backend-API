import User from "../models/User.js"
//create
export const createUser = async (req,res,next)=>{
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
       next(err);
    }
}
//update
export const updatedUser = async (req,res,next)=>{
try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
    res.status(200).json(updatedUser);
} catch (err) {
    res.status(500).json(err)
}
}

//delete
export const DeleteUser = async (req,res,next)=>{
try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
} catch (err) {
    res.status(500).json(err)
}
}

//GET
export const GetUser = async (req,res,next)=>{
try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user);
} catch (err) {
    res.status(500).json(err)
}
}

//GET ALL
export const GetUsers = async (req,res,next)=>{
try {
    const users = await User.find();
    res.status(200).json(users);
} catch (err) {
    next(err)
}
}
