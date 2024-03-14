import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Applied_Jobs from "./components/Applied_Jobs/Applied_Jobs";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/jobDetails/jobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/Applied_Jobs",
                element: <Applied_Jobs></Applied_Jobs>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/details/:id",
                element: <JobDetails></JobDetails>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
