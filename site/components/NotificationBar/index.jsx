import Link from 'next/link';

const NotificationBar = ({ children, url }) => {
return (
<Link href={url} style={{ textDecoration: 'none' }}>
<div className='bg-gray-light py-2 text-center'>
<p>{children}</p>
</div>
</Link>
);
};

export default NotificationBar;
