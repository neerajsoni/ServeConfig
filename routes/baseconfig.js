const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

class BaseConfig {
  
  constructor () {}

  getConfig(fileName) {
    let filePath = path.join(__dirname, '../configs/' + fileName + '.json');
    return JSON.parse(require('fs').readFileSync(filePath, 'utf8'));
  }
}; 

module.exports = BaseConfig;
