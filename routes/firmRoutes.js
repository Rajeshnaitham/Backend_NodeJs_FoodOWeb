const express=require('express');
const firmController=require('../Controllers/firmController');
const verifyToken=require('../middlewares/verifyToken');


const router=express.Router()
router.post('/add-firm',verifyToken,firmController.addFirm);

router.get('/uploads/:imageName', (req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent('Content-Type','imageName');
    res.sendFile(Path2D.join(__dirname,'..','uploads',imageName));
});

router.delete('/:firmId',firmController.deleteFirmById);

module.exports=router;