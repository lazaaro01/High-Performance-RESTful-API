export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

let users: User[] = [
    {id: 1, name: "Lázaro Vasconcelos", email: "lazaro@example.com", createdAt: new Date(), updatedAt: new Date()},
];

export const userModel = {
    findAll: (): User[] => users,
        findById: (id: number): User | undefined => users.find(user => user.id === id),
        create: (name: string, email: string): User => {
            const newUser: User = {
                id: users.length + 1,
                name,
                email,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            users.push(newUser);
            return newUser;
        },
    
};