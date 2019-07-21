const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Seerver running on port ${PORT}`));