import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Nav from "../Template/Nav";
import '../../style/app.css';

function CFA() {
  return (
    <div className="app-wrapper h-screen overflow-hidden">
      <Nav />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default CFA