const db = require('../config/connection');
const { Request } = require('../models');

const categoryData = require('./categoryData.json');

db.once('open', async () => {
    // clean database
    await Request.deleteMany({});

    // bulk create each model
  const categories = await Category.insertMany(categoryData);
 

});