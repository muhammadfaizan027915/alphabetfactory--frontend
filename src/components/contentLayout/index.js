import { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const ContentLayout = ({ children }) => {
  const [isOpenSiderbar, setSiderbarOpen] = useState(false)
  const toggleSidebar = () => setSiderbarOpen(open => !open)
  return (
    <div className="w-[100vw] h-[100vh] p-1 sm:p-3 bg-black">
      <div className="w-full h-full rounded-3xl bg-white overflow-y-auto relative">
          <Header onSidebar={toggleSidebar} />
        <div className="max-w-7xl px-2 sm:px-3 mx-auto">
          {children}
        </div>

        <Sidebar  isOpen={isOpenSiderbar} onClose={toggleSidebar} />
      </div>
    </div>
  );
};

export default ContentLayout;
