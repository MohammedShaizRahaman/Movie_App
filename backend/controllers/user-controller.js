import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Booking from "../models/Booking.js";
export const getAllusers = async(req, res, next) => {
    let users;
    try{ 
        users = await User.find()
    }
    catch (err){
        return console.log(err);
    }
    if(!users){
        return res.status(500).json({message: "Unexpected Error Occured"})
    }
    return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    if(
        !name ||
        name.trim()  === "" ||
        !email ||
        email.trim() === "" || 
        !password ||
        password.trim() === ""
    ){
    return res.status(422).json({ message: "Invalid Inputs" });
}
const hashedpassword = bcrypt.hashSync(password);
let user;
try { 

    user = new User({ name, email, password: hashedpassword});
    user = await user.save();

} catch(err){
    return console.log(err);
}
if(!user){
    return res.status(500).json({message: "Unexpected Error Occured"});
}
return res.status(201).json({ id: user._id });
};

export const updateUser = async (req, res, next) =>{
    const id = req.params.id;
    const { name, email, password } = req.body;
    if(
        !name ||
        name.trim()  === "" ||
        !email ||
        email.trim() === "" || 
        !password ||
        password.trim() === ""
    ){
    return res.status(422).json({ message: "Invalid Inputs" });
}
const hashedpassword = bcrypt.hashSync(password);
let user;
try { 
    user = await User.findByIdAndUpdate(id, {
        name, 
        email, 
        password:hashedpassword,
    });
} catch (err){
    return console.log(err);
}
if(!user){
    return res.status(500).json({message: "Something went wrong"});
}
res.status(200).json({message: "Updated successfully"})

};

export const deleteUser = async(req, res, next) =>{
    const id = req.params.id;
    let user;
    try {
        user = await User.findOneAndDelete(id);
    } catch (err) {
        return console.log(err)
    }
    if(!user){
        return res.status(500).json({message: "Something went wrong"});
    }
    return res.status(200).json({message: "Deleted Successfully"})
};

export const login = async(req, res, next) =>{
    const { email, password } = req.body;
    if(
        !email ||
        email.trim() === "" ||
        !password ||
        password.trim() === ""
    ){
    return res.status(422).json({ message: "Invalid Inputs" });
}
let existingUser;
try {
    existingUser = await User.findOne({email});
} catch (err) {
    return console.log(err);
}

if(!existingUser){
    return res.status(404).json({message: "Unable to find user from this Id"});
}
const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
if(!isPasswordCorrect){
    return res.status(400).json({message: "Incorrect Password"});
}
return res.status(200).json({message : "Login Successfull", userId: existingUser._id})
};

export const getBookingsOfUser = async(req, res, next) =>{
    const id = req.params.id;
    let bookings;
    try {
        bookings = await Booking.find({user: id}).populate('user').populate('movie');
    } catch (error) {
        return console.log(error);
    }
    if(!bookings){
        return res.status(500).json({message : "Unable to get booking"});
    }
    return res.status(200).json({bookings ,message: "Got the bookings" });
}

export const getUserById = async(req, res, next) => {
    const id = req.params.id;
    let user;
    try{ 
        user = await User.findById(id);
    }
    catch (err){
        return console.log(err);
    }
    if(!user){
        return res.status(500).json({message: "Unexpected Error Occured"})
    }
    return res.status(200).json({ user });
};

// export const getUserById = async (req, res, next) => {
//     const id = req.params.id;
//     try {
//       const user = await User.findById(id);
  
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       console.log("Retrieved User:", user); // Add this line to log the user
  
//       return res.status(200).json({ user: { name: user.name, /* other properties */ } });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Unexpected error occurred" });
//     }
//   };
  

//   export const getUserById = async(req, res, next) => {
//     const id = req.params.id;
//     let user;
//     try {
//         movie = await User.findById(id)
//     } catch (error) {
//         return console.log(error)
//     }
//     if (!id) {
//         return res.status(400).json({ error: 'Movie ID is missing' });
//       }
//     if(!user){
//         return res.status(404).json({message: "Invalid Movie ID"})
//     }
//     return res.status(200).json({user});
// };