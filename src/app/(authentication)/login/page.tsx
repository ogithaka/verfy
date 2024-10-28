import Authentication from '@/app/views/Authentication';
import { Button, Header, InputField, Main, NavigationItem } from '@components';

export default function Login() {
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
                    <InputField
                        placeholder='e.g john@mail.com'
                        type='email'
                        label='Email'
                        id='email'
                    />
                    <InputField
                        placeholder='e.g d3A97DmYqEt'
                        type='password'
                        label='Password'
                        id='password'
                    />
                    <InputField
                        type='submit'
                        value='Login'
                    />
                </Authentication>
            </Main>
        </>
    );
}
