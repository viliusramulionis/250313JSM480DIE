import { Router } from 'express';
import category from '../model/category.js';

// Routerio iniciavimas būtinas norint išskaidyti kelius į atskirus failus
const router = Router();

// Vienos Kategorijos informacija
router.get('/:id', async (req, res) => {
    try {
        res.json(await category.findById(req.params.id).populate('ads'));
    } catch(e) {
        // console.log(e);
        res.status(500).json('Atsiprašome, tačiau nepavyko gauti kategorijos duomenų. Bandykite dar kartą.');
    }
});

// Kategorijų sąrašas
router.get('/', async (req, res) => {
    try {
        res.json(await category.find());
    } catch(e) {
        // console.log(e);
        res.status(500).json('Atsiprašome, tačiau nepavyko gauti kategorijų sąrašo. Bandykite dar kartą.');
    }
});

// Naujos kategorijos kūrimas
router.post('/', async (req, res) => {
    try {
        res.json(await category.create(req.body));
    } catch(e) {
        // console.log(e);
        res.status(500).json('Atsiprašome, tačiau nepavyko išsaugoti kategorijos. Bandykite dar kartą.');
    }
});

export default router;