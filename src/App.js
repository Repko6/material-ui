import "./app.css";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
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
