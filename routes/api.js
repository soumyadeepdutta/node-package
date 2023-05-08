const apiRouter = require('express').Router();

const userController = require('@controllers/user.controller');
const licenseController = require('@controllers/license.controller');

const authMiddleware = require('@middlewares/auth');

apiRouter.get(
  '/users/download/license',
  authMiddleware.auth,
  licenseController.downloadLicense
);
apiRouter.post('/users/login', userController.loginUser);
apiRouter.post('/users', userController.createUser);

module.exports = apiRouter;
