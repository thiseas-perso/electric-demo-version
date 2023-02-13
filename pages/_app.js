import '../styles/globals.css';
import { Raleway, Merriweather_Sans, Lato, Poppins } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';

const raleway = Raleway({
  variable: '--raleway-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'fallback',
});
const poppins = Poppins({
  variable: '--poppins-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'fallback',
});
const lato = Lato({
  variable: '--lato-font',
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'fallback',
});

const merriweather = Merriweather_Sans({
  variable: '--merriweather-font',
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'fallback',
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout
        className={`${raleway.variable} ${merriweather.variable} ${lato.variable} ${poppins.variable}`}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
