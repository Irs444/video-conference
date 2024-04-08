const express = require("express")
const app = express();
const port = 5000;
const {Router} = require("express")
const router = Router();
const Model = require("./models/meetingModel")

// API to create meeting

router.post("/create-meeting", (req,res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});





app.listen(port, () => {
    console.log("server started at 5000 port");
})