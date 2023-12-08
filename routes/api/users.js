const express = require('express');

const ctrl = require('../../controllers');

const { ctrlWrapper } = require('../../helpers');

const validateBody = require('../../middlewares');

const { usersJoiSchema } = require('../../models');

const router = express.Router();

router.post('/register', validateBody(usersJoiSchema), ctrlWrapper(ctrl.register));
router.post('/login');
router.post('/logout');
router.post('/current');

module.exports = router;
