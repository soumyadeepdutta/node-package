const jwt = require('jsonwebtoken');

exports.downloadLicense = async (req, res) => {
  const license = jwt.sign({ email: req.authUser.email }, 'abcd1234', {
    expiresIn: '7d',
  });

  const filename = 'license.txt';
  res.writeHead(200, {
    'Content-Type': 'application/text',
    'Content-disposition': 'attachment;filename=' + filename,
  });
  res.end(Buffer.from(JSON.stringify({ key: license }), 'binary'));
};
