const { Contact } = require('../../models');

const { HttpError } = require('../../helpers');

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

module.exports = removeContact;
