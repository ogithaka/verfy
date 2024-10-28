import { Styles } from '@components';
import { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
    method: (e: React.FormEvent) => void;
}

export default function Form({ children, method }: FormProps) {
    return (
        <form
            onSubmit={method}
            action=''
            className={Styles.form}
        >
            {children}
        </form>
    );
}
