import { Router } from 'express';
import user from '../model/user.js';

// Routerio iniciavimas būtinas norint išskaidyti kelius į atskirus failus
const router = Router();

router.post('/', async (req, res) => {
    try {
        res.json(await user.create(req.body));
    } catch(e) {
        // console.log(e.message);
        res.status(500).json('Atsiprašome, tačiau nepavyko išsaugoti vartotojo. Bandykite dar kartą.');
    }
});

export default router;