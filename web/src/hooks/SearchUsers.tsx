import { useState } from "react";

type User = {
    name: string;
    age: number;
}

export const FetchUsers: ()=>Promise<User[]> = async () => {
    try {
        const res = await fetch("http://localhost:8000/user");
        if (!res.ok) {
        throw Error(`Failed to fetch users: ${res.status}`);
        }
    
        const users = await res.json();
        return users;
    } catch (err) {
        console.error(err);
    }
};

export const FindUser = (name: string): number => {
    const [users, setUsers] = useState<User[]>([]);
    FetchUsers().then((users) => setUsers(users));
    const foundUser = users.find(user => user.name === name);
    return foundUser?.age ?? 0;
}