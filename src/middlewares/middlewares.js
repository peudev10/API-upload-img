
const validateUpdate = (req, res, next) => {
    const dados = req.body;

    if (dados.titulo && dados.titulo !== '') {
        next();
    }
    else if (dados.descricao && dados.descricao !== '') {
        next();
    }
    else {
        res.status(400).json({ msg: "titulo e descricao não foram enviados" });
    }

}

module.exports = {
    validateUpdate,
}