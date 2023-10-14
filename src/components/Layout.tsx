import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-20">
        {" "}
        <Header />
        <>{children}</>
      </div>
    </div>
  );
};
export default Layout;
