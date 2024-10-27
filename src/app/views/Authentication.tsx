import { Form, Logo, Styles } from '@components';
import { ReactNode } from 'react';
import Style from '../page.module.css';

interface AuthenticationProps {
    children: ReactNode;
}

export default function Authentication({ children }: AuthenticationProps) {
    return (
        <section
            id='authentication'
            className={Style.authentication}
        >
            <Logo
                width={50}
                height={50}
            />
            <Form>{children}</Form>
        </section>
    );
}
