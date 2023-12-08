const { User } = require('../../models');

const { HttpError } = require('../../helpers');

const register = async (req, res) => {
    const { email, subscription } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, `Email: ${email} in use`);
    }
    const result = await User.create(req.body);
    res.status(201).json({
        code: 201,
        status: 'Success add user',
        data: {
            user: {
                email,
                subscription,
            },
        },
    });
};

module.exports = register;
