import userModels from '../models/userModels.js';


export const getAllUsers = async (req, res) => {
  try {
    const user = await userModels.find();
    res.status(200).json({  
      success: true,
      count: user.length,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get all users",
      error: error.message
    });
  }
};


export const createUser = async (req, res) => {
  try{
    const { name, email, password } = req.body;
    const user = await userModels.create({
      name,
      email,
      password
    });

    res.status(201).json({
      success: true,
      meggage: "User created successfully",
      data: user
    }); 

  }catch(error) {
    res.status(400).json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedUser = await userModels.findByIdAndUpdate(id, updatedData, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update user",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try{
    const user = await userModels.delete();
    res.status(204).json({
      success: true,
      message: "User deleted successfully"
    })
  }catch(error){
    res.status(400).json({
      success: false,
      message: "Failed to delete user",
      error: error.message,
    });
  }
}

