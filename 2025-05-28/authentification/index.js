import mongoose, { Schema } from 'mongoose';
import express from 'express';

const app = express();

try {
    // Prisijungimo prie duomenų bazės inciavimas
    await mongoose.connect('mongodb://localhost:27017/autentifikacija');
} catch {
    console.log('Prisijungimas nepavyko');
}


// Schemos sukūrimas
const userSchema = new Schema({
    name: String,
    last_name: String,
    email: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
});


// Modelio iniciavimas
const User = mongoose.model('user', userSchema);

// const users = [];

const includesNumber = (string) => {
    for(let i = 0; i <= 9; i++) {
        if(string.includes(i)) 
            return true;
    }

    return false;
}

// Norint serveryje duomenis priimti x-www-form-urlencoded formatu
app.use(express.urlencoded());

// Registracijos route'as
app.post('/register', (req, res) => {
    if( !req.body.name || 
        !req.body.last_name || 
        !req.body.email || 
        !req.body.password
    ) 
        return res.json('Negauti registracijos duomenys');
    
        
    if ( req.body.name.length < 3 || req.body.name.length > 200) 
        return res.json('Vardas negali bŪti trumpesnis nei trys simboliai ir ilgesnis nei du šimtai');
    
    if ( req.body.last_name.length < 3 || req.body.last_name.length > 200) 
        return res.json('Pavarde negali bŪti trumpesnis nei trys simboliai ir ilgesnis nei du šimtai');
        
    if ( 
            req.body.email.length < 5 || 
            req.body.email.length > 50 ||
            !/\S+@\S+\.\S+/.test(req.body.email)
        ) 
        return res.json('Neteisingas el. pašto adreso formatas');
    
    if ( 
        req.body.password.length < 8 || 
        req.body.password.length > 16 ||
        !includesNumber(req.body.password)
    ) 
        return res.json('Neteisingas slaptažodžio formatas');
    
    User.create({
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })

    // users.push({
    //     name: req.body.name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     password: req.body.password
    // });

    res.json('Sveikiname sėkmingai prisiregistravus platformoje');
});

app.post('/login', async (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.json('Negavome jokių duomenų, bandykite dar kartą');
    }

    // const user = users.filter(value => value.email === req.body.email && value.password === req.body.password);

    // PIRMAS VARIANTAS:
    // const users = await User.find();

    // const user = users.filter(value => value.email === req.body.email && value.password === req.body.password);

    // if(user.length === 0) {
    //     return res.json('Neteisingi prisijungimo duomenys');
    // }

    // ANTRAS VARIANTAS
    // Filtruojame duomenis pagal email IR password reikšmes
    // const users = await User.find({ email: req.body.email, password: req.body.password });

    // Filtruojame vieną vartotoją
    const user = await User.findOne({ email: req.body.email, password: req.body.password });

    if(!user) {
        return res.json('Neteisingi prisijungimo duomenys');
    }

    res.json('Sveikiname sėkmingai prisijungus');
});

// Serverio iniciavimas
app.listen(3000, () => {
    console.log('Serveris veikia');
});