import Link from 'next/link';
import { Styles } from '@components';

interface ButtonProps {
    url: string;
    name: string;
    type?: 'solid' | 'outline';
}

export default function Button({ url, name, type }: ButtonProps) {
    let buttonType;
    switch (type) {
        case 'solid':
            buttonType = Styles.button_solid;
            break;
        case 'outline':
            buttonType = Styles.button_outline;
            break;
        default:
            buttonType = Styles.button_solid;
    }
    return (
        <Link
            className={buttonType}
            href={url}
            scroll={false}
        >
            {name}
        </Link>
    );
}
