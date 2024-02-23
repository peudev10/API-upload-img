const imgModels = require('../models/imgModels');

const validateUpload = (titulo, descricao) => {
    if (!titulo || titulo === '') {
        return false;
    }

    if (!descricao || descricao === '') {
        return false;
    }

    return true;
}

const uploadImg = async (req, res) => {


    const { titulo, descricao } = req.body;

    try {

        if (!req.file) {
            res.status(400).json('imagem não enviada');
        }
        else {
            var validate = validateUpload(titulo, descricao);

            if (validate) {
                const upload = await imgModels.uploadImg({ titulo, descricao, img: req.file.filename });
                res.status(200).json(upload);
            }
            else {
                res.status(400).json({ msg: "titulo ou descricao inválido" });
            }

        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor' });
    }
}

const getImg = async (req, res) => {
    const dados = await imgModels.getImg();

    res.status(200).json(dados);
}

const deleteImg = async (req, res) => {
    try {
        const { id } = req.params;
        const dados = await imgModels.deleteImg(id);

        res.status(200).json(dados);

    } catch (error) {
        res.status(400).json({ msg: "Erro no servidor" })
    }

}

const updateImg = async (req, res) => {

    try {
        const dados = await imgModels.updateImg(req.body, req.params.id);
        res.status(200).json(dados);

    } catch (error) {
        res.status(500).json({ msg: 'Erro no servidor' });
    }
}

module.exports = {
    uploadImg,
    getImg,
    deleteImg,
    updateImg
}