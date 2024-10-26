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
                    url=''
                    name='Landing'
                    active
                />
                <NavigationItem
                    url=''
                    name='Docs'
                />
                <Button
                    url=''
                    name='Access'
                />
            </Header>
            <Main>
                <Container>
                    <Hero />
                </Container>
                <Footer></Footer>
            </Main>
        </>
    );
}
