import { Hero } from '@/app/views/views';
import {
    Aside,
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
                    name='Landing'
                />
                <NavigationItem
                    url='/docs'
                    name='Docs'
                    active
                />
                <Button
                    url='/login'
                    name='Access'
                />
            </Header>
            <Menu>
                <MenuItem
                    url=''
                    name='Docs'
                    active
                />
                <MenuItem
                    url=''
                    name='Setup'
                />
            </Menu>
            <Main>
                <></>
            </Main>
        </>
    );
}
