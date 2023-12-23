const sdMail = require('@sendgrid/mail');

const { HttpError } = require('./HttpError');

const addEnv = require('./addEnv');
addEnv(['../', 'config', '.env']);
const { SWNDGRID_API } = process.env;

sdMail.setApiKey(SWNDGRID_API);

const sendEmail = async data => {
    const email = { ...data, from: 'gladkih.alexander@gmail.com' };
    try {
        await sdMail.send(email);
        return true;
    } catch (err) {
        throw HttpError(404, 'User not found');
    }
};

module.exports = sendEmail;
