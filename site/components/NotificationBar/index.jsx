import Link from 'next/link';

const NotificationBar = ({ children, url }) => {
	return (
		<Link href={url}>
			<a>
				<div className='bg-gray-light py-2 text-center'>
					<p>{children}</p>
				</div>
			</a>
		</Link>
	);
};

export default NotificationBar;
