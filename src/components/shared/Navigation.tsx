'use client';
import { Styles } from '@components';
import { ReactNode } from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
    children?: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
    const [dropdown, setDropdown] = useState(false);
    function triggerDropdown() {
        return setDropdown(!dropdown);
    }
    return (
        <nav className={Styles.navigation}>
            <div className={Styles.navigation_large}>{children}</div>
            <div className={Styles.navigation_small}>
                <div
                    className={Styles.navigation_small_trigger}
                    onClick={triggerDropdown}
                >
                    {dropdown ? (
                        <Image
                            src={'/icons/close.svg'}
                            alt='Close Icon'
                            width={24}
                            height={24}
                        />
                    ) : (
                        <Image
                            src={'/icons/menu.svg'}
                            alt='Menu Icon'
                            width={24}
                            height={24}
                        />
                    )}
                </div>
                {dropdown ? (
                    <div className={Styles.navigation_dropdown}>{children}</div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
