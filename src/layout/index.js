import Customfooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  const noNavbar = !router.pathname.match(/login/g);
  return (
    <div>
      {noNavbar && <CustomNavbar />}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
