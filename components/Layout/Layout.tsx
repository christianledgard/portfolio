import React from "react";
import Footer from "./_footer";
import Header from "./_header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-2xl mx-auto md:px-0 px-4">
      <Header />
      <div>
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
