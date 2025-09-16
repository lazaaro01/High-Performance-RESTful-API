// src/controllers/userController.ts
import { Request, Response, NextFunction } from "express";
import { userService } from "../services/userService";

export const userController = {
  getAll: (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = userService.getUsers();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },
  getOne: (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const user = userService.getUser(id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
  create: (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = userService.addUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  },
};
