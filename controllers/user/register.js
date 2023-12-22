const { User } = require('../../models');

const bcrypt = require('bcrypt');

const { HttpError, sendEmail } = require('../../helpers');

const gravatar = require('gravatar');

const { nanoid } = require('nanoid');

const register = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, `Email: ${email} in use`);
    }

    const verificationToken = nanoid();
    const avatarURL = gravatar.url(email);
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken });

    const mail = {
        to: email,
        subject: 'Verification successful',
        html: `<a target='blank' href='http://localhost:5000/users/verify/${verificationToken}'>Verification email</a>`,
    };
    await sendEmail(mail);

    res.status(201).json({
        code: 201,
        status: 'Success add user',
        data: {
            user: {
                email,
                subscription,
                avatarURL,
                verificationToken,
            },
        },
    });
};

module.exports = register;
