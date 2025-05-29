import { Router } from 'express';
import user from '../model/user.js';

// Routerio iniciavimas būtinas norint išskaidyti kelius į atskirus failus
const router = Router();

router.post('/', async (req, res) => {
    try {
        res.json(await user.create(req.body));
    } catch {
        res.status(500).json('Could not save data');
    }
});

export default router;