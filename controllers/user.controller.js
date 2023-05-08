const models = require('@models');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  const existing = await models.User.findOne({
    where: { email: req.body.email },
  });
  if (existing) return res.status(400).send('email already exists');
  await models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  return res.status(201).send('created');
};

exports.loginUser = async (req, res) => {
  const existing = await models.User.findOne({
    attributes: ['email', 'firstName', 'lastName'],
    where: { email: req.body.email, password: req.body.password },
    raw: true,
  });
  if (!existing) return res.status(400).send('invalid email or password');

  console.log(existing);

  const token = jwt.sign(existing, 'abcd1234', { expiresIn: '1d' });

  return res.status(201).send({ token });
};
