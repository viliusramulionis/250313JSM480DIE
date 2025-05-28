import mongoose, { Schema } from 'mongoose';

// Prisijungimas prie mongodb serverio
try {
    // Prisijungimo iniciavimas ir tikrinimas ar pavyko
    await mongoose.connect('mongodb://localhost:27017/express-mongoose-app');
    console.log('Prisijungimas pavyko');
} catch {
    // Grąžinama žinutė jei nepavyko prisijungti prie serverio
    console.log('Nepavyko prisijungti prie duomenų bazės');
}

// Schemos sukūrimas
const postSchema = new Schema({
    title: String,
    content: String,
    photo: String,
    view_count: Number,
    created_at: {
        type: Date,
        default: Date.now() //Nurodome reikšmę pagal nutylėjimą
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

// Modelio sukūrimas naudojant ankstesnę schemą
const Post = mongoose.model('post', postSchema);

// Naujo įrašo kūrimas: (CREATE)
// PIRMAS VARIANTAS:
const { _id }  = await Post.create({
    title: 'Pirmas įrašas',
    content: 'Labai šaunus straipsnis',
    photo: 'Nėra',
    view_count: 18
});

// ANTRAS VARIANTAS:
// const post = new Post({
//     title: 'New Post Būdu kurtas Pirmas įrašas',
//     content: 'Labai šaunus straipsnis',
//     photo: 'Nėra',
//     view_count: 18
// });

// post.save();

// Įrašų susigrąžinimas (READ)

const posts = await Post.find();

for(const post of posts) {
    console.log(post.title);
}

// Įrašo redagavimas (UPDATE)
// PIRMAS VARIANTAS:

// Vieno įrašo susiradimas:
//const post = await Post.findById(_id);

// Modifikuojame norime reikšmę
//post.title = 'Redaguotas įrašas';

// Išsaugome pakeitimus
//post.save();

// ANTRAS VARIANTAS
await Post.findByIdAndUpdate(_id, {
    title: 'Modifikuotas įrašas naudojant findByIdANdUpdate',
    content: 'Pakeistas turinys'
});

// Įrašo pašalinimas (DELETE)
const postToDelete = await Post.create({
    title: 'Įrašas kurio nėra',
    content: 'Ištrintas įrašas'
});

await Post.findByIdAndDelete(postToDelete._id);