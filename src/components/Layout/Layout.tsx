import About from "../About/About";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const Layout: React.FunctionComponent = () => {
  return (
    <div>
      <Hero />
      <About />
      <Articles />
      <Footer />
    </div>
  );
};
export default Layout;
