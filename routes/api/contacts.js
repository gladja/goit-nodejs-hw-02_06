const express = require('express');

const ctrl = require('../../controllers');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, isValidId } = require('../../middlewares');

const { contactsJoiSchema, favoriteJoiSchema } = require('../../models');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.listContacts));
router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getContactById));
router.post('/', validateBody(contactsJoiSchema), ctrlWrapper(ctrl.addContact));
router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.removeContact));
router.put(
    '/:contactId',
    isValidId,
    validateBody(contactsJoiSchema),
    ctrlWrapper(ctrl.updateContact)
);
router.patch(
    '/:contactId/favorite',
    validateBody(favoriteJoiSchema),
    ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
