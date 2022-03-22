// routes/task.routes.js

const router = require("express").Router();
// const mongoose = require('mongoose');

const Material = require("../models/material.model");
const orderModel = require("../models/order.model");

router.get("/orders", async (req, res, next) => {
  const orders = await orderModel.find().populate('material')//.skip(0).limit(5)
  res.json(orders)
})


//  POST /api/tasks  -  Creates a new task
router.post("/orders", async (req, res, next) => {
  const {  count, materialId ,batchNumber} = req.body;
  try {
    const material = await Material.findOne({ _id: materialId })
    const response = await orderModel.create({
      count,
      batchNumber,
      material: material._id
    })
    res.json(response)
  } catch (err) {
    res.json(err)
  }
});

module.exports = router;
