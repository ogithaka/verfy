'use client';
import Authentication from '@/app/views/Authentication';
import {
    Button,
    Form,
    Header,
    InputField,
    Main,
    NavigationItem,
} from '@components';
import { useLogin } from '@/hooks/useLogin';

export default function Login() {
    const { email, setEmail, password, setPassword, message, handleSubmit } =
        useLogin();
    return (
        <>
            <Header>
                <NavigationItem
                    url='/login'
                    name='Login'
                    active
                />
                <NavigationItem
                    url='/register'
                    name='Register'
                />
                <NavigationItem
                    url='/reset'
                    name='Reset'
                />
                <Button
                    url='/'
                    name='Landing'
                />
            </Header>
            <Main>
                <Authentication>
                    <Form method={handleSubmit}>
                        <InputField
                            placeholder='e.g john@mail.com'
                            type='email'
                            label='Email'
                            id='email'
                            value={email}
                            method={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            placeholder='e.g d3A97DmYqEt'
                            type='password'
                            label='Password'
                            id='password'
                            value={password}
                            method={(e) => setPassword(e.target.value)}
                        />
                        <InputField
                            type='submit'
                            value='Login'
                        />
                    </Form>
                </Authentication>
                {message && <div style={{ color: 'red' }}>{message}</div>}
            </Main>
        </>
    );
}
