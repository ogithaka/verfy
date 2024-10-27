import Authentication from '@/app/views/Authentication';
import { Button, Header, InputField, Main, NavigationItem } from '@components';

export default function Register() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/login'
                    name='Login'
                />
                <NavigationItem
                    url='/register'
                    name='Register'
                    active
                />
                <Button
                    url='/reset'
                    name='Reset'
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
                        placeholder='e.g d3A97DmYqEt'
                        type='password'
                        label='Confirm Password'
                        id='confirm_password'
                    />
                    <InputField
                        type='submit'
                        value='Register'
                    />
                </Authentication>
            </Main>
        </>
    );
}
