const { User } = require('../../models');

const path = require('path');

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars');

const fs = require('fs/promises');

const Jimp = require('jimp');

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { _id: id } = req.user;
    const imageName = `${id}_${originalname}`;
    try {
        const resultUpload = path.join(avatarDir, imageName);
        await fs.rename(tempUpload, resultUpload);

        const image = await Jimp.read(resultUpload);
        image.resize(Jimp.AUTO, 150).quality(60).write(resultUpload);

        const avatarURL = path.join('public', 'avatars', imageName);
        await User.findByIdAndUpdate(req.user._id, { avatarURL });
        res.status(200).json({
            data: {
                avatarURL,
            },
        });
    } catch (err) {
        await fs.unlink(tempUpload);
    }
};

module.exports = updateAvatar;
