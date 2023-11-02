import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

import { registerValidation, loginValidation, postCreateValidation } from './validations.js';

import { UserController, PostController } from './controllers/index.js';
import { checkAuth, handleValidationErrors } from './middleware/index.js';

mongoose
  .connect('mongodb+srv://adming:qwerty123@cluster0.wnnzsys.mongodb.net/blog')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.get('/tags', PostController.getLastTags);
app.get('/auth/me', checkAuth, UserController.getMe);
app.post('/posts', checkAuth, postCreateValidation, handleValidationErrors, PostController.create);
app.delete('/posts/:id', checkAuth, handleValidationErrors, PostController.remove);
app.patch('/posts/:id', checkAuth, PostController.update);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});
