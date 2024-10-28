import { Styles } from '@components';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
    subsets: ['latin'],
    display: 'swap',
});

interface InputFieldProps {
    label?: string;
    type: string;
    id?: string;
    placeholder?: string;
    value?: string;
    method?: (e: any) => void;
}

export default function InputField({
    label,
    type,
    id,
    placeholder,
    value,
    method,
}: InputFieldProps) {
    return (
        <div className={Styles.input_field}>
            <label htmlFor=''>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                className={workSans.className}
                onChange={method}
            />
        </div>
    );
}
