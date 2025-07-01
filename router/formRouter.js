import express from "express";
import { createCoating, createDesignCode, createMaterial, createSafetyFactor, createStdOptions, createStemDiameter, createTempTrim, getCoating, getDesignCode, getMaterial, getSafetyFactor, getStdOptions, getStemDiameter, getTempTrim } from "../controllers/formController.js";


const router = express.Router();

router.post('/stdopt', createStdOptions);
router.get('/getstdopt', getStdOptions);
router.post('/designCode', createDesignCode)
router.get('/getdesigncode', getDesignCode);
router.post('/material', createMaterial);
router.get('/getmaterial', getMaterial);
router.post('/tempTrim', createTempTrim);
router.get('/gettemptrim', getTempTrim);
router.post('/coating', createCoating);
router.get('/getcoating', getCoating);
router.post('/safetyfactor', createSafetyFactor);
router.get('/getsafetyfactor', getSafetyFactor);
router.post('/stemdiameter', createStemDiameter);
router.get('/getstemdiamter', getStemDiameter);
export default router;