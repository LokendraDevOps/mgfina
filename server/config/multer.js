import multer from 'multer';
import path from 'node:path';

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (request, file, callback) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    callback(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

export default upload;
