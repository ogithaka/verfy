import { Styles } from '@components';
import { ReactNode } from 'react';

interface AsideProps {
    children?: ReactNode;
}

export default function Aside({ children }: AsideProps) {
    return <aside className={Styles.aside}>{children}</aside>;
}
