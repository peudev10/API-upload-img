const express = require('express');
const router = express.Router();

const upload = require('./config/config_multer');
const middleware = require('./middlewares/middlewares');
const controllers = require('./controllers/imgControllers');

router.use('/imagens', express.static('img_upload'));

router.post('/upload', upload.single('file'), controllers.uploadImg);
router.get('/upload', controllers.getImg);
router.delete('/upload/:id', controllers.deleteImg);
router.put('/upload/:id',middleware.validateUpdate, controllers.updateImg);


module.exports = router;
