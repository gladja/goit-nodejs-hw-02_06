const { model, Schema } = require('mongoose');

const Joi = require('joi');

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for contact'],
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    { versionKey: false, timestamps: true }
);

const contactsJoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string(),
    phone: Joi.string(),
    favorite: Joi.bool(),
    owner: Joi.object(),
});

const favoriteJoiSchema = Joi.object({
    favorite: Joi.bool().required(),
});

const Contact = model('contact', contactSchema);

module.exports = {
    Contact,
    contactsJoiSchema,
    favoriteJoiSchema,
};
