import actuatorTypeModel from "../models/actuatorTypeModel.js";


export const createActuatorType = async (req, res) => {
  try {
    const { name } = req.body;
    const actuatorType = await actuatorTypeModel.create({ name });

    res.status(201).json({
      success: true,
      message: "Actuator Type created successfully",
      data: actuatorType
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create actuator data",
      error: error.message,
    });
  }
}

export const getActuatorType = async (req, res) => {
  try {
    const actuatorType = await actuatorTypeModel.find();
    res.status(200).json({
      success: true,
      message: "actuator type retrieved successfully",
      data: actuatorType
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve actuator types",
      error: error.message,
    });
  }
};

