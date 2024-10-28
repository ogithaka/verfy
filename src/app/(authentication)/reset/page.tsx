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
                />
                <NavigationItem
                    url='/reset'
                    name='Reset'
                    active
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
                        type='submit'
                        value='Reset'
                    />
                </Authentication>
            </Main>
        </>
    );
}
