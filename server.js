import express from 'express';
import connectDatabase from 'db.js';

const app = express();
const PORT = 3000;

connectDatabase();

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});