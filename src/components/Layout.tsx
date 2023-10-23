import React, { ReactNode } from "react"
import Header from "./Header"
import LeftSidebar from "./sidebar/left"
import RightSidebar from "./sidebar/right"
import SearchBar from "./searchbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white h-screen overflow-y-hidden">
      <Header/>
      <div className="h-[calc(100vh-4rem)] grid grid-cols-12 mx-auto px-0 sm:px-0 md:px-5">
        <LeftSidebar/>
        <div className="h-[calc(100vh-4rem)] col-span-12 sm:col-span-12 md:col-span-7 bg-[#FAFAFA] rounded-xl ml-0 md:ml-2">
          <div className="flex flex-col">
            <div className="h-[calc(100vh-12rem)] overflow-y-scroll">{ children }</div>
            <SearchBar/>
          </div>
        </div>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default Layout;
