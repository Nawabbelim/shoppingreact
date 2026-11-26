import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"

let root = document.querySelector("#root");
createRoot(root).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);