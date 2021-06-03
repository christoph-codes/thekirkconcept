import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from './NavLink.module.scss';

const NavLink = ({ href, className, children, ...rest }) => {
    const router = useRouter();
console.log(router)
     return (
        <Link href={href} passHref>
            <a className={`NavLink ${className ? className : ''} ${router.pathname === href ? 'active' : ''}`} {...rest}>{children}</a>
        </Link>
    );
}

export default NavLink;
