import Footer from './footer';
import Header from './header';

const Layout = ({ children, className }) => {
  return (
    <>
      <Header className="h-12 font-lato sticky top-0 bg-light-primary-1 z-10" />
      <main
        className={`${className} flex flex-grow flex-col min-h-full font-poppins`}
      >
        {children}
      </main>
      <Footer className="font-lato" />
    </>
  );
};

export default Layout;
