import React from "react";
import "./style.scss";
import HeaderContact from "./components/HeaderContact"
import HeaderBottom from "./conponents/HeaderBottom";
export function Header() {
    return (
        <div className="header">
            <div className="container-fluid">
                <HeaderContact />
                <HeaderBottom />
            </div>
        </div>
    );
}
