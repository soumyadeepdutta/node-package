require('module-alias/register');

const express = require('express');
const app = express();

const apiRouter = require('@routes/api.js');

app.use(express.static('public'));
app.use('/api', apiRouter);

app.all('*', (req, res) => {
  return res.status(404).send('Not Found!');
});

app.get('/download', (req, res) => {
  const filename = 'licence.txt';
  res.writeHead(200, {
    'Content-Type': 'application/text',
    'Content-disposition': 'attachment;filename=' + filename,
  });
  res.end(Buffer.from(JSON.stringify({ name: 'soumyadeep' }), 'binary'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
