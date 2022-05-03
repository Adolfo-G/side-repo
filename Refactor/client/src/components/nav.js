import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <header className="display-flex justify-space-between align-center p-2">
                    <h1 className="cloud">
                        <Link to="/">
                            Cumulus Chat
                        </Link>
                    </h1>
                </header>
            </div>
        </div>
    );
}

export default Nav;
