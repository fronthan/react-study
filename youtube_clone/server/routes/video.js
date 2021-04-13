const express = require('express');
const router = express.Router();
const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');

//Storage multer config
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter:(req, file, cb) => {
    const ext = path.extname(file.originalname);

    if(ext !== '.mp4') {
      return cb(res.status(400).end('only mp4 is allowed'), false);
    }
    cb(null, true)
  }
});

const upload = multer({ storage: storage}).single("file");


//=================================
//             Video
//=================================

router.post('/uploadfiles', (req, res)=> {
  //video를 서버에 저장한다. 

  upload(req, res, err => {
    if(err) {
      return res.json({success: false, err})
    }

    return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
  })
});


router.post('/uploadVideo', (req, res)=> {
  //video 정보들을 저장한다. 
  const video = new Video(req.body);

  video.save((err, doc)=>{
    if(err) return res.json({success:false, err})
    res.status(200).json({success:true})
  });
});

router.post('/thumbnail', (req, res)=> {
  //썸네일 생성하고 비디오 러닝타임도 가져오기

  let filePath = "";
  let fileDuration = "";
  //비디오 정보 가져오기
  ffmpeg.ffprobe(req.body.url, function(err, metadata) {
    console.log(metadata);
    console.log(metadata.format.duration);
    fileDuration = metadata.format.duration
  });


  //thumbnail 생성
  ffmpeg(req.body.url)
  .on('filenames', function(filenames) {
    console.log('will generagte ' + filenames.join(', '));
    console.log(filenames);

    filePath = "uploads/thumbnails/" + filenames[0]
  })
  .on('end', function() {
    console.log('Screenshot taken');
    return res.json({success:true, url:filePath, fileDuration:fileDuration})
  })
  .on('error', function(err) {
    console.log(err);
    return res.json({success:false, err});
  })
  .screenshots({
    count:3,
    folder:'uploads/thumbnails',
    size:'320x240',
    filename:'thumbnail-%b.png'
  })

  
});

module.exports = router;