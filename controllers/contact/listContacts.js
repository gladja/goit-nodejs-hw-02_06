const { Contact } = require('../../models');

const listContacts = async (req, res) => {
    const result = await Contact.find({});
    res.status(200).json({
        code: 200,
        status: 'Success',
        total: result.length,
        data: result,
    });
};

module.exports = listContacts;
