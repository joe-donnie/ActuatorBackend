import valvePressureModel from "../models/valvePressureModel.js";

export const createValvePressure = async (req, res) => {
    try{
      const { value } = req.body;
      const valvePressure = await valvePressureModel.create({ value });

      res.status(201).json({
      success: true,
      message: "Valve Data created successfully",
      data: valvePressure
    });
    }catch(error){
      res.status(400).json({
      success: false,
      message: "Failed to create Valve Data",
      error: error.message,
    })
}
}

export const getValvePressure = async (req, res) => {
  try {
    const value = await valvePressureModel.find();
    res.status(200).json({
      success: true,
      message: "Valve types retrieved successfully",
      data: value
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve valve types",
      error: error.message,
    });
  }
};


