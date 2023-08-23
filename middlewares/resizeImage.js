// import Jimp from "jimp";
// import { HttpError } from "../helpers/index.js";

// const resizeImage = async (req, res, next) => {
//   const { path } = req.file;

//   if (!path) {
//     throw HttpError(401);
//   }

//   await Jimp.read(path)
//     .then((img) => {
//       return img.resize(250, 250).write(`${path}`);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   next();
// };

// export default resizeImage;
