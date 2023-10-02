const express = require('express');
const mongoose  = require ('mongoose');
const {title} = require ('process');
const RegNoModel = require('../models/RegNo');

const createRegNO = async (res,req) =>{
    console.log('blogs');
    const Regdata = req.body;
    console.log(Regdata,'Course is added');

    const newRegNo = new RegNoModel(Regdata);
    console.log('saved data', newRegNo);
    try {
      await newRegNo.save();
  
      res.status(200).json({ newRegNo });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
};

const getRegNoById = async (req, res) => {
    const { id } = req.params;
    console.log(id, 'RegIstration Number');
  
    try {
      const RegNo = await RegNoModel.findById(id);
      console.log(RegNo, 'Get RegIstration By id');
  
      res.status(200).json(RegNo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  const getAllRegNo = async (req, res) => {
    console.log('All RegNo');
  
    try {
      const AllRegNo = await RegNoModel.find();
      console.log(AllRegNo);
  
      res.status(200).json(AllRegNo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  module.exports = {getAllRegNo,getRegNoById,createRegNO}