const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home endpoint
app.get('/', (req, res) => {
  res.send('home page!');
});

// Listen on port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
