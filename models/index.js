const { Contact, contactsJoiSchema, favoriteJoiSchema } = require('./contact');
const { User, usersJoiSchema, emailVerifyJoiSchema } = require('./user');

module.exports = {
    Contact,
    contactsJoiSchema,
    favoriteJoiSchema,

    User,
    usersJoiSchema,
    emailVerifyJoiSchema,
};
