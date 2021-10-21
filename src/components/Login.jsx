import React, {useContext} from 'react';
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
    }
    return (
        <div>
            <form onSubmit={login}>
                <Input placeholder="Enter your login">

                </Input>
                <Input placeholder="Enter your password">

                </Input>
                <Button>Login</Button>
            </form>
        </div>
    );
};

export default Login;