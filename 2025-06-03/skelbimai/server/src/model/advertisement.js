import mongoose from 'mongoose';

const advertisementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    view_count: {
        type: Number,
        default: 0
    },
    phone_number: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null,
        validate: (email) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }
    },
    price: {
        type: Number,
        required: true
    },
    // Nurodome jog saugosime vartotojo ID
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    // Nurodome jog saugosime kategorijos ID
    category_id: {
        type: mongoose.Schema.Types.ObjectId
    },
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

// Laukelio pavadinimas kuriame turėtų būti priskirti vartotojo duomenys:
advertisementSchema.virtual('user', {
    // modelio pavadinimas į kurį kreipiamės:
    ref: 'user',
    // Skelbimo schemoje reigistruotas vartotojo id 
    localField: 'user_id',
    // user kolekcijoje naudojamas id laukelio pavadinimas
    foreignField: '_id'
});

export default mongoose.model('advertisement', advertisementSchema);