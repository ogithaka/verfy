import { Aside, Button, Header, Main, Menu, NavigationItem } from '@components';

export default function Docs() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/'
                    name='Landing'
                />
                <NavigationItem
                    url='/docs'
                    name='Docs'
                    active
                />
                <Button
                    url=''
                    name='Access'
                />
            </Header>
            <Main>
                <Menu />
            </Main>
        </>
    );
}
