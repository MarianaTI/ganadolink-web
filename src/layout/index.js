import Customfooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  const noNavbar = !router.pathname.match(/login|register/g);
  return (
    <div style={{display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh"}}>
      {noNavbar && <CustomNavbar />}
      <div>{children}</div>
      <div>{noNavbar && <Customfooter />}</div>
    </div>
  );
};

export default Layout;
