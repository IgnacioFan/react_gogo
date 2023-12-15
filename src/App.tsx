import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroList from "./pages/HeroList";
import HeroProfile from "./pages/HeroProfile";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <HeroList />,
  },
  {
    path: "/heros",
    element: <HeroList />,
  },
  {
    path: "/heros/:id",
    element: <HeroProfile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
