const { model, Schema } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const Joi = require('joi');

const userSchems = new Schema(
    {
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: 6,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        subscription: {
            type: String,
            enum: ['starter', 'pro', 'business'],
            default: 'starter',
        },
        token: {
            type: String,
            default: null,
        },
    },
    { versionKey: false, timestamps: true }
);

userSchems.post('save', handleMongooseError);

const usersJoiSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().required(),
    subscription: Joi.string(),
    token: Joi.string(),
});

const User = model('user', userSchems);

module.exports = {
    User,
    usersJoiSchema,
};
