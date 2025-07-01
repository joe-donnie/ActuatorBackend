import actuatorDataModel from "../models/actuatorDataModel.js";


export const createActuatorData = async (req, res) => {
  try {
    const { name, type, size, price } = req.body;
    const actuatorData = await actuatorDataModel.create({ name, type, size, price });

    res.status(201).json({
      success: true,
      message: "Actuator data created successfully",
      data: actuatorData
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create actuator data",
      error: error.message,
    });
  }
}

export const getActuatorData = async (req, res) => {
    try{
        const actuatorData = await actuatorDataModel.find();
        res.status(200).json({
            success: true,
            message: "Actuator data retrieved successfully",
            data: actuatorData
        });

    }catch(error){
      res.status(500).json({error: error.message});
    }
}

export const filterActuatorData = async (req, res) => {
    try{
      const {sort, type, size} = req.query;

      const filters = {};
      if(type) filters.type = type;
      if(size) filters.size = size;   

      let sortOptions = {};
      if(sort === 'price_asc') sortOptions.price = 1;
      if(sort === 'price_desc') sortOptions.price = -1;
        const actuatorData = await actuatorDataModel.find(filters).sort(sortOptions);
        res.status(200).json({
          success: true,
          message: "Filtered actuator data retrieved successfully",
          data: actuatorData
        });
    }catch(error){
      res.status(500).json({error: error.message});
    }
}

