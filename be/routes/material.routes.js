// routes/project.routes.js

const router = require("express").Router();

// const mongoose = require('mongoose');

const Material = require("../models/material.model");

// POST /api/Material  -  Creates a new project

router.get("/materials", async (req, res, next) => {
  const response = await Material.find() //.skip(5).limit(5)
  res.json(response)
})


router.post("/materials", async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const response = await Material.create({
      title,
      description
    })
    res.json(response)
  }
  catch (err) {
    res.json(err)
  }
});

module.exports = router;
