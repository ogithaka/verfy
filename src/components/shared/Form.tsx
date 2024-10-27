import { Styles } from '@components';
import { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
}

export default function Form({ children }: FormProps) {
    return (
        <form
            action=''
            className={Styles.form}
        >
            {children}
        </form>
    );
}
