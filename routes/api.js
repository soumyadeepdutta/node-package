const apiRouter = require('express').Router();

const userController = require('@controllers/user.controller');

apiRouter.post('/users', userController.createUser);

module.exports = apiRouter;
