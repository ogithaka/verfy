import { Button, Header, Main, NavigationItem } from '@components';

export default function Reset() {
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
                <Button
                    url='/reset'
                    name='Reset'
                    type='outline'
                />
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
