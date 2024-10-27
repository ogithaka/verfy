import { Styles } from '@components';
import Link from 'next/link';

interface MenuItemProps {
    url: string;
    name: string;
    active?: boolean;
}

export default function MenuItem({ url, name, active }: MenuItemProps) {
    return (
        <Link
            className={active ? Styles.menu_item_active : Styles.menu_item}
            href={url}
        >
            {name}
        </Link>
    );
}
