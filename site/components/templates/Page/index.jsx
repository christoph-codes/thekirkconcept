import Header from '../../Header';
import Footer from '../../Footer';

const Page = ({ children }) => {
     return (
        <div className='Page'>
            <Header/>
            <main className="content">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Page;
