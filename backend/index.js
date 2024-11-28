const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;  // Changed port to 5001

app.use(cors());
app.use(express.json()); // Basic middleware to parse JSON request bodies

// Sample route
app.get('/', (req, res) => {
  res.send('Convofy Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
