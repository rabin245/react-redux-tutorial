import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Counter from "./components/Counter.jsx";
import Posts from "./components/Posts.jsx";
import { fetchPosts } from "./redux/actions/postActions";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Counter />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
    ],
  },
]);

// store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
