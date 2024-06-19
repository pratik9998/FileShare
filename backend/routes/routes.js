import express from 'express';
import { uploadImage } from '../controllers/image-controller.js';

const router = express.Router();


router.post('/upload', uploadImage)


export default router;
