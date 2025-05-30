import mongoose from 'mongoose';

export default mongoose.model('user', new mongoose.Schema({
    name: {
        type: String,
        // Nurodymas, jog reikšmė yra privaloma
        required: true,
        // Nurodo grąžinamą žinutę nepavykus gauti reikšmei
        // required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: true,
        // Nurodymas, jog reikšmė negali dubliuotis kolekcijoje
        unique: true,
        // El. pašto adreso validacija:
        validate: (email) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
}));
