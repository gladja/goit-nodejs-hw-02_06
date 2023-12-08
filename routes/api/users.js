const express = require('express');

const ctrl = require('../../controllers');

const { ctrlWrapper } = require('../../helpers');

const validateBody = require('../../middlewares');

const router = express.Router();

router.post('/register', ctrlWrapper(ctrl.register));
router.post('/login');
router.post('/logout');
router.post('/current');

module.exports = router;
