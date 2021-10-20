
import './App.css';
import React, {useEffect, useMemo, useRef, useState} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./UI/navbar/Navbar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path={"/about"}>
                        <About />
                    </Route>
                    <Route path={"/posts"}>
                        <Posts />
                    </Route>
                    <Redirect to="/posts" />
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default App;
