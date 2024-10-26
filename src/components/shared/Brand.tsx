import { Logo, Styles } from '@components';

export default function Brand() {
    return (
        <div className={Styles.brand}>
            <Logo
                width={35}
                height={35}
            />
            <p>Verfy</p>
        </div>
    );
}
