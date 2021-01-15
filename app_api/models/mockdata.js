const mongoose = require('mongoose');

const mockdataSchema = new mongoose.Schema({
  "id": {
    type: String
  },
  "name": {
    type: String
  }
});

mongoose.model('MockDataSchema', mockdataSchema);
