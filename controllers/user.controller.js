const models = require('@models');

exports.createUser = async (req, res) => {
  const existing = await models.User.findOne({
    where: { email: 'abcd@gmail.com' },
  });
  if (existing) return res.status(400).send('email already exists');
  await models.User.create({
    firstName: 'abcd',
    lastName: 'dcab',
    email: 'abcd@gmail.com',
    password: '123456',
  });

  return res.status(201).send('created');
};
