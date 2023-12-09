const { User } = require('../../models');

const bcrypt = require('bcrypt');

const { HttpError } = require('../../helpers');

const register = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, `Email: ${email} in use`);
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await User.create({ ...req.body, password: hashPassword });
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
