import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chatbot from "./Chatbot";
import Header from "./Header";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Chatbot />,
    },
    {
      path: "/home",
      element: <Chatbot />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
