import { Styles } from '@components';
import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return <main className={Styles.main}>{children}</main>;
}
