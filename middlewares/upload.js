import multer from "multer";
import path from "path";


const destination = path.resolve("tmp");

const storage = multer.diskStorage({
  destination,
  filename: function (req, file, cb) {
    const { originalname } = file;
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}_${originalname}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new Error("File type is not allowed!"));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
