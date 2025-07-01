import valveModel from "../models/valveModel.js";


export const createValveTypes = async (req, res) => {
  try{
    const { name } = req.body;
    const valves = await valveModel.create({ name });

    res.status(200).json({
      success: true,
      message: "valve type created successfully",
      data: valves
    }); 

  }catch(error){
      res.status(400).json({
      success: false,
      message: "Failed to create valve type",
      error: error.message,
    });
  }
}

export const getValveTypes = async (req, res) => {
  try {
    const valves = await valveModel.find();
    res.status(200).json({
      success: true,
      message: "Valve types retrieved successfully",
      data: valves
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve valve types",
      error: error.message,
    });
  }
};
