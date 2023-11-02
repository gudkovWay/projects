import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Incorrect e-mail').isEmail(),
  body('password', 'Incorrect length of password. Min: 5 symbols.').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Incorrect e-mail').isEmail(),
  body('password', 'Incorrect length of password. Min: 5 symbols.').isLength({ min: 5 }),
  body('fullName', 'Please, input your Name.').isLength({ min: 3 }),
  body('avatarUrl', 'Incorrect url on the avatar. Please, check and try again').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 4 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 4 }).isString(),
  body('tags', 'Неверный формат тэгов (укажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
