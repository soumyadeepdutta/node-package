require('module-alias/register');

const express = require('express');
const app = express();

const apiRouter = require('@routes/api.js');

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRouter);

app.all('*', (req, res) => {
  return res.status(404).send('Not Found!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
