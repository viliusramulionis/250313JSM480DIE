// Importuojamas express paketas
import express from 'express';

// CRUD:
// CREATE - POST 
// READ - GET
// UPDATE - PUT (PATH)
// DELETE - DELETE

// PUT Metodas yra skirtas atnaujinti daugiau nei vieną reikšmę
// PATCH metodas yra vienos reikšmės atnaujinimui

// Duomenų bazės imitacija
const products = [
    {
        id: 1,
        title: "Good product",
        price: 19.99
    },
    {
        id: 2,
        title: "Better product",
        price: 25.00
    }
];

// Jeigu keičiame tik pavadinimą naudojame path metodą
// Jeigu keičiame ir pavadinimą ir kainą naudojame put metodą

// Pagrindinio aplikacijos objekto iniciavimas
const app = express();

// NORINT PRIIMTI DUOMENIS X-WWW-FORM-URLENCODED FORMATU:
app.use(express.urlencoded());

// HTTP metodas ir javascript metodas bus ivardinamas vienodu pavadinimu
// Pirmu parametru nurodomas kelias 
// Antru - funkcija kuri bus aktyvuojama gavus uzklausą nurodytu keliu

// Kelio (route) aprašymas
// Duomenų paėmimas
app.get('/', (req, res) => {
    // Funkcijoje gaunami du parametrai: 
    // request (užklausos informacija)
    // response (atsakymo informacija) 

    // metodas .send() yra patalpintas res objekte
    // jo paskirtis persiųsti atgal vartotojui nurodytą tekstinę informaciją.
   
    // res.send(products);

    // json metodas skirtas persiųsti informaciją json formatu
    res.json(products);
});

// Naujo įrašo kūrimas
app.post('/', (req, res) => {
    // req.body - nugula VISAIS duomenų persiuntimo būdais persiųsta informacija 
    products.push({
        id: products[products.length - 1].id + 1,
        title: req.body.title,
        price: +req.body.price
    });

    res.json('Įrašas sėkmingai patalpintas');
});

// Įrašo atnaujinimas
app.put('/:id', (req, res) => {
    if(!Number.isInteger(+req.params.id))
        return res.json("Netinkamas ID"); 

    const index = products.findIndex(value => value.id === +req.params.id);

    products[index].title = req.body.title;

    res.json('Įrašas sėkmingai atnaujintas');
});

// Įrašo ištrynimas
app.delete('/:id', (req, res) => {
    if(!Number.isInteger(+req.params.id))
        return res.json("Netinkamas ID"); 

    const index = products.findIndex(value => value.id === +req.params.id);

    products.splice(index, 1);

    res.json('Įrašas sėkmijngai ištrintas');
});

// Serverio aktyvavimo eilutė:
// Nurodomas skaičius yra porto numeris kuriuo dirbs serveris
app.listen(3000, () => {
    console.log('Serveris veikia');
});