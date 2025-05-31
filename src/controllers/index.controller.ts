import { Request, Response } from 'express';

export const indexWelcome = (req: Request, res: Response): void => {
  res.send('Bienvenido a la API');
};