import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './NavLink.module.scss';

const NavLink = ({ href, className, children, ...rest }) => {
const router = useRouter();
return (
<Link
href={href}
className={`${styles.NavLink} ${className ? className : ''} ${
router.pathname === href ? styles.active : ''
}`}
{...rest}
>
{children}
</Link>
);
};

export default NavLink;
