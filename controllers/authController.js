import jwt from 'jsonwebtoken';
import userModels from '../models/userModels.js';


const generateToken = (user) => {
    return jwt.sign({id: user._id, email: user.email},
          process.env.JWT_SECRET,{
            expiresIn: '1hr'
          }
          )
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await userModels.findOne({email});
        if(!user || !await user.comparePassword(password)){
            res.status(401).json({message: "Invalid credentials"});
        }

        const token = generateToken(user);
        res.status(200).json({token, user:{id: user._id, email: user.email}});
    }catch(error){
        res.status(500).json({message: err.message})
    }
}

export const logout = async (req, res) => {
  res.json({ message: "Logout success" });
};

export const getMe = async (req, res) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModels.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  }catch (err) {
    res.status(500).json({ message: err.message });
  }
};

