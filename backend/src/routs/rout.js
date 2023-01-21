const router = require("express").Router();
const path = require("path");
const collection = require("../models/collection");

//routing

/*:::::::::::::::::::::::::::::::::::::::::::::::::::[Post]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
router.post("/", async (req, res) => {
    try {
        const data = await collection.create(req.body);
        const file = req.file;
        file.mv("../uploads" + file.name, async (err) => {
            if (err) {
                res.status(404).send({
                    status: "failed",
                    message: err.message
                })
            } else {
                const img_data = await collection.create()
                res.status(200).send({
                    status: "File Upload Successfull",
                    data: img_data
                })
            }
        })
        // console.log(data)
        res.status(201).json({
            status: "sucessfull",
            result: data
        })
    } catch (err) {
        res.status(502).send({
            status: "faliur",
            data: err
        })
    }
})

/*:::::::::::::::::::::::::::::::::::::::::::::::[get]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
router.get("/user", async (req, res) => {
    try {
        const data = await collection.find()
        res.status(201).json({
            status: "sucessfull",
            result: data
        })
    } catch (err) {
        res.status(502).send({
            status: "faliur",
            data: err.message
        })
    }
})
router.get("/user/:fileName", async (req, res) => {

    try {
        const imgFilePath = req.params.fileName
        res.status(201).sendFile(path.join(__dirname, "../uploads", imgFilePath))
    } catch (err) {
        res.status(502).send({
            status: "faliur",
            data: err.message
        })
    }
})
module.exports = router;