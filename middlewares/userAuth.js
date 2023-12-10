const { User } = require('../models');

const { HttpError } = require('../helpers');

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
const path = require('path');
const configPath = path.join(__dirname, '../', 'config', '.env');
dotenv.config({ path: configPath });
const { SECRET_KEY } = process.env;

const userAuth = async (req, res, next) => {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');
    try {
        if (bearer !== 'Bearer') {
            throw HttpError(401, 'Not authorized');
        }
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.token) {
            throw HttpError(401, 'Not authorized');
        }
        req.user = user;
        next();
    } catch (err) {
        if (err.message === 'Invalid sugnature') {
            err.status = 401;
        }
        next(err);
    }
};

module.exports = userAuth;
