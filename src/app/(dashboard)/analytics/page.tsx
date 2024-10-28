import {
    Button,
    Header,
    Main,
    Menu,
    MenuItem,
    NavigationItem,
} from '@components';

export default function Docs() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/'
                    name='Notifications'
                />
                <NavigationItem
                    url='/account'
                    name='Account'
                />
                <Button
                    url='/logout'
                    name='Logout'
                />
            </Header>
            <Menu name='Dashboard'>
                <MenuItem
                    url='/analytics'
                    name='Analytics'
                    active
                />
                <MenuItem
                    url=''
                    name='Users'
                />
            </Menu>
            <Main>
                <></>
            </Main>
        </>
    );
}
