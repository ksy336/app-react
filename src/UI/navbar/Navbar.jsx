import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from "../button/Button";
import {AuthContext} from "../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Button style={{marginRight:"20px"}} onClick={() => setIsAuth(false)}>Logout</Button>
                <Link className="navbar__item" to="/about">About</Link>
                <Link className="navbar__item" to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;