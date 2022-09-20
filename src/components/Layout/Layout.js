import React from "react";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <>
        <Header />
        <main>
            <div className="container container--flex">
                <Sidebar />
                <div className="content">{props.children}</div>
            </div>
        </main>
    </>
  );
};

export default Layout;
