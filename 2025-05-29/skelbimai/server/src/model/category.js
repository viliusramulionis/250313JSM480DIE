import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
}, {
    // Nurodymas įtraukti vartotojo duomenis į JSON
    toJSON: {
        virtuals: true
    }
});

categorySchema.virtual('ads', {
    // modelio pavadinimas į kurį kreipiamės:
    ref: 'advertisement',
    // Skelbimo schemoje reigistruotas vartotojo id 
    localField: '_id',
    // user kolekcijoje naudojamas id laukelio pavadinimas
    foreignField: 'category_id'
});


export default mongoose.model('category', categorySchema);