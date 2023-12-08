const { Contact, contactsJoiSchema, favoriteJoiSchema } = require('./contact');
const { User, usersJoiSchema } = require('./user');

module.exports = {
    Contact,
    contactsJoiSchema,
    favoriteJoiSchema,

    User,
    usersJoiSchema,
};
