import express from 'express';

const app = express();

app.use(express.urlencoded());

// Pirmas parametras - kelias kuriuo kreipiantis aktyvuojamos sekančios funkcijos
// Po pirmo parametro perduodamos funkcijos kurių kiekis yra nelimituojamas
// Kiekviena atsišaukimo (callback) funkcija priima TRIS parametrus: request, response, next
app.get('/', 
    (req, res, next) => {
        console.log('Pirma funkcija aktyvuota');
        next();
    },
    (req, res, next) => {
        console.log('Antra funkcija aktyvuota');
        next();
    },
    (req, res, next) => {
        console.log('Trečia funkcija aktyvuota');
        next();
    },
    (req, res) => {
        console.log('Ketvirta funkcija aktyvuota');
    }
);

// Priimkite dvi reikšmes POST metodu ir patikrinkite ar šios dvi reikšmės yra skaičiai
// Jeigu taip, tuomet grąžinkite šių dviejų skaičių sumą
// O priešingu atveju grąžinkite klaidos žinutę

// Middleware - vidurinio grandis

app.post('/', (req, res) => {
    if (
        Number.isInteger(+req.body.pirma) && 
        Number.isInteger(+req.body.antra)
    ) 
        return res.send(parseInt(req.body.pirma) + parseInt(req.body.antra));

    res.send('Reikšmės nėra skaičiai');
});


// MIDDLEWARE APRAŠYMAS

const middleware = (req, res, next) => {
    if (
        Number.isInteger(+req.body.pirma) && 
        Number.isInteger(+req.body.antra)
    )
        return next()

    res.status(500).send('Reikšmės nėra skaičiai');
}   

app.post('/sudetis', middleware, (req, res) => {
    res.send(parseInt(req.body.pirma) + parseInt(req.body.antra));
});

app.post('/atimtis', middleware, (req, res) => {
    res.send(parseInt(req.body.pirma) - parseInt(req.body.antra));
});

app.post('/daugyba', middleware, (req, res) => {
    res.send(parseInt(req.body.pirma) * parseInt(req.body.antra));
});

app.post('/dalyba', middleware, (req, res) => {
    res.send(parseInt(req.body.pirma) / parseInt(req.body.antra));
});

app.listen(3001, () => {
    console.log('Serveris sėkmingai įjungtas');
});