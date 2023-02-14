import Footer from './footer';
import Header from './header';

const Layout = ({ children, className }) => {
  return (
    <>
      <main
        className={`${className} flex flex-grow flex-col min-h-full font-poppins`}
      >
        {children}
      </main>
      <Footer className="font-lato bg-lime-900" />
    </>
  );
};

export default Layout;
