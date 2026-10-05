import express from 'express';
import { 
    getAllProfiles, 
    getProfileById, 
    createProfile, 
    updateProfile, 
    deleteProfile 
} from '../controllers/curriculumController.js';

const router = express.Router();

router.get('/curriculums', getAllProfiles);
router.get('/curriculums/:id', getProfileById);
router.post('/curriculums', createProfile);
router.put('/curriculums/:id', updateProfile);
router.delete('/curriculums/:id', deleteProfile);

export default router;