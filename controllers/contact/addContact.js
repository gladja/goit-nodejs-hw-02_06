const { Contact } = require('../../models');

const addContact = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json({
        code: 201,
        status: 'Success add contact',
        data: result,
    });
};

module.exports = addContact;
