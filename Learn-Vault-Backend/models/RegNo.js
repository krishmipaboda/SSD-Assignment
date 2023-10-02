const mongoose = require("mongoose");

const RegCodeSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
   
  },

  regCode: {
    type: String,
    required: true,
  },
});

module.exports = RegCode = mongoose.model("regcode", RegCodeSchema);