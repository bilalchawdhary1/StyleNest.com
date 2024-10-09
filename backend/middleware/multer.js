import multer from "multer";
// import path from "path"; // Import path module to handle file paths

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // Define where the uploaded files should be saved
    callback(null, 'uploads/'); // 'uploads/' folder to store files
  },
  filename: function (req, file, callback) {
    // Generate a unique filename for the uploaded files
    const uniqueName = Date.now() + '-' + file.originalname;
    callback(null, uniqueName);
  },
});

const upload = multer({ storage });

export default upload;
