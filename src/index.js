import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import './index.css';
import { IconContext } from "react-icons";


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
       <IconContext.Provider value={{ color:"#00f",  className: "my-icons" }}>
	<App />
	</IconContext.Provider>
        </React.StrictMode>
    </BrowserRouter>

);
