import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import '../../style/app.css';

function AppWrapper({ list = [] }) {
  return (
    <div className="app-wrapper h-screen overflow-hidden">
      <Nav />
      <Sidebar list={list} />
      <Outlet />
    </div>
  )
}

export default AppWrapper