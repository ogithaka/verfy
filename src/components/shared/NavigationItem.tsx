import { Styles } from '@components';
import Link from 'next/link';

interface NavigationItemProps {
    url: string;
    name: string;
    active?: boolean;
}

export default function NavigationItem({
    url,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            className={
                active ? Styles.navigation_item_active : Styles.navigation_item
            }
            href={url}
            scroll={false} // To remove an autoscroll error
        >
            {name}
        </Link>
    );
}
