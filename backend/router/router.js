import express from 'express';
import multer from 'multer';
import { kidFrom, kiddata, kidget, page1, classFrom, classdata, classget, pageclass, deleteclass, editclass, updateclass, teacherFrom, teacherdata, teacherget, updateteacher, deleteteacher, editteacher, pageteacher } from '../controller/controller.js';
const router = express.Router();

// Body parsing middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


// Your routes
router.get('/page1', page1);
router.get("/page2", kidFrom);
router.post('/insert', kiddata);
router.get("/get", kidget);

// class
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/pageclass', pageclass);
router.get("/pageclass2", classFrom);
router.post('/insertclass', upload.single('classimage'), classdata);
router.get("/getclass", classget);
router.delete('/deleteclass/:id', deleteclass);
router.get("/editclass/:id", editclass);
router.post("/updateclass/:id", upload.single('classimage'), updateclass);

// teacher
router.get('/pageteacher', pageteacher);
router.get("/pageteacher2", teacherFrom);
router.post('/insertteacher', upload.single('teacherimage'), teacherdata);
router.get("/getteacher", teacherget);
router.delete('/deleteteacher/:id', deleteteacher);
router.get("/editteacher/:id", editteacher);
router.post("/updateteacher/:id", upload.single('teacherimage'), updateteacher);

export default router;
