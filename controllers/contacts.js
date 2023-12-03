const { Contact } = require('../models');

const { HttpError } = require('../helpers');

const listContacts = async (req, res) => {
    const result = await Contact.find({});
    res.status(200).json({
        code: 200,
        status: 'Success',
        total: result.length,
        data: result,
    });
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
        throw HttpError(404, `Contact whith ${contactId} not found.`);
    }
    res.status(200).json({
        code: 200,
        status: 'Success found contact',
        data: result,
    });
};

const addContact = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json({
        code: 201,
        status: 'Success add contact',
        data: result,
    });
};

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.status(200).json({
        code: 200,
        status: 'Success remove contact',
        data: result,
    });
};

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.status(200).json({
        code: 200,
        status: 'Success update contact',
        data: result,
    });
};

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    // const { favorite } = req.body;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.status(200).json({
        code: 200,
        status: 'Success update contact',
        data: result,
    });
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
};
