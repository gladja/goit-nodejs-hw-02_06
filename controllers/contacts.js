const contacts = require('../models');

const { HttpError } = require('../helpers');

const contactsJoiSchema = require('../schema/contactsJoiSchema');

const listContacts = async (req, res, next) => {
    try {
        const result = await contacts.listContacts();
        res.json({
            status: 200,
            message: 'Success',
            result,
        });
    } catch (err) {
        next(err);
    }
};

const getContactById = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await contacts.getContactById(contactId);
        if (!result) {
            throw HttpError(404, 'Not found');
        }
        res.json(result);
    } catch (err) {
        next(err);
    }
};

const addContact = async (req, res, next) => {
    try {
        const { error } = contactsJoiSchema.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        }
        const result = await contacts.addContact(req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

const removeContact = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await contacts.removeContact(contactId);
        if (!result) {
            throw HttpError(404, 'Not found');
        }
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        next(err);
    }
};

const updateContact = async (req, res, next) => {
    try {
        const { error } = contactsJoiSchema.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        }
        const { contactId } = req.params;
        const result = await contacts.updateContact(contactId, req.body);
        if (!result) {
            throw HttpError(404, 'Not found');
        }
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
};
