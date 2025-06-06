import express from 'express';
import cors from 'cors';
import user from './controller/user.js';
import data from './controller/data.js';
import mongoose from 'mongoose';
import session from 'express-session';

try {
    // Duomenu bazes prijungimas:
    await mongoose.connect('mongodb://127.0.0.1:27017/autentifikacija');
    console.log('Connected to database');
} catch(e) {
    // console.log(e);
    console.log('Unable to reach database service');
}

// Express aplikacijos iniciavimas
const app = express();

// AUTENTIFIKACIJOS KONFIGURACIJOS PRADZIA

app.set('trust proxy', true);
// Sesijos informacijos priskyrimas prie express aplikacijos
app.use(session({
  secret: 'kazkokia slapta fraze', // Tekstas pagal kuri algoritmas sifruoja sausainelio duomenis
  resave: false, // Nurodymas ar galimas cookio perrasymas
  saveUninitialized: false, // Nurodymas sukurti sesijos sausaineli, nespejus nieko priskirti prie sesijos informacijos
  cookie: { secure: false } // Cookies bus naudojamas tik kuomet pajungiame aplikacija https protokolu
}));

// Duomenu priemimas neatsizvelgiant i puslapio adresa:
app.use(cors({
    origin: '*',
    credentials: true //Nurodymas, jog siųsime ir priimsime duomenis su sausaineliais
}));

// AUTENTIFIKACIJOS KONFIGURACIJOS PABAIGA

// Norint gauti duomenis x-www-form-urlenced formatu
app.use(express.urlencoded());

// Vartotojo route'u registras 
app.use('/api/user', user);
app.use('/api/data', data);

// Serverio paleidimo iniciavimas
app.listen(3000, () => console.log('Serveris veikia'));