import { userModel, User } from "../models/userModel";

export const userService = {
  getUsers: () => {
    return userModel.findAll();
  },
  getUser: (id: number) => {
    const user = userModel.findById(id);
    if (!user) throw new Error("Usuário não encontrado");
    return user;
  },
  addUser: (data: Omit<User, "id" | "createdAt" | "updatedAt">) => {
    return userModel.create(data.name, data.email);
    },
    
  };
