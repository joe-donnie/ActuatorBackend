import express from 'express';
import {createUser, deleteUser, getAllUsers, updateUser} from '../controllers/userController.js';
;


const router = express.Router();
router.get('/', getAllUsers);

router.post('/new' , createUser);
router.put('/update/:id' , updateUser);
router.delete('/delete/:id', deleteUser );


export default router;