import "./app.css";
import Content from "./components/page-components/Content";
import Sidebar from "./components/page-components/Sidebar";
import Navbar from "./components/page-components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

export default App;
