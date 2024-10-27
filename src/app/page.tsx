import {
    Button,
    Container,
    Footer,
    Header,
    Main,
    NavigationItem,
} from '@components';
import Hero from './views/Hero';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/'
                    name='Landing'
                    active
                />
                <NavigationItem
                    url='/docs'
                    name='Docs'
                />
                <Button
                    url='/login'
                    name='Access'
                />
            </Header>
            <Main>
                <Hero />
            </Main>
        </>
    );
}
