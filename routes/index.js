const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const apiroutes = require("./APIroutes")

router.use("/api", apiroutes)

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for feedback page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// router.post('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// );

module.exports = router