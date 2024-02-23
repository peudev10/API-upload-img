const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        
        if (req.body.titulo && req.body.descricao) {
            callback(null, path.resolve('img_upload'));
        } else {
            callback(new Error('O arquivo não pode ser salvo porque os campos título e descrição não foram fornecidos.'));
        }
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        callback(null, `${time}_${file.originalname}`);
    }
});

const imageFilter = (req, file, callback) => {
    if (file.mimetype.startsWith('image/')) {
        callback(null, true);
    } else {
        callback(new Error('Apenas arquivos de imagem são permitidos.'));
    }
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

module.exports = upload;