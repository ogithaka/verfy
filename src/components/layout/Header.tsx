import { Brand, Navigation, Styles } from '@components';
import { ReactNode } from 'react';

interface HeaderProps {
    children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return (
        <header className={Styles.header}>
            <Brand />
            <Navigation>{children}</Navigation>
        </header>
    );
}
