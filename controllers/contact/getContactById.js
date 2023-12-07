const { Contact } = require('../../models');

const { HttpError } = require('../../helpers');

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

module.exports = getContactById;
