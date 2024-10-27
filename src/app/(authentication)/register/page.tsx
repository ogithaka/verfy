import { Button, Header, Main, NavigationItem } from '@components';

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
                <></>
            </Main>
        </>
    );
}
