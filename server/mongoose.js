const mongoose = require('mongoose');
require('dotenv/config');

mongoose
  // Attempt connection
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // Print success message
  .then(() => console.log('Connected to MongoDB!'))
  // Print error message
  .catch(({ message }) => {
    console.log({
      log: 'Error connecting to MongoDB in mongoose.js',
      message,
    });
  });
