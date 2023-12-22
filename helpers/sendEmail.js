const sdMail = require('@sendgrid/mail');

const { HttpError } = require('./HttpError');

const dotenv = require('dotenv');
const path = require('path');
const configPath = path.join(__dirname, '../', 'config', '.env');
dotenv.config({ path: configPath });
const { SWNDGRID_API } = process.env;

sdMail.setApiKey(SWNDGRID_API);

// const email = {
//     to: 'info@pcdoc.ck.ua',
//     from: 'gladkih.alexander@gmail.com',
//     subject: 'new',
//     html: '<p>Email</p>',
// };

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
// const email = {
//     to: 'info@pcdoc.ck.ua',
//     from: 'gladkih.alexander@gmail.com',
//     subject: 'new',
//     html: '<p>Email</p>',
// };
// sdMail
//     .send(email)
//     .then(() => {
//         console.log('yes');
//     })
//     .catch(err => console.log(err));
