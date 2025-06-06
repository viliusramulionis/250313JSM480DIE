import multer from 'multer';
import { mkdir, access } from 'node:fs/promises';

const targetDir = './uploads';

const storage = multer.diskStorage({
  destination: async (req, file, next) => {
    try {
        // Tikriname ar direktorija jau egzistuoja
        await access(targetDir);
    } catch {
        // Jeigu gavome klaidą, direktorijas nėra, tad ją kuriamne:
        await mkdir(targetDir);
    }

    // Failų kėlimo direktorija
    next(null, targetDir);
  },
  filename: (req, file, next) => {
    // Failo pavadinimo generavimas
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // Išskaidome originalaus failo pavadinimą pagal tašką
    const fileNameSplit = file.originalname.split('.');
    // Prijungiame originalaus failo plėtinį prie naujo unikalaus pavadinimo
    const finalFileName = file.fieldname + '-' + uniqueSuffix + '.' + fileNameSplit[fileNameSplit.length - 1];

    next(null, finalFileName);
  }
});

// Multer įskiepio iniciavimas
export default multer({ storage: storage });