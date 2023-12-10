const { User } = require('../../models');

const { HttpError } = require('../../helpers');

const updateStatusUser = async (req, res) => {
    const { id } = req.params;
    const { subscription } = req.body;
    const result = await User.findByIdAndUpdate(id, req.body, { new: subscription });
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.status(200).json({
        code: 200,
        status: 'Success update subscription',
        data: result,
    });
};

module.exports = updateStatusUser;
