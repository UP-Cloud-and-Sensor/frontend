import "./App.css";
import HomePage from "./components/HomePage";
import MonitoringPage from "./components/MonitoringPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/urban-pergola/" element={<HomePage />} />
      <Route
        path="/urban-pergola/monitoring/"
        element={<MonitoringPage />}
      ></Route>
    </Routes>
  );
}

export default App;
