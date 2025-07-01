import express from "express";
import { createActuatorData, getActuatorData, filterActuatorData } from '../controllers/actuatorDataController.js';

const router = express.Router();

router.post('/actuator-data', createActuatorData);
router.get('/get-data', getActuatorData);
router.get('/filter-data', filterActuatorData);

export default router;