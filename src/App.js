
import './App.css';
import React, {useEffect, useMemo, useRef, useState} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth
            }}
            >
                <BrowserRouter>
                    <Navbar />
                    <AppRouter />
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    )
}

export default App;
