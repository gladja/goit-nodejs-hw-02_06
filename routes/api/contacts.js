const express = require('express');

const ctrl = require('../../controllers');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, isValidId, userAuth } = require('../../middlewares');

const { contactsJoiSchema, favoriteJoiSchema } = require('../../models');

const router = express.Router();

router.get('/', userAuth, ctrlWrapper(ctrl.listContacts));
router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getContactById));
router.post('/', userAuth, validateBody(contactsJoiSchema), ctrlWrapper(ctrl.addContact));
router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.removeContact));
router.put(
    '/:contactId',
    isValidId,
    validateBody(contactsJoiSchema),
    ctrlWrapper(ctrl.updateContact)
);
router.patch(
    '/:contactId/favorite',
    isValidId,
    validateBody(favoriteJoiSchema),
    ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
