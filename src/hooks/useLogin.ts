import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        const response = await fetch('/api/authentication/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            router.push(data.redirect);
        } else {
            setMessage(data.message); // Set error message on failure
        }
    };

    return { email, setEmail, password, setPassword, message, handleSubmit };
}
