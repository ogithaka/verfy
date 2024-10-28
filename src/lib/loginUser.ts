import pool from './db';

interface User {
    id: number;
    email: string;
    password: string;
}

export async function loginUser(email: string, password: string) {
    const client = await pool.connect();

    try {
        const res = await client.query('SELECT * FROM users WHERE email = $1', [
            email,
        ]);
        const user: User | undefined = res.rows[0];
        if (user) {
            if (user.password === password) {
                return user;
            }
        }
        return null;
    } catch (error) {
        console.error('Error authenticating user:', error);
        return null;
    } finally {
        client.release();
    }
}
