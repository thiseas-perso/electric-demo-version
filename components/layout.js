import Footer from './footer';
import Nav from './Nav';

const Layout = ({ children, className }) => {
  return (
    <>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="eleco"
        data-description="Support me on Buy me a coffee!"
        data-message="Ce projet et le fruit de plusieurs heures d'efforts. Si vous l'appréciez, offrez-moi un café 😊"
        data-color="#5F7FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        defer
      />
      <main
        className={`${className} flex flex-grow flex-col min-h-full font-poppins`}
      >
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
