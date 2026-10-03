import express from 'express';
import { getAllProfiles, createProfile } from '../controllers/curriculumController.js';

const router = express.Router();

router.get('/curriculums', getAllProfiles);

router.post('/curriculums', createProfile);

export default router;