import express from 'express';
import {addUser,getProducts} from '../controller/user-controller.js';

const router=express.Router();

router.post('/add',addUser);
router.get('/all',getProducts);

export default router;