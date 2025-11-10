import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import { ReactLenis } from "lenis/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <ReactLenis root />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
