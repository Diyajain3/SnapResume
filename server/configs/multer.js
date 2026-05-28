import multer from "multer";


const storage=multer.diskStorage({});

const upload=multer({storage})

export default upload;//to add the uploaded image in the req with file property