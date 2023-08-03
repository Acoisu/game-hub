import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import GameGrid from "./GameGrid";
import GameDetailPage from "./pages/GameDetailPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:id", element: <GameDetailPage /> },
    ],
  },
]);
export default router;
