const Jimp = require("jimp");
const HttpError = require("./index");

const imgSizer = (newAvatarDir) => {
  return Jimp.read(newAvatarDir)
    .then((avatar) => {
      return avatar.resize(250, 250).write(newAvatarDir);
    })
    .catch((error) => {
      throw HttpError(error);
    });
};

module.exports = imgSizer;
