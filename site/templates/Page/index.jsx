import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Page = ({ children, className }) => {
	return (
		<div className={`Page ${className}`}>
			<Header />
			<main className='content'>{children}</main>
			<Footer />
		</div>
	);
};

export default Page;

Page.propTypes = {
	className: PropTypes.string,
};

Page.defaultProps = {
	className: '',
};
