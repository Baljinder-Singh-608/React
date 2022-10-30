import React from "react";
import Footer from "../footer";
import Header from "../header";

const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="px-5 mt-5 mb-9 pb-5">
                {children}
            </div>
            <Footer />
        </>

    )
}
export default PageLayout;