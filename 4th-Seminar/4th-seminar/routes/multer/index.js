const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({
  dest: 'upload/'
})

// ()안에 있는게 미들웨어임 , 요청이 여기부터 시작되는 것
router.post('/single', upload.single('image'), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({
    //images: imageUrls,
    file: req.file,
    body: req.body
  });
});

router.post('/array', upload.array('images', 3), async (req, res) => {
  const imageUrls = req.files.map(file => file.location);
  console.log(req.files);
  console.log(req.body);
  res.send({
    //images: imageUrls,
    file: req.files,
    body: req.body
  });
});

module.exports = router;