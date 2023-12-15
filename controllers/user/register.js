const { User } = require('../../models');

const bcrypt = require('bcrypt');

const { HttpError } = require('../../helpers');

const gravatar = require('gravatar');

const register = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, `Email: ${email} in use`);
    }
    const avatarURL = gravatar.url(email);
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await User.create({ ...req.body, password: hashPassword, avatarURL });
    res.status(201).json({
        code: 201,
        status: 'Success add user',
        data: {
            user: {
                email,
                subscription,
                avatarURL,
            },
        },
    });
};

module.exports = register;
