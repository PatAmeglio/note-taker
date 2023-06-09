const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const apiroutes = require("./APIroutes")

router.use("/api", apiroutes)

// GET Route for feedback page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router