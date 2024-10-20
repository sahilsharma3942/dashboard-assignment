import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/sidebarContext";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </HashRouter>
);
