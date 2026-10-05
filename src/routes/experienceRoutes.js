import express from 'express';
import { 
    getAllExperiences, 
    getExperienceById, 
    createExperience, 
    updateExperience, 
    deleteExperience 
} from '../controllers/experienceController.js';

const router = express.Router();

router.get('/experiences', getAllExperiences);
router.get('/experiences/:id', getExperienceById);
router.post('/experiences', createExperience);
router.put('/experiences/:id', updateExperience);
router.delete('/experiences/:id', deleteExperience);

export default router;