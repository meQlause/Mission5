import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={LoginPage}></Route>
      </Routes>
    </Router>
  );
};
