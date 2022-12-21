import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full flex flex-col min-h-[100vh]">
      <Header />
      <main className="w-full flex flex-[1_1_100%] mt-[112px] flex-col relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
