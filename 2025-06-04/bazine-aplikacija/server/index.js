import express from 'express';

const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.json('Kazkoks tekstas');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3001);