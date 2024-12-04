const express = require('express');

const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.static('public'));

console.log(__dirname);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}!`)
);
