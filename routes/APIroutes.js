const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.get("/notes", (req, res) =>{
    const notes = fs.readFileSync(path.join(__dirname, '../db/db.json'),"utf-8");
    console.log("notes", notes);
    const parse = JSON.parse(notes);
    res.json(parse);
})

router.post("/notes", (req, res) =>{
    const notes = fs.readFileSync(path.join(__dirname, '../db/db.json'),"utf-8");
    console.log("notes", notes);
    const parse = JSON.parse(notes);
    parse.push(req.body);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(parse));
    res.json(parse);
})

router.delete("/notes/:id", (req, res) =>{
    const notes = fs.readFileSync(path.join(__dirname, '../db/db.json'),"utf-8");
    console.log("notes", notes);
    const parse = JSON.parse(notes);
    parse.delete(req.id);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(parse));
    res.json(parse);
})






module.exports = router