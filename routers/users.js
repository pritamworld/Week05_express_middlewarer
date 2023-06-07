var express = require("express")
var router = express.Router()
//https://www.iana.org/assignments/media-types/media-types.xhtml
router.get("/faculty", (req, res) => {
    const faculty = {
        fid: 1,
        name: "Pritesh",
        city: "Toronto",
        college: "Seneca College"
    }
    res.send(faculty)
})

router.post("/fulltimefaculty", (req, res) => {
    const faculty = {
        fid: 2,
        name: "Mark",
        city: "Andres",
        college: "GBC"
    }
    res.setHeader("Content-Type", "application/json")
    res.send(faculty)
})

router.patch("/student", (req, res) => {
    res.send("<h1>PATCH - Record</h1>")
})

router.put("/student", (req, res) => {
    res.send("<h1>PUST - Record</h1>")
})

router.delete("/student", (req, res) => {
    res.status(201).send("<h1>DELETE - Record Deleted</h1>")
})

module.exports = router