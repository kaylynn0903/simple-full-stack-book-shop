import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./style.scss";
import Book from "./pages/Book";
import Books from "./pages/Books";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import NotFoundPage from "./pages/NotFoundPage";
import Update from "./pages/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Books />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/book/:bookId",
      element: <Book />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/create",
      element: <Create />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/delete/:bookId",
      element: <Delete />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/update/:bookId",
      element: <Update />,
      errorElement: <NotFoundPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
