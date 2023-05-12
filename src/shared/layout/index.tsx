import React from "react";
import { PersistentDrawerLeft } from "./components/PersistentDrawer";


export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <PersistentDrawerLeft>
        {children}
      </PersistentDrawerLeft>
    </div>
  );
};