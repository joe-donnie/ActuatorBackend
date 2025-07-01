import coatingModel from "../models/coatingModel.js";
import designCodeModel from "../models/designCodeModel.js";
import formModel from "../models/formModel.js";
import materialModel from "../models/materialModel.js";
import safetyFactorModel from "../models/safetyFactorModel.js";
import stemDiameterModel from "../models/stemDiameterModel.js";
import tempTrimModel from "../models/tempTrimModel.js";


export const createStdOptions = async (req, res) => {
  try {
    const { name } = req.body; // ✅ Get `name` from body

    const newEntry = await formModel.create({ name }); // ✅ Use `name`

    res.status(200).json({
      success: true,
      message: "Valve type created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create valve type",
      error: error.message,
    });
  }
};

export const getStdOptions = async (req, res) => {
  try {
    const options = await formModel.find(); // get all entries

    res.status(200).json({
      success: true,
      message: "Fetched valve types successfully",
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch valve types",
      error: error.message,
    });
  }
};

export const createDesignCode = async (req, res) => {
  try {
    const { designCode } = req.body;

    const newEntry = await designCodeModel.create({ designCode });

    res.status(200).json({
      success: true,
      message: "Design code created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create design code",
      error: error.message,
    });
  }
};

export const getDesignCode = async (req, res) => {
  try {
    const codes = await designCodeModel.find();

    res.status(200).json({
      success: true,
      message: "Fetched design codes successfully",
      data: codes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch design codes",
      error: error.message,
    });
  }
};

export const createMaterial = async (req, res) => {
  try {
    const { material } = req.body;

    const newEntry = await materialModel.create({ material });

    res.status(200).json({
      success: true,
      message: "Material created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create material",
      error: error.message,
    });
  }
};

export const getMaterial = async (req, res) => {
  try {
    const materials = await materialModel.find();

    res.status(200).json({
      success: true,
      message: "Fetched materials successfully",
      data: materials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch materials",
      error: error.message,
    });
  }
};

export const createTempTrim = async (req, res) => {
  try {
    const { tempTrim } = req.body;

    const newEntry = await tempTrimModel.create({ tempTrim });

    res.status(200).json({
      success: true,
      message: "Temp Trim created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create Temp Trim",
      error: error.message,
    });
  }
};

export const getTempTrim = async (req, res) => {
  try {
    const trims = await tempTrimModel.find();

    res.status(200).json({
      success: true,
      message: "Fetched Temp Trim options successfully",
      data: trims,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Temp Trim options",
      error: error.message,
    });
  }
};

export const createCoating = async (req, res) => {
  try {
    const { coating } = req.body;

    const newEntry = await coatingModel.create({ coating });

    res.status(200).json({
      success: true,
      message: "Coating created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create coating",
      error: error.message,
    });
  }
};

export const getCoating = async (req, res) => {
  try {
    const coatings = await coatingModel.find();

    res.status(200).json({
      success: true,
      message: "Fetched coatings successfully",
      data: coatings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch coatings",
      error: error.message,
    });
  }
};

export const createSafetyFactor = async (req, res) => {
  try {
    const { safetyFactor } = req.body;

    const newEntry = await safetyFactorModel.create({ safetyFactor });

    res.status(200).json({
      success: true,
      message: "Coating created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create coating",
      error: error.message,
    });
  }
};

export const getSafetyFactor = async (req, res) => {
  try {
    const data = await safetyFactorModel.findOne().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Fetched safety factor successfully",
      data, // ✅ Send actual fetched safety factor document
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch safety factor",
      error: error.message,
    });
  }
};

export const createStemDiameter = async (req, res) => {
  try {
    const { stemDiameter } = req.body;

    const newEntry = await stemDiameterModel.create({ stemDiameter });

    res.status(200).json({
      success: true,
      message: "stem diameter created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create stem Diameter",
      error: error.message,
    });
  }
};

export const getStemDiameter = async (req, res) => {
  try {
    const data = await stemDiameterModel.findOne().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Fetched Stem Diameter successfully",
      data: data, // return the whole document or just stemDiameter: data.stemDiameter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Stem Diameter",
      error: error.message,
    });
  }
};