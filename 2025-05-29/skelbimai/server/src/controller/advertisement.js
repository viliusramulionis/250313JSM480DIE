import { Router } from 'express';
import advertisement from '../model/advertisement.js';

// Routerio iniciavimas būtinas norint išskaidyti kelius į atskirus failus
const router = Router();

// Visų skelbimų informacija
router.get('/', async(req, res) => {
    try {
        // Metodas populate nurodo kokias id laukelių asociacijas užpildyti
        res.json(await advertisement.find().populate({ path: 'user', select: ['name', 'photo']}));
    } catch(e) {
        console.log(e);
        res.status(500).json('Atsiprašome, tačiau nepavyko ištraukti nurodytų skelbimų.');
    }
});

// Vieno skelbimo informacija
router.get('/:id', async(req, res) => {
    try {
        // findById suranda vieną rezultatą pagal indentifikatorių
        res.json(await advertisement.findById(req.params.id));
    } catch(e) {
        // console.log(e);
        res.status(500).json('Atsiprašome, tačiau nepavyko ištraukti nurodytų skelbimų.');
    }
});

// Skelbimo sukūrimas
router.post('/', async (req, res) => {
    try {
        res.json(await advertisement.create(req.body));
    } catch(e) {
        // console.log(e);
        res.status(500).json('Atsiprašome, tačiau nepavyko išsaugoti skelbimo. Bandykite dar kartą.');
    }
});

export default router;