import { Logo, Styles } from '@components';
import Link from 'next/link';

export default function Brand() {
    return (
        <Link
            href={'/'}
            className={Styles.brand}
            scroll={false}
        >
            <Logo
                width={35}
                height={35}
            />
            <p>Verfy</p>
        </Link>
    );
}
