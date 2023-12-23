const { User } = require('../../models');

const { HttpError, sendEmail, addEnv } = require('../../helpers');

addEnv(['../../', 'config', '.env']);
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(401, 'Email not found');
    }
    if (user.verify) {
        throw HttpError(400, 'Verification has already been passed');
    }

    const mail = {
        to: email,
        subject: 'Verification successful',
        html: `<a target='blank' href='${BASE_URL}/users/verify/${user.verificationToken}'>Verification email</a>`,
    };
    await sendEmail(mail);

    res.status(200).json({
        code: 200,
        status: 'Verification email sent',
    });
};

module.exports = resendVerifyEmail;
