import express from 'express';
import valveModel from "../models/valveModel.js";
import { createValveTypes, getValveTypes } from '../controllers/valveController.js';
import { createValvePressure, getValvePressure } from '../controllers/valvepressureController.js';
import { createActuatorType, getActuatorType } from '../controllers/actuatorTypeController.js';
import axios from 'axios';


const router = express.Router();
router.post('/valve', createValveTypes);
router.get('/getValve', getValveTypes);
router.post('/pressure', createValvePressure);
router.get('/getPressure', getValvePressure);
router.post('/actuatorType', createActuatorType);
router.get('/getActuator', getActuatorType);
router.post('/actuator-proxy', async (req, res) => {
try {
    const response = await axios.post(
      process.env.ACTUATOR_PROXY_API,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

