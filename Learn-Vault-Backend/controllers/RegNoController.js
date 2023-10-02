const express = require('express');
const mongoose = require('mongoose');
const RegNoModel = require('../models/RegNo');

const createRegNo = async (req, res) => {
  console.log('Creating RegNo');
  const Regdata = req.body;

  try {
    const newRegNo = new RegNoModel(Regdata);
    await newRegNo.save();
    console.log('Saved data:', JSON.stringify(newRegNo)); // Log data safely

    res.status(200).json({ newRegNo });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getRegNoById = async (req, res) => {
  const { id } = req.params;
  console.log('Fetching RegNo by ID:', id);

  try {
    const RegNo = await RegNoModel.findById(id);
    console.log('Fetched RegNo:', JSON.stringify(RegNo)); // Log data safely

    res.status(200).json(RegNo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllRegNo = async (req, res) => {
  console.log('Fetching all RegNo');

  try {
    const allRegNo = await RegNoModel.find();
    console.log('Fetched all RegNo:', JSON.stringify(allRegNo)); // Log data safely

    res.status(200).json(allRegNo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getAllRegNo, getRegNoById, createRegNo };