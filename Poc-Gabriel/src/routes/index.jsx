import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashBoard";
import List from "../pages/list";
import Login from "../pages/login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/DashBoard" element={<DashBoard />}></Route>
        <Route path="/List" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
