const {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
} = require('./contact');

const {
    register,
    login,
    getCurrent,
    logout,
    updateStatusUser,
    updateAvatar,
    verifyEmail,
    resendVerifyEmail,
} = require('./user');

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,

    register,
    login,
    getCurrent,
    logout,
    updateStatusUser,
    updateAvatar,
    verifyEmail,
    resendVerifyEmail,
};
