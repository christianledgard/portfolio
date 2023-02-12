import React from "react";
import Footer from "./_footer";
import Header from "./_header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
