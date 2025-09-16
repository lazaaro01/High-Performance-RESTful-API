import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres")
});

export type CreateUserInput = z.infer<typeof createUserSchema>;