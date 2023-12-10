const { Contact } = require('../../models');

const listContacts = async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 10, favorite } = req.query;
    const skip = (page - 1) * limit;
    const listUser = favorite === undefined ? { owner: _id } : { owner: _id, favorite };
    const result = await Contact.find(listUser, '', {
        skip,
        limit: Number(limit),
        favorite,
    }).populate('owner', '_id email');
    res.status(200).json({
        code: 200,
        status: 'Success',
        total: result.length,
        data: result,
    });
};

module.exports = listContacts;
