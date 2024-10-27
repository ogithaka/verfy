import { Styles } from '@components';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <p>© {new Date().getFullYear()} Verfy. All rights reserved.</p>
        </footer>
    );
}
