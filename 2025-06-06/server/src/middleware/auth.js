const auth = (req, res, next) => {
    if(!req.session.user)
        return res.status(401).json("Vartotojas yra neprisijungęs");

    next();
}

export default auth;