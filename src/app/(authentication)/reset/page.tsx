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
                    type='outline'
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
