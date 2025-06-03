import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    // Failų kėlimo direktorija
    next(null, '../uploads');
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