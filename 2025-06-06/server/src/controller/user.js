import { Router } from 'express';
import user from '../model/user.js';
import upload from '../middleware/upload.js';
import bcrypt from 'bcrypt';

const router = Router();

router.post('/register', upload.single('photo'), async (req, res) => {
    try {
        if(req.file) {
            req.body.photo = req.file.filename;
        }
        
        req.body.password = await bcrypt.hash(req.body.password, 10);

        res.json(await user.create(req.body));
    } catch(e) {
        console.log(e);
        res.status(500).json('Nepavyko uzregistruoti vartotojo, bandykite dar kartą');
    }
});

router.post('/login', async (req, res) => {
    if(!req.body.email || !req.body.password)
        return res.status(401).json('Negavome el. pasšto adreso arba slaptažodžio');

    const userData = await user.findOne({ email: req.body.email });
    
    if(!userData || !await bcrypt.compare(req.body.password, userData.password))
        return res.status(401).json('Neteisingi prisijungimo duomenys');

    req.session.user = {
        name: userData.name,
        email: userData.email,
        photo: userData.photo
    };

    return res.json(req.session.user);
});

router.get('/check-auth', async (req, res) => {
    if(!req.session.user)
        return res.status(401).json("Vartotojas yra neprisijungęs");

    res.json(req.session.user);
});

export default router;