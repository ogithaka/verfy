import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/loginUser';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const user = await loginUser(email, password);

    if (user) {
        return NextResponse.json({
            success: true,
            redirect: '/analytics',
            user,
        });
    } else {
        return NextResponse.json(
            { success: false, message: 'Invalid credentials' },
            { status: 401 }
        );
    }
}
