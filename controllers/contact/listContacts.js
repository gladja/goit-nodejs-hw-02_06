const { Contact } = require('../../models');

const listContacts = async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({ owner: _id }, '', { skip, limit: Number(limit) }).populate(
        'owner',
        '_id email'
    );
    res.status(200).json({
        code: 200,
        status: 'Success',
        total: result.length,
        data: result,
    });
};

module.exports = listContacts;
