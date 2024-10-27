'use client';
import { useState } from 'react';
import { Aside, Styles } from '@components';
import Image from 'next/image';

export default function Menu() {
    const [menu, setMenu] = useState(false);
    function triggerMenu() {
        setMenu(!menu);
    }
    return (
        <div className={Styles.menu}>
            <div
                className={Styles.trigger_menu}
                onClick={triggerMenu}
            >
                {menu ? (
                    <div className={Styles.trigger}>
                        <p>Menu</p>
                        <Image
                            src={'/icons/down-carret.svg'}
                            alt='Right Carret Icon'
                            width={15}
                            height={15}
                        />
                    </div>
                ) : (
                    <div className={Styles.trigger}>
                        <p>Menu</p>
                        <Image
                            src={'/icons/right-carret.svg'}
                            alt='Right Carret Icon'
                            width={15}
                            height={15}
                        />
                    </div>
                )}
                <div>
                    <p>📌 Pin something here!</p>
                </div>
            </div>
            {menu ? <Aside /> : <></>}
        </div>
    );
}
