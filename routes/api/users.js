const express = require('express');

const ctrl = require('../../controllers');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, userAuth, upload } = require('../../middlewares');

const { usersJoiSchema, emailVerifyJoiSchema } = require('../../models');

const router = express.Router();

router.post('/register', validateBody(usersJoiSchema), ctrlWrapper(ctrl.register));
router.post('/login', validateBody(usersJoiSchema), ctrlWrapper(ctrl.login));
router.get('/current', userAuth, ctrlWrapper(ctrl.getCurrent));
router.get('/logout', userAuth, ctrlWrapper(ctrl.logout));
router.patch('/:id/subscription', userAuth, ctrlWrapper(ctrl.updateStatusUser));
router.patch('/avatars', userAuth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));
router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));
router.post('/verify', validateBody(emailVerifyJoiSchema), ctrlWrapper(ctrl.resendVerifyEmail));

module.exports = router;
