var express = require('express');
var multer = require('multer');
var upload = multer();
var router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.post('/upload', upload.single('file'), (req, res) => {
	res.send(`File size: ${req.file.size} B`);
});

module.exports = router;