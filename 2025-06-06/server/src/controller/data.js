import { Router } from 'express';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', auth, (req, res) => {
    res.json([
        {
            title: "Kazkoks pavadinimas",
            description: 'Kazkoks aprasymas'
        },
        {
            title: "Kazkoks pavadinimas",
            description: 'Kazkoks aprasymas'
        },
        {
            title: "Kazkoks pavadinimas",
            description: 'Kazkoks aprasymas'
        },
        {
            title: "Kazkoks pavadinimas",
            description: 'Kazkoks aprasymas'
        }
    ]);
});

export default router;