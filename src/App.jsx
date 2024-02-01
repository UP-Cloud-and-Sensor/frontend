import "./App.css";
import HomePage from "./components/HomePage";
import MonitoringPage from "./components/MonitoringPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    { path: "/", element: <HomePage /> },
    { path: "/monitoring/", element: <MonitoringPage /> },
  ],
  { basename: import.meta.env.BASE_URL || "/" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
